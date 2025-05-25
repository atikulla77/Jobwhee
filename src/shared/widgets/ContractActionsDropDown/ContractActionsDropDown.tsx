"use client";
import { useRouter } from "next/navigation";
import { RefundIcon } from "../../../../public/icons/RefundIcon";
import { DisputeIcon } from "../../../../public/icons/talent-client/DisputeIcon";
import { CloseIcon } from "../../../../public/icons/CloseIcon";

interface ContractActionsDropDownProps {
	id: string;
	actions: string[];
	dropdownOpen: boolean;
	onActionClick: (action: string) => void;
}

const ContractActionsDropDown: React.FC<ContractActionsDropDownProps> = ({
	id,
	actions,
	dropdownOpen,
	onActionClick,
}) => {
	return (
		<div className="relative">
			{dropdownOpen && (
				<div className="absolute xl:!right-0 sm:right-[0px]  -right-3 top-[12px] z-50">
					<ul className="bg-[#ffffff] rounded-[6px] p-2 pt-1 pb-3 shadow-[0px_3px_15px_0px_#e4e4e494] transition-all duration-200 w-[269px]  mt-1 relative">
						<div className="absolute right-[11px]  top-[-12px] w-full z-[0] flex xl:!justify-end  justify-end cursor-default">
							<div className="w-[27px] h-[13px] relative overflow-hidden xl:!mr-[10px] sm:mr-0 mr-[10px]">
								<div className="absolute right-0   top-[6px] w-[27px] h-[27px] bg-white shadow-[0px_0px_2px_0px_#e4e4e494] rotate-[47deg]"></div>
							</div>
						</div>
						{actions.map((option: string, index: number) => (
							<li className="h-[36px]" key={index}>
								<button
									className="w-full cursor-pointer hover:bg-[#c8c8c842] transition-all text-left px-4 sm:py-[10px] py-[6px] sm:text-[16px] text-[14px] font-[500] text-[#545454] rounded-md"
									onClick={() => onActionClick(option)}>
									<div className="flex gap-4 items-center">
										{option === "Request a Refund" && <RefundIcon />}
										{option === "End Contract" && <CloseIcon />}
										{option === "Open a Dispute" && <DisputeIcon />}
										{option}
									</div>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ContractActionsDropDown;
