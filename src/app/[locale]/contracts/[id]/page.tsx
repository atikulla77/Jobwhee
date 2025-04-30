"use client";
import ContractTabs from "@/app/shared/widgets/ContractTabs/ContractTabs";
import ContractHeader from "../../../../components/contract-overview/ContractHeader";
import { mockContractDetail } from "./data/mockContractDetail";
import FinancialSummary from "@/app/shared/widgets/FinancialSummary/FinancialSummary";
import MilestoneTimeline from "@/components/contract-overview/MilestoneTimeline";
import { useState } from "react";

const page = () => {
	const [activeTab, setActiveTab] = useState<string>("Overview");

	return (
		<div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] mx-auto [@media(min-width:835px)]:px-0 md:px-[10px] px-0">
			<div className="2xl:mb-[30px] mb-[20px] mt-8">
				<ContractHeader contract={mockContractDetail} />
			</div>
			<div className="2xl:mb-[30px] mb-[20px] overflow-x-auto">
				<ContractTabs activeTab={activeTab} setActiveTab={setActiveTab} />
			</div>
			<div className="2xl:mb-[50px] xl:mb-[40px] md:mb-[21px] mb-[13px]">
				<FinancialSummary contract={mockContractDetail} />
			</div>
			{(activeTab === "Overview" && (
				<>
					<div className="mb-[30px]">
						<MilestoneTimeline contract={mockContractDetail} />
					</div>
				</>
			)) ||
				(activeTab === "Messages" && (
					<>
						<h1 className="text-2xl text-center text-red-500">
							Message is under constructions!
						</h1>
					</>
				)) ||
				(activeTab === "Contract Details" && (
					<>
						<h1 className="text-2xl text-center text-red-500">
							Contract Details is under constructions!
						</h1>
					</>
				))}
		</div>
	);
};

export default page;
