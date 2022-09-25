import Question from "../../components/Question";

export default function QuestionFive() {
  const QUESTION_ID = "questionFive";
  const question =
    "I minimize my use and purchase of single-use plastics and other non-recyclables.";
  const feedback =
    "Because single-use plastic is produced from fossil fuels, the process of extracting and creating these plastics emits huge amounts of greenhouse gases. It is estimated that just the extraction of these fossil fuels and their transportation to plastic factories emits 12.5 to 1.5 million metric tons of greenhouse gasses.";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionSix"
      prevURL="/quiz/questionFour"
    />
  );
}
