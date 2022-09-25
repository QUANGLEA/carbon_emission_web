export default function SummaryCard({ title, description }) {
  return (
    <div className="relative summaryCard rounded-md my-5 p-5 col-span-1 h-full w-full backdrop-blur-lg bg-white/30 text-black">
      <div className="mb-2 w-full [font-weight:700]">{title}</div>
      <div>{description}</div>
    </div>
  );
}
