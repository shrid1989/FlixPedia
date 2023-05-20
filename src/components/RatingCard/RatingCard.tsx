import React from "react";
import PosterCard from "../PosterCard/PosterCard";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import { RatingCardProps } from "./types";

const RatingCard: React.FC<RatingCardProps> = ({
  imgSrc,
  cardTitle,
  cardSubTitle,
  rating,
}) => {
  return (
    <>
      <div className="thumnailCard py-4 relative max-w-fit">
        <span className="text-white font-bold top-2	left-9 rounded absolute px-4 bg-amber-500	">
          {rating}
        </span>
        <ThumbnailCard
          imgSrc={imgSrc}
          cardTitle={cardTitle}
          cardSubTitle={cardSubTitle}
        />
      </div>
    </>
  );
};

export default RatingCard;
