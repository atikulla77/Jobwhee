"use client";

import { useState } from "react";
import { GreenCheckIcon } from "../../../public/icons/GreenCheck";
import { CheckboxIcon } from "@/components/UserHeader/Checkbox";

interface ScopeFilterProps {
	selectedScope: string[];
	setSelectedScope: (scope: string[]) => void;
}

export const ScopeFilter: React.FC<ScopeFilterProps> = ({
	selectedScope,
	setSelectedScope,
}) => {
	const [isProjectScopeOpen, setIsProjectScopeOpen] = useState(true);

	const scopeOptions = [
		"one-time",
		"Less than one month",
		"1-3 months",
		"3 to 6 months",
		"More than 6 months",
	];

	const handleSelectScope = (option: string) => {
		if (selectedScope.includes(option)) {
			setSelectedScope(selectedScope.filter(scope => scope !== option));
		} else {
			setSelectedScope([...selectedScope, option]);
		}
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 mt-5 sm:mt-[30px]">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsProjectScopeOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">Project Scope</p>
				<div
					className={`${isProjectScopeOpen ? "" : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isProjectScopeOpen
						? "max-h-64 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<ul className="rounded-lg p-2 bg-white shadow-md">
					{scopeOptions.map(option => (
						<li
							key={option}
							onClick={() => handleSelectScope(option)}
							className="cursor-pointer hover:bg-gray-100 p-2 rounded flex text-[18px] items-center gap-2">
							<CheckboxIcon isActive={selectedScope.includes(option)} />
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
