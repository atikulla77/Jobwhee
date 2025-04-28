"use client"; // Required for client-side features like useRouter in App Router

import { useRouter } from "next/navigation";

interface ContractActionsDropDownProps {
	contract: any;
	setDropdownOpen: (open: boolean) => void;
	dropdownOpen: boolean;
}

const ContractActionsDropDown: React.FC<ContractActionsDropDownProps> = ({
	contract,
	setDropdownOpen,
	dropdownOpen,
}) => {
	const router = useRouter();

	// Placeholder route 
	const getRouteForOption = (option: string) => {
		const lowerOption = option.toLowerCase().replace(/\s+/g, "-");
		switch (lowerOption) {
			case "view-contract":
				return `/contract/${contract?.id}/view`;
			case "edit-contract":
				return `/contract/${contract?.id}/edit`;
			case "delete-contract":
				return `/contract/${contract?.id}/delete`;
			case "submit-work":
				return `/contract/${contract?.id}/submit`;
			default:
				return `/contract/${contract?.id}/${lowerOption}`;
		}
	};

	const handleOptionClick = (option: string) => {
		setDropdownOpen(false);
		const route = getRouteForOption(option);
		router.push(route);
	};

	return (
		<div className="relative">
			{dropdownOpen && (
				<div className="absolute xl:!right-0 sm:right-[-113px] right-0 top-[12px] z-50">
					<ul className="bg-[#ffffff] rounded-[6px] p-2 shadow-[0px_3px_15px_0px_#e4e4e494] transition-all duration-200 sm:w-[269px] w-[215px] mt-1 relative">
						<div className="absolute right-[0px] top-[-12px] w-full z-[0] flex xl:!justify-end sm:justify-center justify-end cursor-default">
							<div className="w-[27px] h-[13px] relative overflow-hidden xl:!mr-[10px] sm:mr-0 mr-[10px]">
								<div className="absolute left-0 top-[6px] w-[27px] h-[27px] bg-white shadow-[0px_0px_2px_0px_#e4e4e494] rotate-[47deg]"></div>
							</div>
						</div>
						{contract?.menuOptions.map((option:string, index:number) => (
							<li key={index}>
								<button
									className="w-full cursor-pointer hover:bg-[#c8c8c842] transition-all text-left px-4 sm:py-[10px] py-[6px] sm:text-[16px] text-[14px] font-[500] text-[#545454] rounded-md"
									onClick={() => handleOptionClick(option)}>
									{option}
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
