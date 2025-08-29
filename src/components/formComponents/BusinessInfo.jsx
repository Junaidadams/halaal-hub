import TextInput from "../util/TextInput";

const BusinessInfo = ({ formData, handleChange, next }) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <TextInput
        label="Business Name"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        type="text"
        placeholder="Enter business name"
      />
      <TextInput
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Enter contact email"
      />
      <button
        onClick={next}
        className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
      >
        Next
      </button>
    </div>
  );
};

export default BusinessInfo;
