import React, { useState } from "react";
import Buttons from "./Components/Buttons";


const inputStyle = 'bg-gray-300 text-lg uppercase  p-2 text-center rounded-full shadow-xl border-none outline-none text-white placeholder-white ';
function App() {
  // USESTATE
  const [color1, setColor1] = useState("#00d4aa");
  const [color2, setColor2] = useState("#00d4de");
  const [direction, setDirection] = useState("to right");
  const [gradient, setGradient] = useState(
    `linear-gradient(${direction}, ${color1}, ${color2})`
  );
  // Color Handlers
  const color1Handler = (e) => {
    setColor1(e.target.value);
  };
  const color2Handler = (e) => {
    setColor2(e.target.value);
  };
  const GradientHandler = () => {
    setGradient(`linear-gradient(${direction}, ${color1}, ${color2})`);
    console.log(gradient);
  };
  //  Direction Hanlder
  const GradientDirectionHandler = (direction) => {
    console.log(direction);
    setDirection(direction);
    setGradient(`linear-gradient(${direction}, ${color1}, ${color2})`);
  };

  return (
    <div
      className="bg-slate-600 h-screen text-white"
      style={{ background: `${gradient}` }}
    >
      <h1 className="text-center text-2xl p-6">CSS Gradient Generator</h1>

      <div className="flex flex-col  p-24 gap-12 items-center">
        <h3 className="font-bold text-lg">Enter Colors</h3>
        {/* INPUTS */}
        <div className="flex gap-12">
          <input
            type="text"
            className={inputStyle}
            onChange={color1Handler}
            style={{
              background: `${color1}`,
            }}
            placeholder="color-1"
          ></input>
          <input
            type="text"
            className={inputStyle}
            onChange={color2Handler}
            style={{
              background: ` ${color2}`,
            }}
            placeholder="color-2"
          ></input>
        </div>

        <button
          className="bg-[#00d4aa] shadow-xl text-lg px-6 py-2 rounded-full uppercase"
          onClick={GradientHandler}
        >
          Generate
        </button>
        {/* DIRECTION BUTTONS */}
        <Buttons GradientHandler={GradientDirectionHandler} />
      </div>
      {/* CSS CODE */}
      <div className="flex flex-col items-center gap-6 p-4">
        <h3 className="text-center">CSS Code</h3>
        <div className="bg-transparent border-slate-300 border-2 rounded-2xl w-96 h-24 p-4">
          {gradient}
        </div>
      </div>
    </div>
  );
}

export default App;
