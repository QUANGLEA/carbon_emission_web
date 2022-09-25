import Quiz from "../../components/Quiz";
import SubmitButton from "../../components/SubmitButton";
import NextButton from "../../components/NextButton";
import FeedbackPopup from "../../components/FeedbackPopup";
import { useState, useEffect, useLayoutEffect } from "react";
import useFirstRender from "../../components/useFirstRender";

export default function QuestionOne() {
  const QUESTION_ID = "questionOne";
  const [questionValue, setQuestionValue] = useState(3);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const question = "I consume animal products regularly every week.";
  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      setQuestionValue(localStorage.getItem(QUESTION_ID) || 3);
    } else {
      localStorage.setItem(QUESTION_ID, questionValue);
    }
  }, [questionValue]);

  const feedback =
    "Meat consumption is responsible for releasing greenhouse gases such as methane, CO2, and nitrous oxide. These gases contribute to climate change, such as global warming. Other plant-based protein options, such as tempeh or seitan, are great ways of limiting your carbon footprint.";

  return (
    <div
      style="background-image: url(https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)"
      className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
        <Quiz
          question={question}
          questionID={QUESTION_ID}
          questionValue={questionValue}
          setQuestionValue={setQuestionValue}
        />
        <div className="col-span-1"></div>
        <SubmitButton
          className="col-span-1"
          setIsFeedbackVisible={setIsFeedbackVisible}
        />
        <NextButton href="/quiz/questionTwo" className="col-span-1" />
      </div>
      <FeedbackPopup isVisible={isFeedbackVisible} feedback={feedback} />
    </div>
  );
}
