import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg ${
        !isOpen ? "bg-space-cadet" : "bg-periwinkle"
      }`}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 " color="#1e2749 " />
      ) : (
        <LuAlignLeft className="h-6 w-6" color="#E4D9FF" />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
