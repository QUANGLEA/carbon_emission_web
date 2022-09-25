export default function FeedbackPopup({ isVisible, feedback }) {
  if (!isVisible) {
    return <div className="w-full h-[13%] mt-5 p-2"></div>;
  }

  return (
    <div className="w-full h-[13%] mt-5 backdrop-blur-xl bg-white/60 rounded-lg flex flex-col items-center justify-content p-2">
      <div>Feedback</div>
      <div>{feedback}</div>
    </div>
  );
}
