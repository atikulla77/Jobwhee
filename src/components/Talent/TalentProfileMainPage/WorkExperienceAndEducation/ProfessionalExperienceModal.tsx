import React, {useEffect, useState} from 'react';
import {Xicon} from '../../../../../public/icons/talent-client/Xicon';
import {CheckBoxIcon} from '../../../../../public/icons/global-icons/CheckboxIcon';
import MonthSelector from './SelectMonth';
import YearSelector from './SelectYear';
import {
    createExperience,
    updateExperience
} from "@/lib/api/workAndEducationExperienceApi/workAndEducationExperienceApi";
import {toast} from "react-toastify";
import {useTalentProfile} from "@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile";
import {Experience} from "@/components/Talent/TalentProfileMainPage/WorkExperienceAndEducation/WorkingExperienceCard";

interface ProfessionalExperienceModalType {
    onEdit: () => void;
    onClose: () => void;
    experience?: Experience;
}

const ProfessionalExperienceModal: React.FC<
    ProfessionalExperienceModalType
> = ({onEdit, onClose, experience}) => {

    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [institution, setInstitution] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const {mutate} = useTalentProfile();

    useEffect(() => {
        if (experience) {
            setInstitution(experience.institution);
            setPosition(experience.position);
            setDescription(experience.description);
            setCurrentlyWorking(experience.isCurrent);

            const [startMonthText, startYearText] = experience.startDate.split(' ');
            setStartMonth(startMonthText);
            setStartYear(startYearText);

            if (!experience.isCurrent && experience.endDate) {
                const [endMonthText, endYearText] = experience.endDate.split(' ');
                setEndMonth(endMonthText);
                setEndYear(endYearText);
            }
        }
    }, [experience]);

    const isEditing = Boolean(experience);

    const handleSave = async () => {
        try {
            if (isEditing && experience?.id) {
                await updateExperience(experience.id, {
                    position,
                    institution,
                    description,
                    startDate: `${startMonth} ${startYear}`,
                    endDate: currentlyWorking ? undefined : `${endMonth} ${endYear}`,
                    isCurrent: currentlyWorking,
                    status: "Work",
                });
                toast.success("Experience updated successfully!");
            } else {
                await createExperience({
                    position,
                    institution,
                    description,
                    startDate: `${startMonth} ${startYear}`,
                    endDate: currentlyWorking ? undefined : `${endMonth} ${endYear}`,
                    isCurrent: currentlyWorking,
                    status: "Work",
                });
                toast.success("Experience added successfully!");
            }

            await mutate();
            onClose();
        } catch (error) {
            toast.error("Something went wrong.");
        }
    };
    const toggleCheckbox = () => {
        setCurrentlyWorking(prev => !prev);
    };
    return (
        <>
            <div
                onClick={onEdit}
                className="  fixed w-screen h-screen  left-0 top-0 bg-black bg-opacity-30  z-40"
            ></div>

            <div
                className=" px-4 md:px-10 py-6 sm:mx-3 md:mx-0 max-w-[335px] md:max-w-[780px]  lg:max-w-[876px] w-full fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40 md:max-h-[843px] min-h-[843px] bg-white rounded-[30px]">
                <p className=" text-[20px] md:text-[30px] text-[#18470D] font-medium ">
                    Add Employment
                </p>

                <div
                    onClick={onEdit}
                    className=" absolute right-10 top-[34px] cursor-pointer"
                >
                    <Xicon/>
                </div>

                <div className=" mt-5">
                    <p>Company</p>
                    <input
                        className=" w-full h-[42px] border border-[#AEB3BC] rounded-[12px] mt-2 pl-2 text-[#8B939F]"
                        placeholder="e.g. Harvard University"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                    ></input>
                </div>

                <div className=" mt-[20px]">
                    <p>Title</p>
                    <input
                        className=" w-full h-[42px] border border-[#AEB3BC] rounded-[12px] mt-2 pl-2 text-[#8B939F]"
                        placeholder=" e.g. Front-end Developer"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    ></input>
                </div>

                <div className=" md:flex justify-between  mt-[15px]">
                    <MonthSelector title="Start Month" value={startMonth} onChange={setStartMonth}/>
                    <YearSelector title="Start Year" value={startYear} onChange={setStartYear}/>

                </div>
                {!currentlyWorking && (
                    <div className=" md:flex justify-between  mt-[15px]">
                        <MonthSelector title="End Month" value={endMonth} onChange={setEndMonth}/>
                        <YearSelector title="End Year" value={endYear} onChange={setEndYear}/>
                    </div>
                )}

                <div className=" flex gap-2 mt-[14px]">
                    <div className=" max-w-6">
                        <CheckBoxIcon checked={currentlyWorking} onToggle={toggleCheckbox}/>
                    </div>
                    <p className=" text-[#545454]">I currently work here</p>
                </div>

                <div className=" mt-[26px]">
                    <p>Description (Optional)</p>
                    <textarea
                        className=" w-full h-[146px] border border-[#AEB3BC] rounded-[12px] mt-2 pl-2 text-[#8B939F]"
                        placeholder="Describe your employment activity "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className=" w-full h-px bg-[#18470D] mt-[38px]"/>

                <div className=" mt-[30px] flex items-center justify-end">
                    <button
                        className=" text-[#18470D] max-w-[200px] w-full flex items-center justify-center cursor-pointer px-4 py-2 rounded-[49px]  h-[48px]  font-medium hover:bg-gray-100"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className=" max-w-[200px] w-full h-12 cursor-pointer rounded-[50px] bg-[#CBEC5E] flex items-center justify-center  text-[#18470D] font-medium  hover:bg-[#ACD624] "
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfessionalExperienceModal;
