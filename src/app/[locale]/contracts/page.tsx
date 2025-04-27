import Link from "next/link";
import ContractCard from "./components/ContractCard";
import { Search } from "@/app/shared/ui-kit/Search";
import { mockContracts } from "./data/mockContracts";

const Page = () => {
	return (
		<div className="max-w-[375px] overflow-hidden sm:max-w-[780px] xl:max-w-[1200px] 2xl:max-w-[1430px] p-4 mx-auto">
			<div className="mt-8 mb-14  sm:max-w-full mx-auto sm:flex sm:justify-between sm:items-center px-4 sm:px-8 py-4 border-2 border-[#CBEC5E] rounded-2xl h-auto sm:h-[116px]">
				<h1 className="text-2xl sm:text-[40px] font-medium">My contracts</h1>
				<p className="text-[#545454] text-lg sm:text-2xl mt-2 sm:mt-0">
					Total payment now: <span>3K</span>
				</p>
			</div>
			<div className="flex flex-col px-4 sm:px-[15px] xl:px-0">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="max-w-[252px] text-[#18470D]">
						<h1 className="font-medium text-2xl sm:text-3xl">
							Active Contracts
						</h1>
					</div>
					<div className="max-w-[1080px] w-full order-first sm:order-last">
						<Search />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row sm:items-start sm:justify-between mt-8 mb-20 gap-6 sm:gap-0">
					<ul className="space-y-5 text-sm sm:text-[16px] font-normal mb-6 sm:mb-8">
						<li>
							<Link href="">All contracts(3)</Link>
						</li>
						<li>
							<Link href="">Active Milestones(4)</Link>
						</li>
						<li>
							<Link href="">Awaiting Milestones(6)</Link>
						</li>
					</ul>
					<div className="w-full max-w-[1080px] space-y-8">
						{mockContracts?.map(contract => (
							<ContractCard key={contract.id} contract={contract} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
