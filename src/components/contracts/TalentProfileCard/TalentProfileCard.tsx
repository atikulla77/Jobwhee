import Image from "next/image";
import { StartIcon } from "../../../../public/icons/talent-client/StartIcon";
import { useState } from "react";
import Circle from "@/shared/ui-kit/Circle";

interface TalentProfileCardProps {
  talentInfo: any;
  classes?: string;
}

const TalentProfileCard = ({
  talentInfo,
  classes = "2xl:w-[533px] xl:w-[414px] w-full md:h-[534px] h-[458px] xl:pt-[38px] md:pt-[58px] pt-[20px] 2xl:pb-[74px] md:pb-[30px] pb-[20px]  2xl:mt-0 xl:mt-[57px] mt-[20px]",
}: TalentProfileCardProps) => {
  const topTalentPortfolioCard = useState(true);

  return (
    <div
      className={`${classes} bg-white border-b-[6px] border-b-[#CBEC5E] text-center rounded-[16px] shadow-[0px_0px_15px_0px_#00000017]`}
    >
      <div
        className={`w-[123px] h-[123px] mx-auto relative ${
          topTalentPortfolioCard
            ? "2xl:mb-[45px] md:mb-[28px] mb-[40px]"
            : "2xl:mb-[42px] mb-[20px]"
        } `}
      >
        <Image
          src={talentInfo?.avatarUrl}
          width={123}
          height={123}
          alt=""
          className="rounded-[50%]"
        />
        <div className="w-[26.65px] h-[26.65px] absolute left-[2px] top-[2px] flex justify-center items-center bg-[#fff] rounded-[50%]">
          <div className="w-[21.8px] h-[21.8px] bg-[#00FF4D] rounded-[50%]"></div>
        </div>

        <div
          className={`${
            topTalentPortfolioCard ? "flex" : "hidden"
          } absolute left-0 bottom-[-25px] w-full justify-center`}
        >
          <Image
            src={"/images/icon-images/topTalent.png"}
            width={36.68}
            height={46.01}
            alt=""
            className=""
          />
        </div>
      </div>
      <h1 className="text-[20px] font-[600] mb-[10px]">{talentInfo?.name}</h1>
      <div className="flex justify-center items-center gap-[8px] mb-[16px]">
        <Image
          src={"/images/icon-images/map-pin.png"}
          width={20}
          height={20}
          alt=""
          className="rounded-[50%]"
        />
        <h2 className="text-[18px] text-[#64748B] font-[500]">
          {talentInfo?.location}
        </h2>
      </div>
      <div className="w-[98px] h-[36px] flex items-center justify-center border-[1px] border-[#AEB3BC] rounded-[40px] mx-auto gap-[7px] md:mb-[22px] mb-[28px]">
        {talentInfo?.rating && (
          <Image
            src={"/images/icon-images/starIcon.png"}
            width={20}
            height={20}
            alt=""
            className=""
          />
        )}

        <p className="text-[18px] font-[500]">{talentInfo?.rating}</p>
      </div>
      <div className="flex justify-center items-center 2xl:gap-[28px] xl:gap-[12px] md:gap-[20px] gap-[12px]">
        <Circle title="Total Earning" value={talentInfo?.earnings} />
        <Circle title="Total Jobs" value={talentInfo?.totalJobs} />
        <Circle title="Total Hours" value={talentInfo?.totalHours} />
      </div>
    </div>
  );
};

export default TalentProfileCard;
