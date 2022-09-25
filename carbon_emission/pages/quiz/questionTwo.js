import Question from "../../components/Question";
import image from "../../images/q2_image.jpg";

export default function QuestionTwo() {
  const QUESTION_ID = "questionTwo";
  const question =
    "I live in resource-efficient housing (apartment/high-rise).";
  const feedback =
    "Apartments can be environmentally friendlier than single-family homes. According to the U.S. Energy Information Administration, a single household living in an apartment uses nearly half as much energy as they would in a house due to less energy and water used in property maintenance and more efficient heating/cooling systems.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionThree"
      prevURL="/quiz/questionOne"
      image={image}
    />
  );
}
