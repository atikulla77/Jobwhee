"use client";
import StepsPanel from "@/components/Client/jobCreate/StepsPanel";
import { useJobCreate } from "@/contextProviders/JobCreateContext";
import { useEffect, useState } from "react";

const shortCardData = [
    { title: "Entry" },
    { title: "Intermediate" },
    { title: "Expert" },
    { title: "Not Defined" },
];

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

interface ThirdStepProps {
    handleChangeStep: (step: number) => void;
    currentStepsData: Array<{
        stepCount: number;
        active: boolean;
        checked: boolean;
    }>;
}

const ThirdStep: React.FC<ThirdStepProps> = ({
    handleChangeStep,
    currentStepsData,
}) => {
    const { jobDetails, setJobDetails } = useJobCreate()

    const [selectedOption, setSelectedOption] = useState<number | null>(shortCardData.findIndex((item) => item.title === jobDetails.experienceLevel));
    const [buttonValid, setButtonValid] = useState(false);
    useEffect(() => {
        if (selectedOption !== null && selectedOption !== -1) {
            setButtonValid(true)
        } else {
            setButtonValid(false)
        }
    }, [selectedOption]);

    const handleRadioChange = (index: number) => {
        setSelectedOption(index);
    };

    const handleNextClick = () => {
        if (selectedOption !== null) {
            setJobDetails({ ...jobDetails, experienceLevel: shortCardData[selectedOption || 0].title.replace(/\s/g, '')
            });
            handleChangeStep(4)
        }
    }

    return (
        <div
            className="lg:justify-center xl:justify-between max-w-[335px] sm:max-w-[400px] xl:px-0 lg:max-w-[1150px] 2xl:max-w-[1395px] mx-auto lg:pt-[157px] sm:pt-[77px] pt-[112px] flex justify-between flex-wrap gap-x-[20px] mb-[111px] gap-y-[40px] sm:gap-y-[60px]">
            <div className="sm:max-w-[482px] lg:max-w-[500px]">
                <StepsPanel stepsData={currentStepsData} />
                <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[40px] xl:mt-[20px] 2xl:mt-[22px] mt-[48px]">
                    Define the work scope
                </h1>
                <div
                    className="text-[#545454] text-[16px] sm:text-[14px] lg:text-[18px] mt-[19px] 2xl:mt-[25px] max-w-[520px]">
                    <span>
                        These aren’t final answers, but they help us connect you with the
                        right talent.
                    </span>
                </div>
            </div>
            <div className="lg:max-w-[500px] 2xl:max-w-[555px] min-h-[373px] xl:min-h-[670px] w-full flex flex-col">
                <div className="flex-1">
                    <h1 className="text-[#000] text-[16px] sm:text-[20px] font-medium lg:text-[24px] xl:mt-[13px] sm:mt-0 mb-[22px] sm:mb-[16px] lg:mb-[10px]">
                        What level of experience do you need?*
                    </h1>
                    <ul className="flex flex-col gap-y-[10px]">
                        {shortCardData.map((option, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-[8px] text-[16px] text-[#545454]"
                                onClick={() => handleRadioChange(i)}
                            >
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="reason"
                                        checked={selectedOption === i}
                                        className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                                        readOnly
                                    />
                                    <div
                                        className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${selectedOption === i
                                                ? "bg-[#18470D]"
                                                : "border-2 border-[#AEB3BC]"
                                            }`}
                                    >
                                        {selectedOption === i && (
                                            <div className="h-[12px] w-[12px] rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <span className="cursor-pointer">{option.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-[16px] pt-[20px]  justify-end">
                    <button
                        onClick={() => handleChangeStep(2)}
                        className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => handleNextClick()}
                        className={`w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] font-medium bg-[#CBEC5E] ${buttonValid
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

export default ThirdStep