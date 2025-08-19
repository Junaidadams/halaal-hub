import { Outlet } from "react-router-dom";
import Wrapper from "../components/util/Wrapper.jsx";
const Contact = () => {
  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Contact;
