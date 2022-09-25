import FinalFooter from "./FinalFooter";
import FinalHeader from "./FinalHeader";

export default function BusinessSummary() {
  return (
    <div className="h-screen w-screen">
      <FinalHeader />
      <FinalFooter href="quizBusiness/questionOne" />
    </div>
  );
}
