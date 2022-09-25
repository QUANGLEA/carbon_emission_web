export default function SummaryCard({ title, description }) {
  return (
    <div className="rounded-md p-5 col-span-1 h-full w-full flex flex-col justify-center items-center backdrop-blur-lg bg-white/30 text-black">
      <div className="mb-2 w-full [font-weight:700]">{title}</div>
      <div>{description}</div>
    </div>
  );
}
