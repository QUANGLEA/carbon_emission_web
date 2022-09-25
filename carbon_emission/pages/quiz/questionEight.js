import Question from "../../components/Question";
import image from "../../images/q8_image.jpg";

export default function QuestionEight() {
  const QUESTION_ID = "questionEight";
  const question =
    "I purchase clothing with natural fibers. (e.g., cotton, wool)";
  const feedback =
    "Synthetic textile fibers are produced from fossil fuel resources, such as oil and natural gas. Their production, consumption, and related waste handling generate greenhouse gas emissions, use non-renewable resources, and can release microplastics. Additionally, synthetic textile fibers, unlike natural fibers like cotton, don't decompose easily.";

  return (
    <Question
      questionID={QUESTION_ID}
      question={question}
      feedback={feedback}
      nextURL="/quiz/final"
      prevURL="/quiz/questionSeven"
      image={image}
    />
  );
}
