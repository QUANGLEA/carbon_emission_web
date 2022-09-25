export default function FeedbackPopup({ isVisible, feedback }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="max-w-lg bg-red-600 rounded-lg flex flex-col items-center justify-content p-2">
      <div>Feedback</div>
      <div>{feedback}</div>
    </div>
  );
}
