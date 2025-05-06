const ContractSummaryRow = () => {
  return (
    <div className="2xl:h-[258px] xl:h-[254px] md:h-[238px] h-full rounded-[16px] border  border-[#CBEC5E] xl:p-[28px] md:p-[20px] p-[14px]">
      <h2 className="text-[16px] text-[#8A8A8A] font-[500] mb-[4px]">
        Details
      </h2>
      <div className="w-full h-[1px] bg-[#aeb3bc] relative md:mb-[18px] mb-[20px]"> 
        <div className="w-[92px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
      </div>

      <div className="w-full flex flex-col md:gap-[40px] gap-[3px]">
        <div className="flex md:flex-row flex-col justify-between">
          <h3 className="w-[100px] text-[20px] font-medium pb-[8px]">Summary</h3>
          <div className="w-[113px] space-y-[4px] md:pb-0 pb-[13px]">
            <p className="text-[20px] font-medium">Fixed-Price</p>
            <p className="text-sm text-[#545454]">Contract type</p>
          </div>
          <div className="md:block hidden w-[149px] space-y-[4px]">
            <p className="text-[20px] font-medium">March 14, 2025</p>
            <p className="text-sm text-[#545454]">Start date</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between">
          <h3 className="w-[100px] text-[20px] font-medium md:pb-0 pb-[7px]">Details</h3>
          <div className="w-[113px] space-y-[4px] md:pb-0 pb-[12px]">
            <p className="text-[20px] font-medium">Maria T.</p>
            <p className="text-sm text-[#545454]">Verified name</p>
          </div>
          <div className="md:hidden block w-[149px] space-y-[4px]">
            <p className="text-[20px] font-medium">March 14, 2025</p>
            <p className="text-sm text-[#545454]">Start date</p>
          </div>
          <div className="w-[149px] space-y-[4px] md:pt-0 pt-[24px]">
            <p className="text-[20px] font-medium">98765xyz12</p>
            <p className="text-sm text-[#545454]">Contract ID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractSummaryRow;
