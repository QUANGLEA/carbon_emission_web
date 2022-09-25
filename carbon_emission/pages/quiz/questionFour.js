import Question from "../../components/Question";
import image from "../../images/q4_image.jpg";

export default function QuestionFour() {
  const QUESTION_ID = "questionFour";
  const question = "I use public transportation frequently.";
  const feedback =
    "Public transportation is a great way to conserve natural gas. If public transportation isn't a feasible or accessible option for where you live, carpooling or walking are other great options!";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionFive"
      prevURL="/quiz/questionThree"
      image={image}
    />
  );
}
