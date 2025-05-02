"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { GreenCheckIcon } from "../../../../public/icons/GreenCheck";
import { CheckIcon } from "../../../../public/icons/CheckIcon";
import { CheckboxIcon } from "@/components/UserHeader/Checkbox";

interface SubCategoryFilterProps {
	setSelectedSubcategory: Dispatch<SetStateAction<string[]>>;
	selectedSubcategory: string[] | null;
}

export const SubCategoryFilter: React.FC<SubCategoryFilterProps> = ({
	setSelectedSubcategory,
	selectedSubcategory,
}) => {
	const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(true);
	const [isSelectSubcategoryOpen, setSelectSubcategoryOpen] = useState(false);

	const subcategories = ["Subcategory 1", "Subcategory 2", "Subcategory 3"];

	const handleSelectSubcategory = (subcategory: string) => {
		console.log(selectedSubcategory);
		// setSelectedSubcategory(subcategory);
		// setSelectSubcategoryOpen(false); // Close dropdown after selection
		if (selectedSubcategory?.includes(subcategory)) {
			setSelectedSubcategory(
				selectedSubcategory.filter((item: string) => item !== subcategory)
			);
		} else {
			setSelectedSubcategory([...selectedSubcategory, subcategory]);
		}
	};

	return (
		<div className="max-w-[362px] w-full sm:pl-10 sm:mt-[30px]">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsSubcategoryOpen(prev => !prev)}>
				<p className="font-medium text-[20px] text-[#18470D]">Subcategory</p>
				<div
					className={`${isSubcategoryOpen ? "" : "rotate-180"} duration-300`}>
					<GreenCheckIcon />
				</div>
			</div>
			<div
				className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isSubcategoryOpen
						? "max-h-48 opacity-100 scale-y-100"
						: "max-h-0 opacity-0 scale-y-95"
				}`}>
				<div
					onClick={() => setSelectSubcategoryOpen(prev => !prev)}
					className="cursor-pointer max-w-[340px] w-full h-[42px] border border-[#AEB3BC] rounded-[12px] flex justify-between items-center px-[8px]">
					<p className="text-[16px] text-[#8B939F] text-nowrap overflow-ellipsis overflow-hidden">
						{selectedSubcategory?.length
							? selectedSubcategory.join(", ")
							: "Select Subcategory"}
					</p>
					<CheckIcon />
				</div>

				<div
					className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out pb-5 ${
						isSelectSubcategoryOpen
							? "max-h-48 opacity-100 scale-y-100"
							: "max-h-0 opacity-0 scale-y-95"
					}`}>
					<ul className="border border-gray-300 rounded-lg p-2 bg-white drop-shadow-sm text-[16px] text-[#565E69]">
						{subcategories.map(subcategory => (
							<li
								key={subcategory}
								onClick={() => handleSelectSubcategory(subcategory)}
								className={`cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center gap-[10px] ${
									selectedSubcategory?.includes(subcategory)
										? "bg-gray-200"
										: ""
								}`}>
								<CheckboxIcon
									isActive={selectedSubcategory?.includes(subcategory) || false}
								/>
								{subcategory}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
