import React, {useState} from "react";
import ExperienceAndEducationCard from "./WorkingExperienceCard";
import {PlusIcon} from "../../../../../public/icons/talent-client/PlusIcon";
import EducationModal from "./EducationModal";
import Image from "next/image";
import {deleteExperience} from "@/lib/api/workAndEducationExperienceApi/workAndEducationExperienceApi";
import {toast} from "react-toastify";
import {useTalentProfile} from "@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile";
import {InfoSectionGreen} from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import {UniversalPopup} from "@/shared/widgets/UniversalPopup/UniversalPopup";

const EducationSection = ({educations, isViewedClient}: { educations: any, isViewedClient: boolean }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEducation, setEditingEducation] = useState<any | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [educationToDelete, setEducationToDelete] = useState<number | null>(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const {mutate} = useTalentProfile();
    const initialCount = 3;

    const displayedItems = showAll
        ? educations
        : educations?.slice(0, initialCount);

    const remainingCount = educations?.length - initialCount;

    const openNewModal = () => {
        setEditingEducation(null);
        setIsModalOpen(true);
    };

    const openEditModal = (exp: any) => {
        setEditingEducation(exp);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        setIsDeleting(true);
        try {
            await deleteExperience(id);
            toast.success("Education deleted successfully");
            await mutate();
        } catch (err) {
            toast.error("Failed to delete education");
            console.error(err);
        } finally {
            setIsDeleting(false);
            setDeleteModalOpen(false);
            setEducationToDelete(null);
        }
    };

    return (
        <InfoSectionGreen sectionStyles="mt-[43px] min-h-[277px]" title="Education" lineWidth="w-[9%] 2xl:w-[13%]">
            <div className=" flex h-fit flex-col">
                <div className="">
                    {!isViewedClient && (<div
                        onClick={openNewModal}
                        className=" absolute right-[44px] top-[15px] z-30 cursor-pointer"
                    >
                        <PlusIcon/>
                    </div>)}


                    {isModalOpen && (
                        <EducationModal
                            onClose={() => setIsModalOpen(false)}
                            onEdit={() => setIsModalOpen(false)}
                            experience={editingEducation}
                        />
                    )}

                    <div className="mb-[71px] mt-[14px] flex w-full flex-col gap-[16px]">
                        <div className="flex w-full items-center justify-between">
                            <h2 className="text-[30px] font-medium leading-[100%] text-[#000000]">
                                Education
                            </h2>
                        </div>
                    </div>
                </div>
                {displayedItems?.length > 0 ? (
                    displayedItems.map((education: any, index: number) => (
                        <ExperienceAndEducationCard
                            isViewedClient={isViewedClient}
                            key={education.id}
                            experience={education}
                            number={index + 1}
                            hideDivider={
                                (!showAll && index === displayedItems.length - 1) ||
                                (showAll && index === educations.length - 1) ||
                                (displayedItems.length < 3 &&
                                    index === displayedItems.length - 1)
                            }
                            onEdit={() => openEditModal(education)}
                            onDelete={() => {
                                setEducationToDelete(education.id);
                                setDeleteModalOpen(true);
                            }}
                        />
                    ))
                ) : (
                    <div className="flex flex-col mx-auto">
                        <Image
                            src={"/images/profile/education.png"}
                            alt={"Education"}
                            width={188}
                            height={188}
                        />
                        <p className="font-medium text-[20px] text-center text-[#000000]">
                            No education history
                        </p>
                    </div>
                )}

                {educations?.length > initialCount && (
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
            </div>

            {isDeleteModalOpen && (
                <UniversalPopup
                    imageSrc="/images/profile/deleteProfile/deleteEducation.png"
                    heading="Delete Education"
                    description="Deleting this education will remove it from your profile permanently."
                    cancelText="Cancel"
                    confirmText={isDeleting ? "Deleting..." : "Yes, Delete"}
                    onCancel={() => {
                        setDeleteModalOpen(false);
                        setEducationToDelete(null);
                    }}
                    onConfirm={() => {
                        if (educationToDelete !== null && !isDeleting) {
                            handleDelete(educationToDelete);
                        }
                    }}
                    descriptionWidth="405px"
                />
            )}
        </InfoSectionGreen>
    );
};

export default EducationSection;
