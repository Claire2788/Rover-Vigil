import React from "react";

import ItemForm from "./itemform";

const Section3 = ({ setForm, formData, navigation }) => {
  const { happiness_current_job_business } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h2>Your Personal Inventory:</h2>
      <h3>Financial and Career:</h3>
      <ItemForm
        label="Happiness/fulfillment with job or business"
        name="happiness_current_job_business"
        value={happiness_current_job_business}
        onChange={setForm}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Section3;
