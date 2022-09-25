import Quiz from "./Quiz";
import SubmitButton from "./SubmitButton";
import NextButton from "./NextButton";
import FeedbackPopup from "./FeedbackPopup";
import { useState, useEffect } from "react";
import useFirstRender from "./useFirstRender";
import PrevButton from "./PrevButton";

export default function Question({
  questionID,
  question,
  feedback,
  nextURL,
  prevURL,
}) {
  const QUESTION_ID = questionID;
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isTransition, setIsTransition] = useState(false);

  const firstRender = useFirstRender();

  useEffect(() => {
    if (!localStorage.getItem(QUESTION_ID) && firstRender) {
      localStorage.setItem(QUESTION_ID, 3);
    }
    setQuestionValue(parseInt(localStorage.getItem(QUESTION_ID)));
    if (isTransition) {
      localStorage.setItem(QUESTION_ID, questionValue);
      setIsTransition(false);
    }
  }, [isTransition]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        {prevURL ? (
          <PrevButton
            href={prevURL}
            setIsTransition={setIsTransition}
            className="col-span-1"
          />
        ) : (
          <div className="col-span-1"></div>
        )}
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton
          href={nextURL}
          setIsTransition={setIsTransition}
          className="col-span-1"
        />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
