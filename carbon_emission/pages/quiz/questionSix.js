import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect, useLayoutEffect } from "react";
import useFirstRender from "../../components/useFirstRender";
import PrevButton from "../../components/PrevButton";

export default function QuestionSix() {
  const QUESTION_ID = "questionSix";
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const question = "I recycle and compost regularly.";
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      setQuestionValue(localStorage.getItem(QUESTION_ID) || 3);
    } else {
      localStorage.setItem(QUESTION_ID, questionValue);
    }
  }, [questionValue]);

  const feedback =
    "Recycling reduces the amount of waste sent to landfills and incinerators. It conserves natural resources such as timber, water and minerals, prevents pollution by reducing the need to collect new raw materials, and saves energy.";

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <PrevButton href="/quiz/questionFive" className="col-span-1" />
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/questionSeven" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
