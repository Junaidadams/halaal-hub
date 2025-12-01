import { categories } from "../../../constants";

const Category = ({ formData, handleCategorySelect, next, summary }) => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-bold">
        What type of place is {formData.businessName}?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {categories.map(({ value, icon: Icon }) => (
          <button
            type="button"
            key={value}
            onClick={() => handleCategorySelect(value)}
            className={`${
              formData.category === value &&
              "bg-richBlack text-white hover:bg-richBlack hover:bg-opacity-95"
            } border p-4 rounded-xl hover:shadow-md hover:bg-gray-50 transition flex flex-col items-center text-center`}
          >
            <Icon />{" "}
            <span className="text-sm font-medium capitalize">{value}</span>
          </button>
        ))}
      </div>
      {!summary && (
        <button
          type="button"
          onClick={next}
          className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Category;
