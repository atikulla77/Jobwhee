"use client";
import Image from "next/image";
import { FC } from "react";
import React from "react";

interface RatingProps {
	rating: number;
	width: number;
	height: number;
	responsiveWidthHeight?: string;
	onChange?: (rating: number) => void; // <-- Optional handler
	gap?: string;
}

const StarRating: FC<RatingProps> = ({
	rating,
	width,
	height,
	responsiveWidthHeight = "",
	onChange,
	gap = "md:gap-[4px] gap-[2px]",
}) => {
	const totalStars = 5;

	const handleClick = (index: number) => {
		if (onChange) {
			onChange(index);
		}
	};

	const renderStar = (i: number) => {
		let src = "/images/icon-images/emptyStarIcon.png";
		if (rating >= i) {
			src = "/images/icon-images/starIcon.png";
		} else if (rating >= i - 0.5) {
			src = "/images/icon-images/halfStarIcon.png";
		}

		return (
			<Image
				key={i}
				src={src}
				alt={`Star ${i}`}
				width={width}
				height={height}
				onClick={() => handleClick(i)}
				className={`cursor-pointer ${responsiveWidthHeight}`}
			/>
		);
	};

	return (
		<div className={`flex items-center ${gap}`}>
			{Array.from({ length: totalStars }, (_, i) => renderStar(i + 1))}
		</div>
	);
};

export default StarRating;
