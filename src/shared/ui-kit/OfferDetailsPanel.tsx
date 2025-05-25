"use client";
import React, { useEffect } from "react";
import { Xicon } from "../../../public/icons/Xicon";
import Button from "./Button";
import { LocationIcon } from "../../../public/icons/LocationIcon";
import { TimeIcon } from "../../../public/icons/TimeIcon";
import { TopTalentIcon } from "../../../public/icons/TopTalentIcon";
import { VerifyTalentIcon } from "../../../public/icons/VerifyTalentIcon";
import Image from "next/image";
import { ThreeDotIcon } from "../../../public/icons/ThreeDotIcon";
import { useRouter } from "next/navigation";

const OfferDetailsPanel = ({
  user,
  isOpenOfferPanel,
  setIsOpenOfferPanel,
}: any) => {
  const router = useRouter();
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpenOfferPanel();
    };

    if (isOpenOfferPanel) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpenOfferPanel, setIsOpenOfferPanel]);

  const handleClick = (action: string) => {
    if (action === "Hire") {
      router.push("/client/job-offer");
    }
    if (action === "Message") {
      router.push("/local/messenger");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#0000006B] w-full h-full flex justify-end items-center ${
          isOpenOfferPanel ? "block" : "hidden"
        } z-40`}
      >
        <div
          className={`
            fixed bg-white shadow-lg transition-transform duration-300 ease-in-out transform
             2xl:h-[964px] lg:h-[803px]
            w-[375px] sm:w-[820px] lg:w-[1250px] 2xl:w-[1533px] 
            top-[72px] sm:top-0 lg:top-[217px] xl:top-[116px] 3xl:top-auto
            left-0 sm:left-[40px] lg:left-[190px] 2xl:left-[389px] 3xl:left-auto
            right-0 
            bottom-0
            rounded-tl-[24px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] xl:rounded-tl-[40px]
            pl-[20px] sm:pl-[30px] lg:pl-[44px]
            pt-[50px] lg:pt-[64px]
            pr-[20px] sm:pr-[30px] lg:pr-[122px]
          `}
          style={{
            transform: isOpenOfferPanel ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div>
            <button
              className="absolute lg:top-[24px] top-[10px] lg:left-[34px] text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpenOfferPanel(false)}
            >
              <Xicon />
            </button>
          </div>

          {/* Profile Section */}
          <div className="2xl:w-[1367px]  xl:w-[1153px] lg:h-[227px] md:h-[359px] h-[278px] flex flex-col xl:flex-row items-start justify-between border border-[#CBEC5E] rounded-[16px] p-4 xl:p-[23px] xl:mb-6 mb-[10px]">
            <div className=" w-full h-full flex   gap-4 xl:gap-[27px]">
              <div className="relative h-[85px] sm:w-[165px] sm:h-[165px] ">
                <div className="w-[85px] h-[85px] sm:w-[165px] sm:h-[165px] rounded-full ">
                  <Image
                    src={user?.avatarUrl}
                    alt={user?.userName || "User Avatar"}
                    fill
                    className="rounded-full w-full    border-4 border-[#CBEC5E]"
                  />
                </div>
                <div className="absolute right-[20px] sm:bottom-[10px] bottom-0 border-2 border-white bg-[#0EA200] w-[20px] h-[20px] rounded-full"></div>
              </div>
              <div className="sm:space-y-[14px] space-y-[4px]">
                <h2 className="text-[24px] xl:text-[30px] font-semibold flex items-center">
                  {/* {user?.userName} */} Maria T.
                  <span className="text-green-500">
                    <VerifyTalentIcon />
                  </span>
                </h2>
                <div className="text-[20px] font-medium  text-gray-600 mt-2 flex flex-wrap items-center gap-2">
                  <p className="flex gap-[9px] items-center">
                    <LocationIcon />
                    <span>Athens, Greece</span>
                  </p>
                  <p className="flex gap-[9px] items-center">
                    <TimeIcon />
                    <span>12:10 PM UTC +1</span>
                  </p>
                </div>
                <p className="">
                  <a
                    href=""
                    className="text-[#18470D] text-[16px] font-medium border-b-[1px] border-[#18470D]  mt-2"
                  >
                    View Profile
                  </a>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <TopTalentIcon />
                  <span className="text-[18px] font-[400] xl:text-[18px] text-black">
                    Top Talent
                  </span>
                </div>
              </div>
            </div>
            <div className=" xl:pb-0 sm:pb-[70px] flex items-center justify-center md:gap-[20px] gap-[4px]">
              <div
                className={`bg-white xl:w-[48px] w-[40px] xl:h-[48px] h-[40px]  border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
              >
                <div className="xl:w-[24px]  w-[20px] xl:h-[24px] h-[20px]">
                  <ThreeDotIcon />
                </div>
              </div>
              <div className="w-[120px] xl:w-[192px] h-[40px] xl:h-[48px]">
                <Button
                  onClick={() => handleClick("Message")}
                  action="Message"
                  type="transparent"
                />
              </div>
              <div className="w-[120px] xl:w-[173px] h-[40px] xl:h-[48px]">
                <Button
                  onClick={() => handleClick("Hire")}
                  action="Hire"
                  type="active"
                />
              </div>
            </div>
          </div>

          {/* Terms and Cover Letter Sections */}
          <div className="2xl:w-[1367px]  xl:w-[1153px] 2xl:h-[614px] xl:h-[484px] flex flex-col xl:flex-row xl:gap-[22px] gap-[10px]  ">
            <div className="2xl:w-[396px] xl:w-[386px] border border-[#CBEC5E] rounded-[16px] p-4 xl:pt-[28px] xl:pl-[26px]">
              <div className="pb-4">
                <h2 className="text-[16px] text-[#8A8A8A] font-medium mb-1">
                  Terms
                </h2>
                <div className="w-full h-[1px] bg-[#aeb3bc] relative">
                  <div className="w-[77px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute top-[-2.5px] left-0"></div>
                </div>
              </div>
              <h3 className="text-[30px] font-semibold pb-[21px]">Terms</h3>
              <ul className="text-[16px] text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">
                    1. Algebra Fundamentals & Problem Solving
                  </span>
                  <br />
                  Due: March 15, 2025
                  <br />
                  Amount: €100
                </li>
                <li>
                  <span className="font-medium">
                    2. Advanced Calculus Concepts
                  </span>
                  <br />
                  Due: April 10, 2025
                  <br />
                  Amount: €150
                </li>
                <li>
                  <span className="font-medium">
                    3. Final Review & Exam Preparation
                  </span>
                  <br />
                  Due: April 10, 2025
                  <br />
                  Amount: €150
                </li>
              </ul>
            </div>
            <div className="2xl:w-[949px] xl:w-[748px] border border-[#CBEC5E] rounded-[16px] p-4 xl:pt-[28px] xl:pl-[28px]">
              <div className="pb-4">
                <h2 className="text-[16px]  text-[#8A8A8A] font-medium mb-1">
                  Details
                </h2>
                <div className="w-full h-[1px] bg-[#aeb3bc] relative">
                  <div className="w-[77px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute top-[-2.5px] left-0"></div>
                </div>
              </div>
              <h3 className="text-[30px] font-semibold pb-[17px]">
                Cover Letter
              </h3>
              <p className="text-s[16px] text-gray-600 leading-relaxed">
                Hello,
                <br />
                {user?.coverLetter}
                <br />
                <br />
                Best regards,
                <br />
                Maria T.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferDetailsPanel;
