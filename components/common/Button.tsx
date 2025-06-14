import React from "react";
import { ButtonProps } from "@/interfaces/index";

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;