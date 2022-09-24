import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";

export default function Food() {
  const question = "I consume animal products regularly every week.";
  const value = {
    1: "Value 1",
    2: "Value 2",
    3: "Value 3",
    4: "Value 4",
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-screen bg-black text-white">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 place-items-center">
          <Quiz question={question} valueDict={value} />
          <div className="col-span-1"></div>
          <SubmitButton href="/" className="col-span-1" />
          <NextButton href="/quiz/gas" className="col-span-1" />
        </div>
      </div>
      <FeedbackPopup />
    </div>
  );
}
