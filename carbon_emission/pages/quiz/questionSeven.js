import Question from "../../components/Question";
import image from "../../images/q7_image.jpg";

export default function QuestionSeven() {
  const QUESTION_ID = "questionSeven";
  const question = "I participate in energy-efficient practices at home.";
  const feedback =
    "Try to use energy-saving CFL or LED bulbs, which reduce your lighting energy by around 25-35 percent. Incandescent bulbs are especially high consumers of energy, so keep them on for as long as necessary and turn them off when not in use.";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionEight"
      prevURL="/quiz/questionSix"
      image={image}
    />
  );
}
