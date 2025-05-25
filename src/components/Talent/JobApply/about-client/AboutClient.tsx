import {PaymentVerifiedIcon} from "../../../../../public/icons/PaymentVerifiedIcon";
import {FullStarIcon} from "../../../../../public/icons/FullStarIcon";
import {EmptyStarIcon} from "../../../../../public/icons/EmptyStarIcon";
import {HalfStarIcon} from "../../../../../public/icons/HalfStarIcon";


interface AboutClientProps {
    jobData: {
        postedDate: string;
        country: string;
        title: string;
        descriptionText: string;
        descriptionList?: string[];
        paymentVerified: boolean;
        rating: number;
        reviews: number;
        postedJobsCount: number;
        totalSpentMoney: number;
        memberSince: string;
        jobLink: string;
        city: string;
        cityTime: string;
        hireRate: number;
        openJob: number;
        hires: number;
        active: number;
    };
}

export const AboutClient: React.FC<AboutClientProps> = ({jobData}) => {
    return (
        <div
            className="border-[1px] border-[#CBEC5E] rounded-[16px] p-[22px_14px] sm:p-[18px] lg:p-[28px_28px_45px] w-full 2xl:min-h-[741px] lg:min-h-[669px] min-h-[530px]">
      <span className="2xl:text-[30px] lg:text-[24px] text-[20px] font-medium">
        About the client
      </span>
            {jobData.paymentVerified && (
                <div className="flex gap-[7px] mt-[10px] lg:mt-[14px]">
                    <div className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]">
                        <PaymentVerifiedIcon/>
                    </div>
                    <span className="text-[#545454] text-[14px] lg:text-[16px]">
            Payment Method Verified
          </span>
                </div>
            )}
            <div className="2xl:mt-[9px] lg:mt-[14px] sm:mt-[6px] mt-[10px] flex gap-[7px] items-center">
                <div className="flex gap-[1px]">
                    {Array.from({length: jobData.rating}).map((_, index) => (
                        <div key={index} className="lg:w-[16px] lg:h-[16px] w-[14px] h-[14px]">
                            <FullStarIcon/>
                        </div>
                    ))}
                    {!Number.isInteger(jobData.rating) &&
                        <div className="lg:w-[16px] lg:h-[16px] w-[14px] h-[14px]"><HalfStarIcon/></div>}
                    {Array.from({length: 5 - jobData.rating}).map((_, index) => (
                        <div key={index} className="lg:w-[16px] lg:h-[16px] w-[14px] h-[14px]">
                            <EmptyStarIcon/>
                        </div>
                    ))}
                </div>
                <span className="text-[14px] lg:text-[16px] text-[#545454]">
          {Number.isInteger(jobData.rating)
              ? `${jobData.rating}.0`
              : jobData.rating}
        </span>
            </div>
            <div className="2xl:mt-[16px] lg:mt-[14px] sm:mt-[12px] mt-[10px]">
        <span className="text-[#545454] text-[14px] lg:text-[16px]">
          {Number.isInteger(jobData.rating)
              ? `${jobData.rating}.0`
              : jobData.rating}{" "}
            of {jobData.reviews} reviews
        </span>
            </div>
            <p className="text-[#545454] text-[16px] lg:text-[18px] font-medium lg:mt-[25px] mt-[17px]">
                {jobData.country}
            </p>
            <p className="text-[#545454] text-[14px] lg:text-[18px] mt-[7px] lg:mt-[10px]">
                {jobData.city} {jobData.cityTime}
            </p>
            <p className="text-[#545454] text-[16px] lg:text-[18px] font-medium mt-[14px] lg:mt-[25px]">
                {jobData.postedJobsCount} jobs posted
            </p>
            <p className="text-[#545454] text-[14px] lg:text-[18px] mt-[6px] lg:mt-[10px]">
                {jobData.hireRate}% hire rate, {jobData.openJob} open job
            </p>
            <p className="text-[#545454] text-[16px] lg:text-[18px] font-medium mt-[16px] lg:mt-[24px]">
                ${jobData.totalSpentMoney} total spent
            </p>
            <p className="text-[#545454] text-[14px] lg:text-[18px] mt-[6px] lg:mt-[10px]">
                {jobData.hires} hires, {jobData.active} active
            </p>
            <p className="text-[#545454] text-[14px] lg:text-[16px] mt-[7px] lg:mt-[10px]">
                Member since {jobData.memberSince}
            </p>
            <p className="text-[#000] text-[16px] lg:text-[20px] mt-[18px] lg:mt-[23px] font-medium">Job link</p>
            <div
                className="bg-[#F5F5F5] text-[#545454] text-[14px] lg:text-[16px] p-[11px] w-fit mt-[14px] lg:mt-[17px] rounded-[6px]">
                {jobData.jobLink}
            </div>
            <div
                onClick={() => navigator.clipboard.writeText(jobData.jobLink)}
                className="select-none cursor-pointer text-[#18470D] text-[14px] lg:text-[16px] font-medium mt-[8px] sm:mt-[10px] ml-[8px]"
            >
                Copy Link
            </div>
        </div>
    );
};
