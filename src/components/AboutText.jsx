import PropTypes from "prop-types";

const AboutText = ({ text, imgUrl, reversed }) => {
  return (
    <div
      className={`flex flex-col ${
        !reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-[95%] m-auto md:w-1/2 p-4">
        <img src={imgUrl} className="bg-white p-1 shadow-xl" />
      </div>
      <div className="w-[95%] m-auto md:w-1/2 p-4">
        <p className="p-1">{text}</p>
      </div>
    </div>
  );
};

AboutText.propTypes = {
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  reversed: PropTypes.bool.isRequired,
};

export default AboutText;
