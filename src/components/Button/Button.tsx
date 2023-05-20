import React from "react";

import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonText,
  varient,
  className,
  onClickHandler,
}) => {
  return (
    <>
      <span
        className={`border-2 py-1 px-2 font-medium  border-2 uppercase ${
          varient === "primary"
            ? "border-red-600 text-red-600"
            : "border-white text-white"
        } ${className && className}`}
        onClick={onClickHandler}
      >
        {buttonText}
      </span>
    </>
  );
};

export default Button;
