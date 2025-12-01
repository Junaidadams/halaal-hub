import DropdownMenu from "../DropdownMenu";
import { FaFilter, FaSort } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const ListingSearch = ({ categories }) => {
  return (
    <div className="justify-between flex items-center mb-4 mr-2">
      <form className="flex mx-auto mb-4 relative">
        <DropdownMenu
          className="border-black border border-r-0 rounded-l-xl"
          buttonContent={
            <div className="py-2 flex">
              <FaFilter className="mx-1 my-auto" />
              <span className="hidden md:block my-auto">Filter</span>
            </div>
          }
        >
          <h1>Categories</h1>
          {categories.map((category, index) => (
            <div key={index}>
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" /> {category.label}
              </label>
            </div>
          ))}
        </DropdownMenu>

        <DropdownMenu
          buttonContent={
            <div className="py-2 flex">
              <FaSort className="mx-1 my-auto" />
              <span className="hidden md:block my-auto">Sort</span>
            </div>
          }
          className="border-black border border--0"
        >
          <button
            type="button"
            className="block w-full text-left mb-1 hover:bg-gray-100 rounded px-2 py-1"
          >
            A-Z
          </button>
          <button
            type="button"
            className="block w-full text-left mb-1 hover:bg-gray-100 rounded px-2 py-1"
          >
            Rating: High to Low
          </button>
          <button
            type="button"
            className="block w-full text-left hover:bg-gray-100 rounded px-2 py-1"
          >
            Nearby
          </button>
        </DropdownMenu>

        <input
          className="border border-black border-x-0 px-1 md:px-3 focus:outline-none text-sm md:text-base"
          placeholder="Search listings..."
        />
        <button
          type="submit"
          className="bg-white border border-black px-2 md:px-4 flex items-center rounded-r-xl"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default ListingSearch;
