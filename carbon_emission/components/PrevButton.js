import Link from "next/link";
import Router from "next/router";

export default function PrevButton({ href, setIsTransition }) {
  const onPrev = () => {
    setIsTransition(true);
    Router.push(href);
  };
  return (
    <button href={href} onClick={onPrev}>
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Previous
      </a>
    </button>
  );
}
