import React from "react";
import PosterCard from "../PosterCard/PosterCard";
import { ThumnailCardProps } from "./types";

const ThumbnailCard: React.FC<ThumnailCardProps> = ({
  imgSrc,
  cardTitle,
  cardSubTitle,
}) => {
  return (
    <>
      <div className="thumnailCard text-left w-32">
        <PosterCard imgURL={imgSrc} label={`${cardTitle} image`} />
        <div className="thumnailCard_description pt-1">
          <div className="thumnailCard__title text-lg font-bold">
            {cardTitle}
          </div>
          <div className="thumnailCard__subTitle text-sm">{cardSubTitle}</div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailCard;
