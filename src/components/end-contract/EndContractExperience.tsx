"use client";
import StarRating from "@/shared/ui-kit/StarRating";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { TextArea } from "@/shared/ui-kit/TextArea";
import Button from "@/shared/ui-kit/Button";
import { useState } from "react";

const EndContractExperience = () => {
  const handleButton = (action: string) => {
    alert(action);
  };

  const [dropDownList, setDropDownList] = useState(false);
  const dropDownListData = [
    { id: 1, title: "The job has been completed successfully" },
    { id: 2, title: "The talent wasn’t the right fit" },
    {
      id: 3,
      title: "The talent didn’t meet the expected quality or timelines",
    },
    { id: 4, title: "We changed direction or paused the project" },
    { id: 5, title: "We had communication issues" },
    { id: 6, title: "Budget issues — we had to stop" },
    { id: 7, title: "We found someone better suited for the job" },
    { id: 8, title: "The talent stopped responding" },
  ];

  return (
    <div className="xl:w-fit w-full">
      <h1 className="md:text-[30px] text-[20px] text-[#18470D] font-[500] md:pb-[16px] pb-[12px]">
        End Contract
      </h1>
      <p className="md:w-[663px] w-full md:text-[16px] text-[14px] xl:pb-[38px] md:pb-[44px] pb-[24px]">
        Your feedback for Maria T. will be visible after they submit theirs or
        when the 14-day feedback period ends. Your input helps others make
        better choices.
      </p>
      <h1 className="md:text-[18px] text-[14px] text-[#545454] pb-[8px]">
        Why do you want to end the contract?
      </h1>

      <div
        className={`xl:w-[611px] w-full h-[42px] flex justify-between items-center border-[1px] ${
          dropDownList
            ? "border-[#18470D] shadow-[0px_0px_2px_0px_#18470D]"
            : "border-[#AEB3BC]"
        } rounded-[12px] px-[7px] xl:mb-[45px] md:mb-[20px] mb-[25px] cursor-pointer relative`}
        onClick={() => setDropDownList(!dropDownList)}
      >
        <p className="md:text-[16px] text-[14px] text-[#8B939F]">Select the reason</p>
        <DropDownArrowIcon />
        {/* Drop Down List */}
        <div
          className={`${
            dropDownList ? "" : "hidden"
          } w-full p-[8px] rounded-[12px] bg-white shadow-[0px_0px_5px_0px_#00000029] cursor-default absolute top-[53px] left-0`}
        >
          {dropDownListData.map((key) => {
            return (
              <div className="w-full" key={key.id}>
                <p className="w-full text-[#565E69] px-[8px] py-[2px] rounded-[8px] hover:bg-[#F5FFD3] transition-all duration-300 cursor-pointer">
                  {key.title}
                </p>
                <div
                  className={`${
                    key.id === dropDownListData.length ? "hidden" : ""
                  } w-full h-[1px] bg-[#EAEAEA] my-[10px]`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:gap-[23px] gap-[28px] md:mb-[26px] mb-[32px]">
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Skills</h3>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Communication</h3>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Availability</h3>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Quality of Work</h3>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Timeliness</h3>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <StarRating rating={0} width={23} height={23} responsiveWidthHeight="md:w-[23px] !w-[25px]" />
          <h3 className="md:text-[20px] text-[14px] text-[#545454]">Cooperation</h3>
        </div>
      </div>
      <h1 className="text-[20px] mb-[24px]">Total score: 0.0</h1>
      <div className="space-y-[8px] xl:mb-[27px] md:mb-[46px] mb-[54px]">
        <p className="text-[18px] text-[#545454]">Feedback</p>

        <TextArea
          placeholder="Give a feedback"
          width={"620px"}
          height={"146px"}
          responsiveWidthHeight="xl:w-[620px] !w-[100%] h-[146px]"
        />
      </div>
      <div className="xl:w-[620px] w-full flex md:flex-row flex-col-reverse md:justify-end justify-center md:gap-[8px] gap-[12px]">
        <div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
          <button
            className={`w-full h-full flex items-center justify-center xl:px-[41px] px-[25px] text-[16px] rounded-full font-medium transition-all duration-300 border-none border-[#CCCCCC] text-[#18470D] cursor-pointer`}
          >
            Cancel
          </button>
        </div>
        <div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
          <button
            className={`w-full h-full flex items-center justify-center xl:px-[41px] px-[25px] text-[16px] rounded-full font-medium transition-all duration-300 border bg-[#CBEC5E] border-[#CCCCCC] text-[#18470D] cursor-pointer`}
          >
            End contract
          </button>
          {/* <Button handleButton={handleButton} action={"Cancel"} type={"transparent"}/> */}
        </div>
      </div>
    </div>
  );
};

export default EndContractExperience;
