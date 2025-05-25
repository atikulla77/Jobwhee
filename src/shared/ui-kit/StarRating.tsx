"use client";
import Image from "next/image";
import { FC } from "react";

interface RatingProps {
  rating: number;
}

const StarRating: FC<RatingProps> = ({ rating }) => {
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
          width={14}
          height={14}
        />,
      );
    } else if (roundedRating >= i - 0.5) {
      stars.push(
        <Image
          key={i}
          src="/images/icon-images/halfStarIcon.png"
          alt="Half Star"
          width={14}
          height={14}
        />,
      );
    } else {
      stars.push(
        <Image
          key={i}
          src="/images/icon-images/emptyStarIcon.png"
          alt="Empty Star"
          width={14}
          height={14}
        />,
      );
    }
  }

  return <div className="flex items-center justify-center gap-1">{stars}</div>;
};

export default StarRating;
