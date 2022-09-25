import { useState, useEffect } from "react";
import FinalHeader from "../../components/FinalHeader";
import FinalFooter from "../../components/FinalFooter";
import FinalBackground from "../../components/FinalBackground";

export default function Final() {
  /* const [oneResponse, setOneResponse] = useState(3);
  const [twoResponse, setTwoResponse] = useState(3);
  const [threeResponse, setThreeResponse] = useState(3);
  const [fourResponse, setFourResponse] = useState(3);
  const [fiveResponse, setFiveResponse] = useState(3);
  const [sixResponse, setSixResponse] = useState(3);
  const [sevenResponse, setSevenResponse] = useState(3);
  const [eightResponse, setEightResponse] = useState(3); */
  const [score, setScore] = useState(0);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const one = parseInt(localStorage.getItem("busiOne"));
    const two = parseInt(localStorage.getItem("busiTwo"));
    const three = parseInt(localStorage.getItem("busiThree"));
    const four = parseInt(localStorage.getItem("busiFour"));
    const five = parseInt(localStorage.getItem("busiFive"));

    /*     console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    console.log(seven);
    console.log(eight); */
    const finalScore = (one + two + three + four + five) / 5;
    const roundedScore = Math.round(finalScore * 10) / 10;
    setScore(roundedScore);
  }, []);

  return (
    <div>
      <FinalBackground />
      <div className="w-screen h-screen opacity-90">
        <FinalHeader isBusiness={true} />
        <div className="flex flex-col justify-center items-center text-white w-full h-[80%] backdrop-blur-md bg-white/30">
          <div className="text-black text-5xl [font-weight:700]">
            Congratulations! You've just completeted the quiz!
          </div>
          <div className="text-black text-5xl [font-weight:700]">
            Your Score is: {score} / 5
          </div>
          <div className="text-black text-5xl [font-weight:700]"></div>
        </div>
        <FinalFooter href="/quiz/questionOne" />
      </div>
    </div>
  );
}
