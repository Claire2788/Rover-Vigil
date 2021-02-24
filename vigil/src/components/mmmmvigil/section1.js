import React from "react";
import DatePicker from "react-datepicker";

import ItemForm from "./itemform";

const Section1 = ({ setForm, formData, navigation }) => {
  const { why_do_you_want_your_bp_award, crew_remember_you_by } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <h2>Your Rover Inventory:</h2>
      <p>Your BP Award will be one of the most valuable things you ever do, you will learn more about yourself, business, and life than school/varsity will ever teach you. The friends you make and the experiences you gain will stay with you your entire life in a way that your friends and family and any one who has never done it themselves will never understand. A key factor to being successful in life is focus and planning - you get what you focus on, so here we go: </p>
      
      <ItemForm
        label="Why do you really want your BP Award?"
        name="why_do_you_want_your_bp_award"
        value={why_do_you_want_your_bp_award}
        onChange={setForm}
      />
      <ItemForm
        label="How so you want the Crew to remember you by?"
        name="crew_remember_you_by"
        value={crew_remember_you_by}
        onChange={setForm}
      />
      
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Section1;
