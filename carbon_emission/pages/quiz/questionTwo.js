import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect, useLayoutEffect } from "react";
import useFirstRender from "../../components/useFirstRender";
import PrevButton from "../../components/PrevButton";

export default function QuestionTwo() {
  const QUESTION_ID = "questionTwo";
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const question =
    "I live in resource-efficient housing (apartment/high-rise).";
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      setQuestionValue(localStorage.getItem(QUESTION_ID) || 3);
    } else {
      localStorage.setItem(QUESTION_ID, questionValue);
    }
  }, [questionValue]);
  const feedback =
    "Apartments can be environmentally friendlier than single-family homes. According to the U.S. Energy Information Administration, a single household living in an apartment uses nearly half as much energy as they would in a house due to less energy and water used in property maintenance and more efficient heating/cooling systems.";
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <PrevButton href="/quiz/questionOne" className="col-span-1" />
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/questionThree" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
