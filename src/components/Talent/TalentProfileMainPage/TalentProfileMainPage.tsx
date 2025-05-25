"use client";

import {Metadata} from "next";
import {useTalentProfile} from "./hooks/useTalentProfile";
import TalentProfileTopSection
    from "@/components/Talent/TalentProfileMainPage/TalentProfileTopSection/TalentProfileTopSection";
import IntroTalentSection from "@/shared/widgets/IntroTalentSection/IntroTalentSection";
import Portfolio from "@/components/Talent/TalentProfileMainPage/Portfolio/Portfolio";
import ProfessionalExperience
    from "@/components/Talent/TalentProfileMainPage/WorkExperienceAndEducation/ProfessionalExperience";
import EducationSection from "@/components/Talent/TalentProfileMainPage/WorkExperienceAndEducation/EducationSection";
import {InfoSectionGreen} from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import {useMemo, useState} from "react";
import SkillsList from "@/shared/widgets/UserSkills/UserSkills";
import SkillsModal from "./Skills/SkillsModal";
import HistorySection from "@/shared/widgets/WorkHistory/HistorySection";

interface ISkill {
    id: number;
    createdAt?: string;
    updatedAt?: string;
    name: string;
}

export const metadata: Metadata = {
    title: "Freelancer Dashboard | JobWhee",
    description:
        "Dashboard for freelancers to manage their profile and job applications.",
};

interface TalentProfileProps {
    isViewedClient: boolean;
    setIsViewedClient: (value: boolean) => void;
    talentSide: boolean;
}

export default function TalentProfile({
                                          isViewedClient,
                                          setIsViewedClient,
                                          talentSide
                                      }: TalentProfileProps) {
    const {user, error, isLoading, mutate} = useTalentProfile();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLanguagePopUpActive, setLanguagePopUpActive] = useState(false);
    const MAX_LENGTH = 365;
    const [isVideoPopUpActive, setVideoPopUpActive] = useState(false);
    const [isTalentPopUpActive, setTalentPopUpActive] = useState(false);
    const skills = (user?.skills as ISkill[]) || [];
    const uniqueSkills: ISkill[] = useMemo(() => {
        const seenIds = new Set<number>();
        return skills.filter((skill) => {
            if (!skill?.id || seenIds.has(skill.id)) return false;
            seenIds.add(skill.id);
            return true;
        });
    }, [skills]);

    const handlePopupClick = () => {
        setTalentPopUpActive(!isTalentPopUpActive);
    };

    const text = user?.introText;

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    const videoToShow = () => {
        if (user?.videoStatus === "Direct") return user.video || "";
        if (user?.videoStatus === "Embed") return user.embedUrl || "";
        return "";
    };

    const handleLanguageClick = () => {
        setLanguagePopUpActive(true);
    };

    const handleCloseLanguageModal = () => {
        setLanguagePopUpActive(false);
    };

    const handleVideoClick = () => {
        setVideoPopUpActive(!isVideoPopUpActive);
    };

    const handleProfileImageUpload = async (previewUrl: string, file: File) => {
        try {
            await mutate(async (currentData) => {
                if (!currentData) return currentData;
                return {
                    ...currentData,
                    data: {
                        ...currentData.data,
                        profileImage: previewUrl,
                    },
                };
            }, false);
        } catch (error) {
            console.error("Error updating profile image:", error);
        }
    };

    if (isLoading) {
        return <div className="text-center text-gray-600">Loading profile...</div>;
    }
    if (error) {
        return (
            <div className="text-center text-red-600">
                Error: {error.message || "Failed to load user profile."}
            </div>
        );
    }


    return (
        <div className="mt-[50px] md:mt-[148px] flex flex-col px-0  max-w-[1472px] w-full mx-auto ">
            <main
                className={` mt-[62px] sm:mt-[21px] h-fit w-full  rounded-[30px] border-0 md:border-[1.16px] md:border-[#E2E8F0] bg-[#FFFFFF] mx-auto max-w-[355px] sm:max-w-[775px] xl:max-w-[1175px] 2xl:max-w-[1472px] px-[17px] lg:px-[27px]  2xl:px-[62px]  pb-[50px]`}
            >
                <TalentProfileTopSection
                    talentSide={talentSide}
                    user={user}
                    isViewedClient={isViewedClient}
                    setIsViewedClient={setIsViewedClient}
                    onProfileImageUpdate={handleProfileImageUpload}
                />
                <hr className="hidden sm:block lg:mt-[28px] 2xl:mt-[57px] w-full border border-[#E6E6E6]"/>
                <InfoSectionGreen
                    title="Intro"
                    lineWidth="w-[77px]"
                    sectionStyles="mt-[62px] flex h-fit min-h-[397px] w-full flex-col"
                >
                    <IntroTalentSection
                        user={user}
                        isViewedClient={isViewedClient}
                        isExpanded={isExpanded}
                        toggleText={toggleText}
                        text={text}
                        MAX_LENGTH={MAX_LENGTH}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        isLanguagePopUpActive={isLanguagePopUpActive}
                        setLanguagePopUpActive={setLanguagePopUpActive}
                        handleLanguageClick={handleLanguageClick}
                        handleCloseLanguageModal={handleCloseLanguageModal}
                        isVideoPopUpActive={isVideoPopUpActive}
                        handleVideoClick={handleVideoClick}
                        videoToShow={videoToShow}
                    />
                </InfoSectionGreen>
                <InfoSectionGreen
                    title="Skills"
                    lineWidth="w-[77px]"
                    sectionStyles="mt-[43px] relative flex h-fit min-h-[277px] w-full flex-col"
                    handleEditClick={handlePopupClick}
                    editMode={true}
                    isViewedClient={isViewedClient}
                >
                    <>
                        {isTalentPopUpActive && (
                            <SkillsModal onClose={() => handlePopupClick()}/>
                        )}
                        <span
                            className="text-black lg:text-[30px] text-[20px] font-medium 2xl:mt-[17px] lg:mt-[25px] sm:mt-[27px] mt-[17px] block">
              Skills
            </span>
                        <SkillsList skills={uniqueSkills}/>
                    </>
                </InfoSectionGreen>
                <InfoSectionGreen
                    title="Works"
                    lineWidth="w-[6%] 2xl:w-[13%]"
                    sectionStyles="mt-[43px] flex h-fit min-h-[277px] w-full flex-col"
                >
                    <HistorySection
                        history={user?.workingHistory || []}
                        historyTitle="Working History"
                        completedJobsTitle="Completed Jobs (24)"
                        inProgressJobsTitle="In Progress (6)"
                        noJobsImageSrc="/images/profile/professional-experience.png"
                        noJobsText="No working experience yet"
                    />
                </InfoSectionGreen>
                <Portfolio isViewedClient={isViewedClient}/>
                <ProfessionalExperience isViewedClient={isViewedClient} workExperiences={user?.work}/>
                <EducationSection isViewedClient={isViewedClient} educations={user?.education}/>
            </main>
        </div>
    );
}
