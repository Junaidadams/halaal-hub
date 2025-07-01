import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Wrapper from "../components/util/Wrapper";

const Favourites = () => {
  const { currentUser } = useContext(AuthContext);
  const userHasFavourites = currentUser.favouritedListings;
  return (
    <Wrapper>
      <div className="mx-auto my-20  w-[95%]  font-poppins">
        {userHasFavourites
          ? userHasFavourites.map((index, listing) => (
              <div key={index}>{listing}</div>
            ))
          : "No saved listings"}
      </div>
    </Wrapper>
  );
};

export default Favourites;
