import { certification } from "../../../constants";

const Step3Certification = ({ formData, setFormData, next }) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-bold">Your certification</h2>

      <div className="flex flex-col">
        <label className="text-xl font-bold">Certifying body</label>
        <select
          value={formData.certifiedBy}
          onChange={(e) =>
            setFormData({ ...formData, certifiedBy: e.target.value })
          }
          className="w-fit"
        >
          <option value="">- Select -</option>
          {certification.map((body, index) => (
            <option value={body.shortName} key={index}>
              {body.shortName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-xl font-bold">Certificate</label>
        <input
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              certificate: e.target.files[0],
            }))
          }
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
          onClick={next}
          className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3Certification;
