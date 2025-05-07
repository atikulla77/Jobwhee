"use clint";
import Button from "@/shared/ui-kit/Button";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { DropDownArrowIcon } from "../../../../public/icons/DropDownArrowIcon";
import RadioButtons from "@/shared/ui-kit/RadioButtons";
import { useState } from "react";

const RefundModal = ({ setShowRefundRequestModal }: any) => {

		const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="">
      <h2 className="text-[30px] font-[500] text-[#18470D] mb-[42px]">
        Request a refund
      </h2>

      <div className="w-full">
        <p className="text-[18px] text-[#545454] mb-[8px]">
          Invoice
        </p>
        <div className="w-full px-2 md:py-2 py-[10px] flex items-center justify-between border border-[#AEB3BC] rounded-[12px] text-[#8B939F] focus:outline-none">
          <p className="md:text-[16px] text-[14px]">Select Invoice(s)</p>
          <DropDownArrowIcon />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
		<RadioButtons
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
          <input
            type="radio"
            name="refund-amount"
            id="total"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
          />
          <label htmlFor="total" className="ml-2 text-sm text-gray-700">
            TOTAL INVOICE AMOUNT 0.0
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="refund-amount"
            id="other"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
          />
          <label htmlFor="other" className="ml-2 text-sm text-gray-700">
            OTHER
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          NOTE
        </label>
        <TextArea
          placeholder="Write additional note"
          width={"100%"}
          height={"146px"}
          responsiveWidthHeight="w-[100%] h-[146px]"
        />
      </div>

      <div className="mb-6">
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-green-800 hover:bg-gray-50">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828V15h2V7h-8zM9 17H5v-2h4v2z"
            ></path>
          </svg>
          Attach File
        </button>
        <p className="text-xs text-gray-500 mt-1">Max file size: 1000MB</p>
      </div>
      <div className="absolute xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
        <div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
          <Button
            onClick={() => setShowRefundRequestModal(false)}
            action={"Cancel"}
            type={"nonBorder"}
          />
        </div>
        <div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
          <Button action={"Send Request"} type="disabled" />
        </div>
      </div>
    </div>
  );
};

export default RefundModal;
