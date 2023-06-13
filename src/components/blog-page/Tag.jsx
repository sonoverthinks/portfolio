import React from "react";

const Tag = ({ name }) => {
  return (
    <button
      className={`px-5 py-1 font-semibold rounded-lg bg-primary text-midnight`}
    >
      {name}
    </button>
  );
};

export default Tag;
