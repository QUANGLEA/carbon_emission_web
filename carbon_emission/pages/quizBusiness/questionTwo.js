import Question from "../../components/Question";
import image from "../../images/q2b_image.jpg";

export default function QuestionTwo() {
  const QUESTION_ID = "busiTwo";
  const question = "We lease/own energy-efficient office space.";
  const feedback =
    "According to the Department of Energy, the average number of kilowatt hours per square foot of an office building is 22.5.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quizBusiness/questionThree"
      prevURL="/quizBusiness/questionOne"
      image={image}
    />
  );
}
