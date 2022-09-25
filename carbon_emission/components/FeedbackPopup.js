export default function FeedbackPopup({ isVisible, feedback }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full mt-5 backdrop-blur-xl bg-white/60 rounded-lg flex flex-col items-center justify-content p-2">
      <div>Feedback</div>
      <div>{feedback}</div>
    </div>
  );
}
