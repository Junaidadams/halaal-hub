import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

import ListingTile from "./ListingTile";
import SearchControl from "./SearchControl";
import { renderToStaticMarkup } from "react-dom/server";
import { RiMapPinUserFill } from "react-icons/ri";

const MapView = ({ listings, coordinates, selectedListing }) => {
  const defaultCoordinates = [-33.9249, 18.4241]; // Cape Town

  const listingMarker = L.divIcon({
    html: renderToStaticMarkup(<FaLocationDot size={32} color="#1D2D44" />),
    iconSize: [32, 32],
    className: "", // Remove default styles
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const selectedListingMarker = L.divIcon({
    html: renderToStaticMarkup(<FaLocationDot size={32} color="#748CAB" />),
    iconSize: [32, 32],
    className: "",
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const userMarker = L.divIcon({
    html: renderToStaticMarkup(<RiMapPinUserFill size={32} color="#1D2D44" />),
    iconSize: [32, 32],
    className: "", // Remove default styles
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

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
          <Marker position={initialPosition} icon={userMarker}>
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
        {selectedListing && (
          <MapFlyTo
            coords={{ lat: selectedListing.lat, lng: selectedListing.lng }}
          />
        )}

        {/* Listings */}
        {listings.map((item) => (
          <Marker
            key={item.id}
            position={[item.lat, item.lng]}
            icon={
              selectedListing && item.id === selectedListing.id
                ? selectedListingMarker
                : listingMarker
            }
          >
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
  selectedListing: PropTypes.object,
};

export default MapView;
