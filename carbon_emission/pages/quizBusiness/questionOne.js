import Question from "../../components/Question";
import image from "../../images/q1b_image.jpg";

export default function QuestionOne() {
  const QUESTION_ID = "busiOne";
  const question = "Our employees always fly commercial.";
  const feedback =
    "On a per-passenger basis, private jets emit anywhere from 5-14 times more CO2 than commercial airlines.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quizBusiness/questionTwo"
      prevURL={null}
      image={image}
    />
  );
}
