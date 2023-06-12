import React from "react";

const CustomButton = ({ primary = true, disabled, handleClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`px-5 py-1 rounded-lg bg-primary font-semibold hover:opacity-90 drop-shadow-lg flex items-center justify-normal gap-1 hover:cursor-pointer  ${
        primary
          ? "bg-primary text-midnight"
          : "bg-midnight text-whisper dark:bg-whisper dark:text-midnight"
      }
      ${disabled ? "opacity-50 hover:opacity-50" : ""}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
