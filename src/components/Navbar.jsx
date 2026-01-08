// Navbar.jsx
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../constants";
import Toggle from "./Toggle";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
// Instead of "circle", you can use "inset" for a rectangular reveal effect.
// Example: "inset(0% 0% 100% 0%)" (top, right, bottom, left)
// To animate a menu dropping down, animate the bottom value from 100% (hidden) to 0% (fully shown).

const miniMenuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.1,
      delay: 0.0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [miniMenuIsOpen, setMiniMenuIsOpen] = useState(false);

  var renderedLinks = navigationLinks.main;
  currentUser
    ? (renderedLinks = navigationLinks.main.concat(navigationLinks.signedIn))
    : (renderedLinks = navigationLinks.main.concat(
        navigationLinks.notSignedIn
      ));

  return (
    <div className="z-20 flex justify-between items-center min-w-screen sticky top-0 min-h-[56px] px-2 md:px-4 bg-mainLight dark:bg-mainDark backdrop-blur-lg">
      {/* Navigation Links */}
      <div className="md:hidden ">
        <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <Logo currentUser={currentUser} />
      <ul className="space-x-8 capitalize hidden md:flex flex-row p-2 ml-auto  rounded-full dark:text-ghost">
        {!currentUser &&
          renderedLinks.map((link) => (
            <li key={link.key} className="">
              <a
                href={link.link}
                className="text-space-cadet py-2 px-3 rounded-full hover:text-prussianBlue dark:hover:text-white font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
      </ul>
      {/* Signed in menu desktop */}
      {currentUser ? (
        <div className="z-20 hidden md:flex flex-col  right-2 top-0">
          <button
            onClick={() => setMiniMenuIsOpen(!miniMenuIsOpen)}
            className="shadow-lg bg-space-cadet py-2 px-3 rounded-sm flex text-ghost dark:text-black bg-richBlack dark:bg-ghost z-20 font-semibold"
          >
            <div className="my-auto mr-2 text-white dark:text-richBlack">
              {miniMenuIsOpen ? <RxChevronUp /> : <RxChevronDown />}
            </div>
            <span>Hi, {currentUser.username}</span>
          </button>
          <AnimatePresence>
            {miniMenuIsOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={miniMenuVariants}
                transition={{ duration: 0.5 }}
                className="absolute z-0 bg-slate-100 dark:bg-paynesGrey dark:text-slate-200 shadow-lg rounded-t-3xl rounded-b-md flex-col flex"
              >
                <button
                  onClick={() => setMiniMenuIsOpen(!miniMenuIsOpen)}
                  className="py-2 px-3 rounded-full flex"
                >
                  <div className="my-auto mr-2">
                    <RxChevronUp color="#e4d9ff" />
                  </div>
                  <span>Hi, {currentUser.username}</span>
                </button>
                {renderedLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.link}
                    className="px-4 py-2 hover:bg-delft-blue capitalize text-ghost-white"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        ""
      )}
      {/* Toggle Button */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full shadow-lg flex flex-col space-y-6 px-2 pt-2 pb-10 capitalize md:hidden bg-white dark:bg-slate-800"
          >
            <div className="md:hidden ">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {renderedLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-richBlack dark:text-ghost m-auto "
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
