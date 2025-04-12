import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchListings = async () => {
  const res = await axios.get("/data/listings.json");
  return res.data;
};

const DetailedListingView = () => {
  const { id } = useParams();

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  if (isLoading) return <div className="p-6">Loading listing...</div>;
  if (error) return <div className="p-6">Error loading listing.</div>;

  const listing = listings.find(
    (item) => item.id.toString() === id || item.slug === id
  );

  if (!listing) return <div className="p-6">Listing not found</div>;

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <h1 className="text-2xl font-bold capitalize mb-2">
          {listing.name} - {listing.category}
        </h1>
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="w-full max-w-xl mt-4 rounded shadow"
        />
        <h1 className="text-2xl font-bold  mt-8">
          <span className="capitalize">{listing.category}</span> at{" "}
          {listing.address}
        </h1>
        <p className="mb-2 text-base text-paynesGrey">{listing.description}</p>
        <p className="mb-4 text-xs text-prussianBlue">📍 {listing.address}</p>
      </div>
    </div>
  );
};

export default DetailedListingView;
