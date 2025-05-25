"use client"
import StepsPanel from "@/components/Client/jobCreate/StepsPanel";
import { useJobCreate } from "@/contextProviders/JobCreateContext";
import React, { useState } from "react";

interface Job {
    id: number;
    type: string;
    title: string;
    createdTime: string;
    invited: number;
    proposals: number;
    messaged: number;
    desc: string;
    category: string;
    speciality: string;
    budget: string;
    scope: string;
    skills: string[];
}

interface FourthStepProps {
    handleChangeStep: (step: number) => void;
    currentStepsData: Array<{
        stepCount: number;
        active: boolean;
        checked: boolean;
    }>;
}

const FourthStep: React.FC<FourthStepProps> = ({
    handleChangeStep,
    currentStepsData,
}) => {
    const { jobDetails, setJobDetails } = useJobCreate()
    const [inputBudget, setInputBudget] = useState(jobDetails.budget.toString());
    const [buttonValid, setButtonValid] = useState(inputBudget != "0" ? true : false);
    const [errorMsg, setErrorMsg] = useState('');
    console.log("Details", jobDetails)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
      
        if (!/^\d*$/.test(value)) return;
      
        if (inputBudget === "0" && value.length === 2) {
          value = value[1];
        }
      
        setInputBudget(value);
      
        if (value && Number(value) > 0) {
          setButtonValid(true);
          setErrorMsg('');
        } else {
          setButtonValid(false);
          setErrorMsg('This field is required');
        }
      };
      


    const handleNextClick = () => {
        if (inputBudget && buttonValid) {
            setJobDetails({ ...jobDetails, budget: +inputBudget })
            handleChangeStep(5);
        } else {
            setErrorMsg('This field is required')
        }
    }

    return (
        <div
            className="px-[20px] lg:justify-center xl:justify-between max-w-[500px] lg:max-w-[1143px] 2xl:max-w-[1360px] mx-auto lg:pt-[157px] sm:pt-[77px] pt-[112px] flex justify-between flex-wrap gap-x-[20px] mb-[111px] gap-y-[13px] sm:gap-y-[18px]">
            <div className="sm:max-w-[482px] lg:max-w-[446px]">
                <StepsPanel stepsData={currentStepsData} />
                <h1 className="text-[#000] max-w-[223px] sm:max-w-[335px] lg:max-w-none text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[30px] lg:mt-[20px] 2xl:mt-[48px] mt-[48px]">
                    Let's find the right match for your needs!
                </h1>
                <div
                    className="text-[#545454] text-[16px] mt-[13px] sm:mt-none sm:text-[14px] lg:text-[18px] 2xl:mt-[26px]  lg:max-w-[385px] sm:max-w-[300px]">
                    <p>This will help us match you to talent within your range.</p>
                </div>
            </div>
            <div className="lg:max-w-[460px] min-h-[373px] xl:min-h-[670px] w-full flex flex-col">
                <div className="flex-1">
                    <div>
                        <h2 className="text-[#000] text-[16px] sm:text-[20px] font-medium lg:text-[30px]">
                            Choose Your Payment Style
                        </h2>
                        <div className="text-[#545454] text-[16px] sm:text-[16px] lg:text-[18px] lg:mt-[8px] mt-[12px]">
                            <span>
                                Decide how you want to pay: one-time payment or step-by-step
                                milestones.
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[#000] text-[16px] font-medium sm:text-[20px] lg:text-[24px] sm:mt-[40px] xl:mt-[46px] 2xl:mt-[73px] mt-[22px] lg:mb-[14px] mb-[12px] 2xl:max-w-[412px]">
                            What’s your estimated budget?
                        </h2>
                        <span className="text-[#545454] text-[16px] sm:text-[16px] lg:text-[18px] mt-[19px] ">
                            Not sure yet? No problem! You can set the budget and milestones
                            later when you chat with the talent.
                        </span>
                    </div>
                    <div className="mt-[18px] lg:mt-[65px] sm:mt-[30px]">
                        <label
                            className="text-[#545454] xl:text-[18px] text-[16px] 2xl:text-[18px]"
                            htmlFor="input"
                        >
                            Budget*
                        </label>
                    </div>
                    <div
                        className="border-[1px] border-[#AEB3BC] mt-[8px] h-[42px]  rounded-[12px] flex items-center p-[8px] w-[350px]">
                        <input
                            placeholder="e.g. $1000.00"
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-[24px] placeholder:text-[#8B939F] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px] text-[#2B2C2D] focus:outline-0 text-ellipsis"
                            id="input"
                            type="number"
                            value={inputBudget}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errorMsg && <p className="mt-[8px] text-[#DD331D] text-[12px]">{errorMsg}</p>}
                </div>
                <div className="flex gap-[16px] sm:mt-[140px] mt-[70px] lg:mt-[48px] justify-end">
                    <button
                        onClick={() => handleChangeStep(3)}
                        className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => handleNextClick()}
                        className={`w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[16px] rounded-[50px] font-medium  ${buttonValid
                            ? " bg-[#CBEC5E] text-[#18470D] cursor-pointer "
                            : " bg-[#EAEAEA] text-[#B8B8B8] "
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FourthStep;