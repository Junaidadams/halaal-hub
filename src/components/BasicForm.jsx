import React from "react";

const BasicForm = (formData, handleSubmit) => {
  const [submissionState, setSubmissionState] = useState({
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  });

  return (
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
  );
};

export default BasicForm;
