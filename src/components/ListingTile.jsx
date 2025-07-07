import PropTypes from "prop-types";
import { SiGooglemaps } from "react-icons/si";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import Stars from "./Stars";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ListingTile = ({ listing }) => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const isSaved = currentUser?.savedListings?.some(
    (saved) => saved.listingId === listing.id
  );

  const [saving, setSaving] = useState(false);

  const handleToggleSave = async () => {
    if (!currentUser) {
      alert("You must be logged in to save listings.");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    setSaving(true);

    try {
      if (isSaved) {
        // REMOVE saved listing
        await apiRequest.delete(`/auth/remove-saved`, {
          data: { listingId: listing.id, userId: currentUser.id },
        });

        // Update local context
        const updatedSavedListings = (currentUser.savedListings || []).filter(
          (saved) => saved.listingId !== listing.id
        );

        updateUser({
          ...currentUser,
          savedListings: updatedSavedListings,
        });
      } else {
        // ADD saved listing
        const res = await apiRequest.post(`/auth/add-saved`, {
          listingId: listing.id,
          userId: currentUser.id,
        });

        const newSaved = res.data.savedListing;

        updateUser({
          ...currentUser,
          savedListings: [
            ...(currentUser.savedListings || []), // ensure it's an array
            newSaved,
          ],
        });
      }
    } catch (err) {
      console.error("Failed to toggle saved listing:", err);
      alert("There was an error saving this listing. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white dark:bg-eggshell flex flex-col shadow-md rounded-t-md dark:shadow-2xl mb-4 md:mx-2 hover:shadow-lg">
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
      <div className="justify-between flex p-4 mt-auto">
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleSave}
            disabled={saving}
            className="text-xl dark:text-prussianBlue"
          >
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
          </motion.button>
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
