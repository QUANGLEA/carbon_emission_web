import Question from "../../components/Question";

export default function QuestionSix() {
  const QUESTION_ID = "questionSix";
  const question = "I recycle and compost regularly.";
  const feedback =
    "Recycling reduces the amount of waste sent to landfills and incinerators. It conserves natural resources such as timber, water and minerals, prevents pollution by reducing the need to collect new raw materials, and saves energy.";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionSeven"
      prevURL="/quiz/questionFive"
    />
  );
}
