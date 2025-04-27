import ThreeDotDropdown from "@/app/shared/widgets/ThreeDotDropdown/ThreeDotDropdown";
import { BriefcaseIcon } from "../../../../../public/icons/BriefcaseIcon";
import { TagIcon } from "../../../../../public/icons/TagIcon";
import { DocumentIcon } from "../../../../../public/icons/DocumentIcon";
import ContractActionMenu from "./ContractActionMenu";

interface ContractCardProps {
	id: string;
	title: string;
	description: string;
	status: "ongoing" | "pending" | "closed" | "dispute";
	startDate: string;
	endDate: string;
	hiredBy: string;
	category: string;
	primaryAction: "Submit work for payment" | "See Timesheet" | null;
	menuOptions: string[];
}

const ContractCard: React.FC<{ contract: ContractCardProps }> = ({
	contract,
}) => {
	return (
		<div
			className="rounded-[25px] border border-[#EAEAEA] border-b-4 border-b-[#CBEC5E] bg-white shadow-lg hover:shadow-xl transition-all duration-300 w-full mx-auto  max-w-[375px] sm:max-w-[704px] lg:max-w-[1408px]
      p-6 md:p-7 lg:p-9
      ">
			<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
				<div className="flex items-center gap-2">
					<div className="text-green-600 text-xl sm:text-2xl">
						<DocumentIcon />
					</div>
					<h2 className="sm:text-2xl lg:text-[24px] text-xl font-medium text-[#18470D]">
						{contract.title}
					</h2>
				</div>

				<div
					className={`px-3 py-1 rounded-full text-xs sm:text-sm lg:text-[16px] font-medium capitalize
            ${
							contract.status === "ongoing"
								? "bg-[#EEF6DB] text-[#5A7D06]"
								: contract.status === "pending"
								? "bg-[#F6EED9] text-[#CAAC00]"
								: contract.status === "dispute"
								? "bg-[#F7E7E3] text-[#E73E1E]"
								: "bg-[#E2E2E2] text-[#5B5B5B]"
						}`}>
					{contract.status}
				</div>
			</div>

			<p className="text-black text-base sm:text-lg font-[400] leading-relaxed mt-2 sm:mt-3 lg:mt-2">
				{contract.description}
			</p>

			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center mt-4 gap-4">
				<div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-black text-sm sm:text-base lg:text-[16px] font-normal">
					<span className="text-gray-500">
						{contract.startDate} - {contract.endDate}
					</span>
					<p className="flex items-center gap-1">
						<BriefcaseIcon /> Hired by {contract.hiredBy}
					</p>
					<span className="flex items-center gap-1">
						<TagIcon /> {contract.category}
					</span>
				</div>

				<div className="flex justify-between items-center gap-2 sm:gap-3 mt-2 sm:mt-0 w-full sm:w-auto">
					{contract.primaryAction && (
						<button
							className={`rounded-full px-4 py-2 sm:px-5 sm:py-3 font-medium text-sm sm:text-base lg:text-[16px] transition-all duration-300
                ${
									contract.primaryAction === "Submit work for payment"
										? "bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] cursor-pointer"
										: "border border-[#EAEAEA] text-[#000] cursor-pointer"
								}`}>
							{contract.primaryAction}
						</button>
					)}
					<div className="text-gray-500 cursor-pointer text-xl sm:text-2xl">
						<ContractActionMenu menuOptions={contract.menuOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContractCard;
