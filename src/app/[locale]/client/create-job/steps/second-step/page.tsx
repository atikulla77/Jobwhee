"use client";
import { useEffect, useState } from "react";
import { GreenCloseIcon } from "../../../../../../../public/icons/GreenCloseIcon";
import StepDropDown from "@/components/Client/jobCreate/StepDropDown";
import { StepsPanel } from "@/components/Client/jobCreate/StepsPanel";
import useSWR from "swr";
import { getSkills } from "@/lib/api/skillsApi/skillsApi";
import { usePathname } from "next/navigation";
import { useJobCreate } from "@/contextProviders/JobCreateContext";

interface SecondStepProps {
    handleChangeStep: (step: number) => void;
    currentStepsData: Array<{
        stepCount: number;
        active: boolean;
        checked: boolean;
    }>;
}


const SecondStep: React.FC<SecondStepProps> = ({
    handleChangeStep,
    currentStepsData,
}) => {
    const [dropdDownValid, setDropDownValid] = useState(true);
    const [buttonValid, setButtonValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const pathname = usePathname();
    const languageCode = pathname.split('/')[1];
    const {
        data: skills,
        error: skillsError,
        mutate: skillsMutate,
    } = useSWR(['/skills', languageCode], () => getSkills(languageCode));
    const { jobDetails, setJobDetails } = useJobCreate();
    const [dropDownData, setDropDrownData] = useState(skills?.data.skills.map((skill) => ({ id: skill.id, title: skill.translation.name, checked: false })) || []);
    const handleNextClick = () => {
        const isValid = dropDownData.some((item) => item.checked);
        setDropDownValid(isValid);
        console.log(skills?.data.skills.map((skill) => ({ id: skill.id, title: skill.translation.name, checked: false })) || [])
        setJobDetails({ ...jobDetails, skills: dropDownData.filter((item) => item.checked).map((item) => item.id) });
        if (isValid) {
            handleChangeStep(3);
        } else {
            setErrorMsg('Select at least one skill')
        }
    };

    useEffect(() => {
        if (skills?.data){
            if(jobDetails.skills?.length){
                setDropDrownData(skills?.data.skills.map((skill) => ({ id: skill.id, title: skill.translation.name, checked: jobDetails.skills.find((item: any) => item.id === skill.id || item === skill.id) ? true : false })) || []);
                setButtonValid(true)
            }else{
                setDropDrownData(skills?.data.skills.map((skill) => ({ id: skill.id, title: skill.translation.name, checked: false })) || []);
            }
        }
    }, [skills]);


    const toggleCheckbox = (id: number) => {
        const isChecked = dropDownData.filter((item) => item.checked);

        const checked = (item: { id: number; title: string; checked: boolean }) => {
            if (isChecked.length && item.checked) {
                setErrorMsg('');
                return false
            } else if (!isChecked.length && !item.checked) {
                setErrorMsg('')
                setDropDownValid(true);
                setButtonValid(true)
                return true
            }
            if (isChecked.length > 9) {
                setErrorMsg('You can select up to 10 skills only.')
                setDropDownValid(false);
                return false
            } else if (!isChecked.length) {
                setErrorMsg('Select at least one skill')
                setDropDownValid(false);
            }
            setButtonValid(true)
            setDropDownValid(true);
            return !item.checked
        }
        setDropDrownData((prevProps) => {
            return prevProps.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: checked(item) };
                }
                return item;
            });
        });
    };
    return (
        <div
            className="sm:px-[40px] sm:justify-center xl:justify-between max-w-[335px] sm:max-w-none lg:max-w-[1280px] 2xl:max-w-[1510px] mx-auto lg:pt-[245px] 2xl:pt-[218px] sm:pt-[185px] pt-[112px] flex justify-between flex-wrap lg:flex-nowrap gap-y-[18px] sm:gap-y-[56px] gap-x-[15px] mb-[111px]">
            <div className="sm:max-w-[381px] lg:max-w-[596px]">
                <StepsPanel stepsData={currentStepsData} />
                <h1 className="text-[#000] text-[20px] max-w-[300px] sm:max-w-none font-medium sm:text-[30px] lg:text-[40px] sm:mt-[19px] lg:mt-[33px] 2xl:mt-[17px] mt-[20px]  xl:max-w-[596px]">
                    What skills are needed to get the job done?
                </h1>
            </div>
            <div
                className="max-w-[384px] lg:max-w-[590px] w-full sm:min-h-[625px] lg:min-h-[670px] 2xl:min-h-[668px] min-h-[610px] flex flex-col sm:gap-[6px] lg:gap-[4px] gap-[10px]">
                <div className="flex flex-wrap gap-[4px] lg:gap-[10px]">
                    {dropDownData.map((item, i) => {
                        return item.checked ? (
                            <div
                                key={i}
                                className="font-medium flex items-center gap-[10px] text-[14px] lg:text-[16px] text-[#000] p-[7px_14px_6px_14px] lg:p-[5px_15px_5px_15px] border-[#000000] border rounded-full"
                            >
                                {item.title}{" "}
                                <div
                                    className="cursor-pointer"
                                    onClick={() => toggleCheckbox(item.id)}
                                >
                                    <GreenCloseIcon />
                                </div>
                            </div>
                        ) : (
                            ""
                        );
                    })}
                </div>
                <div className="flex-1">
                    <StepDropDown
                        hasCheckboxes={true}
                        list={dropDownData}
                        placeholder="Select Category"
                        toggleCheckbox={toggleCheckbox}
                        searchField={true}
                        isValid={dropdDownValid}
                        dropDownHeight="max-h-[356px]"
                    />
                    {!dropdDownValid && (
                        <p className="text-[#DD331D] text-[12px]">{errorMsg}</p>
                    )}
                </div>
                <div className="flex gap-[12px] lg:gap-[16px] mt-[20px] justify-end">
                    <button
                        onClick={() => handleChangeStep(1)}
                        className="w-[145px] h-[40px] lg:w-[193px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => handleNextClick()}
                        className={`w-[145px] h-[40px] lg:w-[193px] lg:h-[48px] text-[16px] rounded-[50px] font-medium ${buttonValid
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
export default SecondStep;