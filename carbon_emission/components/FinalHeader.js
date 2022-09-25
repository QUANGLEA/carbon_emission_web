import Router from "next/router";

export default function FinalHeader({ isBusiness }) {
  const summaryType = isBusiness ? "Business" : "";
  return (
    <div className="fixed z-50 h-[10%] flex items-center justify-center w-full">
      <button
        onClick={() => Router.push("/quiz" + summaryType + "/final")}
        className="hover:bg-cyan-500 bg-white text-black p-3 m-3"
      >
        Summary
      </button>
      <button
        onClick={() => Router.push("/final/summary" + summaryType)}
        className="hover:bg-cyan-500 bg-white text-black p-3 m-3"
      >
        Information
      </button>
    </div>
  );
}
