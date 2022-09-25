export default function SubmitButton({ setIsFeedbackVisible }) {
  const onSubmit = () => {
    setIsFeedbackVisible((prev) => !prev);
  };
  return (
    <button id="get-started" onClick={onSubmit}>
      <a className="content-center bg-white h-1/2 w-full text-black p-2 rounded-lg text-center">
        View Info
      </a>
    </button>
  );
}
