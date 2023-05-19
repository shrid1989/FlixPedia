import React from "react";
import { InputProps } from "./types";

const InputComponent: React.FC<InputProps> = ({
  onChangeHandler,
  value,
  ariaLabel,
  placeHolder,
}) => {
  return (
    <>
      <div className="">
        <input
          className="border-solid border-2 border-indigo-600"
          type="text"
          onChange={({ target }) => {
            onChangeHandler(target.value);
          }}
          aria-label={ariaLabel}
          placeholder={placeHolder}
        />
      </div>
    </>
  );
};

export default InputComponent;
