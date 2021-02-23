import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Review from "./review";
import Submit from "./submit";

import "./styles.css";

const steps = [
  { id: "section1" },
  { id: "section2" },
  { id: "section3" },
  { id: "review" },
  { id: "submit" }
];

const defaultData = {
    startDate: "",
    why_do_you_want_your_bp_award: "",
    crew_remember_you_by: "",

    with_what_am_i_struggling: "",
  
    happiness_current_job_business: "",
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "section1":
      return <Section1 {...props} />;
    case "section2":
      return <Section2 {...props} />;
    case "section3":
      return <Section3 {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
