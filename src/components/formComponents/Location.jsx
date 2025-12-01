import { useState } from "react";
import apiRequest from "../../../lib/apiRequest";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

// Fix default marker icon (otherwise it won't show in some bundlers like Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Location = ({ formData, setFormData, next, summary }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await apiRequest.get("/util/search-address", {
        params: { q: query },
      });
      setResults(res.data);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (place) => {
    const { lat, lon, display_name, address } = place;
    setFormData((prev) => ({
      ...prev,
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      address: display_name,
      postalCode: address?.postcode || "",
    }));
    setResults([]);
    setQuery(display_name);
  };

  // Component to recenter map when a search result is chosen
  function RecenterMap({ lat, lon }) {
    const map = useMap();
    if (lat && lon) {
      map.setView([lat, lon], 16); // zoom to location
    }
    return null;
  }

  // Marker that can be dragged or placed by clicking the map
  function DraggableMarker() {
    const position = [formData.lat || -29, formData.lon || 24]; // default: SA center

    useMapEvents({
      click(e) {
        setFormData((prev) => ({
          ...prev,
          lat: e.latlng.lat,
          lon: e.latlng.lng,
        }));
      },
    });

    return (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const pos = marker.getLatLng();
            setFormData((prev) => ({
              ...prev,
              lat: pos.lat,
              lon: pos.lng,
            }));
          },
        }}
      />
    );
  }

  return (
    <div className="flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-bold">Business Location</h2>

      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter address or business name"
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="bg-richBlack text-white px-4 py-1 rounded-sm"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-500">Searching…</p>}

      {results.length > 0 && (
        <ul className="border rounded divide-y max-h-40 overflow-y-auto">
          {results.map((place, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(place)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}

      {/* Map */}
      <div className="h-96 w-full border rounded">
        <MapContainer
          center={[formData.lat || -29, formData.lon || 24]}
          zoom={formData.lat && formData.lon ? 14 : 5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {formData.lat && formData.lon && (
            <RecenterMap lat={formData.lat} lon={formData.lon} />
          )}
          <DraggableMarker />
        </MapContainer>
      </div>

      {/* Info */}
      {formData.address && (
        <div className="mt-2 space-y-1">
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Postal Code:</strong> {formData.postalCode}
          </p>
          <p>
            <strong>Latitude:</strong> {formData.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {formData.lon}
          </p>
        </div>
      )}

      {!summary && (
        <button
          onClick={next}
          className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Location;
