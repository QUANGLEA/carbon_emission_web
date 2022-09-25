import Router from "next/router";
import { useState } from "react";

export default function FinalFooter({ href }) {
  const [copy, setCopy] = useState(false);
  const onCopy = () => {
    setCopy(true);
    const copyText = "https://carbon-emission-web.vercel.app/";
    navigator.clipboard.writeText(copyText);
  };
  return (
    <div>
      <button
        className="fixed hover:bg-cyan-500 bottom-0 right-0 bg-white text-black p-3 m-3"
        onClick={() => Router.push(href)}
      >
        Take the Quiz Again
      </button>
      <button
        onClick={onCopy}
        className="fixed hover:bg-cyan-500 bottom-0 left-0 bg-white text-black p-3 m-3"
      >
        {copy ? "Copied to Clipboard" : "Copy Quiz Link"}
      </button>
    </div>
  );
}
