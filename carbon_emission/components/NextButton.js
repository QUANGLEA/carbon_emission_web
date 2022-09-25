import Router from "next/router";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function NextButton({ href, setIsTransition }) {
  const onNext = () => {
    setIsTransition(true);
    Router.push(href);
  };

  return (
    <ArrowRightCircleIcon
      className="h-[9%] rightArrow hover:fill-cyan-700"
      href={href}
      onClick={onNext}
    >
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Next
      </a>
    </ArrowRightCircleIcon>
  );
}
