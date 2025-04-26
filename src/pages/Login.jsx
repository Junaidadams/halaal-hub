import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <form className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-black tracking-wider mb-4">Login</h1>
            </div>
            <div className="space-y-2">
              <label className="text-xl font-bold mb-4">Display Name</label>
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
            <p>
              Don't have an account?{" "}
              <a className="" href="/sign-up">
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
      </div>
    </div>
  );
};

export default Signup;
