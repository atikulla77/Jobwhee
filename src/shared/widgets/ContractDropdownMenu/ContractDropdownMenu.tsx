"use client";
import ContractActionsDropDown from "@/shared/widgets/ContractActionsDropDown/ContractActionsDropDown";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { useState, useRef, useEffect } from "react";
import { GlobalModal } from "../GlobalModal/GlobalModal";
import Image from "next/image";
import Button from "@/shared/ui-kit/Button";

const ContractDropdownMenu = ({ contract }: any) => {
  const [showEndContractModal, setShowEndContractModal] = useState(false);
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
    <>
      <div ref={wrapperRef} className="relative z-50">
        <div
          className={`${
            dropdownOpen ? "bg-[#FBFFED]" : "bg-white"
          } ml-auto md:w-[48px] w-[40px] md:h-[48px] h-[40px] border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
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
            setShowEndContractModal={setShowEndContractModal}
            showEndContractModal={showEndContractModal}
          />
        )}
      </div>
      {showEndContractModal && (
        <GlobalModal
          isOpen={showEndContractModal}
          onClose={() => setShowEndContractModal(false)}
          width="xl:w-[860px] md:w-[556px] w-[335px]"
          height="xl:h-[558px] md:h-[517px] h-[462px]"
        >
          <>
            <div className="w-full flex justify-center xl:mt-[8px] md:mt-[21px] mt-[27px] xl:mb-[29px] md:mb-[70px] mb-[18px]">
              <Image
                src={"/images/confirmationendofcontract.png"}
                width={257}
                height={227}
                alt=""
                className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
              />
            </div>
            <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px] text-center">
              Are you sure you want to end this contract?
            </h1>
            <p className="xl:text-[20px] text-[14px] text-[#545454] text-center">
              Provide feedback and settle payments in the next steps.
            </p>
            <div className="absolute xl:bottom-[35px] md:bottom-[57px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button
                  onClick={() => setShowEndContractModal(false)}
                  type={"nonBorder"}
                  action={"Cancel"}
                />
              </div>
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button type={"active"} action={"End contract"} />
              </div>
            </div>
          </>
        </GlobalModal>
      )}
    </>
  );
};

export default ContractDropdownMenu;
