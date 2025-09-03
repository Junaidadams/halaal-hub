import { PiBowlFoodFill } from "react-icons/pi";
import PropTypes from "prop-types";

const Logo = ({ color, margin }) => {
  return (
    <a
      href="/"
      className={`flex text-${
        !color ? "richBlack" : color
      } font-bold tracking-widest font-cabinet ${margin} dark:text-ghost`}
    >
      <PiBowlFoodFill className="my-auto" size={29} />
      <h1 className="mx-1 my-auto">Eat Halal</h1>
    </a>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default Logo;
