import React from "react";
import BusinessInfo from "./BusinessInfo";
import Category from "./Category";
import Certification from "./Certification";
import StepLocation from "./StepLocation";

const Summary = ({ formData, handleChange, next }) => {
  return (
    <div>
      <BusinessInfo formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default Summary;
