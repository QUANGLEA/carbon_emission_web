import Question from "../../components/Question";
import image from "../../images/q4b_image.jpg";

export default function QuestionFour() {
  const QUESTION_ID = "busiFour";
  const question = "We offer a flexible remote-work policy.";
  const feedback =
    "Allowing employees to work from home, either part time or full time, reduces the carbon emissions from powering the office, transportation, and any painstaking preparation the employee may need to take before heading into work.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quizBusiness/questionFive"
      prevURL="/quizBusiness/questionThree"
      image={image}
    />
  );
}
