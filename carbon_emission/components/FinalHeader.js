import Router from "next/router";

export default function FinalHeader() {
  return (
    <div className="fixed top-0 right-1/4 flex items-center">
      <button
        onClick={() => Router.push("/final/summary")}
        className="hover:bg-cyan-500 bg-white text-black p-3 m-3"
      >
        Summary
      </button>
      <button
        onClick={() => Router.push("/final/feedback")}
        className="hover:bg-cyan-500 bg-white text-black p-3 m-3"
      >
        Feedback
      </button>
      <button
        onClick={() => Router.push("/final/sources")}
        className="hover:bg-cyan-500 bg-white text-black p-3 m-3"
      >
        Sources
      </button>
    </div>
  );
}
