import { useState } from "react";
import { accountTypes } from "../../constants";
import apiRequest from "../../lib/apiRequest";

const Register = () => {
  const [isLoading, setIsloading] = useState({
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  });

  const [formData, setFormData] = useState({
    username: "",
    role: "",
    password: "",
    email: "",
  });

  const handleAccountTypeSelect = (value) => {
    setFormData({ ...formData, role: value });
  };

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setIsloading((prev) => ({
      ...prev,
      formSubmit: true,
      success: false,
    }));

    try {
      const res = await apiRequest.post("/auth/register", {
        ...formData,
      });
      setIsloading((prev) => ({
        ...prev,
        success: true,
      }));
    } catch (err) {
      console.error(err.response?.data?.message || "An error occured.");

      setIsloading((prev) => ({
        ...prev,
        error:
          "Failed to send registration request." +
          " " +
          err.response?.data?.message,
      }));
    } finally {
      setIsloading((prev) => ({
        ...prev,
        formSubmit: false,
        complete: true,
      }));
    }
  };

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-black tracking-wider mb-4">
                Create Account
              </h1>
            </div>

            <div className="space-y-2">
              <label className="text-xl font-bold mb-4">Email</label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
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
            <div className="space-y-2">
              <h2 className="text-xl font-bold ">Which are you?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accountTypes.map(({ value, icon: Icon }) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => handleAccountTypeSelect(value)}
                    className={`${
                      formData.role === value &&
                      "bg-richBlack text-white hover:text-black"
                    } border p-4 rounded-xl hover:shadow-md hover:bg-gray-50 transition flex flex-col items-center text-center`}
                  >
                    <Icon />{" "}
                    <span className="text-sm font-medium capitalize">
                      {value}
                    </span>
                  </button>
                ))}
              </div>
              {formData.role === "business" && (
                <p className="py-4">
                  Note: You will be able to set up your listing after your
                  account has been created.
                </p>
              )}
              {formData.role === "user" && (
                <p className="py-4">
                  Note: You will be able to change to a business account if you
                  need to later.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-xl font-bold mb-4">
                Username (optional)
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="text"
                value={formData.username || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <p>
              Already have an account?{" "}
              <a className="" href="/login">
                Login here.
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
    </div>
  );
};

export default Register;
