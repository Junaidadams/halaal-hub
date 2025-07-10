import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/util/Wrapper";

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  useEffect(() => {
    const requestLogout = async () => {
      try {
        await apiRequest.post(`/auth/logout`);
        updateUser(null);
        setTimeout(() => {
          // Clear user data from local storage after a short delay
          localStorage.removeItem("authToken");
        }, 1000);
      } catch (error) {
        console.error("Error logging out.", error);
      } finally {
        navigate("/");
      }
    };

    if (currentUser) {
      requestLogout();
    }
  }, [currentUser, navigate, updateUser]);

  return <Wrapper></Wrapper>;
};

export default Logout;
