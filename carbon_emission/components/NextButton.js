import Link from "next/link";
import Router from "next/router";

export default function NextButton({ href }) {
  return (
    <Link href={href}>
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Next
      </a>
    </Link>
  );
}
