import Slider from "@mui/material/Slider";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

const VALUE_DICT = {
  1: "Strong Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};

export default function Quiz({
  question,
  questionID,
  questionValue,
  setQuestionValue,
}) {
  const [value, setValue] = useState();

  function valuetext(value) {
    const val = VALUE_DICT[value];
    setQuestionValue(value);
    setValue(val);
  }

  return (
    <div className="col-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 place-items-center">
      <div className="col-span-3">{question}</div>
      <div className="col-span-1 m-2">Strongly Agree</div>
      <Slider
        aria-label="Small steps"
        defaultValue={questionValue}
        getAriaValueText={valuetext}
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
