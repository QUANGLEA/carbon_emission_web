import Link from "next/link";

export default function SubmitButton({ href }) {
  return (
    <Link id="get-started" href={href}>
      <a className="bg-white h-1/2 w-full text-black p-2 rounded-lg text-center">
        Submit
      </a>
    </Link>
  );
}
