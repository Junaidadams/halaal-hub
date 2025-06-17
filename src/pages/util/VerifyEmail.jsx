import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";

const VerifyingEmail = () => {
  const [message, setMessage] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [success, setSuccess] = useState(false);

  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  useEffect(() => {
    const handleVerification = async () => {
      setVerifying(true);
      try {
        const res = await apiRequest.get(`/auth/verify?token=${token}`);
        setMessage(res.data.message);
        setSuccess(true);
      } catch (error) {
        setMessage("Failed to verify email. Please try again.");
      } finally {
        setVerifying(false);
      }
    };

    if (token) {
      handleVerification();
    }
  }, [token]);

  return (
    <div className="flex justify-center font-nunito items-center min-h-screen bg-texture10">
      <div className="bg-mainWhite bg-center p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <p className="text-2xl font-bold text-center">
          {verifying ? "Verifying E-Mail..." : message}
        </p>
        {success && (
          <a href="/login">
            <button className="w-full mx-auto mt-6 flex bg-green-600 hover:bg-green-500 text-white p-2 rounded transition duration-200">
              <span className="w-fit ml-auto m-auto">Proceed to login</span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default VerifyingEmail;
