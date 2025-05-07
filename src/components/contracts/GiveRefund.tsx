"use client";
import Button from "@/shared/ui-kit/Button";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { useState } from "react";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";

const GiveRefund = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="w-full mb-[2rem]">
      <div className="mt-8 xl:mb-[30px] mb-[10px] md:max-w-full mx-auto flex items-center xl:pl-[30px] md:pl-[19px] pl-[12px] border-1 border-[#CBEC5E] rounded-2xl 2xl:h-[121px] xl:h-[116px] md:h-[82px] h-[54px] text-black">
        <h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
          Give a refund
        </h1>
      </div>
      {/* Details Section */}
      <div className="2xl:h-[483px] xl:h-[451px] md:h-[738px] h-[712px] xl:rounded-[16px] md:rounded-[14px] rounded-[16px] border border-[#CBEC5E] 2xl:p-[28px] xl:p-[27px] md:p-[20px] p-[12px]">
        <h2 className="text-[16px] text-[#8A8A8A] font-[500] mb-[4px]">
          Details
        </h2>
        <div className="w-full h-[1px] bg-[#aeb3bc] relative xl:mb-[19px] md:mb-[28px] mb-[12px]">
          <div className="w-[72px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex xl:flex-row flex-col xl:justify-between justify-start xl:gap-0 md:gap-[20px] gap-[17px] 2xl:mb-[34px] xl:mb-[28px] md:mb-[20px] mb-[22px]">
            <div className="">
              <h2 className="md:text-[30px] text-[20px] font-medium text-black">Contract</h2>
              <p className="md:text-[16px] text-[14px] font-medium text-[#545454] md:mt-[12px] mt-[10px]">
                Weekly House Cleaning Service for a 3-Bedroom Apartment
              </p>
            </div>
            <div className="2xl:w-[611px] md:w-[497px] w-full">
              <label className="block md:text-[30px] text-[20px] font-medium text-black md:mb-[24px] mb-[20px]">
                Invoice(s)
              </label>
              <div className="w-full px-2 md:py-2 py-[10px] flex items-center justify-between border border-[#AEB3BC] rounded-[12px] text-[#8B939F] focus:outline-none">
                <p className="md:text-[16px] text-[14px]">Select Invoice(s)</p>
                <DropDownArrowIcon />
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#AEB3BC]"></div>
          <div className="flex xl:flex-row flex-col xl:gap-0 md:gap-[48px] gap-[24px] xl:justify-between justify-start xl:mt-[22px] md:mt-[20px] mt-[22px]">
            <div className="md:w-[411px] w-full 2xl:mt-0 xl:mt-[14px] mt-0">
              <div className="flex items-center justify-between">
                <p className="text-[16px] text-black font-medium">
                  Refund Amount:
                </p>
                <p className="text-[#545454]">€ 0.00</p>
              </div>
              <div className="flex items-center justify-between 2xl:mt-[23px] mt-[20px]">
                <p className="text-[16px] text-black font-medium">
                  Current Balance:
                </p>
                <p className="text-[#545454]">€ 0.00</p>
              </div>
              <div className="flex justify-between 2xl:mt-[23px] mt-[20px] md:pb-0 pb-[12px]">
                <p className="text-[16px] text-black font-medium md:pl-[5px] pl-0">
                  Your Balance Will<br className="md:hidden block"/> Be Debited:
                </p>
                <p className="text-[#545454]">€ 0.00</p>
              </div>

              <i className="md:text-[16px] text-[14px] text-black md:ml-[-2px] ml-0">
                (Includes credit for Jobwhee service
                <br /> charge)
              </i>
            </div>
            <div className="2xl:w-[611px] xl:w-[497px] w-full 2xl:mt-0 xl:mt-[4px] mt-0">
              <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
                Note for the client
              </p>
              <TextArea
                onChange={(a) => setfirst(a)}
                placeholder="Let the client know why you are issuing this refund."
                width={"100%"}
                height={"146px"}
                responsiveWidthHeight="w-[100%] h-[146px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full 2xl:mt-[72px] xl:mt-[70px] md:mt-[60px] mt-[42px] flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px]">
        <div className="md:w-[200px] w-[100%] xl:h-[48px] md:h-[44px] h-[40px]">
          <Button action={"Cancel"} type={"nonBorder"} />
        </div>
        <div className="md:w-[200px] w-[100%] xl:h-[48px] md:h-[44px] h-[40px]">
          <Button action={"Give Refund"} type="active" />
        </div>
      </div>
    </div>
  );
};

export default GiveRefund;
