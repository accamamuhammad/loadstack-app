"use client";

import React from "react";

type ButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const Button = ({ text, isActive, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm px-4 py-2 rounded-full border-[0.5px] shadow cursor-pointer transition-colors ${
        isActive
          ? "bg-black text-white border-black"
          : "bg-white text-neutral-600 border-neutral-200"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;