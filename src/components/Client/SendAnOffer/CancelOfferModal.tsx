import Button from "@/shared/ui-kit/Button";
import { useState } from "react";

const CancelOfferModal = ({ setIsOpenCancelOfferModal }: any) => {
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [
    "Sent the offer by mistake",
    "Incorrect terms",
    "Project requirements changed",
    "Budget adjustment",
    "No response",
    "Found an alternative",
    "Offer sent twice",
    "Timeline issue",
    "Other",
  ];
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-green-800 mb-4">
        Cancel an offer
      </h2>
      <div className="  ">
        <div className="space-y-[10px]  w-full">
          {reasons.map((reason, index) => (
            <label key={index} className="flex items-center space-x-2" w-full>
              <input
                type="radio"
                name="declineReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="form-radio text-green-600 h-5 w-5"
              />
              <span className="text-[#545454] sm:text-[16px] text-[14px] font-[400] w-full">
                {reason}
              </span>
            </label>
          ))}
        </div>
        <div className="absolute    overflow-hidden bottom-[24px] xl:right-[38px] md:right-[64px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
          <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
            <Button
              onClick={() => setIsOpenCancelOfferModal(false)}
              action="Cancel"
              type="nonBorder"
            />
          </div>
          <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
            <Button
              onClick={() => setIsOpenCancelOfferModal(false)}
              action="Send"
              type="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOfferModal;
