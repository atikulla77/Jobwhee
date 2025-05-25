import Button from "@/shared/ui-kit/Button";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import Image from "next/image";
import { useState } from "react";

interface EscrowModalContentProps {
  amount: number;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  imageSrc?: string;
}

const EscrowModalContent = ({
  amount,
  onConfirm,
  onCancel,
  title = "Depositing funds into escrow today",
}: EscrowModalContentProps) => {
  return (
    <div>
      {/* Image */}
      <div className="w-full flex justify-center xl:mt-[8px] md:mt-[21px] mt-[27px] xl:mb-[29px] md:mb-[70px] mb-[18px]">
        <Image
          src={"/images/icon-images/escrowIcon.png"}
          width={257}
          height={227}
          alt="Escrow"
          className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
        />
      </div>

      {/* Title */}
      <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px] text-center">
        {title}
      </h1>

      {/* Description */}
      <p className="xl:text-[20px] text-[14px] text-[#545454] text-center">
        {amount &&
          `You will be depositing € ${amount} into escrow today. On your item Transaction History report, you’ll see an immediate escrow invoice and corresponding payment from your primary billing method.`}
      </p>

      {/* Buttons */}
      <div className="absolute xl:bottom-[35px] md:bottom-[57px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
        <div className="md:w-[250px] w-[100%] md:h-[48px] h-[40px]">
          <Button
            onClick={onConfirm}
            type={"active"}
            action={`Yes, Deposit € ${amount}`}
          />
        </div>
        <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
          <Button onClick={onCancel} type={"nonBorder"} action={"Cancel"} />
        </div>
      </div>
    </div>
  );
};

export default EscrowModalContent;
