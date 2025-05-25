"use client";
import Button from "@/shared/ui-kit/Button";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { DropDownArrowIcon } from "../../../../public/icons/DropDownArrowIcon";
import RadioButtons from "@/shared/ui-kit/RadioButtons";
import { useState } from "react";
import Image from "next/image";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import { Input } from "@/shared/ui-kit/Input";

const RefundModal = ({ setShowRefundRequestModal }: any) => {
  const radioButtonsData = ["Total Invoice Amount 0.0", "Other"];
  const [selectedOption, setSelectedOption] = useState(0);
  const [customAmount, setCustomAmount] = useState(""); // Added state for custom amount
  const [showRefundRequestSend, setShowRefundRequestSend] = useState(false);

  const handleSendRequest = () => {
    const amount = selectedOption === 1 ? parseFloat(customAmount) : 0.0;
    if (selectedOption === 1 && (isNaN(amount) || amount <= 0)) {
      alert("Please enter a valid refund amount.");
      return;
    }
    console.log("Refund request:", { amount: amount || 0.0 });
    setShowRefundRequestSend(true);
  };

  return (
    <>
      <div className="">
        <h2 className="xl:text-[30px] text-[20px] font-[500] text-[#18470D] xl:mb-[42px] md:mb-[39px] mb-[24px]">
          Request a refund
        </h2>

        <div className="w-full md:mb-[24px] mb-[26px]">
          <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
            Invoice
          </p>
          <div className="w-full px-2 md:py-2 py-[10px] flex items-center justify-between border border-[#AEB3BC] rounded-[12px] text-[#8B939F] focus:outline-none">
            <p className="md:text-[16px] text-[14px]">Select Invoice</p>
            <DropDownArrowIcon />
          </div>
        </div>

        <div className="mb-[24px]">
          <div className=" space-x-4  ">
            <RadioButtons
              radioButtonsData={radioButtonsData}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              labelPosition="right"
            />
            {selectedOption === 1 && (
              <div className=" pt-[14px] z-40 max-w-full">
                <Input
                  width="100%"
                  height="42px"
                  type="text"
                  isIcon={false}
                  placeholder="Write another amount"
                />
              </div>
            )}
          </div>
        </div>

        <div className="md:pb-[18px] pb-[21px]">
          <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
            Note
          </p>
          <TextArea
            placeholder="Explain to the talent for this request"
            width={"100%"}
            height={"146px"}
            responsiveWidthHeight="w-[100%] h-[146px]"
          />
        </div>

        <label className="w-[170px] h-[42px] flex items-center px-[12px] border-[1px] cursor-pointer border-[#B9B9B9] rounded-md text-[#18470D]">
          <input
            type="file"
            className="hidden"
            onChange={(e) => console.log(e.target.files)}
          />
          <Image
            src={"/images/icon-images/attach.png"}
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
            alt=""
          />
          <p className="pl-[11px] text-[16px]">Attach File</p>
        </label>

        <p className="text-[14px] text-[#545454] mt-[14px]">
          Max file size: 1000MB
        </p>
        <div className="absolute xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
          <div className="xl:w-[200px] md:w-[164px] w-[100%] md:h-[48px] h-[40px]">
            <Button
              onClick={() => setShowRefundRequestModal(false)}
              action={"Cancel"}
              type={"nonBorder"}
            />
          </div>
          <div className="xl:w-[200px] md:w-[164px] w-[100%] md:h-[48px] h-[40px]">
            <Button
              onClick={handleSendRequest}
              action={"Send Request"}
              type="active"
            />
          </div>
        </div>
      </div>

      {showRefundRequestSend && (
        <GlobalModal
          isOpen={showRefundRequestSend}
          onClose={() => setShowRefundRequestSend(false)}
          classes="xl:w-[637px] md:w-[552px] w-[335px] xl:h-[390px] md:h-[359px] h-[342px] xl:py-[58.62px] md:py-[46.63px] py-[60.63px] relative"
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="w-[75.75px] h-[75.75px] flex justify-center items-center bg-[#CBEC5E] rounded-[50%] md:mb-[27.62px] mb-[16.62px]">
              <Image
                src={"/images/icon-images/check.png"}
                width={55}
                height={55}
                className="w-[55px] h-[55px]"
                alt=""
              />
            </div>

            <h1 className="xl:text-[26px] text-[20px] font-medium text-[#000] xl:mb-[9px] mb-[18px]">
              Your refund request has been
              <br className="md:hidden block" /> sent{" "}
              <br className="md:block hidden" />
              successfully
            </h1>
            <p className="text-[#545454] xl:text-[16px] text-[14px] mb-[34px]">
              Please wait for the talent’s response.
            </p>

            <div className="absolute left-0 md:bottom-[35px] bottom-[24px] w-full flex justify-center">
              <div className="md:w-[188px] w-full xl:h-[48px] h-[40px] md:px-0 px-[24px] mx-auto">
                <Button
                  type="active"
                  action="Go to Contracts"
                  onClick={() => {
                    setShowRefundRequestSend(false);
                    setShowRefundRequestModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </GlobalModal>
      )}
      {!showRefundRequestSend && (
        <GlobalModal
          isOpen={showRefundRequestSend}
          onClose={() => setShowRefundRequestSend(false)}
          classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[331px] md:h-[261px] h-[300px] py-[24px] md:px-[38px] px-[24px] relative"
        >
          <div className="">
            <h1 className="xl:text-[30px] text-[20px] font-medium text-[#18470D] xl:mb-[46px] mb-[30px]">
              Payment Request
            </h1>

            <p className="xl:text-[18px] text-[16px] text-[#545454] pb-[8px]">
              Name of the milestone
            </p>
            <div className="w-full h-[42px] flex items-center px-[8px] rounded-[12px] bg-[#F0F1F4]">
              <p className="text-[#545454]">Week 2</p>
            </div>

            <div className="absolute md:bottom-[24px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
              <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
                <Button
                  onClick={() => setShowRefundRequestModal(false)}
                  action={"Cancel"}
                  type={"nonBorder"}
                />
              </div>
              <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
                <Button
                  onClick={() => setShowRefundRequestSend(true)}
                  action={"Send request"}
                  type="active"
                />
              </div>
            </div>
          </div>
        </GlobalModal>
      )}
    </>
  );
};

export default RefundModal;
