import PropTypes from "prop-types";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Stars = ({ starsNumber, altColourClass }) => {
  const fullStars = Math.floor(starsNumber);
  const hasHalfStar =
    starsNumber - fullStars >= 0.25 && starsNumber - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={`flex flex-row ${
        !altColourClass ? "text-[#333] dark:text-slate-500" : altColourClass
      } my-auto`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <FaStar size={15} key={`full-${i} `} />
      ))}
      {hasHalfStar && <FaStarHalfStroke size={15} key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar size={15} key={`empty-${i}`} />
      ))}
    </div>
  );
};

Stars.propTypes = {
  starsNumber: PropTypes.number.isRequired,
  altColourClass: PropTypes.string,
};

export default Stars;
