import Question from "../../components/Question";
import image from "../../images/q3b_image.jpg";

export default function QuestionThree() {
  const QUESTION_ID = "busiThree";
  const question =
    "We purchase pre-owned office equipment and supplies when feasible.";
  const feedback =
    "Manufacturing certain goods accounts for almost the entirety of the carbon emissions they're responsible for. As a result, buying used office equipment still in great condition can be a great way to reduce your company’s carbon footprint.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quizBusiness/questionFour"
      prevURL="/quizBusiness/questionTwo"
      image={image}
    />
  );
}
