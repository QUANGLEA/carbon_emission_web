import Slider from "@mui/material/Slider";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { getOptionsFromChildren } from "@mui/base";

const VALUE_DICT = {
  1: "Strong Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};

export default function Quiz({ question, questionValue, setQuestionValue }) {
  const [value, setValue] = useState(questionValue);

  function valueText(value) {
    const val = VALUE_DICT[value];
    setQuestionValue(value);
    setValue(val);
  }

  useEffect(() => {
    setValue(VALUE_DICT[questionValue]);
  }, [questionValue]);

  return (
    <div className="col-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 place-items-center">
      <div className="col-span-3">{question}</div>
      <div className="col-span-1 m-2">Strongly Agree</div>
      <Slider
        aria-label="Small steps"
        value={questionValue}
        // getAriaValueText={valuetext}
        onChange={(e) => valueText(e.target.value)}
        step={1}
        marks
        min={1}
        max={Object.keys(VALUE_DICT).length}
        valueLabelDisplay="auto"
      />
      <div className="col-span-1 m-2">Strongly Agree</div>
      <div className="col-span-3">{value}</div>
    </div>
  );
}
