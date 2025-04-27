import { BriefcaseIcon } from "../../../../../public/icons/BriefcaseIcon";
import { TagIcon } from "../../../../../public/icons/TagIcon";
import { DocumentIcon } from "../../../../../public/icons/DocumentIcon";
import ContractActionMenu from "./ContractActionMenu";
import Button from "@/app/shared/ui-kit/Button";

interface ContractCardProps {
	id: string;
	title: string;
	description: string;
	status: string;
	startDate: string;
	endDate: string;
	hiredBy: string;
	category: string;
	primaryAction: string;
	menuOptions: string[];
}

const ContractCard: React.FC<{ contract: ContractCardProps }> = ({
	contract,
}) => {
	const handleButton = (action: string) => {
		alert(action);
	};
	return (
		<div
			className="rounded-[25px] border border-[#EAEAEA] border-b-4 border-b-[#CBEC5E] bg-white shadow-lg hover:shadow-xl transition-all duration-300 w-full mx-auto
      p-6 md:p-7 lg:p-9
      ">
			<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
				<div className="flex items-center gap-2">
					<div className="text-[#18470D] text-[16px] sm:text-[24px] flex items-center">
						<button onClick={()=>alert('button is clicked ')} title="" className="cursor-pointer ">
							<DocumentIcon />
						</button>
					</div>
					<h2 className="2xl:!text-[24px] sm:text-[20px] text-[16px] font-medium text-[#18470D]">
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

			<p className="text-black xl:!text-lg sm:text-[16px] text-[14px]  font-[400] leading-relaxed mt-5">
				{contract.description}
			</p>

			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center mt-[50px] gap-4">
				<div className="flex sm:flex-row flex-wrap items-center gap-3 sm:gap-4 text-black text-sm xl:text-base lg:text-[16px] font-normal">
					<div className="text-gray-500">
						{contract.startDate} - {contract.endDate}
					</div>
					<div className="flex items-center gap-1">
						<BriefcaseIcon width={18} height={18} /> Hired by {contract.hiredBy}
					</div>
					<div className="flex items-center gap-1">
						<TagIcon width={18} height={18} /> {contract.category}
					</div>
				</div>

				<div className="flex justify-between items-center gap-2 sm:gap-3 mt-2 sm:mt-0 w-full sm:w-auto">
					{contract.primaryAction && (
						<Button
							handleButton={handleButton}
							text={contract.primaryAction}
							type={
								contract.primaryAction === "Submit work for payment"
									? "active"
									: "transparent"
							}
						/>
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
