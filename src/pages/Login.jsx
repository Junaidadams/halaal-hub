import { useState, useContext } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/util/Wrapper";
import BasicForm from "../components/BasicForm";

const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [submissionState, setSubmissionState] = useState({
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    updateUser(null);
    e.preventDefault();
    setSubmissionState((prev) => ({
      ...prev,
      formSubmit: true,
      success: false,
      error: "",
    }));

    try {
      const res = await apiRequest.post("/auth/login", { ...formData });

      const { token, ...userData } = res.data;

      localStorage.setItem("authToken", token);

      updateUser(userData);

      setSubmissionState((prev) => ({
        ...prev,
        success: true,
        formSubmit: false,
        complete: true,
        error: "",
      }));

      navigate("/hub");
    } catch (err) {
      console.error(err.response?.data?.message || "An error occurred.");
      setSubmissionState((prev) => ({
        ...prev,
        formSubmit: false,
        success: false,
        error:
          "Failed to send registration request. " +
          (err.response?.data?.message || ""),
        complete: true,
      }));
    }
  };

  return (
    <Wrapper>
      <BasicForm
        fields={[
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ]}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Login"
        submitLabel="Login"
        flavourText="Please enter your email and password to login."
        preSubmissionText="Login"
        submissionReattempt={true}
        submissionState={submissionState}
      />
    </Wrapper>
  );
};

export default Login;
