"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { GreenCheckIcon } from "../../../../public/icons/GreenCheck";
import { CheckboxIcon } from "@/components/UserHeader/Checkbox";

interface ProposalsFilterProps {
	selectedProposal: string[];
	setSelectedProposal: Dispatch<SetStateAction<string[]>>;
}

export const ProposalsFilter: React.FC<ProposalsFilterProps> = ({
	selectedProposal,
	setSelectedProposal,
}) => {
	const [isProposalsOpen, setIsProposalsOpen] = useState(true);

	const proposalOptions = ["No Hires", "1-9 hires", "10+ hires"];

	const handleSelectProposal = (option: string) => {
		console.log(selectedProposal);
		// setSelectedProposal(option === selectedProposal ? null : option); // Toggle selection
		if (selectedProposal.includes(option)) {
			setSelectedProposal(selectedProposal.filter(item => item !== option));
		} else {
			setSelectedProposal([...selectedProposal, option]);
		}
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 mt-[30px]">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsProposalsOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">
					Number of Proposals
				</p>
				<div className={`${isProposalsOpen ? "" : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isProposalsOpen
						? "max-h-40 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<ul className="rounded-lg p-2 bg-white shadow-md">
					{proposalOptions.map(option => (
						<li
							key={option}
							onClick={() => handleSelectProposal(option)}
							className="cursor-pointer hover:bg-gray-100 p-2 rounded flex text-[18px] items-center gap-2">
							<CheckboxIcon isActive={selectedProposal.includes(option)} />
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
