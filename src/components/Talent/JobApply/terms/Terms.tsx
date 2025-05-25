"use client";

import { PerMilestone } from "../per-milestone/PerMilestone";
import { Completion } from "../completion/Completion";

interface TermsProps {
  jobApplyData: {
    paymentMethod: string;
    milestones: {
      id: number;
      desc: string;
      dueDate: Date | null;
      amount: number | null;
    }[];
    additionalInfo: string;
    bid: number | null;
  };
  errors: {
    milestones: {
      id: number;
      desc: boolean;
      dueDate: boolean;
      amount: boolean;
    }[];
    bid: boolean;
  };
  onChangeApplyData: (keyName: string, value: any) => void;
}

export const Terms: React.FC<TermsProps> = ({
  jobApplyData,
  onChangeApplyData,
  errors,
}) => {
  return (
    <div>
      <div>
        <span className="text-[16px] sm:text-[20px] lg:text-[30px] font-medium">
          Terms
        </span>
      </div>
      <p className="text-[16px] lg:text-[20px] font-medium mt-[13px] sm:mt-[10px]">
        How do you want to be paid?
      </p>
      <div>
        <div className="flex gap-[8px] mt-[30px] sm:mt-[19px]">
          <div onClick={() => onChangeApplyData("paymentMethod", "milestone")}>
            <div className="flex gap-[8px]">
              <div
                className={`w-[24px] h-[24px] rounded-[50%]  ${
                  jobApplyData.paymentMethod === "milestone"
                    ? "border-[6px] border-[#18470D]"
                    : "border-[1px] border-[#AEB3BC]"
                } cursor-pointer`}
              ></div>
              <p className="text-[16px]">Per Milestone</p>
            </div>
            <p className="2xl:pl-[32px] lg:max-w-[874px] 2xl:max-w-none sm:max-w-[488px] mt-[8px] text-[#545454] text-[16px]">
              Break your work into parts and get paid when each part is done.
            </p>
          </div>
        </div>
        <div className="flex gap-[8px] 2xl:mt-[28px] mt-[19px] sm:mt-[20px] lg:mt-[22px]">
          <div onClick={() => onChangeApplyData("paymentMethod", "completion")}>
            <div className="flex gap-[8px]">
              <div
                className={`min-w-[24px] w-[24px] h-[24px] rounded-[50%]  ${
                  jobApplyData.paymentMethod === "completion"
                    ? "border-[5px] border-[#18470D]"
                    : "border-[2px] border-[#AEB3BC]"
                } cursor-pointer`}
              ></div>
              <p className="text-[16px]">After work is completed</p>
            </div>
            <p className="sm:max-w-[438px] lg:max-w-none 2xl:pl-[32px] mt-[8px] text-[#545454] text-[16px]">
              Get full payment once all tasks are completed and delivered.
            </p>
          </div>
        </div>
      </div>

      {jobApplyData.paymentMethod === "milestone" ? (
        <PerMilestone
          errors={errors}
          onChangeApplyData={onChangeApplyData}
          jobApplyData={jobApplyData}
        />
      ) : (
        <Completion
          errors={errors.bid}
          onChangeApplyData={onChangeApplyData}
          jobApplyData={jobApplyData}
        />
      )}
    </div>
  );
};
