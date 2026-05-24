import React from "react";

type ButtonProps = {
  text: string;
};

const button = ({ text }: ButtonProps) => {
  return (
    <button className="text-sm text-neutral-600 px-4 py-2 bg-white rounded-full border-[0.5px] border-neutral-200 shadow">
      {text}
    </button>
  );
};

export default button;
