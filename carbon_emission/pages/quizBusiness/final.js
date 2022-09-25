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
      <div className="flex flex-col justify-center items-center text-white h-screen w-screen">
        <FinalHeader isBusiness={true} />
        <div>Your Score is: {score} / 5</div>
        <div>You could do better. Here are some suggestions: </div>
        <div>hello</div>
        <FinalFooter href="/quizBusiness/questionOne" />
      </div>
    </div>
  );
}
