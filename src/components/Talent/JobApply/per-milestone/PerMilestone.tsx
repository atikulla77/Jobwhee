"use client";

import CustomDatePicker from "@/components/Talent/component/CustomDatePicker";
import { useEffect, useState } from "react";
import { MiniCalendarIcon } from "../../../../../public/icons/MiniCalendarIcon";
import { TrashIcon } from "../../../../../public/icons/TrashIcon";

interface MilestonesProps {
  jobApplyData: {
    paymentMethod: string;
    milestones: {
      id: number;
      desc: string;
      dueDate: Date | null;
      amount: number | null;
    }[];
  };
  errors: {
    milestones: {
      id: number;
      desc: boolean;
      dueDate: boolean;
      amount: boolean;
    }[];
  };
  onChangeApplyData: (keyName: string, value: any) => void;
}

export const PerMilestone: React.FC<MilestonesProps> = ({
  jobApplyData,
  onChangeApplyData,
  errors,
}) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setSmallScreen(true);
    }
  }, []);

  const addMilestone = () => {
    onChangeApplyData("milestones", [
      ...jobApplyData.milestones,
      {
        id: jobApplyData.milestones.length + 1,
        desc: "",
        dueDate: null,
        amount: 0,
      },
    ]);
  };

  const changeMilestoneData = (key: string, id: number, newData: any) => {
    onChangeApplyData(
      "milestones",
      jobApplyData.milestones.map((milestone) => {
        if (milestone.id === id) {
          return {
            ...milestone,
            [key]: newData,
          };
        }
        return milestone;
      })
    );
  };

  const deleteMilestone = (id: number) => {
    onChangeApplyData(
      "milestones",
      jobApplyData.milestones.filter((milestone) => milestone.id !== id)
    );
  };

  return (
    <div>
      <div className="mt-[20px] sm:mt-[24px] lg:mt-[31px]">
        <p className="text-[16px] lg:text-[20px] font-medium">
          How many milestones would you like to set?
        </p>
        <div className="mt-[22px] sm:mt-[12px] lg:mt-[15px] flex flex-col gap-[18px]">
          {jobApplyData.milestones.map((item, i) => {
            const error =
              errors?.milestones?.find((err) => err?.id === item.id) || null;

            return (
              <div key={i} className="flex gap-[12px]">
                <span
                  className={`w-[12px] ${
                    i === 0 ? "mt-[44px]" : "mt-[44px] lg:mt-[9px]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex flex-col lg:flex-row w-full justify-between gap-[22px] lg:gap-[28px]">
                  <div className="flex w-full lg:max-w-[409px] 2xl:max-w-[637px] max-w-[414px]">
                    <div className="w-full">
                      {(i === 0 || smallScreen) && (
                        <span className="block mb-[8px] text-[#545454] text-[18px]">
                          Description
                        </span>
                      )}
                      <input
                        defaultValue={item.desc}
                        onChange={(e) =>
                          changeMilestoneData("desc", item.id, e.target.value)
                        }
                        className={`text-[#8B939F] text-[16px] font-medium border-[1px] rounded-[12px] h-[42px] p-[8px] w-full outline-none
                          ${
                            error?.desc
                              ? "border-[#DD331D]"
                              : "border-[#AEB3BC]"
                          }`}
                        type="text"
                        placeholder="Describe Milestone 1"
                      />
                      {error?.desc && (
                        <p className="mt-[8px] text-[#DD331D] text-[12px]">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:max-w-[314px] 2xl:max-w-[350px] max-w-[414px]">
                    {(i === 0 || smallScreen) && (
                      <span className="block mb-[8px] text-[#545454] text-[18px]">
                        Due Date
                      </span>
                    )}
                    <div
                      className={`border-[1px] rounded-[12px] h-[42px] p-[8px] flex items-center
                      ${
                        error?.dueDate ? "border-[#DD331D]" : "border-[#AEB3BC]"
                      }`}
                    >
                      <CustomDatePicker
                        milestoneId={item.id}
                        milestoneDate={item.dueDate}
                        changeMilestoneData={changeMilestoneData}
                      />
                      <MiniCalendarIcon />
                    </div>
                    {error?.dueDate && (
                      <p className="mt-[8px] text-[#DD331D] text-[12px]">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:max-w-[314px] 2xl:max-w-[350px] max-w-[414px]">
                    {(i === 0 || smallScreen) && (
                      <span className="block mb-[8px] text-[#545454] text-[18px]">
                        Amount
                      </span>
                    )}
                    <div>
                      <div className="flex gap-[5px]">
                        <input
                          value={item.amount || ""}
                          onChange={(e) =>
                            changeMilestoneData(
                              "amount",
                              item.id,
                              +e.target.value
                            )
                          }
                          className={`text-[#8B939F] text-[16px] font-medium border-[1px] rounded-[12px] h-[42px] p-[8px] w-full outline-none
                            ${
                              error?.amount
                                ? "border-[#DD331D]"
                                : "border-[#AEB3BC]"
                            }`}
                          type="text"
                          placeholder="€ 0.0"
                        />
                        {i > 0 && (
                          <div
                            onClick={() => deleteMilestone(item.id)}
                            className="min-w-[42px] h-[42px] rounded-full border-[1px] border-[#CBEC5E] flex justify-center items-center cursor-pointer"
                          >
                            <TrashIcon />
                          </div>
                        )}
                      </div>
                      {error?.amount && (
                        <p className="mt-[8px] text-[#DD331D] text-[12px]">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-[8px]">
          <span
            onClick={addMilestone}
            className="text-[#18470D] text-[14px] sm:text-[16px] ml-[20px] select-none cursor-pointer"
          >
            +Add Milestone
          </span>
        </div>
        <div className="border-t-[1px] mt-[43px] border-[#AEB3BC] text-[20px] text-center flex justify-between pt-[15px] pb-[24px] sm:pb-[28px] gap-[31px] flex-col sm:flex-row">
          <div>
            <p>Total cost</p>
            <p className="text-[#FF0000]">€0.0</p>
          </div>
          <div>
            <p>Talent Service Charge</p>
            <p className="">€0.0</p>
          </div>
          <div>
            <p>Your Earnings</p>
            <p className="">€0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
