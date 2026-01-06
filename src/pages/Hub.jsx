import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { categories } from "../../constants";

import ListingSearch from "../components/util/ListingSearch";
import ListingTile from "../components/ListingTile";
import Wrapper from "../components/util/Wrapper";
import MapView from "../components/MapView";

import ListingTileSkeleton from "../components/skeleton/ListingTileSkeleton";
import MapViewSkeleton from "../components/skeleton/MapViewSkeleton";

import {
  fetchListings,
  fetchListingsByLocation,
} from "../../lib/queries/listings";

const Hub = () => {
  const [selectedListing, setSelectedListing] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [toggleMapView, setToggleMapView] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocationError(true);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

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

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const coords =
    userCoordinates && `${userCoordinates.lat},${userCoordinates.lng}`;

  const {
    data = { listings: [], totalPages: 1, totalCount: 0 },
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listings", coords, locationError, page, limit],
    queryFn: () => {
      if (locationError || !coords) {
        return fetchListings({ page, limit });
      }
      return fetchListingsByLocation({ coords, page, limit });
    },
    enabled: true,
    staleTime: 1000 * 60 * 2,
  });

  const { listings, totalPages } = data;

  if (isLoading) {
    return (
      <Wrapper>
        <div
          className={`w-full my-20 ${
            toggleMapView ? "lg:w-3/5 xl:w-7/12" : "w-full"
          }  overflow-y-auto p-6`}
        >
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
        </div>
        <AnimatePresence>
          <motion.div
            initial="closed"
            animate="open"
            variants={variants}
            transition={{ duration: 0.1 }}
            className="hidden lg:block lg:w-2/5 xl:w-5/12 sticky top-[56px] h-[calc(100vh-56px)]"
          >
            {" "}
            <MapViewSkeleton />
          </motion.div>
        </AnimatePresence>
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
        className={`w-full ${
          toggleMapView ? "lg:w-3/5 xl:w-7/12" : "w-full"
        }  overflow-y-auto px-6`}
      >
        <div className="px-2 pb-2">
          <ListingSearch categories={categories} />
          <button
            onClick={() => setToggleMapView((prev) => !prev)}
            className="bg-mainDark text-mainLight dark:bg-mainLight hidden lg:flex dark:text-mainDark px-4 py-2 text-sm rounded-md shadow hover:bg-opacity-90 transition"
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
            <ListingTile
              key={listing.id}
              listing={listing}
              selectedListing={selectedListing}
              setSelectedListing={setSelectedListing}
            />
          ))}
        </div>
        <div className="flex mx-auto bg-mainDark dark:text-ghost text-white space-x-6 w-full justify-center mt-auto ">
          <button type="button" onClick={() => prevPage()}>
            <span className="sr-only">Previous Page</span>
            <FaChevronLeft />
          </button>
          <span className="my-auto">
            {page} of {totalPages}{" "}
          </span>

          <button type="button" onClick={() => nextPage()}>
            <FaChevronRight />
          </button>
          <div className="">
            <select
              value={limit}
              type=""
              onChange={(e) => setLimit(Number(e.target.value))}
              className="bg-mainDark text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-0"
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>
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
            <MapView
              listings={listings}
              coordinates={userCoordinates}
              selectedListing={selectedListing}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Hub;
