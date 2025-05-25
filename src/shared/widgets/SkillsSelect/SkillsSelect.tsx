"use client";

import React from "react";
import SkillSearchDropdown from "@/shared/widgets/SkillsSelect/SkillSearchDropdown";

import {Xicon} from "../../../../public/icons/talent-client/Xicon";
import {useAllSkills} from "@/components/Talent/TalentProfileMainPage/Skills/useAllSkills";

interface SkillsSelectProps {
    previewMode?: boolean;
    selectedSkills: number[];
    setSelectedSkills: React.Dispatch<React.SetStateAction<number[]>>;
    height?: string;
    borderColor?: string;
}

const SkillsSelect: React.FC<SkillsSelectProps> = ({
                                                       selectedSkills,
                                                       previewMode,
                                                       setSelectedSkills,
                                                       height = "218px",
                                                       borderColor = "#AEB3BC",
                                                   }) => {
    const allSkills = useAllSkills();

    const handleSelectSkill = (skillId: number) => {
        setSelectedSkills((prev) =>
            prev.includes(skillId) ? prev : [...prev, skillId]
        );
    };

    const handleRemoveSkill = (skillId: number) => {
        setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
    };

    return (
        <div

            className={` min-h-[${height}] rounded-[12px] px-[7px] py-[20px] md:flex-row ${
                previewMode ? `pl-0` : `border border-[${borderColor}]  p-[18px]`
            } `}
        >
            <div
                className={`mt-2 flex  flex-wrap gap-[10px] justify-start items-start `}
            >
                {selectedSkills.map((skillId) => {
                    const skill = allSkills.find((s) => s.id === skillId);
                    if (!skill) return null;  // 🔥 skip if not found!

                    return (
                        <div
                            key={skillId}
                            className="flex h-[36px] items-center gap-[10px] rounded-[30px] border border-black px-[10px] text-xs md:h-[44px] md:text-base"
                        >
                            <p>{skill.translation?.name}</p>
                            {!previewMode && (
                                <div
                                    className="max-w-[16px] cursor-pointer"
                                    onClick={() => handleRemoveSkill(skillId)}
                                >
                                    <Xicon width="16px" height="16px" stroke="#18470D"/>
                                </div>
                            )}
                        </div>
                    );
                })}
                {!previewMode && (
                    <SkillSearchDropdown
                        skills={allSkills}
                        onSelectSkill={handleSelectSkill}
                    />
                )}
            </div>
        </div>
    );
};

export default SkillsSelect;
