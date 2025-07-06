import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import { useState } from "react";

import ListingTile from "./ListingTile";
import SearchControl from "./SearchControl";

const MapView = ({ listings, coordinates }) => {
  const defaultCoordinates = [-33.9249, 18.4241]; // Cape Town

  const hasValidCoordinates =
    coordinates &&
    typeof coordinates.lat === "number" &&
    typeof coordinates.lng === "number";

  const initialPosition = hasValidCoordinates
    ? [coordinates.lat, coordinates.lng]
    : defaultCoordinates;

  const MapFlyTo = ({ coords }) => {
    const map = useMap();
    if (coords) {
      map.flyTo([coords.lat, coords.lng], 13);
    }
    return null;
  };

  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className="relative h-full w-full">
      {/* Search bar */}
      <SearchControl onResult={setSearchResult} />

      <MapContainer
        center={initialPosition}
        zoom={13}
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* User location */}
        {hasValidCoordinates && (
          <Marker position={initialPosition}>
            <Popup>Your location</Popup>
          </Marker>
        )}

        {/* Searched location */}
        {searchResult && (
          <>
            <MapFlyTo coords={searchResult} />
            <Marker position={[searchResult.lat, searchResult.lng]}>
              <Popup>Searched location</Popup>
            </Marker>
          </>
        )}

        {/* Listings */}
        {listings.map((item) => (
          <Marker key={item.id} position={[item.lat, item.lng]}>
            <Popup>
              <ListingTile listing={item} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
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
