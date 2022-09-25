import { useState, useEffect } from "react";

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

  useEffect(() => {
    const one = parseInt(localStorage.getItem("questionOne"));
    const two = parseInt(localStorage.getItem("questionTwo"));
    const three = parseInt(localStorage.getItem("questionThree"));
    const four = parseInt(localStorage.getItem("questionFour"));
    const five = parseInt(localStorage.getItem("questionFive"));
    const six = parseInt(localStorage.getItem("questionSix"));
    const seven = parseInt(localStorage.getItem("questionSeven"));
    const eight = parseInt(localStorage.getItem("questionEight"));
    /*     console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    console.log(seven);
    console.log(eight); */
    setScore((one + two + three + four + five + six + seven + eight) / 8);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white h-screen w-screen">
      <div>Your Score is: {score} / 5</div>
      <div>You could do better. Here are some suggestions: </div>
      <div></div>
    </div>
  );
}
