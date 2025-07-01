import PropTypes from "prop-types";
import { SiGooglemaps } from "react-icons/si";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import Stars from "./Stars";

import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

const ListingTile = ({ listing }) => {
  const { currentUser, updateUserFavourites } = useContext(AuthContext); // Ensure this method exists
  const userFavourites = currentUser?.favourites || [];
  const favouriteId = listing.id;
  const [favourited, setFavourited] = useState(
    userFavourites.includes(favouriteId)
  );

  const handleSetFavourite = async () => {
    try {
      const updatedFavourites = favourited
        ? userFavourites.filter((id) => id !== favouriteId)
        : [...userFavourites, favouriteId];

      setFavourited(!favourited);

      // Call to update user's favourites (assumed to be defined in AuthContext)
      await updateUserFavourites(updatedFavourites);
    } catch (error) {
      console.error("Failed to update favourites:", error);
      setFavourited(favourited); // Revert UI on failure
    }
  };

  return (
    <div className="bg-white dark:bg-eggshell shadow-md rounded-t-md dark:shadow-2xl mb-4 md:mx-2 hover:shadow-lg">
      <Link to={`/listing/${listing.id}`}>
        <div className="relative">
          <img
            src={listing.imageUrl}
            alt={listing.name}
            className="w-full h-40 object-cover rounded-t-sm"
          />
          <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {listing.category}
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-lg dark:text-richBlack font-bold mt-2 font-poppins">
            {listing.name}
            <span className="text-base font-normal w-fit pb-1 rounded-full flex capitalize">
              <Stars
                starsNumber={listing.stars}
                altColourClass="dark:text-slate-900"
              />
            </span>
          </h2>
          <p className="text-base text-richBlack font-semibold my-3">
            {listing.description}
          </p>
          <p className="text-xs text-prussianBlue mt-4">📍 {listing.address}</p>
        </div>
      </Link>
      <div className="justify-between flex p-4">
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
        {currentUser && (
          <button onClick={handleSetFavourite} className="text-xl">
            {favourited ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        )}
      </div>
    </div>
  );
};

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
