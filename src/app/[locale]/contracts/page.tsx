import Link from "next/link";
import ContractCard from "./components/ContractCard";
import { Search } from "@/app/shared/ui-kit/Search";
import { mockContracts } from "./data/mockContracts";

const page = () => {
	return (
		<div className="2xl:w-[1430px] xl:w-[1200px] w-[780px] mx-auto ">
			<div className="mt-8 mb-14 flex justify-between items-center px-8 border-2 border-[#CBEC5E] rounded-2xl h-[116px]">
				<h1 className="text-[40px] font-medium">My contracts</h1>
				<p className="text-[#545454] text-2xl">
					Total payment now: <span>3K</span>
				</p>
			</div>
			<div className="flex flex-col xl:px-0 px-[15px]">
				<div className="flex items-center justify-between">
				<div className="max-w-[252px] flex flex-col justify-between text-[#18470D]">
					<h1 className="font-medium text-3xl">Active Contracts</h1>
					
				</div><div>
						<Search />
					</div>
				</div>
				<div className="flex flex-wrap items-start justify-between mt-8 mb-8">
					
					<ul className="space-y-5 text-[16px] font-normal mb-8">
						<li>
							<Link href={""}>All contracts(3)</Link>
						</li>
						<li>
							<Link href={""}>Active Milestones(4)</Link>
						</li>
						<li>
							<Link href={""}>Awaiting Milestones(6)</Link>
						</li>
					</ul>
					<div className="2xl:!w-[1080px] xl:w-[873px] w-full min-w-[375px] max-w-[1080px] space-y-8">
						{mockContracts?.map(contract => (
							<ContractCard key={contract.id} contract={contract} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
