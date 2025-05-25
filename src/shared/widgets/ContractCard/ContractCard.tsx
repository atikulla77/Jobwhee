"use client";
import Link from "next/link";
import ContractDropdownMenu from "../ContractDropdownMenu/ContractDropdownMenu";
import Button from "@/shared/ui-kit/Button";
import { BriefcaseIcon } from "../../../../public/icons/BriefcaseIcon";
import { CategoryIcon } from "../../../../public/icons/CategoryIcon";
import { DocumentIcon } from "../../../../public/icons/DocumentIcon";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import { useState } from "react";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { Input } from "@/shared/ui-kit/Input";

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
  actions: string[];
}

const ContractCard: React.FC<{ contract: ContractCardProps }> = ({
  contract,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSubmitPaymentButton = (action: string) => {
    if (action.toLocaleLowerCase() === "submit the payment") {
      setShowPaymentModal(true);
    }
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
    <>
      <div className="md:rounded-[25px] rounded-[20px] border border-[#EAEAEA] border-b-[6px] border-b-[#CBEC5E] bg-white shadow-[0px_4px_20px_0px_#00000017] w-full 2xl:h-[303px] md:h-[350px] h-[495px] mx-auto 2xl:px-[38px] xl:px-[23px] md:px-[19px] px-[13px] relative xl:py-[38px] md:py-[22px] py-[24px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:gap-4 gap-[7px]">
          <div className="flex items-center 2xl:gap-[5px] xl:gap-[7px] gap-[8px]">
            <div className="text-[#18470D] text-[16px] md:text-[24px] flex items-center">
              <button
                title=""
                className="cursor-pointer md:w-[24px] w-[17px] md:h-[24px] h-[17px]"
              >
                <DocumentIcon />
              </button>
            </div>
            <Link href={`/contracts/${contract.id}`}>
              <h2 className="2xl:text-[24px] md:text-[20px] text-[16px] font-medium text-[#18470D] 2xl:mt-[-1px] mt-[1px] md:pr-0 pr-[30px]">
                {contract.title}
              </h2>
            </Link>
          </div>

          <div
            className={`2xl:px-3 md:px-4 px-5 py-[5px] rounded-full xl:mt-0 mt-[10px] md:text-[16px] text-[14px] font-medium capitalize
            ${
              contract.status === "ongoing"
                ? "bg-[#EEF6DB] text-[#5A7D06] xl:mr-[25px] mr-[19px]"
                : contract.status === "pending"
                ? "bg-[#F6EED9] text-[#CAAC00] mr-[10px]"
                : contract.status === "dispute"
                ? "bg-[#F7E7E3] text-[#E73E1E] mr-[10px]"
                : "bg-[#E2E2E2] text-[#5B5B5B] mr-[10px]"
            }`}
          >
            {contract.status}
          </div>
        </div>

        <p className="text-black md:text-[18px] text-[14px] font-[400] 2xl:pt-[14px] xl:pt-[17px] md:pt-[31px] pt-[14px] line-clamp-3 md:line-clamp-3 max-sm:line-clamp-4">
          {truncatedDescription}
        </p>

        <div className="absolute left-0 bottom-0 xl:h-[auto] md:h-[110px] h-auto 2xl:px-[38px] xl:px-[23px] md:px-[19px] px-[13px] lg:pb-[40px] md:pb-7 pb-7 w-full flex flex-col xl:flex-row xl:flex-wrap justify-between xl:items-center items-start md:gap-4 gap-[22px]">
          <div className="flex md:flex-row flex-wrap items-center md:gap-[20px] gap-3 text-black text-base font-normal 2xl:mb-0 mb-[5px]">
            <div className="text-gray-500">
              {contract.startDate}-{contract.endDate}
            </div>
            <div className="flex items-center gap-1 xl:ml-[5px] md:ml-[2px] ml-0 ">
              <div className="w-[24px] h-[24px] md:mr-0 mr-[2px]">
                <BriefcaseIcon />
              </div>{" "}
              Hired by {contract.hiredBy}
            </div>
            <div className="flex items-center gap-[4px] 2xl:ml-[7px] xl:ml-[5px]  md:ml-[2px] ml-0">
              <div className="w-[24px] h-[24px] xl:mr-0 mr-[1px]">
                <CategoryIcon />
              </div>
              {contract.category}
            </div>
          </div>

          <div className="flex md:justify-between  justify-start items-center xl:gap-[18px] gap-[7px] mt-0 w-full md:w-auto">
            {contract.primaryAction && (
              <div className="md:w-fit w-[231px] xl:h-[48px] h-[40px]">
                <Button
                  onClick={() =>
                    handleSubmitPaymentButton(contract?.primaryAction)
                  }
                  action={contract.primaryAction}
                  type={
                    contract.primaryAction === "Submit the payment"
                      ? "active"
                      : "transparent"
                  }
                />
              </div>
            )}
            <div className="text-gray-500 cursor-pointer text-xl md:text-2xl">
              <ContractDropdownMenu contract={contract} />
            </div>
          </div>
        </div>
      </div>
      <GlobalModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        classes="xl:w-[678px] md:w-[556px] w-[335px] h-[687px] xl:p-10 p-5"
      >
        <>
          <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] mb-[30px]">
            Submit the payment
          </h1>
          <p className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
            Name of the milestone
          </p>
          <div className="h-[42px] bg-[#EAEAEA] rounded-[12px] flex items-center p-[8px]">
            <p className="text-[#8B939F]">{contract?.title}</p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between xl:gap-[46px] md:gap-[12px] gap-[20px] mt-[20px] xl:mb-[20px] md:mb-[26px] mb-[24px]">
            <div className="w-[100%] space-y-[8px]">
              <h2 className="xl:text-[18px] text-[16px] text-[#545454]">
                Amount
              </h2>
              <Input
                // onChange={val =>
                // 	setSubmitTheMilestonePayment(prevData => ({
                // 		...prevData,
                // 		amount: val,
                // 	}))
                // }
                width="100%"
                height="42px"
                type="number"
                value={500}
                placeholder={`Min amount is: 500`}
                isIcon={false}
              />
            </div>
            <div className="w-[100%] space-y-[8px]">
              <h2 className="xl:text-[18px] text-[16px] text-[#545454]">
                Due date
              </h2>
              <Input
                width="100%"
                height="42px"
                type="text"
                isIcon={false}
                placeholder=""
                disabled={true}
              />
            </div>
          </div>
          <h2 className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
            Note (Optional)
          </h2>
          <TextArea
            placeholder="Write additional note"
            width="100%"
            height="146px"
            responsiveWidthHeight="w-[100%] h-[146px]"
          />
          <div className="absolute xl:bottom-[36px] md:bottom-[65px] bottom-[24px] xl:right-[38px] md:right-[64px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
            <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
              <Button
                onClick={() => setShowPaymentModal(false)}
                action="Reject"
                type="nonBorder"
              />
            </div>
            <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
              <Button
                onClick={() => setShowPaymentModal(false)}
                action="Release payment"
                type="active"
              />
            </div>
          </div>
        </>
      </GlobalModal>
    </>
  );
};

export default ContractCard;
