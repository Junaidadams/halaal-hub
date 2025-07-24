import { useState } from "react";
import BasicForm from "../components/BasicForm";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const SuggestFeature = () => {
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
  });

  const [submissionState, setSubmissionState] = useState({
    formSubmit: false,
    error: "",
    success: false,
    complete: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiRequest.post("/util/suggest-feature", {
        ...formData,
      });
      setSubmissionState((prev) => ({
        ...prev,
        success: true,
        formSubmit: false,
        complete: true,
        error: "",
      }));
    } catch (err) {
      console.error(err.response?.data?.message || "An error occurred.");

      setSubmissionState((prev) => ({
        ...prev,
        formSubmit: false,
        success: false,
        error:
          "Failed to send suggestion request. " +
          (err.response?.data?.message || ""),
        complete: true,
      }));
      return;
    }
  };

  return (
    <Wrapper>
      <BasicForm
        fields={[
          { name: "summary", label: "Summary", type: "input" },
          { name: "description", label: "Description", type: "textarea" },
        ]}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Suggest a Feature"
        submitLabel="Submit Suggestion"
        flavourText="Have an idea for a new feature? Let us know!"
        submissionState={submissionState}
      />
    </Wrapper>
  );
};

export default SuggestFeature;
