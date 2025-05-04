"use client";
import StarRating from "@/shared/ui-kit/StarRating";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { TextArea } from "@/shared/ui-kit/TextArea";
import Button from "@/shared/ui-kit/Button";
import { useState } from "react";
import Dropdown from "@/shared/ui-kit/Dropdown";
import { GlobalModal } from "@/shared/widgets/GlobalModal/GlobalModal";
import Image from "next/image";

const EndContractExperience = () => {
  const [showContractSuccessfullyCompleted, setShowContractSuccessfullyCompleted] = useState(false);
  const handleButton = (action: string) => {
    alert(action);
  };

  const dropDownListData = [
    { id: 1, title: "The job has been completed successfully", checked: false },
    { id: 2, title: "The talent wasn’t the right fit", checked: false },
    {
      id: 3,
      title: "The talent didn’t meet the expected quality or timelines",
      checked: false,
    },
    {
      id: 4,
      title: "We changed direction or paused the project",
      checked: false,
    },
    { id: 5, title: "We had communication issues", checked: false },
    { id: 6, title: "Budget issues — we had to stop", checked: false },
    {
      id: 7,
      title: "We found someone better suited for the job",
      checked: false,
    },
    { id: 8, title: "The talent stopped responding", checked: false },
  ];
  const [dropDownData, setDropDrownData] = useState(dropDownListData);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <div className="xl:w-fit w-full">
        <h1 className="md:text-[30px] text-[20px] text-[#18470D] font-[500] md:pb-[16px] pb-[12px]">
          End Contract
        </h1>
        <p className="md:w-[663px] w-full md:text-[16px] text-[14px] xl:pb-[38px] md:pb-[44px] pb-[24px]">
          Your feedback for Maria T. will be visible after they submit theirs or
          when the 14-day feedback period ends. Your input helps others make
          better choices.
        </p>
        <div className="xl:w-[620px] w-[100%] xl:mb-[45px] md:mb-[20px] mb-[25px]">
          <Dropdown
            list={dropDownData}
            setDropDownData={setDropDrownData}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            label="Why do you want to end the contract?"
            placeholder="Select the reason"
            type="select"
          />
        </div>

        <div className="flex flex-col md:gap-[23px] gap-[28px] md:mb-[26px] mb-[32px]">
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Skills
            </h3>
          </div>
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Communication
            </h3>
          </div>
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Availability
            </h3>
          </div>
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Quality of Work
            </h3>
          </div>
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Timeliness
            </h3>
          </div>
          <div className="w-full flex items-center gap-[10px]">
            <StarRating
              rating={0}
              width={23}
              height={23}
              responsiveWidthHeight="md:w-[23px] !w-[25px]"
            />
            <h3 className="md:text-[20px] text-[14px] text-[#545454]">
              Cooperation
            </h3>
          </div>
        </div>
        <h1 className="text-[20px] mb-[24px]">Total score: 0.0</h1>
        <div className="space-y-[8px] xl:mb-[27px] md:mb-[46px] mb-[54px]">
          <p className="text-[18px] text-[#545454]">Feedback</p>

          <TextArea
            placeholder="Give a feedback"
            width={"620px"}
            height={"146px"}
            responsiveWidthHeight="xl:!w-[620px] !w-[100%] !h-[146px]"
          />
        </div>
        <div className="xl:w-[620px] w-full flex md:flex-row flex-col-reverse md:justify-end justify-center md:gap-[8px] gap-[12px]">
          <div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
            <Button
              onClick={() => console.log("Cancel Button Clicked")}
              type="nonBorder"
              action="Cancel"
            />
          </div>
          <div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
            <Button
              onClick={() => setShowContractSuccessfullyCompleted(true)}
              type="active"
              action="End Contract"
            />
          </div>
        </div>
      </div>
      {showContractSuccessfullyCompleted && (
        <GlobalModal
          isOpen={showContractSuccessfullyCompleted}
          onClose={() => setShowContractSuccessfullyCompleted(false)}
          width="xl:w-[860px] md:w-[556px] w-[335px]"
          height="xl:h-[558px] md:h-[517px] h-[462px]"
        >
          <>
            <div className="w-full flex justify-center xl:mt-[8px] md:mt-[21px] mt-[27px] xl:mb-[29px] md:mb-[70px] mb-[18px]">
              <Image
                src={"/images/contractSuccessfullyCompleted.png"}
                width={257}
                height={227}
                alt=""
                className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
              />
            </div>
            <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px] text-center">
              Your contract has been successfully completed
            </h1>
            <p className="xl:text-[20px] text-[14px] text-[#545454] text-center">
			Review the contract and share your feedback now.
            </p>
            <div className="absolute xl:bottom-[35px] md:bottom-[57px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button
                  onClick={() => setShowContractSuccessfullyCompleted(false)}
                  type={"nonBorder"}
                  action={"Cancel"}
                />
              </div>
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button type={"active"} action={"End contract"} />
              </div>
            </div>
          </>
        </GlobalModal>
      )}
    </>
  );
};

export default EndContractExperience;
