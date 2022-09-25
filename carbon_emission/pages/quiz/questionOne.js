import Question from "../../components/Question";
import image from "../../images/q1_image.jpg";

export default function QuestionOne() {
  const QUESTION_ID = "questionOne";
  const question = "I consume animal products regularly every week.";
  const feedback =
    "Meat consumption is responsible for releasing greenhouse gases such as methane, CO2, and nitrous oxide. These gases contribute to climate change, such as global warming. Other plant-based protein options, such as tempeh or seitan, are great ways of limiting your carbon footprint.";
  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/questionTwo"
      prevURL={null}
      image={image}
    />
  );
}
