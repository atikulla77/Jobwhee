"use client";

interface MilestonesProps {
  jobApplyData: {
    paymentMethod: string;
    bid: number | null;
  };
  onChangeApplyData: (keyName: string, value: number) => void;
  errors: boolean;
}

export const Completion: React.FC<MilestonesProps> = ({
  jobApplyData,
  onChangeApplyData,
  errors
}) => {
  return (
    <div className="flex flex-col lg:flex-row mt-[40px] justify-between gap-[20px] mb-[27px] sm:mb-[40px] lg:mb-[52px] 2xl:mb-[85px]">
      <div className="w-full max-w-[350px]">
        <label className="">
          <p className="text-[18px] text-[#545454]">Bid</p>
          <input
            value={jobApplyData.bid || ""}
            onChange={(e) => onChangeApplyData("bid", +e.target.value)}
            placeholder="€ 0.0"
            className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-black placeholder:text-black h-[42px] border-[1px] w-full border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px] ${errors ? 'border-[#DD331D]' : 'border-[#AEB3BC]'}`}
            type="number"
          />
          {errors && (
            <p className="mt-[8px] text-[#DD331D] text-[12px]">
              This field is required
            </p>
          )}
        </label>
      </div>
      <div className="w-full max-w-[350px]">
        <label className="">
          <p className="text-[18px] text-[#545454]">
            10% Talent Service Charge
          </p>
          <input
            placeholder="-€ 0.0"
            disabled={true}
            className="bg-[#E9E9E9] w-full max-w-[350px] h-[42px] border-[1px] border-[#E9E9E9] rounded-[12px] outline-0 p-[9px_8px] mt-[8px]"
            type="text"
          />
        </label>
      </div>
      <div className="w-full max-w-[350px]">
        <label className="">
          <p className="text-[18px] text-[#545454]">You’ll Receive</p>
          <input
            disabled
            placeholder="€ 0.0"
            className="placeholder:text-black w-full max-w-[350px] h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] outline-0 p-[9px_8px] mt-[8px] "
            type="text"
          />
        </label>
      </div>
    </div>
  );
};
