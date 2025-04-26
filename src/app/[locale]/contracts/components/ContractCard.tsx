import Button from "@/app/shared/ui-kit/Button";
import ThreeDotDropdown from "@/app/shared/widgets/ThreeDotDropdown/ThreeDotDropdown";
import { EditIcon } from "../../../../../public/icons/talent-client/editIcon";

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
		<div className="rounded-[25px] border border-[#EAEAEA] border-b-4 border-b-[#CBEC5E] bg-white p-9 flex flex-col gap-4 relative shadow-lg hover:shadow-xl transition-all duration-300">
			<div className="flex justify-between items-start">
				<div className="flex items-center gap-2">
					<div className="text-green-600 text-2xl">
						<EditIcon />
					</div>
					<h2 className="text-[24px] font-medium text-[#18470D]">
						{contract.title}
					</h2>
				</div>

				<div
					className={`px-3 py-1 rounded-full text-xs font-medium capitalize text-[16px] ${
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

			<p className="text-black text-lg font-[400] leading-relaxed mt-2">
				{contract.description}
			</p>

			<div className="flex flex-wrap justify-between items-center mt-4">
				<div className="flex flex-wrap gap-4 text-black text-[16px] font-normal">
					<span className="text-gray-500">
						{contract.startDate} - {contract.endDate}
					</span>
					<span className="flex items-center gap-1">
						🧑‍💼 Hired by {contract.hiredBy}
					</span>
					<span className="flex items-center gap-1">
						📂 {contract.category}
					</span>
				</div>

				<div className="flex items-center gap-2 mt-4 sm:mt-0">
					{contract.primaryAction && (
						<button
							className={`rounded-full px-5 py-3 font-medium text-[16px] transition-all duration-300
        ${
					contract.primaryAction === "Submit work for payment"
						? "bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] cursor-pointer"
						: "border border-[#EAEAEA] text-[#000] cursor-pointer"
				}
      `}>
							{contract.primaryAction}
						</button>
					)}

					{/* <Button width={"256px"} text={contract.primaryAction} /> */}
					<div className="text-gray-500 cursor-pointer text-2xl">
						<ThreeDotDropdown>{contract.menuOptions}</ThreeDotDropdown>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContractCard;
