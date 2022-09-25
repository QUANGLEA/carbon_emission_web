import Link from "next/link";
import Router from "next/router";

export default function NextButton({ href, setIsTransition }) {
  const onNext = () => {
    setIsTransition(true);
    Router.push(href);
  };

  return (
    <button onClick={onNext}>
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Next
      </a>
    </button>
  );
}
