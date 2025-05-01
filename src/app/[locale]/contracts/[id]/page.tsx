"use client";
import ContractHeader from "@/components/contract-overview/ContractHeader";
import { mockContractDetail } from "./data/mockContractDetail";
import MilestoneTimeline from "@/components/contract-overview/MilestoneTimeline";
import { useState } from "react";
import ContractCompletedTimeline from "@/components/contract-overview/ContractCompletedTimeline";
import ContractTabs from "@/shared/widgets/ContractTabs/ContractTabs";
import ContractMetaRow from "@/components/contract-overview/ContractMetaRow";

const page = () => {
	const [activeTab, setActiveTab] = useState<string>("Overview");
	const [isCompleted, setIsCompleted] = useState<string>("completed");

	return (
		<div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] mx-auto [@media(min-width:835px)]:px-0 md:px-[10px] px-0">
			<div className={`${isCompleted === "completed"? "2xl:mb-[30px] xl:mb-[20px] md:mb-[10px] mb-[20px]":"2xl:mb-[30px] mb-[20px]"} mt-8`}>
				<ContractHeader contract={mockContractDetail} />
			</div>
			<div className={`${isCompleted === "completed"? "2xl:mb-[30px] xl:mb-[20px] md:mb-[10px] mb-[20px]":"2xl:mb-[30px] mb-[20px]"}`}>
				<ContractTabs activeTab={activeTab} setActiveTab={setActiveTab} />
			</div>
			{/*  Here will be logical part for contract is completed and it come from database you know, for checking i just set overview but here will conditional like contract completed*/}

			<div className="mb-[30px]">
				{(activeTab === "Overview" && (
					<>
						{isCompleted === "completed" ? (
							<div className="">
								<ContractCompletedTimeline contract={mockContractDetail} />
							</div>
						) : (
							<div>
								<div className="2xl:mb-[50px] xl:mb-[40px] md:mb-[21px] mb-[13px]">
									<ContractMetaRow contract={mockContractDetail} />
								</div>
								<div>
									<MilestoneTimeline contract={mockContractDetail} />
								</div>
							</div>
						)}
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
		</div>
	);
};

export default page;
