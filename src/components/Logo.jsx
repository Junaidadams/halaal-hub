import { PiBowlFoodFill } from "react-icons/pi";
import PropTypes from "prop-types";

const Logo = ({ color }) => {
  return (
    <a
      href="/"
      className={`flex text-${
        !color ? "richBlack" : color
      } font-bold tracking-widest font-poppins`}
    >
      <PiBowlFoodFill className="my-auto" size={29} />
      <h1 className="mx-1 my-auto">Halaal Hub</h1>
    </a>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
