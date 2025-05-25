"use client";

import { CheckIcon } from "../../../public/icons/CheckIcon";
import { GreenCheckIcon } from "../../../public/icons/global-icons/GreenCheckIcon";


interface TermCardProps {
    stepsData: {
        stepCount: number;
        active: boolean;
        checked: boolean;
    }[];
}

export const StepsPanel: React.FC<TermCardProps> = ({
                                                        stepsData
                                                    }) => {
    return (
        <div className="sm:max-w-[375px] lg:max-w-[441px] flex">
            {stepsData.map((step, i) => {
                return (
                    <div key={i} className="flex">
                        <div className="flex flex-col items-center cursor-pointer">
                            <div
                                className={`h-[30px] w-[30px] lg:w-[36px] lg:h-[36px] rounded-full text-[#18470D] text-[13px] flex justify-center items-center font-medium ${
                                    (step.checked || step.active) ? "bg-[#CBEC5E] font-medium " : "bg-[#EAEAEA]"
                                }`}
                            >
                                {step.checked ? <GreenCheckIcon /> : step.stepCount}
                            </div>
                            <span
                                className={` text-[14px] mt-[4px] lg:mt-[6px] text-nowrap ${step.active ? ' text-[#414750] font-medium ' : 'text-[#565E69] '}`}>
                Step {step.stepCount}
              </span>
                        </div>
                        {i !== stepsData.length - 1 && (
                            <div
                                className={`w-[26px] lg:w-[38px] h-[2px] mt-[14px] lg:mt-[18px] -ml-[2px] -mr-[7px] lg:mx-[9px] ${step.checked ? ' bg-[#CBEC5E] ' : ' bg-[#EAEAEA] '}`}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default StepsPanel;
