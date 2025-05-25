"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EmptyCardGreen2XL } from "../../../../public/icons/EmptyCardGreen2XL";
import { EmptyCardGreenMobile } from "../../../../public/icons/EmptyCardGreenMobile";
import { EmptyCardGreenSM } from "../../../../public/icons/EmptyCardGreenSM";
import { SliderArrowBtn } from "../../../../public/icons/SliderArrowBtn";
import JobCard from "@/shared/widgets/JobCard/JobCard";
import { ClientJobsResult } from "@/lib/api/clientJobsApi/clientJobsApi";

interface CardSliderProps {
  jobsData: ClientJobsResult[];
  deleteJob: (modalOpen: boolean, id: number) => void;
}

export const JobFieldCards: React.FC<CardSliderProps> = ({
  jobsData,
  deleteJob
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [cardsType, setCardsType] = useState('');
  return (
    <div>
      <div>
        <div className="border border-[#CBEC5E] rounded-full w-[335px] sm:w-[420px] h-[50px] sm:h-[48px] lg:h-[56px] relative">
         <div
            className={`duration-[0.3s] h-[44px] sm:h-[42px] lg:h-[50px]  bg-[#CBEC5E] rounded-full absolute top-[2px] ${
              cardsType === 'archive'
                ? ' left-[2px] w-[105px] lg:w-[155px] sm:w-[130px] '
                : cardsType === 'new'
                  ? 'w-[124px] left-[105px] sm:left-[135px] sm:w-[154px] lg:left-[140px] '
                  : cardsType === 'draft'
                    ? 'left-[222px] sm:left-[260px] lg:left-[271px] w-[109px] sm:w-[137px] lg:w-[145px] '
                    : ''
            }`}
          ></div>
          <div className="select-none w-full flex text-[#18470D] text-[18px] lg:text-[20px] font-medium z-10 items-center h-full px-[20px] sm:px-[45px] sm:pl-[35px] lg:px-[45px] absolute left-0 top-0">
            <div
              className="cursor-pointer"
              onClick={() =>
                setCardsType(cardsType === 'archive' ? '' : 'archive')
              }
            >
              Archive
            </div>
            <div
              className="cursor-pointer absolute left-[145px] sm:left-[195px]"
              onClick={() => setCardsType(cardsType === 'new' ? '' : 'new')}
            >
              New
            </div>
            <div
              className="cursor-pointer absolute right-[30px] sm:right-[42px] lg:right-[48px]"
              onClick={() => setCardsType(cardsType === 'draft' ? '' : 'draft')}
            >
              Draft
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[60px] sm:gap-[40px] lg:gap-[30px] 2xl:mt-[109px] mt-[24px] lg:mt-[45px] max-w-full">
        <Link href="/client/create-job" className="h-fit " >
          <div className="flex justify-end">
            <div
              className="lg:w-[433px] lg:h-[380px] cursor-pointer w-full h-[60px] sm:h-[124px] relative"
            >
              <div className="hidden lg:block h-full">
                <EmptyCardGreen2XL />
              </div>
              <div className="hidden sm:block lg:hidden sm:h-[124px]">
                <EmptyCardGreenSM />
              </div>
              <div className="h-[60px] sm:hidden">
                <EmptyCardGreenMobile />
              </div>
              <div>
                <span className="w-full text-center absolute top-[26px] sm:top-[53px] lg:top-[174px] text-[#18470D] text-[14px] sm:text-[22px] font-medium ">
                  + Post a Job
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-full max-w-full lg:overflow-x-hidden overflow-x-visible">
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
              1024: { spaceBetween: 30 },
            }}
            centerInsufficientSlides={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            parallax={true}
            className="!overflow-visible  max-w-full sm:min-h-[375px]"
          >
            {jobsData
              ?.filter((job) =>
                cardsType === 'new'
                  ? job.status === 'Active' && !job.isDraft
                  : cardsType === 'draft'
                    ? job.isDraft
                    : cardsType === 'archive'
                      ? job.status !== 'Active'
                      : true
              )
              .map((job, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[252px] sm:!w-[380px] lg:!w-[433px] !flex-none"
                  style={{ zIndex: jobsData.length - i }}
                >
                  <JobCard job={job} deleteJob={deleteJob}/>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="justify-center lg:justify-start hidden sm:flex sm:mt-[40px] lg:mt-[35px] gap-[16px] lg:pl-[87px] 2xl:pl-[128px]">
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
      </div>
    </div>
  );
};
