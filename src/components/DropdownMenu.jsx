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
      className={`relative ${className} bg-white border-black md:py-1 flex items-center `}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mx-4"
        type="button"
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div className="absolute translate-y-[105px] h-40 z-20 w-48 bg-white shadow-md rounded p-2 text-sm">
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
