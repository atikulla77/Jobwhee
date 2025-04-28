"use client";

import { useState } from "react";
import ContractCard from "./components/ContractCard";
import { Search } from "@/app/shared/ui-kit/Search";
import { mockContracts } from "./data/mockContracts";

const Page = () => {
	const [search, setSearch] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	// Filter contracts
	const filteredContracts = mockContracts.filter(contract => {
		// filtering Category
		const matchesCategory =
			selectedCategory === "all" ||
			(selectedCategory === "active" &&
				["ongoing", "pending"].includes(contract.status)) ||
			(selectedCategory === "awaiting" && contract.status === "dispute");

		// Search filtering by title
		const matchesSearch = contract.title
			.toLowerCase()
			.includes(search.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	// handle category
	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
	};

	// Calculate counts for each category (based on filtered contracts)
	const allContractsCount = mockContracts.filter(contract =>
		contract.title.toLowerCase().includes(search.toLowerCase())
	).length;
	const activeMilestonesCount = mockContracts.filter(
		contract =>
			["ongoing", "pending"].includes(contract.status) &&
			contract.title.toLowerCase().includes(search.toLowerCase())
	).length;
	const awaitingMilestonesCount = mockContracts.filter(
		contract =>
			contract.status === "dispute" &&
			contract.title.toLowerCase().includes(search.toLowerCase())
	).length;

	return (
		<div className="max-w-[375px] sm:max-w-[780px] xl:max-w-[1200px] 2xl:max-w-[1430px] mx-auto ">
			<div className="mt-8 2xl:mb-[50px] mb-[40px] sm:max-w-full mx-auto sm:flex sm:justify-between sm:items-center sm:pl-[26px] pl-4 2xl:pr-8 pr-[28px] py-4 border-2 border-[#CBEC5E] rounded-2xl h-auto sm:h-[116px]">
				<h1 className="text-[20px] sm:text-[40px] font-medium">My contracts</h1>
				<p className="text-[#545454] text-[14px] sm:text-2xl mt-2 sm:mt-0 tracking-[0.2px] mr-[-2px]">
					Total payment now: <span className="tracking-[-0.5px] ml-[3px]">3K</span>
				</p>
			</div>
			<div className="flex flex-col px-4 sm:px-[15px] xl:px-0">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="text-[#18470D]">
						<h1 className="font-medium xl:text-3xl text-2xl">
							Active Contracts
						</h1>
					</div>
					<div className="2xl:!w-[1080px] xl:!w-[873px] sm:w-[487px] w-full order-first sm:order-last">
						<Search setSearch={setSearch} />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row flex-wrap sm:items-start sm:justify-between 2xl:mt-[68px] mt-[40px] mb-20 gap-6 sm:gap-0">
					<ul className="2xl:space-y-[15px] space-y-[16px] text-sm sm:text-[16px] font-normal mb-4 sm:mb-8">
						<li>
							<button
								onClick={() => handleCategoryChange("all")}
								className={`hover:text-[#18470D] transition-colors cursor-pointer ${
									selectedCategory === "all"
										? "text-[#18470D]"
										: "text-[#545454]"
								}`}>
								All contracts({allContractsCount})
							</button>
						</li>
						<li>
							<button
								onClick={() => handleCategoryChange("active")}
								className={`hover:text-[#18470D] transition-colors cursor-pointer ${
									selectedCategory === "active"
										? "text-[#18470D]"
										: "text-[#545454]"
								}`}>
								Active Milestones({activeMilestonesCount})
							</button>
						</li>
						<li>
							<button
								onClick={() => handleCategoryChange("awaiting")}
								className={`hover:text-[#18470D] transition-colors cursor-pointer ${
									selectedCategory === "awaiting"
										? "text-[#18470D]"
										: "text-[#545454]"
								}`}>
								Awaiting Milestones({awaitingMilestonesCount})
							</button>
						</li>
					</ul>
					<div className="2xl:!w-[1080px] xl:w-[873px] w-[100%] grid gap-[30px]">
						{filteredContracts.length > 0 ? (
							filteredContracts.map(contract => (
								<ContractCard key={contract.id} contract={contract} />
							))
						) : (
							<p className="text-[#545454] text-[16px]">
								No contracts found for this category or search.
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
