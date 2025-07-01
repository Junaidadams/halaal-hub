import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Wrapper from "../components/util/Wrapper";

const SavedListings = () => {
  const { currentUser } = useContext(AuthContext);
  const userHasSavedListings = currentUser.listing;
  return (
    <Wrapper>
      <div className="mx-auto my-20  w-[95%]  font-poppins">
        {userHasSavedListings
          ? userHasSavedListings.map((index, listing) => (
              <div key={index}>{listing}</div>
            ))
          : "No saved listings"}
      </div>
    </Wrapper>
  );
};

export default SavedListings;
