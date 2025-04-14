import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const DropdownMenu = ({ buttonContent, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative ${className} bg-white  border-black px-1 md:px-4 md:py-2 flex items-center `}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="b"
        type="button"
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div className="absolute z-20 mt-2 w-48 bg-white shadow-md rounded p-2 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  buttonContent: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default DropdownMenu;
