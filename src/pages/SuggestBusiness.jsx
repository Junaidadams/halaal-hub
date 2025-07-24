import React from "react";
import BasicForm from "../components/BasicForm";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const SuggestBusiness = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    area: "",
    description: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRequest
      .post("/util/suggest-business", formData)
      .then((response) => {
        console.log("Issue reported successfully:", response.data);
        // Optionally reset the form or show a success message
        setFormData({
          name: "",
          area: "",
          description: "",
          link: "",
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
          { name: "name", label: "Business name", type: "input" },
          { name: "area", label: "Area", type: "input" },
          {
            name: "description",
            label: "Description of this establishment and why you love them.",
            type: "textarea",
          },
          {
            name: "link",
            label: "Link or contact information (optional)",
            type: "select",
          },
        ]}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Suggest a Business"
        submitLabel="Submit Suggestion"
      />
    </Wrapper>
  );
};

export default SuggestBusiness;
