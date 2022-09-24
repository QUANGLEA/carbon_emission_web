import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState } from "react";

export default function Food() {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const question = "I consume animal products regularly every week.";
  const value = {
    1: "Value 1",
    2: "Value 2",
    3: "Value 3",
    4: "Value 4",
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz question={question} valueDict={value} />
        <div className="col-span-1"></div>
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/gas" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={true} />
    </div>
  );
}
