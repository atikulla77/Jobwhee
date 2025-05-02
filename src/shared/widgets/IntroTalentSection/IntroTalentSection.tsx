"use client";

import React from "react";
import { VideoPlayer } from "../../../../components/Talent/TalentProfileMainPage/IntroSection/TalentVideoPlayer";
import IntroProfileModal from "@/components/Talent/TalentProfileMainPage/IntroSection/IntroModal";
import { EditIcon } from "../../../../public/icons/talent-client/editIcon";
import LanguageProfileModal from "../../../../components/Talent/TalentProfileMainPage/IntroSection/LanguageProfileModal";
import VideoProfileModal from "@/components/Talent/TalentProfileMainPage/IntroSection/VideoModal";

interface IntroTalentSectionProps {
	user: any;
	isViewedClient: boolean;
	isExpanded: boolean;
	toggleText: () => void;
	text: string | null | undefined;
	MAX_LENGTH: number;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isLanguagePopUpActive: boolean;
	setLanguagePopUpActive: React.Dispatch<React.SetStateAction<boolean>>;
	handleLanguageClick: () => void;
	handleCloseLanguageModal: () => void;
	isVideoPopUpActive: boolean;
	handleVideoClick: () => void;
	videoToShow: () => string;
}

const IntroTalentSection = ({
	user,
	isViewedClient,
	isExpanded,
	toggleText,
	text,
	MAX_LENGTH,
	isModalOpen,
	setIsModalOpen,
	isLanguagePopUpActive,
	handleLanguageClick,
	handleCloseLanguageModal,
	isVideoPopUpActive,
	handleVideoClick,
	videoToShow,
}: IntroTalentSectionProps) => {
	return (
		<div>
			<div
				className={`flex flex-col md:flex-row md:gap-[17px] xl:gap-[42px] 2xl:gap-[52px] h-fit 2xl:min-h-[264px] pb-[15px]`}>
				<div
					className={`flex h-fit md:w-[420px] xl:w-[723px] 2xl:w-[885px] flex-col gap-[16px] pr-[25px]`}>
					<div className={`min-h-[210px]`}>
						<div className={`flex gap-2 cursor-pointer items-center`}>
							<h2
								className={`xl:text-[25px] 2xl:text-[30px] font-medium leading-[100%] text-[#000000]`}>
								{user?.introTitle?.trim() || "Your title"}
							</h2>
							<button
								className={`${
									isViewedClient ? " hidden cursor-pointer" : " block"
								}`}
								onClick={() => setIsModalOpen(true)}>
								<EditIcon />
							</button>
						</div>

						<p className="xl:text-[16px] 2xl:text-[18px] font-normal xl:leading-[20px] 2xl:leading-[32px] text-[#545454] mt-[12px]">
							{text?.trim() ? (
								<>
									{isExpanded ? text : `${text.slice(0, MAX_LENGTH)}...`}{" "}
									{text.length > MAX_LENGTH && (
										<span
											className="cursor-pointer text-[18px] text-[#18470D] underline"
											onClick={toggleText}>
											{isExpanded ? " read less" : " read more"}
										</span>
									)}
								</>
							) : (
								<span className="text-[14px] sm:text-[18px] font-normal leading-[32px] text-[#545454]">
									Your intro
								</span>
							)}
						</p>
					</div>
					<div className={`flex flex-col gap-[11px]`}>
						<div
							onClick={handleLanguageClick}
							className="flex gap-2 cursor-pointer items-center">
							<h2 className={`text-[20px] font-bold text-[#000000]`}>
								Languages
							</h2>
							<EditIcon />
						</div>
						<div className="flex flex-wrap justify-start gap-[10px] 2xl:gap-[23px]">
							{user?.languages && user?.languages.length > 0 ? (
								user.languages.map(
									(language: { language: string; proficiency: string }) => (
										<p key={language.language} className="flex">
											<span className="text-[16px] font-medium text-[#000000]">
												{language.language}:
											</span>
											<span className="ml-[5px] text-[16px] font-normal text-[#545454]">
												{language.proficiency}
											</span>
										</p>
									)
								)
							) : (
								<p className="text-[16px] font-normal text-gray-500">
									No languages mentioned.
								</p>
							)}
						</div>
					</div>
				</div>
				<div className={`flex sm:gap-[19px] mt-[13px] sm:mt-0`}>
					<div className="w-px h-full bg-[#AEB3BC] lg:mr-[35px]" />
					<div className="flex flex-col gap-[19px]">
						<h2
							onClick={handleVideoClick}
							className={`text-[18px] sm:text-[20px] font-medium sm:font-bold text-[#000000] flex gap-2 cursor-pointer items-center`}>
							Video Introduction
							<EditIcon />
						</h2>
						<VideoPlayer url={videoToShow()} />
					</div>
				</div>
			</div>

			<IntroProfileModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>

			<LanguageProfileModal
				isOpen={isLanguagePopUpActive}
				onClose={handleCloseLanguageModal}
			/>

			<VideoProfileModal
				isOpen={isVideoPopUpActive}
				onClose={handleVideoClick}
			/>
		</div>
	);
};

export default IntroTalentSection;
