import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function LocationPicker({ formData, setFormData }) {
  function DraggableMarker() {
    const [position, setPosition] = useState([
      formData.lat || -29,
      formData.lon || 24,
    ]); // center SA

    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        setFormData((prev) => ({
          ...prev,
          lat: e.latlng.lat,
          lon: e.latlng.lng,
        }));
      },
    });

    return <Marker position={position} draggable={true} />;
  }

  return (
    <MapContainer center={[-29, 24]} zoom={5} style={{ height: 400 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <DraggableMarker />
    </MapContainer>
  );
}
