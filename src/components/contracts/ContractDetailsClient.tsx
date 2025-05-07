import StarRating from "@/shared/ui-kit/StarRating";
import Image from "next/image";

const ContractDetailsClient = () => {
  return (
      <div className="w-full xl:h-[564px] md:h-[549px] h-[529px] text-[#545454] rounded-[16px] border border-[#CBEC5E] 2xl:px-[24px] xl:px-[28px] md:px-[20px] px-[14px] xl:py-[24px] md:py-[20px] py-[14px]">
        <h2 className="md:text-[30px] text-[28px] font-[500] text-black mb-[27px] md:mt-[4px] mt-0 2xl:pl-[3px] pl-0">
          About the client
        </h2>
        <div className="flex items-center mb-[24px]">
          <Image
            src={"/images/maria.png"}
            width={78}
            height={78}
            alt=""
            className="w-[78px] h-[78px]"
          />
          <div className="pl-[10px]">
            <p className="md:text-[20px] text-[16px] font-semibold text-black md:pb-[3px] pb-[10px]">
              Eleni C.
            </p>
            <p className="md:text-[16px] text-[14px] text-gray-600 font-[400]">Member since Sep 4, 2025</p>
          </div>
        </div>
        <div className="flex items-center mb-[6px]">
          <Image
            src={"/images/icon-images/verifyTalentIcon.png"}
            width={24}
            height={24}
            alt=""
            className="w-[24px] h-[24px]"
          />
          <p className="text-[16px] pl-[7px]">Payment Method Verified</p>
        </div>
        <div className="flex items-center gap-[7px] md:pb-[10px] pb-[7px]">
          <StarRating
            rating={5}
            width={16}
            height={16}
            responsiveWidthHeight="md:w-[16px] !w-[16px]"
          />
          <p className="text-[16px]">5.0</p>
        </div>

        <div className="flex items-center md:pb-[23px] pb-[20px]">
          <p className="text-gray-600">5.0 of 3 reviews</p>
        </div>

        <div className="space-y-[7px] md:pb-[21px] pb-[21px]">
          <p className="text-[18px] font-[500]">Greece</p>
          <p className="text-[18px]">Athens 12:51 pm</p>
        </div>
        <div className="space-y-[7px] md:pb-[21px] pb-[24px]">
          <p className="text-[18px] font-[500]">32 jobs posted</p>
          <p className="text-[18px]">1 open job</p>
        </div>
        <div className="space-y-[7px]">
          <p className="text-[18px] font-[500]">$80 total spent</p>
          <p className="text-[18px]">3 hires, 0 active</p>
        </div>
      </div>
  );
};

export default ContractDetailsClient;
