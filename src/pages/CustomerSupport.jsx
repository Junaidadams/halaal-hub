import { useState } from "react";
import BasicForm from "../components/BasicForm";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRequest
      .post("/util/customer-service", formData)
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
        ]}
        flavourText="Your ticket will be responded to by one of our agents as soon as possible"
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Create a support ticket"
        submitLabel="Submit Issue"
      />
    </Wrapper>
  );
};

export default CustomerSupport;
