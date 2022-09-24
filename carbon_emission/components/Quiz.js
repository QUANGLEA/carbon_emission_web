import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function Quiz() {
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  function valuetext(value) {
    return `${value}°D`;
  }

  const [value, setValue] = useState();
  return (
    <div>
      <div className="flex justify-center align-center text-center">
        <div>
          Question 1: How much animal product did you consume in the past week?
        </div>
        <br />
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={4}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </div>
  );
}
