import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";
import { useQuery } from "@tanstack/react-query";
import ListingTileSkeleton from "../components/skeleton/ListingTileSkeleton";
import ListingTile from "../components/ListingTile";
import BackButton from "../components/util/BackButton";

const SavedListings = () => {
  const { currentUser } = useContext(AuthContext);
  const userHasSavedListings = currentUser.savedListings;

  const fetchSavedListings = async () => {
    if (!userHasSavedListings || userHasSavedListings.length === 0) {
      return [];
    }

    const savedListingIds = userHasSavedListings.map(
      (listing) => listing.listingId
    );
    console.log("Fetching saved listings for IDs:", savedListingIds);

    try {
      const res = await apiRequest.post("/listings/group", {
        ids: savedListingIds, // send in POST body
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching saved listings:", error);
      return [];
    }
  };

  const {
    data: savedListings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["savedListings", userHasSavedListings],
    queryFn: fetchSavedListings,
  });

  if (isLoading) {
    return (
      <Wrapper>
        <div
          className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
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
        className="w-full my-20 mx-auto lg:w-3/5 xl:w-1/2
          overflow-y-auto p-6 flex"
      >
        {" "}
        <div
          className="grid gap-4 grid-cols-1
          sm:grid-cols-2 mx-auto my-20 w-full"
        >
          {savedListings.map((listing) => (
            <ListingTile key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SavedListings;
