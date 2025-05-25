import { Link } from "@/i18n/routing";
import React from "react";

const TalentSettings = () => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-[40px] sm:gap-[30px] lg:gap-[60px] mt-[100px] sm:mt-[186px] mx-[20px] md:mx-[40px] xl:mx-[120px] 2xl:mx-[135px]`}
    >
      <aside
        className={`w-[337px] md:w-[328px] xl:w-[387px] 2xl:w-[411px] h-[260px] md:h-[287px] xl:h-[389px] 2xl:h-[435px] border-b md:border-b-0  md:border-r  border-[#B9B9B9]`}
      >
        <div
          className={`w-full h-[260px] md:w-[278px] md:h-[287px] xl:w-[337px] xl:h-[333px] `}
        >
          <h2
            className={`mb-[10px] md:mb-[30px] lg:mb-[32px] font-medium text-[22px] sm:text-[40px] leading-[60px]`}
          >
            Settings
          </h2>
          <ul
            className={`flex flex-col gap-[22px] md:gap-[19px] lg:gap-[36px] ml-[40px]`}
          >
            <li
              className={`font-semibold text-[16px] hover:scale-105 duration-300 cursor-pointer md:text-[18px] text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
            >
              Account
            </li>
            <li
              className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
            >
              Security
            </li>
            <li
              className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
            >
              Notifications
            </li>
            <Link href={"/freelancer/verification"}>
              <li
                className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
              >
                Verification
              </li>
            </Link>
          </ul>
        </div>
      </aside>
      <main
        className={` px-[20px] xl:px-[30px] w-[337px] md:w-[362px] xl:w-[695px] 2xl:w-[870px] h-[216px] md:h-[225px] xl:h-[268px] 2xl:h-[273px] border  border-[#B9B9B9] rounded-[20px]`}
      >
        <h2
          className={`mt-[26px] sm:mt-[30px] xl:mt-[42px] mb-[12px]  xl:mb-[32px] font-medium text-[16px] md:text-[20px] xl:text-[26px] 2xl:text-[30px] leading-[24px] md:leading-[30px]  xl:leading-[39px] 2xl:leading-[45px]`}
        >
          Identify Verification
        </h2>
        <p className={` flex items-start gap-2`}>
          <p className=" flex items-center font-normal text-[14px] md:text-[16px]  2xl:text-[18px] 2xl:leading-[27px]">
            Fill out your personal and business information to verify your
            identity.
          </p>

          <Link href={""} className={"  "}>
            <p
              className={`text-[14px] xl:text-[16px] text-[#18470D] 2xl:mr-[75px] font-medium  text-nowrap underline decoration-[#18470D] decoration-2 `}
            >
              Learn more
            </p>
          </Link>
        </p>
        <Link href={"/freelancer/verification"}>
          <button
            className={`mt-[24px] text-[#18470D] border-[#18470D] sm:mt-[16px] font-medium hover:bg-[#b7d456] duration-300 lg:mt-[35px] w-[90px] h-[32px] sm:w-[100px] sm:h-[36px] xl:w-[198px] 2xl:w-[208px] xl:h-[48px] rounded-[49px] border sm:border-[#CCCCCC]`}
          >
            Verify
          </button>
        </Link>
      </main>
    </div>
  );
};
export default TalentSettings;
