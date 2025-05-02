"use client";

import { CategoryFilter } from "@/shared/widgets/categoryFilters/CategoryItem";
import { SubCategoryFilter } from "@/shared/widgets/categoryFilters/SubCategoryFilter";
import { ExperienceFilter } from "@/shared/widgets/categoryFilters/ExperienceFilter";
import { BudgetFilter } from "@/shared/widgets/categoryFilters/BudgetFilter";
import { ProposalsFilter } from "@/shared/widgets/categoryFilters/PropoSalsFilter";
import { ScopeFilter } from "@/shared/widgets/categoryFilters/ScopeFilter";
import { Xicon } from "../../../../public/icons/Xicon";
import { Dispatch, SetStateAction, useState } from "react";

type FreeLancerFilterProps = {
	isMobileFilterActive: boolean;
	handleFilterClick: () => void;
	selectedCategory: string[];
	setSelectedCategory: Dispatch<SetStateAction<string[]>>;
	selectedSubcategory: string[];
	setSelectedSubcategory: Dispatch<SetStateAction<string[]>>;
	selectedExperience: string[]; // Corrected from string|null to string[]
	setSelectedExperience: Dispatch<SetStateAction<string[]>>; // Corrected
	selectedBudgets: string[];
	setSelectedBudgets: Dispatch<SetStateAction<string[]>>;
	selectedProposal: string[];
	setSelectedProposal: Dispatch<SetStateAction<string[]>>;
	selectedScope: string[]; // Corrected from string|null to string[]
	setSelectedScope: Dispatch<SetStateAction<string[]>>; // Corrected
};

export const FreeLancerFilter: React.FC<FreeLancerFilterProps> = ({
	isMobileFilterActive,
	handleFilterClick,
	selectedCategory,
	setSelectedCategory,
	selectedSubcategory,
	setSelectedSubcategory,
	selectedExperience,
	setSelectedExperience,
	selectedBudgets,
	setSelectedProposal,
	setSelectedBudgets,
	selectedProposal,
	setSelectedScope,
	selectedScope,
}) => {
	return (
		<>
			<div
				onClick={() => handleFilterClick()}
				className={` top-0 left-0 duration-300 h-screen w-full bg-black  z-30 transform opacity-50 ${
					isMobileFilterActive ? " fixed" : " hidden"
				} `}></div>
			<div
				className={`fixed bottom-0 left-0 duration-500 h-[750px] w-full  bg-white rounded-t-[24px] z-40 px-5 overflow-y-scroll transform ${
					isMobileFilterActive ? "translate-y-0" : "translate-y-full"
				}`}>
				<div className=" flex items-center justify-between mt-[30px]">
					<p className=" text-[30px] text-[#18470D]">Filter By</p>
					<div onClick={() => handleFilterClick()} className=" ">
						<Xicon />
					</div>
				</div>

				<div className="w-full max-w-[334px] mx-auto  overflow-y-scroll">
					<CategoryFilter
						setSelectedCategory={setSelectedCategory}
						selectedCategory={selectedCategory}
					/>

					<SubCategoryFilter
						setSelectedSubcategory={setSelectedSubcategory}
						selectedSubcategory={selectedSubcategory}
					/>

					<ExperienceFilter
						selectedExperience={selectedExperience}
						setSelectedExperience={setSelectedExperience}
					/>

					<BudgetFilter
						selectedBudgets={selectedBudgets}
						setSelectedBudgets={setSelectedBudgets}
					/>

					<ProposalsFilter
						selectedProposal={selectedProposal}
						setSelectedProposal={setSelectedProposal}
					/>

					<ScopeFilter
						selectedScope={selectedScope}
						setSelectedScope={setSelectedScope}
					/>
				</div>
			</div>

			<div className="w-full max-w-[440px] hidden lg:block">
				<CategoryFilter
					setSelectedCategory={setSelectedCategory}
					selectedCategory={selectedCategory}
				/>

				<SubCategoryFilter
					setSelectedSubcategory={setSelectedSubcategory}
					selectedSubcategory={selectedSubcategory}
				/>

				<ExperienceFilter
					selectedExperience={selectedExperience}
					setSelectedExperience={setSelectedExperience}
				/>

				<BudgetFilter
					selectedBudgets={selectedBudgets}
					setSelectedBudgets={setSelectedBudgets}
				/>

				<ProposalsFilter
					selectedProposal={selectedProposal}
					setSelectedProposal={setSelectedProposal}
				/>

				<ScopeFilter
					selectedScope={selectedScope}
					setSelectedScope={setSelectedScope}
				/>
			</div>
		</>
	);
};
