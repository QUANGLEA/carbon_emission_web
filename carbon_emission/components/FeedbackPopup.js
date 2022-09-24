export default function FeedbackPopup({ isVisible }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="max-w-lg bg-red-600 rounded-lg flex flex-col items-center justify-content p-2">
      <div>Feedback</div>
      <div>
        Public transportation is a great way to conserve natural gas. If public
        transportation isn’t a feasible or accessible option for where you live,
        carpooling or walking are other great options!
      </div>
    </div>
  );
}
