import React from "react";

import ItemForm from "./itemform";

const Section2 = ({ setForm, formData, navigation }) => {
  const { with_what_am_i_struggling} = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h2>Your Personal Inventory:</h2>
      <h3>General:</h3>
      <ItemForm
        label="With what am I now struggling? What are the three biggest problems I’m now facing?"
        name="with_what_am_i_struggling"
        value={with_what_am_i_struggling}
        onChange={setForm}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Section2;
