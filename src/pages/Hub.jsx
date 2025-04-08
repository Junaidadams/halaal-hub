import axios from "axios";
import MapView from "../components/MapView";
import { useQuery } from "@tanstack/react-query";

import ListingTile from "../components/ListingTile";

const fetchListings = async () => {
  const res = await axios.get("/data/listings.json");
  return res.data;
};

const Hub = () => {
  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  if (isLoading) return <div className="p-6">Loading listings...</div>;
  if (error) return <div className="p-6">Error fetching listings!</div>;

  return (
    <div className="flex min-h-screen -mt-[56px] bg-eggshell">
      {/* Listings Section */}
      <div className="w-full my-20 lg:w-2/5 overflow-y-auto p-6">
        {listings.map((listing) => (
          <ListingTile key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Map Section */}
      <div className="hidden lg:block lg:w-3/5 sticky top-0 h-screen">
        <MapView listings={listings} />
      </div>
    </div>
  );
};

export default Hub;
