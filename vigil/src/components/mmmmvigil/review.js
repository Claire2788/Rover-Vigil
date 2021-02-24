import React from "react";
import axios from 'axios';

const Review = ({ setForm, formData, navigation }) => {
  const {
    why_do_you_want_your_bp_award,
    crew_remember_you_by,
    with_what_am_i_struggling,
    happiness_current_job_business
  } = formData;
  const { go } = navigation;


  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
      Your Rover Inventory:
        <button onClick={() => go("section1")}>Edit</button>
      </h4>
      <div>
        {" "}
        Why do you really want your BP Award? {`${why_do_you_want_your_bp_award}`},
        <br />
        How so you want the Crew to remember you by? {`${crew_remember_you_by}`},
      </div>
      <h4>
            Your Personal Inventory: 
            General:
        <button onClick={() => go("section2")}>Edit</button>
      </h4>
      <div>
      With what am I now struggling? What are the three biggest problems I’m now facing? {`${with_what_am_i_struggling}`},
      </div>
      <h4>
        Financial and Career:
        <button onClick={() => go("section3")}>Edit</button>
      </h4>
      <div>
        Happiness/fulfillment with job or business: {`${happiness_current_job_business}`},
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
