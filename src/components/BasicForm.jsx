import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";

const BasicForm = ({
  fields,
  formData,
  setFormData,
  handleSubmit,
  title = "Form",
  submitLabel = "Submit",
  children,
  flavourText = "",
  submissionState = {
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  },
  preSubmissionText = "Submit",
  postSubmissionText = "Submitted",
  submissionReattempt = false,
}) => {
  return (
    <div className="mx-auto my-20 min-h-screen w-[95%] flex flex-col">
      <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 flex-col font-poppins bg-white p-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-wider mb-4">{title}</h1>
            <p>{flavourText}</p>
          </div>
          {fields.map((field) => (
            <div className="space-y-2" key={field.name}>
              <label className="text-xl font-bold mb-4">{field.label}</label>
              <input
                className="w-full px-4 py-2 border rounded-md"
                type={field.type}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
                {...field.inputProps}
              />
            </div>
          ))}
          {children}
          {/* <button
            type="submit"
            className="bg-richBlack text-white px-4 py-1 ml-auto rounded-sm"
          >
            {submitLabel}
          </button> */}
          <SubmitButton
            complete={submissionState.complete}
            success={submissionState.success}
            isLoading={submissionState.formSubmit}
            error={submissionState.error}
            preSubmissionText={preSubmissionText}
            postSubmissionText={postSubmissionText}
            reattempt={submissionReattempt}
          />
        </form>
      </div>
    </div>
  );
};

BasicForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      inputProps: PropTypes.object,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  submitLabel: PropTypes.string,
  children: PropTypes.node,
  flavourText: PropTypes.string,
  submissionState: PropTypes.shape({
    formSubmit: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.bool,
    complete: PropTypes.bool,
  }),
  preSubmissionText: PropTypes.string,
  postSubmissionText: PropTypes.string,
  submissionReattempt: PropTypes.string,
};

export default BasicForm;

/*
Example usage:

<BasicForm
  fields={[
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ]}
  formData={formData}
  setFormData={setFormData}
  handleSubmit={handleSubmit}
  title="Login"
  submitLabel="Log In"
/>
*/
