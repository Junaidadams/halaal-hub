import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [submissionState, setSubmissionState] = useState({
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState((prev) => ({
      ...prev,
      formSubmit: true,
      success: false,
      error: "",
    }));

    try {
      const res = await apiRequest.post("/auth/reset-password", {
        ...formData,
      });

      setSubmissionState((prev) => ({
        ...prev,
        success: true,
        formSubmit: false,
        complete: true,
        error: "",
      }));
    } catch (err) {
      console.error(err.response?.data?.message || "An error occurred.");
      setSubmissionState((prev) => ({
        ...prev,
        formSubmit: false,
        success: false,
        error:
          "Failed to send reset request. " +
          (err.response?.data?.message || ""),
        complete: true,
      }));
    }
  };
  return (
    <Wrapper>
      {" "}
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5"
        >
          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-wider mb-4">
              Reset Password
            </h1>
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
          <p>
            Don&apos;t have an account?{" "}
            <a className="" href="/register">
              Create one here.
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
    </Wrapper>
  );
};

export default ResetPassword;
