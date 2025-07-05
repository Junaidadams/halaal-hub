import MapView from "../components/MapView";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { FaSort, FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { categories } from "../../constants";
import ListingTileSkeleton from "../components/skeleton/ListingTileSkeleton";
import { motion, AnimatePresence } from "framer-motion";

import { AuthContext } from "../context/AuthContext";
import DropdownMenu from "../components/DropdownMenu";
import ListingTile from "../components/ListingTile";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const variants = {
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 0.5 },
  },
  closed: {
    x: 100,
    transition: { type: "spring", stiffness: 80, damping: 18, mass: 0.5 },
  },
};

const Hub = () => {
  const { currentUser } = useContext(AuthContext);
  const [userCoordinates, setUserCoordinates] = useState(null); // null until geolocation retrieved
  const [toggleMapView, setToggleMapView] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log("Accurate position fetched:", lat, lng);
        console.log("Accuracy (in meters):", position.coords.accuracy);

        setUserCoordinates({ lat, lng });
      },
      (err) => {
        console.error("Geolocation error:", err);
      },
      {
        enableHighAccuracy: true, // 🚀 Requests GPS-level accuracy if available
        timeout: 10000, // Wait max 10 seconds
        maximumAge: 0, // Don't use a cached position
      }
    );
  }, []);

  const fetchListings = async () => {
    if (!userCoordinates) return [];

    const coords = `${userCoordinates.lat},${userCoordinates.lng}`;
    const res = await apiRequest.get("/listings/by-location", {
      params: { location: coords },
    });
    return res.data;
  };

  const {
    data: listings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listings", userCoordinates],
    queryFn: fetchListings,
    enabled: !!userCoordinates, // only run when coordinates are ready
  });

  if (isLoading) {
    return (
      <Wrapper>
        <div
          className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${
            toggleMapView
              ? "2xl:grid-cols-3"
              : "md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          }`}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <ListingTileSkeleton key={i} />
          ))}
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <div className="mx-auto my-20 min-h-screen w-[95%]">
          Error fetching listings!
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div
        className={`w-full my-20 ${
          toggleMapView ? "lg:w-3/5 xl:w-7/12" : "w-full"
        }  overflow-y-auto p-6`}
      >
        <div className="justify-between flex items-center mb-4 mr-2">
          <form className="flex mx-auto mb-4 relative">
            <DropdownMenu
              className="border-black border border-r-0 rounded-l-xl"
              buttonContent={
                <div className="py-2 flex">
                  <FaFilter className="mx-1 my-auto" />
                  <span className="hidden md:block my-auto">Filter</span>
                </div>
              }
            >
              <h1>Categories</h1>
              {categories.map((category, index) => (
                <div key={index}>
                  <label className="block mb-2">
                    <input type="checkbox" className="mr-2" /> {category.label}
                  </label>
                </div>
              ))}
            </DropdownMenu>

            <DropdownMenu
              buttonContent={
                <div className="py-2 flex">
                  <FaSort className="mx-1 my-auto" />
                  <span className="hidden md:block my-auto">Sort</span>
                </div>
              }
              className="border-black border border--0"
            >
              <button
                type="button"
                className="block w-full text-left mb-1 hover:bg-gray-100 rounded px-2 py-1"
              >
                A-Z
              </button>
              <button
                type="button"
                className="block w-full text-left mb-1 hover:bg-gray-100 rounded px-2 py-1"
              >
                Rating: High to Low
              </button>
              <button
                type="button"
                className="block w-full text-left hover:bg-gray-100 rounded px-2 py-1"
              >
                Nearby
              </button>
            </DropdownMenu>

            <input
              className="border border-black border-x-0 px-4 focus:outline-none text-sm md:text-base"
              placeholder="Search listings..."
            />
            <button
              type="submit"
              className="bg-white border border-black px-2 md:px-4 flex items-center rounded-r-xl"
            >
              <FaSearch />
            </button>
          </form>

          <button
            onClick={() => setToggleMapView((prev) => !prev)}
            className="bg-prussianBlue hidden lg:flex text-white px-4 py-2 text-sm rounded-md shadow hover:bg-opacity-90 transition"
          >
            {toggleMapView ? "Hide Map" : "Show Map"}
          </button>
        </div>

        <div
          className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${
            toggleMapView
              ? "2xl:grid-cols-3"
              : "md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          }`}
        >
          {listings.map((listing) => (
            <ListingTile key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      {/* Map Section */}
      <AnimatePresence>
        {toggleMapView && (
          <motion.div
            initial="closed"
            animate="open"
            variants={variants}
            transition={{ duration: 0.1 }}
            className="hidden lg:block lg:w-2/5 xl:w-5/12 sticky top-[56px] h-[calc(100vh-56px)]"
          >
            <MapView listings={listings} coordinates={userCoordinates} />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Hub;
