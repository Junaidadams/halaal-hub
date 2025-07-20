import { getStartedOptions } from "../../constants";

import Wrapper from "../components/util/Wrapper";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import NavGrid from "../components/NavGrid";

const GetStarted = () => {
  const { currentUser } = useContext(AuthContext);

  var fullLinks = getStartedOptions.main;
  currentUser
    ? (fullLinks = getStartedOptions.signedInLinks.concat(
        getStartedOptions.main
      ))
    : (fullLinks = getStartedOptions.main.concat(
        getStartedOptions.notSignedIn
      ));
  return (
    <Wrapper>
      <NavGrid fullLinks={fullLinks} />
    </Wrapper>
  );
};

export default GetStarted;
