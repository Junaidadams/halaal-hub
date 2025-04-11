// Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../constants";
import Toggle from "./Toggle";
import { PiBowlFoodFill } from "react-icons/pi";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20 flex justify-between items-center min-w-screen sticky top-0 min-h-[56px] px-2 md:px-4 backdrop-blur-lg">
      {/* Navigation Links */}
      <a
        href="/"
        className="flex text-richBlack font-bold tracking-widest font-poppins"
      >
        <PiBowlFoodFill className="my-auto" size={29} />
        <h1 className="mx-1">Halaal Hub</h1>
      </a>
      <ul className="space-x-8 capitalize hidden md:flex flex-row p-2 ml-auto  rounded-full">
        {navigationLinks.map((link) => (
          <li key={link.key} className="">
            <a
              href={link.link}
              className="text-space-cadet py-2 px-3 rounded-full hover:text-prussianBlue font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
        {/* {!currentUser ? (
          <li>
            {" "}
            <a
              href="/login"
              className="text-space-cadet  py-2 px-3 rounded-full hover:text-indigo-600 font-semibold"
            >
              Login
            </a>
          </li>
        ) : (
          ""
        )}
        {!currentUser ? (
          <li>
            {" "}
            <a
              href="/register"
              className="text-space-cadet  py-2 px-3 rounded-full hover:text-indigo-600 font-semibold"
            >
              Register
            </a>
          </li>
        ) : (
          ""
        )} */}
      </ul>
      {/* Signed in menu desktop */}
      {/* {currentUser ? (
        <div className="z-20 hidden md:flex fixed flex-col mt-2">
          <button
            onClick={() => setMiniMenuIsOpen(!miniMenuIsOpen)}
            className="shadow-lg bg-space-cadet py-2 px-3 rounded-full flex"
          >
            <div className="my-auto mr-2">
              <BsChevronDoubleDown color="#e4d9ff" />
            </div>
            <span className="text-periwinkle">Hi, {currentUser.username}</span>
          </button>
          <AnimatePresence>
            {miniMenuIsOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="absolute  bg-space-cadet shadow-lg rounded-t-3xl rounded-b-md flex-col flex"
              >
                <button
                  onClick={() => setMiniMenuIsOpen(!miniMenuIsOpen)}
                  className="py-2 px-3 rounded-full flex"
                >
                  <div className="my-auto mr-2">
                    <BsChevronDoubleUp color="#e4d9ff" />
                  </div>
                  <span className="text-periwinkle">
                    Hi, {currentUser.username}
                  </span>
                </button>
                {signedInNavLinks.map((link) => (
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
      )} */}
      {/* Toggle Button */}
      <div className="md:hidden ">
        <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full bg-delft-blue shadow-lg flex flex-col space-y-6 px-4 pt-2 pb-10 capitalize md:hidden bg-white"
          >
            <div className="md:hidden ">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {navigationLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-ghost-white hover:text-periwinkle m-auto "
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            ))}
            {/* {currentUser ? (
              <a
                href="/profile-page"
                className="text-ghost-white hover:text-periwinkle m-auto "
              >
                Profile
              </a>
            ) : (
              <div className="m-auto flex space-y-6 flex-col">
                <a
                  href="/login"
                  className="text-ghost-white hover:text-periwinkle m-auto "
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-ghost-white hover:text-periwinkle m-auto "
                >
                  Register
                </a>
              </div>
            )} */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
