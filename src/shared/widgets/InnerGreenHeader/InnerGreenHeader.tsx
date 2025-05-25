import Link from "next/link";
import { LocationIcon } from "../../../../public/icons/LocationIcon";

interface InnerGreenHeaderProps {
  postedDate: string;
  country: string;
  title: string;
  buttonVisible?: boolean;
}

export const InnerGreenHeader: React.FC<InnerGreenHeaderProps> = ({
  postedDate,
  country,
  title,
  buttonVisible,
}) => {
  return (
    <div className="flex-wrap border-[1px] border-[#CBEC5E] rounded-[16px] 2xl:p-[14px_28px_18px] lg:p-[13px_28px_13px] sm:p-[19px_20px] p-[12px_14px_20px] flex flex-col lg:flex-row justify-between gap-[12px] sm:gap-[19px]">
      <div>
        <h1 className="max-w-[260px] sm:max-w-none 2xl:text-[40px] lg:text-[30px] sm:text-[28px] text-[20px] font-medium">
          {title}
        </h1>
        <div className="flex 2xl:gap-[17px] gap-[40px] text-[#545454] sm:text-[18px] sm:gap-[17px] text-[14px] 2xl:text-[16px] lg:mt-[15px] 2xl:mt-[7px] sm:mt-[10px] mt-[6px]">
          <span className="2xl:text-[16px] lg:text-[18px] sm:text-[16px] text-[14px]">{postedDate}</span>
          <div className="flex items-center 2xl:gap-[2px] gap-[4px]">
            <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]">
              <LocationIcon />
            </div>
            <span className="text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[16px]">{country}</span>
          </div>
        </div>
      </div>
      {buttonVisible && (
        <div>
          <Link href={"/freelancer/job-apply"}>
            <button className="lg:w-[200px] lg:h-[48px] sm:w-[149px] sm:h-[44px] w-[164px] h-[40px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] font-medium cursor-pointer">
              Apply
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
