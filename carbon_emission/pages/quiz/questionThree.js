import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect } from "react";
import useFirstRender from "../../components/useFirstRender";
import PrevButton from "../../components/PrevButton";

export default function QuestionThree() {
  const QUESTION_ID = "questionThree";
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const question = "My home uses renewable energy.";
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      setQuestionValue(localStorage.getItem(QUESTION_ID) || 3);
    } else {
      localStorage.setItem(QUESTION_ID, questionValue);
    }
  }, [questionValue]);

  const feedback =
    "There are several environmental and economic benefits to using renewable energy. Renewable energy produces no greenhouse gas emissions from fossil fuels and reduces some types of air pollution. It can also diversify energy supply and reducing dependence on imported fuels.";

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <PrevButton href="/quiz/questionTwo" className="col-span-1" />
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/questionFour" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
