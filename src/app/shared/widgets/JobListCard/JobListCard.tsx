"use client";
import Image from "next/image";
import { FullFileIcon } from "../../../../public/icons/FullFileIcon";
import { StarIcon } from "../../../../public/icons/talent-client/StarIcon";
import { LocationIcon } from "../../../../public/icons/LocationIcon";
import { ShieldIcon } from "../../../../public/icons/Shield";
import { GreenHeartIcon } from "../../../../public/icons/GreenHeartIcon";
import { NewStarIcon } from "../../../../public/icons/NewStar";
import { Tag } from "@/shared/ui-kit/Tags";

interface JobCardProps {
  title: string;
  description: string;
  budget: string;
  experienceLevel: string;
}

export const JobListCard = ({
  title,
  description,
  budget,
  experienceLevel,
}: JobCardProps) => {
  const truncateText = (text: string | any[]) => {
    if (text.length > 20) {
      return `${text.slice(0, 22)}...`; // Truncates text and adds ellipsis
    }
    return text; // Returns text as is if less than or equal to 20 characters
  };

  return (
    <div className="  relative">
      <div className=" flex   md:hidden text-[#18470D] text-[14px] md:text-[22px] 2xl:text-[24px] font-medium  items-center gap-[11px]">
        <FullFileIcon />
        <p>{title}</p>
      </div>
      <div className="  sm:hidden  mt-5  lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[440px] w-full  lg:text-[14px] text-[14px] 2xl:text-[18px] text-[#545454] flex justify-between">
        <p>{experienceLevel}</p>
        <p>Est. budget: {budget}</p>
      </div>

      <div className=" mt-[10px] md:mt-0 max-w-[1060px] px-3 md:px-[22px] pt-[9px] md:pt-6 2xl:pt-10 w-full min-h-[431px] sm:min-h-[300px] lg:min-h-[360px] xl:min-h-[330px] 2xl:h-[310px] bg-white border border-b-[#CBEC5E] border-b-[5px] border-[#EAEAEA] drop-shadow-lg rounded-[30px] relative sm:rounded-tr-none ">
        <div className=" hidden  absolute top-1 2xl:top-0 left-0 -translate-y-[48px] md:flex text-[#18470D] md:text-[22px] 2xl:text-[24px] font-medium  items-center gap-[11px]">
          <FullFileIcon />
          <p>{truncateText(title)}</p>
        </div>
        <Image
          src={"/images/all-images/cardTops.png"}
          width={543}
          height={47}
          alt=""
          className=" absolute top-0 right-0 hidden lg:block -translate-y-[49px] lg:-translate-y-[48px] translate-x-[1.5px] max-w-[360px] h-[49px] lg:max-w-[310px] xl:max-w-[390px] lg:h-[48px] 2xl:h-[48px] 2xl:max-w-[543px]"
          unoptimized
        />
        <Image
          src={"/cArdTopTablet.png"}
          width={543}
          height={47}
          alt=""
          className=" absolute top-0 right-0  hidden  sm:block lg:hidden -translate-y-[49px] lg:-translate-y-[48px] translate-x-[1.5px] max-w-[360px] h-[49px] lg:max-w-[310px] xl:max-w-[390px] lg:h-[48px] 2xl:h-[48px] 2xl:max-w-[543px]"
          unoptimized
        />

        <div className=" hidden  absolute top-0 right-[31px] -translate-y-[30px] max-w-[280px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[440px] w-full translate-x-[1.5px] lg:text-[14px] 2xl:text-[18px] text-[#545454] sm:flex justify-between">
          <p>{experienceLevel}</p>
          <p>Est. budget: {budget}</p>
        </div>

        <div className=" w-full items-center flex justify-between">
          <div className=" flex gap-1 items-center">
            <div className=" flex">
              <NewStarIcon />
              <NewStarIcon />
              <NewStarIcon />
              <NewStarIcon />
              <NewStarIcon />
            </div>
            <p className=" text-[18px] text-[#545454] font-medium">5.0</p>
          </div>
          <div className=" flex items-center gap-2">
            <LocationIcon />
            <p className=" text-[#545454] text-[18px]">Greece</p>
          </div>
        </div>
        <div className=" w-full justify-between items-center mt-[13px] flex">
          <div className=" flex gap-[5px] items-center text-[14px] md:text-[18px] ">
            <ShieldIcon />
            <p>Payment Verified</p>
          </div>

          <div className=" max-w-[114px] md:max-w-[140px] w-full h-10 bg-[#F0F1F4] rounded-[19px] text-[#18470D] text-[14px] md:text-[18px] flex items-center justify-center font-medium">
            $20K+ spent
          </div>
        </div>
        <p className=" text-[14px] md:text-[18px] mt-[13px] min-h-[85px]">
          {description}
        </p>

        <div className=" sm:flex w-full items-center justify-between mt-[16px]  sm:mt-[28px]">
          <div className=" flex items-center gap-3 text-[16px] text-[#545454]">
            <p>Posted 3 Hours ago</p>
            <GreenHeartIcon />
          </div>

          <Tag text={"Babysitting"} />
        </div>
      </div>
    </div>
  );
};
