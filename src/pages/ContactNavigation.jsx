import Wrapper from "../components/util/Wrapper";
import { contactPages } from "../../constants";
import NavGrid from "../components/NavGrid";

const ContactNavigation = () => {
  return (
    <Wrapper>
      <NavGrid fullLinks={contactPages} />
    </Wrapper>
  );
};

export default ContactNavigation;
