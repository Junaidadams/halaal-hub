import PropTypes from "prop-types";

const AboutText = ({ heading, text, imgUrl, reversed }) => {
  return (
    <div
      className={`flex flex-col dark:text-slate-200 ${
        !reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-[95%] mb-6 mx-auto sm:m-auto md:w-1/2 sm:p-5">
        <img src={imgUrl} className="bg-white  shadow-xl" />
      </div>
      <div className="w-[95%] mb-6 mx-auto sm:m-auto md:w-1/2 sm:p-5">
        <h3 className="font-poppins font-semibold text-lg dark:text-eggshell tracking-widest">
          {heading}
        </h3>
        <p className="p-1">{text}</p>
      </div>
    </div>
  );
};

AboutText.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  reversed: PropTypes.bool.isRequired,
};

export default AboutText;
