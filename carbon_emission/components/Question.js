import Quiz from "./Quiz";
import SubmitButton from "./SubmitButton";
import NextButton from "./NextButton";
import FeedbackPopup from "./FeedbackPopup";
import { useState, useEffect } from "react";
import useFirstRender from "./useFirstRender";
import PrevButton from "./PrevButton";
import Image from "next/image";

export default function Question({
  questionID,
  question,
  feedback,
  nextURL,
  prevURL,
  image,
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
    <div>
      <Image
        className="-z-10 h-screen w-screen opacity-80"
        src={image}
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      <div className="h-screen w-screen">
        {prevURL ? (
          <PrevButton
            href={prevURL}
            setIsTransition={setIsTransition}
            className="w-1/10 z-10 float-left mt-10"
          />
        ) : (
          <div className="leftArrow"></div>
        )}
        <div className="flex flex-col h-[60%] w-full centerBox justify-center items-center opacity-[99.9]">
          <div className="grid w-full h-[60%] grid-rows-2 grid-cols-1 place-items-center backdrop-blur-sm bg-white/30 text-black p-4 rounded-lg">
            <Quiz
              question={question}
              questionValue={questionValue}
              setQuestionValue={setQuestionValue}
            />
            <SubmitButton
              className="h-[40%]"
              setIsFeedbackVisible={setIsFeedbackVisible}
            />
          </div>
          <FeedbackPopup
            className="w-full"
            isVisible={isFeedbackVisible}
            feedback={feedback}
          />
        </div>
        <NextButton
          href={nextURL}
          setIsTransition={setIsTransition}
          className="float-right z-10"
        />
      </div>
    </div>
  );
}
