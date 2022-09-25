import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect, useLayoutEffect } from "react";
import useFirstRender from "../../components/useFirstRender";
import PrevButton from "../../components/PrevButton";

export default function QuestionEight() {
  const QUESTION_ID = "questionEight";
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
    "Synthetic textile fibers are produced from fossil fuel resources, such as oil and natural gas. Their production, consumption, and related waste handling generate greenhouse gas emissions, use non-renewable resources, and can release microplastics. Additionally, synthetic textile fibers, unlike natural fibers like cotton, don't decompose easily.";

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <PrevButton href="/quiz/questionSeven" className="col-span-1" />
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/final" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
