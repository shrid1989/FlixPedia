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
      <div className="thumnailCard text-left w-32">
        <span>{rating}</span>
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
