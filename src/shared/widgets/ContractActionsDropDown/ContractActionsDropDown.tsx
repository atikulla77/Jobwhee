"use client";
import { useRouter } from "next/navigation";
import { CloseIcon } from "../../../../public/icons/talent-client/CloseIcon";
import { RefundIcon } from "../../../../public/icons/RefundIcon";
import { DisputeIcon } from "../../../../public/icons/talent-client/DisputeIcon";
import { GlobalModal } from "../GlobalModal/GlobalModal";
import Image from "next/image";
import { useState } from "react";
import Button from "@/shared/ui-kit/Button";

interface ContractActionsDropDownProps {
  id: string;
  actions: string[];
  setDropdownOpen: (open: boolean) => void;
  dropdownOpen: boolean;
  setShowEndContractModal: (open: boolean) => void;
  showEndContractModal: boolean;
}

const ContractActionsDropDown: React.FC<ContractActionsDropDownProps> = ({
  id,
  actions,
  setDropdownOpen,
  dropdownOpen,
  setShowEndContractModal,
  showEndContractModal,
}) => {
  const router = useRouter();

  // Placeholder route
  const getRouteForOption = (option: string) => {
    const lowerOption = option.toLowerCase().replace(/\s+/g, "-");
    switch (lowerOption) {
      case "view-contract":
        return `/local/contracts/${id}/view`;
      case "edit-contract":
        return `/local/contracts/${id}/edit`;
      case "delete-contract":
        return `/local/contracts/${id}/delete`;
      case "submit-work":
        return `/local/contracts/${id}/submit`;
      default:
        return `/local/contracts/${id}/${lowerOption}`;
    }
  };

  const handleOptionClick = (option: string) => {
    if (option === "End Contract") {
      setShowEndContractModal(true);
      console.log("object");
    } else {
      alert(option);
    }
    
  };

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
                  className="w-full cursor-pointer  hover:bg-[#c8c8c842] transition-all text-left px-4 sm:py-[10px] py-[6px] sm:text-[16px] text-[14px] font-[500] text-[#545454] rounded-md"
                  onClick={() => handleOptionClick(option)}
                >
                  {option === "Request a Refund" ? (
                    <div className="flex gap-4">
                      <RefundIcon /> {option}
                    </div>
                  ) : option === "End Contract" ? (
                    <div className="flex gap-4">
                      <CloseIcon /> {option}
                    </div>
                  ) : option === "Open a Dispute" ? (
                    <div className="flex gap-4">
                      <DisputeIcon /> {option}
                    </div>
                  ) : (
                    option
                  )}
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
