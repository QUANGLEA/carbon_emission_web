export default function SubmitButton({ setIsFeedbackVisible }) {
  const onSubmit = () => {
    setIsFeedbackVisible(true);
  };
  return (
    <button id="get-started" onClick={onSubmit}>
      <a className="bg-white h-1/2 w-full text-black p-2 rounded-lg text-center">
        Submit
      </a>
    </button>
  );
}
