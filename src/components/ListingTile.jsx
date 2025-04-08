import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ListingTile = ({ listing }) => {
  return (
    <motion.div
      key={listing.id}
      className="bg-white shadow-md mb-4 mx-2"
      initial={{ opacity: 0, scale: 0.9 }} // Start state
      animate={{ opacity: 1, scale: 1 }} // Final state
      transition={{ duration: 0.5 }} // Animation speed
    >
      <img
        src={listing.imageUrl}
        alt={listing.name}
        className="w-full h-40 object-cover "
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mt-2 font-poppins">{listing.name}</h2>
        <p className="text-sm text-paynesGrey">{listing.description}</p>
        <p className="text-xs text-prussianBlue">📍 {listing.address}</p>
        {/* Google Maps Link */}
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(
            listing.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-xs mt-2 inline-block"
        >
          View on Google Maps
        </a>
      </div>
    </motion.div>
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
  }).isRequired,
};

export default ListingTile;
