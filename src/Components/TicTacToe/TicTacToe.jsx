import React, { useRef, useState } from "react";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) return;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}' class='w-28 h-28 mx-auto' />`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}' class='w-28 h-28 mx-auto' />`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
  if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
    won(data[0]);
  } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
    won(data[3]);
  } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
    won(data[6]);
  } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
    won(data[0]);
  } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
    won(data[1]);
  } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
    won(data[2]);
  } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
    won(data[0]);
  } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
    won(data[2]);
  } 
  else if (!data.includes("")) {
    setLock(true);
    titleRef.current.innerHTML = `Égalité !`;
  }
};


  const won = (winner) => {
    setLock(true);
    titleRef.current.innerHTML = `Les <img src='${
      winner === "x" ? cross : circle
    }' class='w-16 h-16 mx-auto'/> ont gagné ! `;
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "";

    const cells = document.querySelectorAll(".grid > div");
    cells.forEach((cell) => (cell.innerHTML = ""));

    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[oklch(97%_0.0035_67.78)] text-[oklch(40%_0.0081_61.42)]">
      <h1 className="text-4xl font-extrabold mb-6 tracking-wider text-black-600">
        Tic Tac Toe
      </h1>
      <h2
        ref={titleRef}
        className="flex items-center gap-2 text-2xl font-semibold mt-4 mb-6 text-[oklch(40%_0.0081_61.42)]"
      ></h2>

      <div className="grid grid-cols-3 gap-4 p-6 rounded-[1.5rem] bg-[oklch(95%_0.0081_61.42)] shadow-lg">
        <div
          onClick={(e) => toggle(e, 0)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 1)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 2)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 3)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 4)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 5)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 6)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 7)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
        <div
          onClick={(e) => toggle(e, 8)}
          className="w-36 h-36 bg-[oklch(97%_0.0035_67.78)] border-2 border-[oklch(90%_0.0081_61.42)] rounded-xl hover:border-slate-500 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
        ></div>
      </div>

      <button
        onClick={() => {
          reset();
        }}
        className="mt-6 px-6 py-2 rounded-[2rem] font-semibold shadow-md hover:scale-105 transition-colors duration-200 
             bg-[oklch(90%_0.0081_61.42)] text-[oklch(40%_0.0081_61.42)] hover:bg-[oklch(85%_0.0081_61.42)]"
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
