import PropTypes from "prop-types";
import Stars from "./Stars";
import { Link } from "react-router-dom";

const ListingTile = ({ listing, setSelectedListing, selectedListing }) => {
  return (
    <div className="bg-[#ededed] dark:bg-mainLight flex flex-col rounded-t-md ">
      <Link to={`/listing/${listing.id}`}>
        <div className="relative">
          <img
            // src={listing.imageUrl}
            src="https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg"
            alt={listing.name}
            className="w-full h-40 object-cover rounded-t-sm"
          />
          <p className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {listing.category}
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-lg dark:text-richBlack font-bold font-poppins">
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
