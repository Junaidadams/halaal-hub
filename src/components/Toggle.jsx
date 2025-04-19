import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full shadow-lg bg-richBlack"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 " color="#F0EBD8" />
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
