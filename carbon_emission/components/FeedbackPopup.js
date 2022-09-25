export default function FeedbackPopup({ isVisible, feedback }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="max-w-lg backdrop-blur-xl bg-white/60 rounded-lg w-full col-span-3 flex flex-col items-center justify-content p-2">
      <div>Feedback</div>
      <div>{feedback}</div>
    </div>
  );
}
