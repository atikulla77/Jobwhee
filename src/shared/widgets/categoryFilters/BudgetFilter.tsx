"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { GreenCheckIcon } from "../../../../public/icons/GreenCheck";
import { CheckboxIcon } from "@/components/UserHeader/Checkbox";

interface BudgetFilterProps {
	selectedBudgets: string[];
	setSelectedBudgets: Dispatch<SetStateAction<string[]>>;
}

export const BudgetFilter: React.FC<BudgetFilterProps> = ({
	selectedBudgets,
	setSelectedBudgets,
}) => {
	const [isBudgetOpen, setIsBudgetOpen] = useState(true);
	const [customMin, setCustomMin] = useState("");
	const [customMax, setCustomMax] = useState("");

	const budgetOptions = [
		"Less than $100",
		"$100 to $500",
		"$500 to $1K",
		"$1K to $5K",
		"$5K+",
	];

	const toggleBudgetSelection = (budget: string) => {
		// Clear min/max if any budget option is selected
		setCustomMin("");
		setCustomMax("");

		setSelectedBudgets((prevSelected: string[]) => {
			// prevSelected.includes(budget)
			//   ? prevSelected.filter((b) => b !== budget) // Unselect
			//   : [budget] // Allow only one selection

			if (prevSelected.includes(budget)) {
				return prevSelected.filter(item => item !== budget);
			} else {
				return [...prevSelected, budget];
			}
		});
		console.log(selectedBudgets);
	};

	const handleCustomInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "min" | "max"
	) => {
		const value = e.target.value;

		if (type === "min") {
			setCustomMin(value);
		} else {
			setCustomMax(value);
		}

		// If custom input is entered, clear all selected budget checkboxes
		if (value !== "") {
			setSelectedBudgets([]);
		}
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 mt-5 sm:mt-[30px]">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsBudgetOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">Budget</p>
				<div className={`${isBudgetOpen ? "" : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isBudgetOpen
						? "max-h-80 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<ul className="rounded-lg p-2 bg-white shadow-md">
					{budgetOptions.map(budget => (
						<li
							key={budget}
							onClick={() => toggleBudgetSelection(budget)}
							className="cursor-pointer hover:bg-gray-100 p-2 rounded flex text-[18px] items-center gap-2">
							<CheckboxIcon isActive={selectedBudgets.includes(budget)} />
							{budget}
						</li>
					))}

					<li
						className="cursor-pointer p-2 rounded flex text-[16px] items-center gap-2"
						onClick={() => toggleBudgetSelection("")}>
						<CheckboxIcon isActive={customMin !== "" || customMax !== ""} />
						<div className="flex items-center gap-[10px]">
							<input
								className="max-w-[144px] w-full h-[42px] outline-none border rounded-[12px] pl-2 text-[#8B939F]"
								placeholder="$Min"
								value={customMin}
								onChange={e => handleCustomInput(e, "min")}
							/>
							<input
								className="max-w-[144px] w-full h-[42px] outline-none border rounded-[12px] pl-2 text-[#8B939F]"
								placeholder="$Max"
								value={customMax}
								onChange={e => handleCustomInput(e, "max")}
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
