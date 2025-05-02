"use client";

import { useState } from "react";
import { GreenCheckIcon } from "../../../../public/icons/GreenCheck";
import CheckBox from "@/shared/ui-kit/CheckBox";

interface ExperienceFilterProps {
	selectedExperience: string[];
	setSelectedExperience: (experience: string[]) => void;
}

export const ExperienceFilter: React.FC<ExperienceFilterProps> = ({
	selectedExperience,
	setSelectedExperience,
}) => {
	const [isExperienceOpen, setIsExperienceOpen] = useState(true);

	const experienceLevels = ["Entry", "Intermediate", "Expert"];

	const handleSelectExperience = (level: string) => {
		if (selectedExperience.includes(level)) {
			setSelectedExperience(selectedExperience.filter(item => item !== level));
		} else {
			setSelectedExperience([...selectedExperience, level]);
		}

		console.log(selectedExperience);
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 sm:mt-[30px]">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsExperienceOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">
					Experience Level
				</p>
				<div className={`${isExperienceOpen ? "" : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isExperienceOpen
						? "max-h-40 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<ul className="rounded-lg p-2 bg-white shadow-md">
					{experienceLevels.map(level => (
						<li
							key={level}
							onClick={() => handleSelectExperience(level)}
							className={`cursor-pointer hover:bg-gray-100 p-2 rounded flex text-[18px] items-center gap-2 ${
								selectedExperience.includes(level) ? "bg-gray-200" : ""
							}`}>
							<CheckBox isActive={selectedExperience.includes(level)} />
							{level}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
