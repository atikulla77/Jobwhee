import React from "react";
import {EditIcon} from "../../../../../public/icons/talent-client/editIcon";
import {DeleteIcon} from "../../../../../public/icons/DeleteIcon";

export interface Experience {
    position: string;
    institution: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean,
    description: string;
    id: number;
}

interface ExperienceAndEducationCardProps {
    experience: Experience;
    number: number;
    hideDivider: boolean;
    onEdit: () => void;
    onDelete: () => void;
    isViewedClient: boolean;
}


const ExperienceAndEducationCard: React.FC<ExperienceAndEducationCardProps> = ({
                                                                                   experience,
                                                                                   number,
                                                                                   hideDivider,
                                                                                   onEdit,
                                                                                   onDelete,
                                                                                   isViewedClient
                                                                               }) => {
    return (
        <article className={`flex h-[120px] gap-2 sm:gap-[37px]  `}>
            <div
                className={`mt-[15px] flex h-[110px] w-[40px] flex-col items-center justify-start gap-[27px] `}
            >
                <div
                    className={`flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-[#EAEAEA] font-medium text-[#414750]`}
                >
                    {number}
                </div>
                {!hideDivider && <div className="h-[26px] w-[2px] bg-[#EAEAEA]"></div>}
            </div>
            <div className={`flex h-[56px] w-[90%] flex-col gap-[10px]`}>
                <h2 className={` text-[14px] sm:text-[20px] font-medium text-[#000000]`}>
                    {experience.position} | {experience.institution}
                </h2>
                <p className={` text-[14px] sm:text-[20px]  text-[#545454]`}>
                    {experience.startDate} - {experience.isCurrent ? "ongoing" : experience.endDate}
                </p>
            </div>

            {!isViewedClient && (<div className="flex gap-2 items-start mt-[10px]">
                <div onClick={onEdit} className="cursor-pointer">
                    <EditIcon/>
                </div>
                <div onClick={onDelete} className="cursor-pointer">
                    <DeleteIcon/>
                </div>
            </div>)}


        </article>
    );
};
export default ExperienceAndEducationCard;
