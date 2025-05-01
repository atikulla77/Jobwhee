"use client";
import ContractActionsDropDown from "@/shared/widgets/ContractActionsDropDown/ContractActionsDropDown";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { useState, useRef, useEffect } from "react";

const ContractDropdownMenu = ({ contract }: any) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (!wrapperRef.current?.contains(e.target as Node)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return (
		<div ref={wrapperRef} className="relative z-50">
			<div
				className={`${
					dropdownOpen ? "bg-[#FBFFED]" : "bg-white"
				} ml-auto md:w-[48px] w-[40px] md:h-[48px] h-[40px] border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
				onClick={() => setDropdownOpen(!dropdownOpen)}>
				<div className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]">
					<ThreeDotIcon />
				</div>
			</div>
				{dropdownOpen && (
					<ContractActionsDropDown
						id={contract.id}
						actions={contract.actions}
						setDropdownOpen={setDropdownOpen}
						dropdownOpen={dropdownOpen}
					/>
				)}
		</div>
	);
};

export default ContractDropdownMenu;
