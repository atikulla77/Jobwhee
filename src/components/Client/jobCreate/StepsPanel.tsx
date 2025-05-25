"use client";

import {CheckIcon} from "../../../../public/icons/talent-client/CheckIcon";

interface TermCardProps {
    stepsData: {
        stepCount: number;
        active: boolean;
        checked: boolean;
    }[];
}

export const StepsPanel: React.FC<TermCardProps> = ({stepsData}) => {
    return (
        <div className="sm:max-w-[375px] lg:max-w-[441px] flex">
            {stepsData.map((step, i) => {
                return (
                    <div key={i} className="flex">
                        <div className="flex flex-col items-center cursor-pointer">
                            <div
                                className={`h-[30px] w-[30px] lg:w-[36px] lg:h-[36px] rounded-full text-[#18470D] text-[13px] flex justify-center items-center font-medium ${
                                    step.checked || step.active ? "bg-[#CBEC5E]" : "bg-[#EAEAEA]"
                                }`}
                            >
                                {step.checked ? (
                                    <div className="w-[24px] h-[24px]">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 6L9 17L4 12"
                                                stroke="#18470D"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    step.stepCount
                                )}
                            </div>
                            <span
                                className={` text-[14px] mt-[7px] 2xl:mt-[5px] text-nowrap ${
                                    step.active
                                        ? " text-[#414750] font-medium "
                                        : "text-[#565E69] "
                                }`}
                            >
                Step {step.stepCount}
              </span>
                        </div>
                        {i !== stepsData.length - 1 && (
                            <div
                                className={`w-[26px] lg:w-[38px] h-[2px] mt-[20px] lg:mt-[18px] -ml-[3px] -mr-[5px] lg:mx-[-3px] lg:ml-[8px] lg:mr-[9px] ${
                                    step.checked ? " bg-[#CBEC5E] " : " bg-[#EAEAEA] "
                                }`}
                            ></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default StepsPanel;
