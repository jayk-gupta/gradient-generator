import React from 'react'
import {
  ArrowCircleUp,
  ArrowCircleRight,
  ArrowCircleLeft,
  ArrowCircleDown,
} from "phosphor-react";

const iconStyle = 'hover:cursor-pointer hover:text-green-200';
function Buttons(props) {
  return (
    <div className="flex gap-2 w-64 justify-around">
      <button
        className=""
        onClick={() => {
         props.GradientHandler("to top");
        }}
      >
        <ArrowCircleUp size={32} className={iconStyle} />
      </button>

      <button
        className=""
        onClick={() => {
          props.GradientHandler("to right");
        }}
      >
        <ArrowCircleRight size={32} className={iconStyle} />
      </button>
      <button
        onClick={() => {
          props.GradientHandler("to left");
        }}
      >
        <ArrowCircleLeft size={32} className={iconStyle} />
      </button>
      <button
        className=""
        onClick={() => {
          props.GradientHandler("to bottom");
        }}
      >
        <ArrowCircleDown size={32} className={iconStyle} />
      </button>
    </div>
  );
}

export default Buttons