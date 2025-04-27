"use client";
import ContractActionsDropDown from "@/app/shared/widgets/ContractActionsDropDown/ContractActionsDropDown";
import { ThreeDotIcon } from "../../../../../public/icons/ThreeDotIcon";
import { useState, useRef, useEffect } from "react";

const ContractActionMenu = ({ menuOptions }: { menuOptions: string[] }) => {
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
				} ml-auto w-[40px] h-[40px] border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
				onClick={() => setDropdownOpen(!dropdownOpen)}>
				<div className="w-[24px] h-[24px]">
					<ThreeDotIcon />
				</div>
			</div>
			{dropdownOpen && (
				<ContractActionsDropDown
					setDropdownOpen={setDropdownOpen}
					dropdownOpen={dropdownOpen}
					menuOptions={menuOptions}
				/>
			)}
		</div>
	);
};

export default ContractActionMenu;
