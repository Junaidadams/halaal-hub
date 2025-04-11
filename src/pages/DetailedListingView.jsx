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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{listing.name}</h1>
      <p className="mb-2 text-sm text-paynesGrey">{listing.description}</p>
      <p className="mb-4 text-xs text-prussianBlue">📍 {listing.address}</p>
      <img
        src={listing.imageUrl}
        alt={listing.name}
        className="w-full max-w-xl mt-4 rounded shadow"
      />
    </div>
  );
};

export default DetailedListingView;
