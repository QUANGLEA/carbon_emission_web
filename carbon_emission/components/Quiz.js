import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

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
    <div className="col-span-3 grid grid-cols-5 grid-rows-3 gap-x-3 place-items-center">
      <div className="col-span-5 text-3xl mt-2 mb-10 [font-weight:700]">
        {question}
      </div>
      <div className="col-span-1 align-center text-xl m-2 [font-weight:700]">
        Strongly Disagree
      </div>
      <Slider
        className="h-1/4 col-span-3"
        aria-label="Small steps"
        value={questionValue}
        onChange={(e) => valueText(e.target.value)}
        step={1}
        marks
        min={1}
        max={Object.keys(VALUE_DICT).length}
        valueLabelDisplay="auto"
      />
      <div className="col-span-1 text-xl m-2 [font-weight:700]">
        Strongly Agree
      </div>
      <div className="col-span-5 text-xl [font-weight:700]">{value}</div>
    </div>
  );
}
