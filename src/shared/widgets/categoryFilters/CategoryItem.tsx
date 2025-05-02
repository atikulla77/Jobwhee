"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { GreenCheckIcon } from "../../../../public/icons/GreenCheck";
import { CheckIcon } from "../../../../public/icons/CheckIcon";
import CheckBox from "@/shared/ui-kit/CheckBox";

interface CategoryFilterProps {
	setSelectedCategory: Dispatch<SetStateAction<string[]>>;
	selectedCategory: string[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
	setSelectedCategory,
	selectedCategory,
}) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(true);
	const [isSelectCategoryOpen, setSelectCategoryOpen] = useState(false);

	const categories = ["Category 1", "Category 2", "Category 3"];

	const handleSelectCategory = (category: string) => {
		// setSelectedCategory(category);
		// setSelectCategoryOpen(false); // Close the dropdown after selection
		if (selectedCategory.includes(category)) {
			setSelectedCategory(selectedCategory.filter(item => item !== category));
		} else {
			setSelectedCategory([...selectedCategory, category]);
		}
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 mt-[45px] sm:mt-0">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsCategoryOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">Category</p>
				<div className={` ${isCategoryOpen ? " " : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isCategoryOpen
						? "max-h-48 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<div
					onClick={() => setSelectCategoryOpen(prev => !prev)}
					className="cursor-pointer max-w-[340px] w-full h-[42px] border border-[#AEB3BC] rounded-[12px] flex justify-between items-center px-[8px]">
					<p className="text-[16px] text-[#8B939F]">
						{selectedCategory.length
							? selectedCategory.join(", ")
							: "Select Category"}
					</p>
				</div>

				<div
					className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out pb-5 ${
						isSelectCategoryOpen
							? "max-h-48 opacity-100 scale-y-100"
							: "max-h-0 opacity-0 scale-y-95"
					}`}>
					<ul className="border border-gray-300 rounded-lg p-2 bg-white drop-shadow-sm text-[16px] text-[#565E69]">
						{categories.map(category => (
							<li
								key={category}
								onClick={() => handleSelectCategory(category)}
								className={`cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center gap-[10px] ${
									selectedCategory.includes(category) ? "bg-gray-200" : ""
								}`}>
								{<CheckBox isActive={selectedCategory.includes(category)} />}
								{category}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
