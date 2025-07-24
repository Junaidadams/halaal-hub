import React from "react";
import BasicForm from "../components/BasicForm";
import Wrapper from "../components/util/Wrapper";
import apiRequest from "../../lib/apiRequest";

const GeneralContact = () => {
  const [formData, setFormData] = React.useState({
    summary: "",
    message: "",
    name: "",
    contactInformation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRequest
      .post("/util/contact", formData)
      .then((response) => {
        console.log("Issue reported successfully:", response.data);
        // Optionally reset the form or show a success message
        setFormData({
          summary: "",
          message: "",
          name: "",
          contactInformation: "",
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
          { name: "summary", label: "Summarize your message", type: "input" },
          {
            name: "message",
            label: "Your message to us.",
            type: "textarea",
          },
          {
            name: "name",
            label: "Your name",
            type: "input",
          },
          {
            name: "contactInformation",
            label: "Your contact information (optional)",
            type: "input",
          },
        ]}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        title="Contact Us"
        submitLabel="Send Message"
      />
    </Wrapper>
  );
};

export default GeneralContact;
