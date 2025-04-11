import axios from "axios";
import MapView from "../components/MapView";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import ListingTile from "../components/ListingTile";

const fetchListings = async () => {
  const res = await axios.get("/data/listings.json");
  return res.data;
};

const Hub = () => {
  const [toggleMapView, setToggleMapView] = useState(true);
  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  if (isLoading)
    return (
      <div className="min-h-screen -mt-[56px] bg-eggshell flex">
        <div className="mx-auto my-20 min-h-screen w-[95%]">
          Loading listings...
        </div>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen -mt-[56px] bg-eggshell flex">
        <div className="mx-auto my-20 min-h-screen w-[95%]">
          Error fetching listings!
        </div>
      </div>
    );

  return (
    <div className="flex min-h-screen -mt-[56px] bg-eggshell">
      {/* Listings Section */}
      <div
        className={`w-full my-20 ${
          toggleMapView ? "lg:w-3/5 xl:w-7/12" : "w-full"
        }  overflow-y-auto p-6`}
      >
        <div className=" justify-between  flex items-center mb-4 mr-2">
          <form className="flex mx-auto">
            <input className="border-black border rounded-l-sm border-r-0 py-2 px-4"></input>
            <button className="bg-white border-black border border-l-0 rounded-r-sm px-4">
              Search
            </button>
          </form>
          <button
            onClick={() => setToggleMapView((prev) => !prev)}
            className="bg-prussianBlue  hidden lg:flex text-white px-4 py-2 text-sm rounded-md shadow hover:bg-opacity-90 transition"
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
      {toggleMapView && (
        <div className="hidden lg:block lg:w-2/5 xl:w-5/12 sticky top-[56px] h-[calc(100vh-56px)]">
          <MapView listings={listings} />
        </div>
      )}
    </div>
  );
};

export default Hub;
