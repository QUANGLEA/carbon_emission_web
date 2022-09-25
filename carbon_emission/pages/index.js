import Link from "next/link";
import image from "../images/earth2.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={image}
        className="-z-10 fixed h-screen w-screen opacity-[85]"
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col justify-center items-center h-screen w-screen text-black opacity-90">
        <div className="drop-shadow-2xl [font-weight:700] text-4xl mb-28">
          HOW CAN YOU REDUCE YOUR CARBON EMISSION?
        </div>
        <div className="[font-weight:700] text-3xl mb-20">
          Take the quiz now!
        </div>
        <Link id="get-started" href="/quiz/questionOne">
          <a className="bg-white pt-4 pb-4 pr-16 pl-16 rounded-lg text-black text-2xl">
            Start Quiz
          </a>
        </Link>
      </div>
    </div>
  );
}
