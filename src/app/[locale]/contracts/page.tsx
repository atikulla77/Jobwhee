"use client";

import { useState } from "react";
import { mockContracts } from "./data/mockContracts";
import { Search } from "@/shared/ui-kit/Search";
import ContractCard from "@/shared/widgets/ContractCard/ContractCard";

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
		<div className="max-w-[335px] md:max-w-[780px] xl:max-w-[1200px] 2xl:max-w-[1430px] mx-auto [@media(min-width:835px)]:px-0 md:px-[10px] px-0">
			<div className="mt-8 2xl:mb-[50px] xl:mb-[40px] md:mb-[50px] mb-[30px] md:max-w-full mx-auto flex flex-wrap md:justify-between justify-start items-center xl:pl-[26px] md:pl-[19px] pl-[15px] 2xl:pr-8 xl:pr-[29px] pr-[23px] border-2 border-[#CBEC5E] rounded-2xl xl:h-[116px] md:h-[82px] h-[85px] md:py-0 py-[10px]">
				<h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
					My contracts
				</h1>
				<p className="text-[#545454] xl:text-2xl md:text-[16px] text-[14px] xl:tracking-[0.2px] md:tracking-[0.1px] tracking-[0px] xl:mr-0 md:mr-[-2px] mr-0 md:w-fit w-full">
					Total payment now:{" "}
					<span className="tracking-[-0.5px] ml-[3px]">3K</span>
				</p>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row xl:items-center items-start md:justify-between md:gap-4 gap-[20px]">
					<div className="text-[#18470D]">
						<h1 className="font-medium xl:text-3xl md:text-[24px] text-[20px]">
							Active Contracts
						</h1>
					</div>
					<div className="2xl:!w-[1080px] xl:!w-[873px] md:w-[487px] w-full order-first md:order-last">
						<Search setSearch={setSearch} />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row flex-wrap md:items-start md:justify-between 2xl:mt-[68px] xl:mt-[40px] md:mt-[20px] mt-[14px] mb-20">
					<ul className="2xl:space-y-[15px] xl:space-y-[16px] md:space-y-[13px] space-y-[8px] text-[16px] font-normal xl:mb-8 md:mb-[60px] mb-[20px]">
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
					<div className="2xl:!w-[1080px] xl:w-[873px] w-[100%] grid xl:gap-[30px] gap-[10px]">
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
