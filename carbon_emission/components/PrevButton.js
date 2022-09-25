import Router from "next/router";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function PrevButton({ href, setIsTransition }) {
  const onPrev = () => {
    setIsTransition(true);
    Router.push(href);
  };
  return (
    <ArrowLeftCircleIcon
      href={href}
      onClick={onPrev}
      className="h-[9%] hover:fill-cyan-700 leftArrow"
    >
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Previous
      </a>
    </ArrowLeftCircleIcon>
  );
}
