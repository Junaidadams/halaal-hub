import { useState } from "react";

import { categories } from "../../constants";

const CreateListing = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ category: "" });

  const handleCategorySelect = (value) => {
    setFormData({ ...formData, category: value });
    setTimeout(() => setStep(2), 300); // slight delay for smoother UX
  };

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 flex-col font-poppins bg-white p-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                What type of place are you listing?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => handleCategorySelect(value)}
                    className="border p-4 rounded-xl hover:shadow-md hover:bg-gray-50 transition flex flex-col items-center text-center"
                  >
                    <Icon />{" "}
                    <span className="text-sm font-medium capitalize">
                      {value}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                Great! Let's add more details.
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                You selected: <strong>{formData.category}</strong>
              </p>
              {/* Additional form fields go here */}
              <input
                type="text"
                placeholder="Business name"
                className="border rounded p-2 w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
