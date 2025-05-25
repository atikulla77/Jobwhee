"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { HeartIcon } from "../../../../public/icons/HeartIcon copy";
import { LetterIcon } from "../../../../public/icons/LetterIcon";
import { SecuredButton } from "../../../../public/icons/SecuredButton";
import { SliderArrowBtn } from "../../../../public/icons/SliderArrowBtn";
import Link from "next/link";
import TalentProfileCard from "@/shared/widgets/TalentProfileCard/TalentProfileCard";

interface CardSliderProps {
  personsData: Array<{
    id: number;
    name: string;
    profession: string;
    totalEarning: string;
    totalJobs: number;
    totalHours: number;
    lastContractTogether: string;
    imgUrl: string;
  }>;
}

export const CardSlider: React.FC<CardSliderProps> = ({ personsData }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative max-w-[1230px] w-full sm:pl-[15px] lg:pl-0">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        breakpoints={{
          640: { spaceBetween: 30 },
          1536: { spaceBetween: 30 },
        }}
        centerInsufficientSlides={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        parallax={true}
        className="!overflow-visible lg:!overflow-hidden"
      >
        {personsData.map((item, i) => (
          <SwiperSlide
            key={i}
            className="!w-[285px] !flex-none my-[10px] cursor-pointer"
          >
            <TalentProfileCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden sm:flex justify-center mt-[40px] sm:mt-[10px] sm:pr-[16px] lg:pr-0 2xl:mt-[12px] 2xl:pr-0 gap-[16px]">
        <div
          className="cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <SliderArrowBtn />
        </div>
        <div
          className="rotate-[180deg] cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <SliderArrowBtn />
        </div>
      </div>
    </div>
  );
};
