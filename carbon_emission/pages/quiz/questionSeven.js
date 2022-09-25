import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect, useLayoutEffect } from "react";
import useFirstRender from "../../components/useFirstRender";
import PrevButton from "../../components/PrevButton";

export default function QuestionSeven() {
  const QUESTION_ID = "questionSeven";
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const question = "I participate in energy-efficient practices at home.";
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      setQuestionValue(localStorage.getItem(QUESTION_ID) || 3);
    } else {
      localStorage.setItem(QUESTION_ID, questionValue);
    }
  }, [questionValue]);

  const feedback =
    "Try to use energy-saving CFL or LED bulbs, which reduce your lighting energy by around 25-35 percent. Incandescent bulbs are especially high consumers of energy, so keep them on for as long as necessary and turn them off when not in use.";

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <PrevButton href="/quiz/questionSix" className="col-span-1" />
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/questionEight" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
