import { useState, useContext } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/util/Wrapper";

const Signup = () => {
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

  // const handleSubmit = () => {
  //   updateUser(formData);
  // };

  const handleSubmit = async (e) => {
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
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-black tracking-wider mb-4">Login</h1>
            </div>
            <div className="space-y-2">
              <label className="text-xl font-bold mb-4">Email</label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-xl font-bold ">Password</label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <p>
              <a className="text-slate-700" href="/register">
                Don&apos;t have an account?{" "}
              </a>
              or{" "}
              <a className="text-slate-700" href="/forgot-password">
                Forgot Password?
              </a>
            </p>
            <button
              type="submit"
              className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
