import Button from "@/shared/ui-kit/Button";
import FileUploadTimeline from "./FileUploadTimeline";
import FinancialSummary from "@/shared/widgets/FinancialSummary/FinancialSummary";

const ContractCompletedTimeline = ({ contract }: any) => {
  const handleSubmit = (action: string) => {
    alert("submit the payment");
  };
  return (
    <div className="w-full flex flex-wrap  xl:justify-between md:justify-center 2xl:gap-x-[22px] gap-x-[14px] xl:gap-y-6 md:gap-y-[18px] gap-y-[25px] justify-start">
      <div className="2xl:w-[870px] xl:w-[726px] sm:w-[780px] w-[335px] mx-auto">
        <FinancialSummary contract={contract} />
        <div className="2xl:mt-[28px] md:mt-[38px] mt-[25px]">
          <h1 className="md:text-[30px] text-[28px] font-medium pb-5 text-[#18470D]">
            After work completion
          </h1>
          <div className="xl:h-[326px] space-y-4 xl:p-[28px] md:p-[20px] p-[13px] rounded-2xl border-[1.5px] border-[#CBEC5E] ">
            <div className="border-b border-[#AEB3BC] 2xl:pb-[5px] pb-[6px] relative">
              <p className="text-[#8A8A8A]">Details</p>
              <div className="w-[94px] h-[5px] absolute bottom-0 left-0 rounded-2xl bg-[#CBEC5E] xl:mb-[-2.5px] mb-[-3px]"></div>
            </div>
            <h1 className="md:text-[20px] text-[16px] font-[500] xl:pt-0 md:pt-[10px] pt-[5px]">
              Weekly House Cleaning Service for a 3-Bedroom Apartment<br className="xl:hidden md:block hidden" /> timeline
            </h1>
            <div className="2xl:mt-0 mt-[-5px] flex justify-between 2xl:pt-[18px] md:pt-0 pt-[10px] 2xl:pb-[28px] xl:pb-[23px] md:pb-[20px] pb-[25px] border-b border-[#AEB3BC] 2xl:pr-0 xl:pr-[18px] pr-0">
              <div>
                <h1 className="md:text-[20px] text-[16px] md:pb-[14px] pb-[20px] text-[#414750] font-[400]">
                  Start Date
                </h1>
                <p className="text-black md:text-[16px] text-[14px] font-[400]">
                  01/01/25
                </p>
              </div>
              <div>
                <h1 className="md:text-[20px] text-[16px] md:pb-[14px] pb-[20px] text-[#414750] font-[400]">
                  End Date
                </h1>
                <p className="text-black md:text-[16px] text-[14px] font-[400]">
                  01/01/25
                </p>
              </div>
              <div>
                <h1 className="md:text-[20px] text-[16px] md:pb-[14px] pb-[20px] text-[#414750] font-[400]">
                  Status
                </h1>
                <p className="md:text-[16px] text-[14px] font-[500] text-[#5A7D06] bg-[#EEF6DB] rounded-[30px] px-[17px] py-[5px] capitalize">
                  Ongoing
                </p>
              </div>
            </div>
            <div className="w-[225px] h-[38px] mx-auto 2xl:mt-[25px] xl:mt-[20px] md:mt-[23px] mt-[15px] md:mb-0 mb-[15px]">
              <Button
                type="active"
                action="Submit the payment"
                handleButton={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[538px] xl:w-[460px] w-full h-fit md:pt-[30px] pt-[19px] 2xl:pb-[30px] md:pb-[15px] pb-[10px] 2xl:px-[27px] md:px-[30px] px-[14px] border-[1.5px] border-[#CBEC5E] rounded-2xl">
        <FileUploadTimeline />
      </div>
    </div>
  );
};

export default ContractCompletedTimeline;
