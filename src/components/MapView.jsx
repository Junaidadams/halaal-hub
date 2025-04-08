import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

import ListingTile from "./ListingTile";

const MapView = ({ listings }) => (
  <MapContainer
    center={[-33.9249, 18.4241]}
    zoom={11}
    className="h-full w-full z-0"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    {listings.map((item) => (
      <Marker key={item.id} position={[item.lat, item.lng]}>
        <Popup>
          <ListingTile listing={item} />
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

MapView.propTypes = {
  listings: PropTypes.array.isRequired,
};

export default MapView;
