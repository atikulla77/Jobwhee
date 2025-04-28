import { BriefcaseIcon } from "../../../../../public/icons/BriefcaseIcon";
import { CategoryIcon } from "../../../../../public/icons/CategoryIcon";
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

	const truncateDescription = (
		text: string,
		maxLines: number,
		wordsPerLine: number = 16
	) => {
		const maxWords = maxLines * wordsPerLine;
		const words = text.split(" ");
		if (words.length <= maxWords) return text;
		return words.slice(0, maxWords).join(" ") + "...";
	};

	const getResponsiveDescription = (description: string) => {
		const isMobile = window.innerWidth < 640;
		const maxLines = isMobile ? 4 : 3;
		return truncateDescription(description, maxLines);
	};

	const truncatedDescription = getResponsiveDescription(contract.description);

	return (
		<div
			className="rounded-[25px] border border-[#EAEAEA] border-b-[6px] border-b-[#CBEC5E] bg-white shadow-[0px_4px_20px_0px_#00000017] w-full 2xl:h-[303px] sm:h-[350px] h-[475px] mx-auto 2xl:px-[38px] xl:px-[23px] sm:px-[19px] px-5 relative xl:py-[38px] sm:py-[22px] py-5">
			<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
				<div className="flex items-center 2xl:gap-[5px] xl:gap-[7px] gap-[8px]">
					<div className="text-[#18470D] text-[16px] sm:text-[24px] flex items-center">
						<button
							onClick={() => alert("button is clicked ")}
							title=""
							className="cursor-pointer sm:w-[24px] w-[17px] sm:h-[24px] h-[17px]">
							<DocumentIcon />
						</button>
					</div>
					<h2 className="2xl:text-[24px] sm:text-[20px] text-[16px] font-medium text-[#18470D] 2xl:mt-[-1px] mt-[1px]">
						{contract.title}
					</h2>
				</div>

				<div
					className={`2xl:px-3 px-4 py-[5px] rounded-full xl:mt-0 mt-[12px] md:text-[16px] text-sm font-medium capitalize
            ${
							contract.status === "ongoing"
								? "bg-[#EEF6DB] text-[#5A7D06] xl:mr-[25px] mr-[19px]"
								: contract.status === "pending"
								? "bg-[#F6EED9] text-[#CAAC00] mr-[10px]"
								: contract.status === "dispute"
								? "bg-[#F7E7E3] text-[#E73E1E] mr-[10px]"
								: "bg-[#E2E2E2] text-[#5B5B5B] mr-[10px]"
						}`}>
					{contract.status}
				</div>
			</div>

			<p className="text-black text-[18px] font-[400] 2xl:pt-[14px] xl:pt-[17px] pt-[31px] line-clamp-3 sm:line-clamp-3 max-sm:line-clamp-4">
				{truncatedDescription}
			</p>

			<div className="absolute left-0 bottom-0 xl:h-[auto] sm:h-[110px] h-[180px] 2xl:px-[38px] xl:px-[23px] sm:px-[19px] px-5 lg:pb-[40px] md:pb-7 sm:pb-6 pb-5 w-full flex flex-col xl:flex-row xl:flex-wrap justify-between xl:items-center items-start gap-4">
				<div className="flex sm:flex-row flex-wrap items-center sm:gap-[20px] gap-3 text-black md:text-base text-sm font-normal 2xl:mb-0 mb-[5px]">
					<div className="text-gray-500">
						{contract.startDate}-{contract.endDate}
					</div>
					<div className="flex items-center gap-1 xl:ml-[5px] ml-[2px]">
					<div className="w-[24px] h-[24px]"><BriefcaseIcon /></div>  Hired by {contract.hiredBy}
					</div>
					<div className="flex items-center gap-[4px] 2xl:ml-[7px] xl:ml-[5px] ml-[2px]"> 
						<div className="w-[24px] h-[24px] xl:mr-0 mr-[1px]"><CategoryIcon /></div> {contract.category}
					</div>
				</div>

				<div className="flex justify-between items-center xl:gap-[18px] gap-[7px] mt-0 w-full sm:w-auto">
					{contract.primaryAction && (
						<div className="sm:w-fit w-full xl:h-[48px] h-[40px]">
							<Button
								handleButton={handleButton}
								text={contract.primaryAction}
								type={
									contract.primaryAction === "Submit work for payment"
										? "active"
										: "transparent"
								}
							/>
						</div>
					)}
					<div className="text-gray-500 cursor-pointer text-xl sm:text-2xl">
						<ContractActionMenu contract={contract} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContractCard;
