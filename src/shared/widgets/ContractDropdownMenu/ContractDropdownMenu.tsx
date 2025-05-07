"use client";
import ContractActionsDropDown from "@/shared/widgets/ContractActionsDropDown/ContractActionsDropDown";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { useState, useRef, useEffect } from "react";
import { GlobalModal } from "../../ui-kit/GlobalModal";
import { useRouter } from "next/navigation";
import EndContractModal from "@/components/end-contract/EndContractModal";
import RefundModal from "@/components/contracts/modals/RefundModal";

const ContractDropdownMenu = ({ contract }: any) => {
	const [showEndContractModal, setShowEndContractModal] = useState(false);
	const [showRefundRequestModal,setShowRefundRequestModal]=useState(false)
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const router = useRouter();

	const handleActionClick = (action: string) => {
		const id = contract?.contractId || contract?.id;

		switch (action) {
			case "End Contract":
				setShowEndContractModal(true);
				break;
			case "View Work Details":
				router.push(`/local/contracts/${id}/work-details`);
				break;
			case "Request a Refund":
				 setShowRefundRequestModal(true)
				break;
			case "Open a Dispute":
				router.push(`/local/contracts/${id}/dispute`);
				break;
			default:
				console.warn("Unhandled action:", action);
		}

		setDropdownOpen(false);
	};
	const handleEndContract = (action: string) => {
		const id = contract?.contractId || contract?.id;

		if (action === "end-contract") {
			setShowEndContractModal(false);
			router.push(`/local/contracts/${id}/end-contract`);
		}
	};

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
		<>
			<div ref={wrapperRef} className="relative z-20">
				<div
					className={`${
						dropdownOpen ? "bg-[#FBFFED]" : "bg-white"
					} ml-auto md:w-[48px] w-[40px] md:h-[48px] h-[40px]  border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
					onClick={() => setDropdownOpen(!dropdownOpen)}>
					<div className="xl:w-[24px]  w-[20px] xl:h-[24px] h-[20px]">
						<ThreeDotIcon />
					</div>
				</div>
				{dropdownOpen && (
					<ContractActionsDropDown
						id={contract.id}
						actions={contract.actions}
						dropdownOpen={dropdownOpen}
						onActionClick={handleActionClick}
					/>
				)}
			</div>

			{showEndContractModal && (
				<GlobalModal
					isOpen={showEndContractModal}
					onClose={() => setShowEndContractModal(false)}
					classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[517px] h-[462px] md:px-[38px]  px-[24px] xl:py-[28px] py-[24px]">
					<EndContractModal
						setShowEndContractModal={setShowEndContractModal}
						handleEndContract={handleEndContract}
					/>
				</GlobalModal>
			)}

			{showRefundRequestModal && (
				<GlobalModal
					isOpen={showRefundRequestModal}
					onClose={() => setShowRefundRequestModal(false)}
					classes="xl:w-[776px] md:w-[556px] w-[335px] xl:h-[683px] md:h-[517px] h-[462px] md:px-[38px]  px-[24px] xl:py-[28px] py-[24px]">
					<RefundModal setShowRefundRequestModal={setShowRefundRequestModal} />
				</GlobalModal>
			)}
		</>
	);
};

export default ContractDropdownMenu;
