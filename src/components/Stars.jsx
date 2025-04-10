import PropTypes from "prop-types";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa6";

const Stars = ({ starsNumber }) => {
  const fullStars = Math.floor(starsNumber);
  const hasHalfStar =
    starsNumber - fullStars >= 0.25 && starsNumber - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex flex-row text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalf key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

Stars.propTypes = {
  starsNumber: PropTypes.number.isRequired,
};

export default Stars;
