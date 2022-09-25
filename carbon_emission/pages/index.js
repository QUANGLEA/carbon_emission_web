import Link from "next/link";
import image from "../images/earth2.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={image}
        className="-z-10 fixed h-screen w-screen opacity-[50]"
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="grid grid-cols-2 grid-rows-3 place-items-center opacity-90">
          <div className="col-span-2 row-span-2 backdrop-blur-sm bg-white/70 text-black rounded-lg p-10 flex flex-col justify-center items-center">
            <div className="drop-shadow-2xl [font-weight:700] text-4xl mb-28">
              HOW CAN YOU REDUCE YOUR CARBON EMISSION?
            </div>
            <div className="text-3xl [font-weight:700]">Take the quiz now!</div>
          </div>

          <Link
            id="get-started"
            href="/quiz/questionOne"
            className="col-span-1 "
          >
            <a className="bg-white pt-4 pb-4 pr-16 pl-16 rounded-lg text-black text-2xl hover:bg-cyan-200">
              For Individuals
            </a>
          </Link>
          <Link id="get-started" href="/quizBusiness/questionOne">
            <a className="bg-white pt-4 pb-4 pr-16 pl-16 rounded-lg text-black text-2xl hover:bg-cyan-200">
              For Businesses
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
