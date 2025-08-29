import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Wrapper from "../components/util/Wrapper";

// step components
import BusinessInfo from "../components/formComponents/BusinessInfo";
import Category from "../components/formComponents/Category";
import Certification from "../components/formComponents/Certification";

const CreateListing = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    category: "",
    lat: 0,
    lon: 0,
    googlePlaceId: 0,
    certifiedBy: "",
    certificate: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (value) => {
    setFormData({ ...formData, category: value });
    setTimeout(() => setStep(2), 300);
  };

  const stepMinusOne = () => step > 1 && setStep((prev) => prev - 1);

  const totalSteps = 5;

  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-sceen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          {/* Step navigation UI */}
          <div className="flex mb-4">
            {step > 1 && (
              <button onClick={stepMinusOne} className="flex my-auto">
                <BiArrowBack className="my-auto" />
              </button>
            )}
            <div className="flex gap-1 ml-auto">
              {Array.from({ length: totalSteps }, (_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 flex items-center justify-center text-xs font-bold ${
                    step === index + 1 ? "bg-black text-white" : "text-black"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Step rendering */}
          {step === 1 && (
            <BusinessInfo
              formData={formData}
              handleChange={handleChange}
              next={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <Category
              formData={formData}
              handleCategorySelect={handleCategorySelect}
              next={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <Certification
              formData={formData}
              setFormData={setFormData}
              next={() => setStep(4)}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateListing;
