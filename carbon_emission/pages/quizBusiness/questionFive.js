import Question from "../../components/Question";
import image from "../../images/q5b_image.jpg";

export default function QuestionFive() {
  const QUESTION_ID = "busiFive";
  const question =
    "We hold our supply chain accountable for energy efficiency.";
  const feedback =
    "According to the Department of Energy, between 40 and 60 percent of manufacturing companies’ carbon emissions come from their supply chain.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quizBusiness/final"
      prevURL="/quizBusiness/questionFour"
      image={image}
    />
  );
}
