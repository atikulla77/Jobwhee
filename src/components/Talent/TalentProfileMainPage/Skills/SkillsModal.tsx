"use client";

import React, {useEffect, useState} from "react";
import {Xicon} from "../../../../../public/icons/talent-client/Xicon";
import SkillSearchDropdown from "@/shared/widgets/SkillsSelect/SkillSearchDropdown";
import {getAllSkills} from "@/lib/api/allSkillsApi/allSkillsApi";
import useSWR from "swr";
import {usePathname} from "next/navigation";
import {toast} from "react-toastify";
import {updateUserSkills} from "@/lib/api/talent/talentById/talentSkillsApi";
import {useTalentProfile} from "@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile";
import SkillsSelect from "@/shared/widgets/SkillsSelect/SkillsSelect";

interface SkillProps {
    onClose: () => void;
}

const SkillsModal: React.FC<SkillProps> = ({onClose}) => {
    const {user, mutate} = useTalentProfile();
    const pathname = usePathname();
    const languageCode = pathname.split("/")[1];
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

    useEffect(() => {
        if (user?.skills && Array.isArray(user.skills)) {
            const ids = user.skills.map((s: any) => s.id).filter(Boolean);
            setSelectedSkills(ids);
        }
    }, [user]);

    const handleSaveSkills = async () => {
        try {
            if (selectedSkills.length === 0) {
                toast.error("Please select at least one skill.");
                return;
            }
            await updateUserSkills(selectedSkills, languageCode);
            toast.success("Skills updated successfully!");
            await mutate();
            onClose();
        } catch (error) {
            console.error("Failed to update skills:", error);
            toast.error("Something went wrong while saving your skills.");
        }
    };

    const handleSelectSkill = (skillId: number) => {
        setSelectedSkills((prev) =>
            prev.includes(skillId) ? prev : [...prev, skillId]
        );
    };

    const handleRemoveSkill = (skillId: number) => {
        setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
    };

    return (
        <>
            <div
                onClick={onClose}
                className="fixed left-0 top-0 z-40 h-screen w-screen bg-black bg-opacity-30"
            ></div>

            <div
                className="fixed left-1/2 top-1/2 z-40 w-full max-w-[335px] translate-x-[-50%] translate-y-[-50%] rounded-[30px] bg-white px-4 py-6 sm:px-10 md:max-w-[700px] lg:max-w-[876px] min-h-[497px]">
                <p className="text-[20px] font-medium text-[#18470D] md:text-[30px]">
                    Edit Your Skills
                </p>
                <div
                    onClick={onClose}
                    className="absolute right-10 top-[34px] cursor-pointer"
                >
                    <Xicon/>
                </div>

                <div className="mt-[14px]">
                    <p className="text-[18px] text-[#545454]">Skills</p>

                    <SkillsSelect
                        height="218px"
                        selectedSkills={selectedSkills}
                        setSelectedSkills={setSelectedSkills}
                    />
                </div>

                <div className="mt-[70px] flex items-center justify-end">
                    <p
                        onClick={onClose}
                        className="flex w-full max-w-[200px] cursor-pointer items-center justify-center text-[#18470D]"
                    >
                        Cancel
                    </p>
                    <div
                        onClick={handleSaveSkills}
                        className="flex h-12 w-full max-w-[200px] cursor-pointer items-center justify-center rounded-[50px] bg-[#CBEC5E]"
                    >
                        Save
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsModal;
