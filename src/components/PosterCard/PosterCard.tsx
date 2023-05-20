import React from "react";
import { PosterCardProps } from "./types";

const posterSizes = {
  small: "w-32",
  medium: "w-44",
  large: "w-52",
};
const PosterCard: React.FC<PosterCardProps> = ({ imgURL, label, size }) => {
  return (
    <>
      <div
        className={`posterCard shadow-md  ${
          size ? posterSizes[size] : "w-full"
        }`}
      >
        <img className="posterCard__img w-full" alt={label} src={imgURL} />
      </div>
    </>
  );
};

export default PosterCard;
