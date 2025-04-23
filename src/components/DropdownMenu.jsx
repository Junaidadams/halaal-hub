import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

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

  const containerVariants = {
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3, // match container animation duration
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={`relative ${className} bg-white border-black md:py-1 flex items-center `}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mx-1 md:mx-4"
        type="button"
      >
        {buttonContent}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-[34px] md:top-[50px] h-fit z-20 w-48 bg-white shadow-md rounded-b p-2 text-sm"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

DropdownMenu.propTypes = {
  buttonContent: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default DropdownMenu;
