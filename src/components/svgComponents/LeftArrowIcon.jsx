import React from "react";

function LeftArrowIcon({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionLeftArrowIcon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M244 400L100 256l144-144M120 256h292"
      ></path>
    </svg>
  );
}

export default LeftArrowIcon;
