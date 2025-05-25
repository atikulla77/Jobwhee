"use client";
import Image from "next/image";
import Link from "next/link";
import { EmptyCard2XL } from "../../../../public/icons/EmptyCard2XL";
import { EmptyCardLG } from "../../../../public/icons/EmptyCardLG";
import { EmptyCardMobile } from "../../../../public/icons/EmptyCardMobile";
import { EmptyCardSM } from "../../../../public/icons/EmptyCardSM";
import React from "react";

interface EmptyJobFieldProps {
  setCurrentPage?: (value: string) => void;
}

export const EmptyJobField: React.FC<EmptyJobFieldProps> = (
  {
    // setCurrentPage,
  }
) => {
  return (
    <div className="  relative w-full z-20 min-w-[335px]">
      <div className=" w-full 2xl:pt-[45px]  sm:h-[310px] lg:h-[340px] 2xl:h-[400px] h-[305px]  border-[#EAEAEA] rounded-[30px] relative rounded-tr-none ">
        <div className="pb-[35px] 2xl:pb-[40px] sm:mb-[20px] lg:mb-0 h-[100%] flex flex-col justify-center items-center">
          <Image
            src={"/images/all-images/briefcase.png"}
            alt="briefcase"
            width={204}
            height={153}
            className="2xl:w-[204px] 2xl:h-[153px] lg:w-[174px] lg:h-[130px] w-[118px] h-[88px]"
          />
          <span className="mt-[20px] sm:mt-[10px] lg:mt-0 sm:text-[20px] lg:text-[30px] text-black font-medium">
            No job posted yet
          </span>
          <Link href="/client/create-job">
            <button
              // onClick={() => setCurrentPage("create-job")}
              className="mt-[30px] sm:mt-[22px] lg:mt-[28px] w-[160px] h-[40px] sm:w-[200px] sm:h-[48px] text-[#18470D] text-[16px] border border-[#545454] rounded-[50px] cursor-pointer font-medium"
            >
              + Post a Job
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1428px] absolute -top-[75px] left-0 z-[-1] hidden 2xl:block sm:scale-x-[1.065] lg:scale-x-[1.035]">
        <EmptyCard2XL />
      </div>
      <div className="w-full max-w-[1250px] h-[435px] absolute -top-[70px] left-0 z-[-1] hidden lg:block 2xl:hidden sm:scale-x-[1.065] lg:scale-x-[1.035]">
        <EmptyCardLG />
      </div>
      <div className="w-full h-[390px] absolute -top-[45px] left-0 z-[-1] hidden sm:block lg:hidden sm:scale-x-[1.065] lg:scale-x-[1.035]">
        <EmptyCardSM />
      </div>
      <div className="w-full h-[363px] absolute -top-[45px] left-0 z-[-1] block sm:hidden scale-x-[1.11] sm:scale-x-[1.065] lg:scale-x-[1.035]">
        <EmptyCardMobile />
      </div>
    </div>
  );
};
