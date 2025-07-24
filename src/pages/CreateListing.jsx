import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { categories } from "../../constants";
import { certification } from "../../constants";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const CreateListing = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    lat: 0,
    lon: 0,
    googlePlaceId: 0,
    certifiedBy: "",
  });
  const [businessSearchName, setBusinessSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCategorySelect = (value) => {
    setFormData({ ...formData, category: value });
    setTimeout(() => setStep(2), 300);
  };

  const handlePrefill = (listing) => {
    setFormData((prev) => ({
      ...prev,
      businessName: listing.display_name,
      category: listing.type,
      lat: listing.lat,
      lon: listing.lon,
      googlePlaceId: listing.place_id,
    }));
    console.log(formData);
  };

  const stepMinusOne = () => {
    step > 1 && setStep((prev) => prev - 1);
  };

  const handleSearchBusiness = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.get(`/util/search-business`, {
        params: {
          q: businessSearchName,
        },
      });
      setSearchResults(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(
        "Failed to find any businesses under the text entered." + error
      );
    }
  };

  const totalSteps = 5;

  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-sceen w-[95%] flex flex-col">
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
          <div className="flex mb-4">
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
              <div>
                <label className="text-xl font-bold">Business Name</label>
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
              </div>
              <p>Or</p>
              <div>
                <label className="text-xl font-bold ">Search Business</label>
                <input
                  type="text"
                  value={businessSearchName}
                  onChange={(e) => setBusinessSearchName(e.target.value)}
                  placeholder="Enter business name"
                  className="w-full px-4 py-2 border rounded-md"
                />
                {searchResults.length > 0 && (
                  <select
                    onChange={(e) =>
                      handlePrefill(searchResults[e.target.value])
                    }
                    className="w-full px-4 py-2 mt-2 border rounded-md truncate"
                    style={{
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <option value="">Select a business</option>
                    {searchResults.map((result, index) => (
                      <option key={index} value={index}>
                        {result.display_name.length > 40
                          ? result.display_name.slice(0, 40) + "..."
                          : result.display_name}
                      </option>
                    ))}
                  </select>
                )}

                <button type="button" onClick={handleSearchBusiness}>
                  Search
                </button>
              </div>
              {/* <button onClick={prefillTest}>Clicki</button> */}
              <button
                onClick={() => setStep(step + 1)}
                className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className=" flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-bold">
                What type of place are you listing?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => handleCategorySelect(value)}
                    className={`${
                      formData.category === value &&
                      "bg-richBlack text-white hover:bg-richBlack hover:bg-opacity-95"
                    } border p-4 rounded-xl hover:shadow-md hover:bg-gray-50 transition flex flex-col items-center text-center`}
                  >
                    <Icon />{" "}
                    <span className="text-sm font-medium capitalize">
                      {value}
                    </span>
                  </button>
                ))}
              </div>
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

          {step === 3 && (
            <div className=" flex flex-col space-y-4 w-full">
              <h2 className="text-xl font-bold ">Your certification</h2>
              <div className="flex flex-col">
                <label className="text-xl font-bold ">Certifying body</label>
                <select value={formData.certifiedBy} className="w-fit">
                  <option key="">- Select - </option>
                  {certification.map((body, index) => (
                    <option
                      onChange={() => setFormData(body.shortName)}
                      value={body.shortName}
                      key={index}
                    >
                      {body.shortName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col ">
                {" "}
                <label className="text-xl font-bold ">Certificate</label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-700
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-richBlack file:text-white
               hover:file:bg-gray-800"
                />
                <button type="button">Add later</button>
              </div>
              <div className="flex flex-col">
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
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateListing;
