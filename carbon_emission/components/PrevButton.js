import Link from "next/link";

export default function PrevButton({ href }) {
  return (
    <Link href={href}>
      <a className="bg-white w-full h-1/2 text-black p-2 rounded-lg text-center">
        Previous
      </a>
    </Link>
  );
}
