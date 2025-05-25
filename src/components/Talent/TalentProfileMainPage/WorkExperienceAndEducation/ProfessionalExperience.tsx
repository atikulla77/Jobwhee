import React, {useState} from "react";
import ExperienceAndEducationCard from "./WorkingExperienceCard";
import Image from "next/image";
import {PlusIcon} from "../../../../../public/icons/talent-client/PlusIcon";
import ProfessionalExperienceModal
    from "@/components/Talent/TalentProfileMainPage/WorkExperienceAndEducation/ProfessionalExperienceModal";
import {useTalentProfile} from "@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile";
import {deleteExperience} from "@/lib/api/workAndEducationExperienceApi/workAndEducationExperienceApi";
import {toast} from "react-toastify";
import {InfoSectionGreen} from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import {UniversalPopup} from "@/shared/widgets/UniversalPopup/UniversalPopup";

const ProfessionalExperience = ({
                                    workExperiences,
                                    isViewedClient
                                }: {
    workExperiences: any;
    isViewedClient: boolean
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [editingExperience, setEditingExperience] = useState<any | null>(null);
    const [experienceToDelete, setExperienceToDelete] = useState<number | null>(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const {mutate} = useTalentProfile();
    const initialCount = 3;

    const displayedItems = showAll
        ? workExperiences
        : workExperiences?.slice(0, initialCount);

    const remainingCount = workExperiences?.length - initialCount;

    const openNewModal = () => {
        setEditingExperience(null);
        setIsModalOpen(true);
    };

    const openEditModal = (exp: any) => {
        setEditingExperience(exp);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteExperience(id);
            toast.success("Experience deleted successfully");
            await mutate();
        } catch (err) {
            toast.error("Failed to delete experience");
            console.error(err);
        } finally {
            setDeleteModalOpen(false);
        }
    };
    return (
        <InfoSectionGreen
            lineWidth="w-[10%] 2xl:w-[13%]"
            title="Experience"
            sectionStyles="mt-[43px] flex h-fit min-h-[277px] flex-col relative"
        >
            <div className="mt-[32px]">
                {!isViewedClient && (
                    <div
                        onClick={openNewModal}
                        className=" absolute right-[44px] top-[15px] z-10 cursor-pointer"
                    >
                        <PlusIcon/>
                    </div>)}

                {isModalOpen && (
                    <ProfessionalExperienceModal
                        onClose={() => setIsModalOpen(false)}
                        onEdit={() => setIsModalOpen(false)}
                        experience={editingExperience}
                    />
                )}
                <div className=" mb-[20px] sm:mb-[71px] mt-[14px] flex w-full flex-col gap-[16px]">
                    <div className="flex w-full items-center justify-between">
                        <h2 className=" text-[16px] sm:text-[30px] font-medium leading-[100%] text-[#000000]">
                            Professional Experience
                        </h2>
                    </div>
                </div>
            </div>
            {displayedItems?.length > 0 ? (
                displayedItems.map((workExperience: any, index: number) => (
                    <ExperienceAndEducationCard
                        isViewedClient={isViewedClient}
                        experience={workExperience}
                        key={workExperience.id}
                        number={index + 1}
                        hideDivider={
                            (!showAll && index === displayedItems.length - 1) ||
                            (showAll && index === workExperiences.length - 1) ||
                            (displayedItems.length < 3 && index === displayedItems.length - 1)
                        }
                        onEdit={() => openEditModal(workExperience)}
                        onDelete={() => {
                            setExperienceToDelete(workExperience.id);
                            setDeleteModalOpen(true);
                        }}
                    />
                ))
            ) : (
                <div className="flex flex-col justify-center items-center mx-auto">
                    <Image
                        src={"/images/profile/professional-experience.png"}
                        alt={"Experience"}
                        width={204}
                        height={153}
                    />
                    <p className="font-medium text-[20px] text-center mx-auto text-[#000000]">
                        No professional experience yet
                    </p>
                </div>
            )}
            {workExperiences?.length > initialCount && (
                <p
                    className=" ml-[72px] mt-2 flex cursor-pointer items-center justify-start gap-[6px] text-[16px] font-bold text-[#18470D] "
                    onClick={() => setShowAll(!showAll)}
                >
          <span className="underline">
            {showAll ? "Show Less" : "Show More"}
          </span>
                    {!showAll && <span>({remainingCount})</span>}
                </p>
            )}

            {isDeleteModalOpen && <UniversalPopup
                imageSrc="/images/profile/deleteProfile/deleteJobHistory.png"
                heading="Delete Job History"
                description="Deleting this job will remove it from your profile permanently.."
                cancelText="Cancel"
                confirmText="Yes, Delete"
                onCancel={() => {
                    setDeleteModalOpen(false)
                }}
                onConfirm={() => {
                    if (experienceToDelete !== null) {
                        handleDelete(experienceToDelete);
                        setDeleteModalOpen(false);
                        setExperienceToDelete(null);
                    }
                }}
                descriptionWidth="405px"
            />}
        </InfoSectionGreen>
    );
};

export default ProfessionalExperience;
