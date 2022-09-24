import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function Quiz({ question, valueDict }) {
  const [value, setValue] = useState();

  function valuetext(value) {
    const val = valueDict[value];
    setValue(val);
  }

  return (
    <div className="col-span-3 grid grid-cols-3 grid-rows-3 place-items-center">
      <div className="col-span-3">{question}</div>
      <div className="col-span-1">Strongly Agree</div>
      <Slider
        aria-label="Small steps"
        defaultValue={2}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={1}
        max={Object.keys(valueDict).length}
        valueLabelDisplay="auto"
      />
      <div className="col-span-1">Strongly Agree</div>
      <div className="col-span-3">{value}</div>
    </div>
  );
}
