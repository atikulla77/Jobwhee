"use client";
import { TextArea } from "@/shared/ui-kit/TextArea";
import Button from "@/shared/ui-kit/Button";
import { useState } from "react";
import Dropdown from "@/shared/ui-kit/Dropdown";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import EndContractModal from "./EndContractModal";
import FeedbackDropdown from "./FeedbackDropdown";
import StarRating from "@/shared/ui-kit/StarRating";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SuccessModal from "../contracts/modals/SuccessModal";

const EndContractExperience = () => {
	const router = useRouter();
	const [
		showContractSuccessfullyCompleted,
		setShowContractSuccessfullyCompleted,
	] = useState(false);

	const clientDropDownListData = [
		{ id: 1, title: "The job has been completed successfully" },
		{ id: 2, title: "The talent wasn’t the right fit" },
		{
			id: 3,
			title: "The talent didn’t meet the expected quality or timelines",
		},
		{
			id: 4,
			title: "We changed direction or paused the project",
		},
		{ id: 5, title: "We had communication issues" },
		{ id: 6, title: "Budget issues — we had to stop" },
		{
			id: 7,
			title: "We found someone better suited for the job",
		},
		{ id: 8, title: "The talent stopped responding" },
	];
	const talentDropDownListData = [
		{ id: 1, title: "The job has been completed and successfully delivered." },
		{ id: 2, title: "I had difficulties working with the client." },
		{
			id: 3,
			title: "TThe client no longer requires the job.",
		},
		{
			id: 4,
			title: "I’m no longer available to continue the job.",
		},
		{ id: 5, title: "The job no longer matches my skills or expectations." },
		{ id: 6, title: "The contract needs to be reviewed or updated." },
		{
			id: 7,
			title: "The scope of the job has changed significantly.",
		},
		{ id: 8, title: "The client has stopped responding." },
	];

	const [dropDownData, setDropDrownData] = useState(talentDropDownListData);
	const [selectedItem, setSelectedItem] = useState("");

	const [ratings, setRatings] = useState({
		skills: 0,
		communication: 0,
		availability: 0,
		quality: 0,
		timeliness: 0,
		cooperation: 0,
	});
	const handleCancelEndContract = () => {
		router.push("/local/contracts");
	};
	const handleRatingChange = (category: string, value: number) => {
		setRatings(prev => ({ ...prev, [category]: value }));
	};

	const totalScore =
		Object.values(ratings).reduce((acc, cur) => acc + cur, 0) /
		Object.keys(ratings).length;

	const clientFeedback = [
		{ key: "skills", label: "Skills" },
		{ key: "communication", label: "Communication" },
		{ key: "availability", label: "Availability" },
		{ key: "quality", label: "Quality of Work" },
		{ key: "timeliness", label: "Timeliness" },
		{ key: "cooperation", label: "Cooperation" },
	];
	const talentFeedback = [
		{ key: "communication", label: "Communication" },
		{ key: "clarity", label: "Clarity of Expectations" },
		{ key: "payment", label: "Payment Timeliness" },
		{ key: "professionalism", label: "Professionalism" },
		{ key: "responsiveness", label: "Responsiveness" },
		{ key: "cooperation", label: "Cooperation" },
	];
	return (
		<>
			<div className="xl:w-fit w-full">
				<h1 className="md:text-[30px] text-[20px] text-[#18470D] font-[500] md:pb-[16px] pb-[12px]">
					End Contract
				</h1>
				<p className="md:w-[663px] w-full md:text-[16px] text-[14px] xl:pb-[38px] md:pb-[44px] pb-[24px]">
					Your feedback for Maria T. will be visible after they submit theirs or
					when the 14-day feedback period ends. Your input helps others make
					better choices.
				</p>

				<div className="xl:w-[620px] w-[100%] xl:mb-[45px] md:mb-[20px] mb-[25px]">
					<FeedbackDropdown
						dropDownData={dropDownData}
						setDropDrownData={setDropDrownData}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
				</div>

				<div className="flex flex-col md:gap-[23px] gap-[28px] md:mb-[26px] mb-[32px]">
					{clientFeedback.map(({ key, label }) => (
						<div key={key} className="w-full flex items-center gap-[10px]">
							<StarRating
								rating={ratings[key as keyof typeof ratings]}
								onChange={value => handleRatingChange(key, value)}
								width={23}
								height={23}
								responsiveWidthHeight="md:w-[23px] !w-[25px]"
							/>
							<h3 className="md:text-[20px] text-[14px] text-[#545454]">
								{label}
							</h3>
						</div>
					))}
				</div>

				{/* Total score */}
				<h1 className="text-[20px] mb-[24px]">
					Total score: {isNaN(totalScore) ? "0.0" : totalScore.toFixed(1)}
				</h1>

				<div className="space-y-[8px] xl:mb-[27px] md:mb-[46px] mb-[54px]">
					<p className="text-[18px] text-[#545454]">Feedback</p>
					<TextArea
						placeholder="Give a feedback"
						width={"620px"}
						height={"146px"}
						responsiveWidthHeight="xl:!w-[620px] !w-[100%] !h-[146px]"
					/>
				</div>

				{/* Buttons */}
				<div className="xl:w-[620px] w-full flex md:flex-row flex-col-reverse md:justify-end justify-center md:gap-[8px] gap-[12px]">
					<div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
						<Button
							onClick={() => handleCancelEndContract()}
							type="nonBorder"
							action="Cancel"
						/>
					</div>
					<div className="md:w-[200px] w-full md:h-[48px] h-[40px]">
						<Button
							onClick={() => setShowContractSuccessfullyCompleted(true)}
							type="active"
							action="End Contract"
						/>
					</div>
				</div>
			</div>

			{/*Success Modal */}
			{showContractSuccessfullyCompleted && (
				<GlobalModal
					isOpen={showContractSuccessfullyCompleted}
					onClose={() => setShowContractSuccessfullyCompleted(false)}
					classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[417px] h-[428px] md:px-[38px]  px-[24px]">
					<SuccessModal
						setShowContractSuccessfullyCompleted={
							setShowContractSuccessfullyCompleted
						}
					/>
				</GlobalModal>
			)}
		</>
	);
};

export default EndContractExperience;
