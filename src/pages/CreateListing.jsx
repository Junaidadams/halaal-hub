import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { categories } from "../../constants";

const CreateListing = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ businessName: "", category: "" });

  const handleCategorySelect = (value) => {
    setFormData({ ...formData, category: value });
    setTimeout(() => setStep(2), 300);
  };

  const stepMinusOne = () => {
    step > 1 && setStep((prev) => prev - 1);
  };

  const totalSteps = 5;

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 xl:w-1/2 flex-col font-poppins bg-white p-5">
          <div className="flex">
            {step > 1 && (
              <div>
                <button onClick={stepMinusOne} className="flex my-auto">
                  <BiArrowBack className="my-auto" />
                </button>
              </div>
            )}
            <div className="flex gap-1 ml-auto">
              {Array.from({ length: totalSteps }, (_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4  flex items-center justify-center text-xs font-bold ${
                    step === index + 1 ? "bg-black text-white" : "text-black"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className=" flex flex-col space-y-4 w-full">
              <label className="text-xl font-bold mb-4">Business Name</label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    businessName: e.target.value,
                  }))
                }
                placeholder="Enter business name"
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                onClick={() => {
                  if (formData.businessName.trim()) {
                    setStep(step + 1);
                  }
                }}
                className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                What type of place are you listing?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => handleCategorySelect(value)}
                    className={`${
                      formData.category === value &&
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
