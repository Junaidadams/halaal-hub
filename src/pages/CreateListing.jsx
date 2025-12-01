import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Wrapper from "../components/util/Wrapper";

// step components
import BusinessInfo from "../components/formComponents/BusinessInfo";
import Category from "../components/formComponents/Category";
import Certification from "../components/formComponents/Certification";
import Location from "../components/formComponents/Location";

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
    address: "",
    postalCode: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted ✅", formData);
    // TODO: send to API here
  };

  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-sceen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <form onSubmit={handleSubmit}>
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
            {step === 4 && (
              <Location
                formData={formData}
                setFormData={setFormData}
                next={() => setStep(5)}
              />
            )}
            {step === 5 && (
              <div className="flex flex-col space-y-4 w-full">
                <h2 className="text-2xl font-bold ">Review Your Listing</h2>
                <p>
                  Please note that all of our listings get reviewed before they
                  are made live to make sure it aligns with our terms of
                  service. We will contact you when it is up!
                </p>
                <div className="flex flex-col space-y-6">
                  {" "}
                  <BusinessInfo
                    summary={true}
                    formData={formData}
                    handleChange={handleChange}
                    next={() => setStep(2)}
                  />
                  <Category
                    summary={true}
                    formData={formData}
                    handleCategorySelect={handleCategorySelect}
                    next={() => setStep(3)}
                  />
                  <Certification
                    summary={true}
                    formData={formData}
                    setFormData={setFormData}
                    next={() => setStep(4)}
                  />
                  <Location
                    summary={true}
                    formData={formData}
                    setFormData={setFormData}
                    next={() => setStep(5)}
                  />{" "}
                </div>
                <button
                  type="submit"
                  className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
                >
                  Submit for review
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateListing;
