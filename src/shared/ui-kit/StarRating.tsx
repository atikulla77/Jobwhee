"use client";
import Image from "next/image";
import { FC } from "react";

interface RatingProps {
  rating: number;
  width: number;
  height: number;
  responsiveWidthHeight: string;
}

const StarRating: FC<RatingProps> = ({ rating, width, height,responsiveWidthHeight }) => {
  const totalStars = 5;
  const stars = [];

  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= totalStars; i++) {
    if (roundedRating >= i) {
      stars.push(
        <Image
          key={i}
          src="/images/icon-images/starIcon.png"
          alt="Full Star"
          width={width}
          height={height}
          className={responsiveWidthHeight}
        />
      );
    } else if (roundedRating >= i - 0.5) {
      stars.push(
        <Image
          key={i}
          src="/images/icon-images/halfStarIcon.png"
          alt="Half Star"
          width={width}
          height={height}
          className={responsiveWidthHeight}
        />
      );
    } else {
      stars.push(
        <Image
          key={i}
          src="/images/icon-images/emptyStarIcon.png"
          alt="Empty Star"
          width={width}
          height={height}
          className={responsiveWidthHeight}
        />
      );
    }
  }

  return <div className="flex items-center md:gap-[4px] gap-[2px]">{stars}</div>;
};

export default StarRating;
