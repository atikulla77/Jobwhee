import Link from "next/link";
import { LocationIcon } from "../../../../../public/icons/LocationIcon";
import { useRouter } from "next/navigation";

interface JobHeaderProps {
  postedDate: string;
  country: string;
  title: string;
  buttonVisible: boolean;
  action?: string;
}

export const JobHeader: React.FC<JobHeaderProps> = ({
  postedDate,
  country,
  title,
  buttonVisible,
  action,
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (action === "Accept Invitation") {
      router.push(`/freelancer/job-apply`);
    }
    if (action === "Apply") {
      alert("here will be a confirmation modal for job apply");
    }
  };
  return (
    <div className="flex-wrap border-[1px] border-[#CBEC5E] rounded-[16px] 2xl:p-[14px_28px_20px] lg:p-[14px_28px_14px] sm:p-[10px_20px_16px] p-[12px_14px_20px] flex flex-col lg:flex-row justify-between gap-[12px] sm:gap-[19px]">
      <div>
        <h1 className="max-w-[260px] sm:max-w-none 2xl:text-[40px] lg:text-[30px] sm:text-[28px] text-[20px] font-medium">
          {title}
        </h1>
        <div className="flex 2xl:gap-[17px] sm:gap-[32px] gap-[40px] text-[#545454] sm:text-[18px] text-[14px] 2xl:text-[16px] lg:mt-[18px] 2xl:mt-[7px] sm:mt-[6px] mt-[6px]">
          <span>{postedDate}</span>
          <div className="flex items-center 2xl:gap-[2px] gap-[4px]">
            <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]">
              <LocationIcon />
            </div>
            <span>{country}</span>
          </div>
        </div>
      </div>
      {buttonVisible && (
        <div>
          <button
            onClick={() => handleClick()}
            className="lg:w-[200px] lg:h-[48px] sm:w-[149px] sm:h-[44px] w-[164px] h-[40px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] font-medium cursor-pointer"
          >
            {action}
          </button>
        </div>
      )}
    </div>
  );
};
