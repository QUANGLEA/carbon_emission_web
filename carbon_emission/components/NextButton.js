import Router from "next/router";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function NextButton({ href, setIsTransition }) {
  const onNext = () => {
    setIsTransition(true);
    Router.push(href);
  };

  return (
    <ArrowRightCircleIcon
      className="w-1/2 h-1/2 col-span-1 hover:fill-cyan-700"
      href={href}
      onClick={onNext}
    >
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Next
      </a>
    </ArrowRightCircleIcon>
  );
}
