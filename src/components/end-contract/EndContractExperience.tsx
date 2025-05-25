"use client";
import { useState } from "react";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import FeedbackDropdown from "./FeedbackDropdown";
import { useRouter } from "next/navigation";
import SuccessModal from "../contracts/modals/SuccessModal";
import StarRating from "../contracts/StarRating";
import Button from "../contracts/Button";
import { TextArea } from "../contracts/TextArea";

const EndContractExperience = ({ contractId }: any) => {
	const router = useRouter();
	const [
		showContractSuccessfullyCompleted,
		setShowContractSuccessfullyCompleted,
	] = useState(false);
	const [endContractErrors, setEndContractErrors] = useState({
		reason: "",
		ratings: "",
		description: "",
	});
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
			title: "The client no longer requires the job.",
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

	const talentFeedback = [
		{ key: "skills", label: "Skills" },
		{ key: "communication", label: "Communication" },
		{ key: "availability", label: "Availability" },
		{ key: "quality", label: "Quality of Work" },
		{ key: "timeliness", label: "Timeliness" },
		{ key: "cooperation", label: "Cooperation" },
	];
	const clientFeedback = [
		{ key: "communication", label: "Communication" },
		{ key: "clarity", label: "Clarity of Expectations" },
		{ key: "payment", label: "Payment Timeliness" },
		{ key: "professionalism", label: "Professionalism" },
		{ key: "responsiveness", label: "Responsiveness" },
		{ key: "cooperation", label: "Cooperation" },
	];

	// Determine feedback type based on dropDownData
	const [dropDownData, setDropDownData] = useState(talentDropDownListData);
	const isClientFeedback = dropDownData === clientDropDownListData;
	const feedbackCategories = isClientFeedback ? clientFeedback : talentFeedback;

	// Initialize ratings with keys from the current feedback type
	const initialRatings = feedbackCategories.reduce(
		(acc, { key }) => ({ ...acc, [key]: 0 }),
		{} as Record<string, number>
	);
	const [ratings, setRatings] = useState(initialRatings);
	const [selectedItem, setSelectedItem] = useState("");
	const [isDescription, setIsDescription] = useState("");
	const handleCancelEndContract = () => {
		router.push(`/contracts`);
	};

	const handleRatingChange = (category: string, value: number) => {
		setRatings(prev => ({ ...prev, [category]: value }));
	};

	// Calculate total score based on current feedback categories
	const totalScore =
		feedbackCategories.length > 0
			? feedbackCategories.reduce(
					(acc, { key }) => acc + (ratings[key] || 0),
					0
			  ) / feedbackCategories.length
			: 0;

	const handleEndContractSubmit = () => {
		let errors = {
			reason: "",
			ratings: "",
			description: "",
		};

		// Check if reason is selected
		if (!selectedItem) {
			errors.reason = "Please select a reason for ending the contract.";
		}

		// Check if all ratings are given (not 0)
		const ratingValues = Object.values(ratings);
		const allRated = ratingValues.every(value => value > 0);

		if (!allRated) {
			errors.ratings = "Please rate all categories before submitting.";
		}

		setEndContractErrors(errors);

		// If there are any errors, prevent submission
		if (errors.reason || errors.ratings || errors.description) return;

		const data = {
			reason: selectedItem,
			ratings,
			score: totalScore,
			description: isDescription,
		};

		setShowContractSuccessfullyCompleted(true);
	};
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
						setDropDrownData={setDropDownData}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					{endContractErrors.reason && (
						<p className="text-red-500 text-sm mt-1">
							{endContractErrors.reason}
						</p>
					)}
				</div>

				<div>
					<div className="flex flex-col md:gap-[23px] gap-[28px] md:mb-[26px] mb-[32px]">
						{feedbackCategories.map(({ key, label }) => (
							<div key={key} className="w-full flex items-center gap-[10px]">
								<StarRating
									rating={ratings[key] || 0}
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
					{endContractErrors.ratings && (
						<p className="text-red-500 text-sm mt-1">
							{endContractErrors.ratings}
						</p>
					)}
				</div>

				{/* Total score */}
				<h1 className="text-[20px] mb-[24px]">
					Total score: {isNaN(totalScore) ? "0.0" : totalScore.toFixed(1)}
				</h1>

				<div className="space-y-[8px] xl:mb-[27px] md:mb-[46px] mb-[54px]">
					<p className="text-[18px] text-[#545454]">Feedback</p>
					<TextArea
						onChange={val => setIsDescription(val)}
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
							onClick={handleEndContractSubmit}
							type="active"
							action="End Contract"
						/>
					</div>
				</div>
			</div>

			{/* Success Modal */}
			{showContractSuccessfullyCompleted && (
				<GlobalModal
					isOpen={showContractSuccessfullyCompleted}
					onClose={() => setShowContractSuccessfullyCompleted(false)}
					classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[417px] h-[428px] md:px-[38px] px-[24px]">
					<SuccessModal
						handleCancelEndContract={handleCancelEndContract}
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
