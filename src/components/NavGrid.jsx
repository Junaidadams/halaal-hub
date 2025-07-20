import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";

const NavGrid = ({ fullLinks }) => {
  return (
    <div className="mx-auto my-20  w-[95%]  font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 xl:gap-6 mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 border-b border-black dark:border-slate-300 border-dashed pb-20 p-4">
        {fullLinks.map(({ key, name, link, description, icon: Icon }) => (
          <Link
            key={key}
            to={link}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-sm hover:bg-richBlack dark:border-slate-200 dark:border transition duration-300 group"
          >
            <div className="text-prussianBlue text-4xl mb-4 group-hover:text-white">
              <Icon /> {/* Render the icon correctly */}
            </div>
            <h2 className="text-prussianBlue font-semibold sm:font-bold md:font-black tracking-wider md:tracking-widest  text-lg group-hover:text-white">
              {name}
            </h2>
            <p className="text-paynesGrey text-sm text-center group-hover:text-white">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavGrid;

NavGrid.propTypes = {
  fullLinks: PropTypes.arrayOf(object).isRequired,
};
