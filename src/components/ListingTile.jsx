import PropTypes from "prop-types";
import { SiGooglemaps } from "react-icons/si";
import Stars from "./Stars";

import { Link } from "react-router-dom";

const ListingTile = ({ listing }) => {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="bg-white shadow-md mb-4 md:mx-2"
    >
      <div className="relative">
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="w-full h-40 object-cover rounded"
        />
        <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded ">
          {listing.category}
        </p>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mt-2 font-poppins">
          {listing.name}
          <span className="text-base font-normal w-fit p-1 rounded-full flex capitalize">
            <Stars starsNumber={listing.stars} />
          </span>
        </h2>
        <p className="text-base text-richBlack font-semibold my-3">
          {listing.description}
        </p>
        <p className="text-xs text-prussianBlue mt-4">📍 {listing.address}</p>
        {/* Google Maps Link */}
        <div className="justify-between flex">
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              listing.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-eggshell text-xs mt-2 inline-block bg-prussianBlue p-2 "
          >
            <button className="flex flex-row">
              <SiGooglemaps className="my-auto mr-1" />
              <span className="m-auto">Google maps</span>
            </button>
          </a>
        </div>
      </div>
    </Link>
  );
};

// Prop validation
ListingTile.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListingTile;
