import Question from "../../components/Question";

export default function QuestionThree() {
  const QUESTION_ID = "questionThree";
  const question = "My home uses renewable energy.";
  const feedback =
    "There are several environmental and economic benefits to using renewable energy. Renewable energy produces no greenhouse gas emissions from fossil fuels and reduces some types of air pollution. It can also diversify energy supply and reducing dependence on imported fuels.";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionFour"
      prevURL="/quiz/questionTwo"
    />
  );
}
