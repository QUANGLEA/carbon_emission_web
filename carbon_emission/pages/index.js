import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
      <div>How can you reduce your carbon emission? Take the quiz now!</div>
      <Link id="get-started" href="/quiz/questionOne">
        <a className="bg-white pt-4 pb-4 pr-16 pl-16 rounded-lg text-black">
          Start Quiz
        </a>
      </Link>
    </div>
  );
}
