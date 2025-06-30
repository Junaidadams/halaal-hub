import { useContext, useState } from "react";
import Wrapper from "../components/util/Wrapper.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { certification } from "../../constants.js";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

import { AnimatePresence, motion } from "framer-motion";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    avatarUrl: currentUser?.avatarUrl || "",
    bio: currentUser?.bio || "",
    location: currentUser?.location || "",
    certificationPreferences: currentUser?.certificationPreferences || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API request to update profile
      console.log("Submitting updated profile:", formData);
      // await apiRequest.put("/user/profile", formData);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-20 min-h-screen w-[95%] sm:w-2/3 xl:w-1/2 flex flex-col font-poppins sm:p-5"
      >
        <div className="mb-4 md:p-4 p-2 sm:p-3 flex bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-10  flex-col rounded-sm">
          <div className="flex">
            <div
              className={`relative ${
                currentUser.premium
                  ? "bg-gradient-to-tr from-amber-500 to-amber-200"
                  : "bg-periwinkle"
              } rounded-full w-11 h-11 sm:w-14 sm:h-14 flex shadow-lg mr-3`}
            >
              <img src="/food.jpg" className=" rounded-full shadow" />
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <HiBadgeCheck
                  color=""
                  className="text-richBlack bg-white h-4 w-4 sm:h-5 sm:w-5  z-10 absolute bottom-0 right-0 transform bg-space-cadet p-0 rounded-full"
                />
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute bottom-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                    >
                      Verified
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="my-auto mx-2 sm:text-lg truncate">
              <h1 className="font-semibold dark:text-slate-300">
                {currentUser.username}
              </h1>
              <p className="sm:text-xs text-[10px] text-prussianBlue dark:text-slate-400">
                {currentUser.email}
              </p>
            </div>
            {/* <button className="bg-richBlack text-xs rounded-sm my-auto ml-auto text-eggshell p-2 h-fit ">
              Change photo
            </button> */}
          </div>
          <div className="justify-evenly flex flex-row text-sm dark:text-slate-300 border-t mt-4 pt-2 border-dashed border-slate-500 font-light">
            <div className="">
              <FaBookmark className="mx-auto mt-2 mb-1" />
              <p className="text-xs md:text-sm">Saved</p>
            </div>
            <div className="text-xs md:text-sm">
              <GoHeartFill className="mx-auto mt-2 mb-1" />
              <p className="text-xs md:text-sm">Favorites</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">
            Username
          </label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">
            Email
          </label>
          <input
            disabled={true}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
            type="email"
            required
          />
        </div>
        {/* 
        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">Avatar URL</label>
          <input
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
            type="url"
          />
        </div> */}

        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">
            Location Preference
          </label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
          />
        </div>

        {/* Example handling for certificationPreferences — simple comma-separated text input for now */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold dark:text-slate-200 text-sm">
            Certification Preferences
          </label>
          <select
            name="certificationPreferences"
            value={formData.certificationPreferences.join(", ")}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                certificationPreferences: e.target.value
                  .split(",")
                  .map((s) => s.trim()),
              }))
            }
            className="bg-eggshell w-full  rounded-sm border border-black border-opacity-30 p-2 dark:bg-white dark:bg-opacity-10 dark:text-slate-300"
            placeholder="e.g., SANHA, NIHT"
          >
            <option value="">Select</option>
            {certification.map((body) => (
              <option key={body.key} value={body.shortName}>
                {body.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-richBlack dark:bg-white dark:text-richBlack text-white px-2 sm:px-4 py-1 mr-auto mt-4 rounded-sm"
        >
          Save Changes
        </button>
      </form>
    </Wrapper>
  );
};

export default Profile;
