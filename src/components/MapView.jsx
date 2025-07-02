import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import L from "leaflet";

// Default marker fix (Leaflet’s icons break in bundlers like Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Optional: Blue icon for user location marker
const userLocationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png", // A blue dot marker
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapView = ({ listings, coordinates }) => {
  const defaultCenter = [-33.9249, 18.4241]; // Cape Town fallback

  const hasValidCoordinates =
    coordinates &&
    typeof coordinates.lat === "number" &&
    typeof coordinates.lng === "number";

  const center = hasValidCoordinates
    ? [coordinates.lat, coordinates.lng]
    : defaultCenter;
  // console.log(coordinates.lat, coordinates.lng);
  return (
    <MapContainer
      center={center}
      zoom={hasValidCoordinates ? 13 : 11}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* User location marker */}
      {hasValidCoordinates && (
        <Marker position={center} icon={userLocationIcon}>
          <Popup>Your current location</Popup>
        </Marker>
      )}

      {/* Listings */}
      {listings.map((item) => (
        <Marker key={item.id} position={[item.lat, item.lng]}>
          <Popup>
            <div className="max-w-[200px]">
              <strong>{item.name}</strong>
              <p className="text-sm">{item.description}</p>
              {item.address && (
                <p className="text-xs text-gray-600">{item.address}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

MapView.propTypes = {
  listings: PropTypes.array.isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default MapView;
