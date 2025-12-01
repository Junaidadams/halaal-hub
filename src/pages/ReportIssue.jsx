import { useState } from "react";
import BasicForm from "../components/BasicForm";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
    page: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRequest
      .post("/util/report-issue", formData)
      .then((response) => {
        console.log("Issue reported successfully:", response.data);
        // Optionally reset the form or show a success message
        setFormData({
          summary: "",
          description: "",
          page: "",
        });
      })
      .catch((error) => {
        console.error("Error reporting issue:", error);
      });
  };

  return (
    <Wrapper>
      <BasicForm
        fields={[
          { name: "summary", label: "Summary", type: "input" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "page", label: "Page", type: "select" },
        ]}
        flavourText=""
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Report an Issue"
        submitLabel="Submit Issue"
      />
    </Wrapper>
  );
};

export default ReportIssue;
