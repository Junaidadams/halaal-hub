import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full shadow-lg ${
        !isOpen ? "bg-richBlack" : "bg-prussianBlue"
      }`}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 " color="#1e2749" />
      ) : (
        <LuAlignLeft className="h-6 w-6" color="#F0EBD8" />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
