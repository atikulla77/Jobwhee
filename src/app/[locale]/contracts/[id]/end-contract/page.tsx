import EndContractExperience from "@/components/end-contract/EndContractExperience";
import Image from "next/image";

const page = () => {
  return (
    <div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] flex flex-wrap justify-between mx-auto pt-[52px] pb-[50px]">
      <EndContractExperience />

      <div className="2xl:w-[533px] xl:w-[414px] w-full 2xl:h-[534px] xl:h-[476px] md:h-[534px] h-[439px] rounded-[16px] shadow-[0px_0px_15px_0px_#00000017] overflow-hidden relative 2xl:mt-0 xl:mt-[57px] mt-[20px]">
        <div className="w-full 2xl:h-[528px] xl:h-[470px] md:h-[528px] h-[432px] text-center bg-white rounded-[16px] relative z-[1] xl:pt-[38px] md:pt-[58px] pt-[20px] md:pb-[74px] pb-[20px] md:mb-0 mb-[6px]">
          <div className="w-[123px] h-[123px] mx-auto relative 2xl:mb-[42px] mb-[20px]">
            <Image
              src={"/images/topTalents/userPhoto.png"}
              width={123}
              height={123}
              alt=""
              className="rounded-[50%]"
            />
            <div className="w-[26.65px] h-[26.65px] absolute left-[2px] top-[2px] flex justify-center items-center bg-[#fff] rounded-[50%]">
              <div className="w-[21.8px] h-[21.8px] bg-[#00FF4D] rounded-[50%]"></div>
            </div>
          </div>
          <h1 className="text-[20px] font-[600] mb-[10px]">Maria T.</h1>
          <div className="flex justify-center items-center gap-[8px] mb-[16px]">
            <Image
              src={"/images/icon-images/map-pin.png"}
              width={20}
              height={20}
              alt=""
              className="rounded-[50%]"
            />
            <h2 className="text-[18px] text-[#64748B] font-[500]">
              Athene, Greece
            </h2>
          </div>
          <div className="w-[98px] h-[36px] flex items-center justify-center border-[1px] border-[#AEB3BC] rounded-[40px] mx-auto gap-[7px] md:mb-[22px] mb-[42px]">
            <Image
              src={"/images/icon-images/starIcon.png"}
              width={23}
              height={23}
              alt=""
              className="rounded-[50%]"
            />
            <p className="text-[18px] font-[500]">4.9</p>
          </div>
          <div className="flex justify-center items-center 2xl:gap-[28px] xl:gap-[12px] md:gap-[20px] gap-[12px]">
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
                $3K+
              </h2>
              <p className="text-[14px] font-[500]">Total Earning</p>
            </div>
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
                12
              </h2>
              <p className="text-[14px] font-[500]">Total Jobs</p>
            </div>
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
              155
              </h2>
              <p className="text-[14px] font-[500]">Total Hours</p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-[20px] bg-[#CBEC5E] z-0"></div>
      </div>
    </div>
  );
};

export default page;
