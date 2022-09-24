import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link id="get-started" href="/quiz/food">
        <a className="hover:[color:var(--blue)] transition-colors bg-white pt-4 pb-4 pr-16 pl-16 rounded-lg">
          Start Quiz
        </a>
      </Link>
    </div>
  );
}
