import Quiz from "./Quiz";
import SubmitButton from "./SubmitButton";
import NextButton from "./NextButton";
import FeedbackPopup from "./FeedbackPopup";
import { useState, useEffect } from "react";
import useFirstRender from "./useFirstRender";
import PrevButton from "./PrevButton";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

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
        className="-z-10 fixed h-screen w-screen"
        src={image}
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col justify-center items-center h-screen w-screen opacity-[99.9] ">
        <div className="backdrop-blur-sm bg-white/30 text-black p-4 rounded-lg">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 place-items-center">
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
        </div>
        <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
      </div>
    </div>
  );
}
