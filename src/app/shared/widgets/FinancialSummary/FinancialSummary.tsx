const FinancialSummary = () => {
  return (
    <div className="w-full xl:h-[104px] md:h-[235px] h-[444px] flex xl:flex-row flex-col justify-between items-center border-[1.5px] border-[#CBEC5E] rounded-2xl md:text-center text-left text-black 2xl:px-[30px] xl:px-[25px] md:px-[30px] px-[14px] xl:text-[20px] text-[16px] font-[500] xl:py-0 md:py-[30px] py-[15px]">
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-start 2xl:pr-[60px] xl:pr-[37px] pr-0 xl:pb-0 pb-[13px] md:gap-0 gap-[22px]">
        <div className="flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Project Price</h1>
          <p className="text-[16px] font-normal">€ 1500</p>
        </div>
        <div className="flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Money in Secure</h1>
          <p className="text-[16px] font-normal">€ 500</p>
        </div>
        <div className="flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Milestones Paid (1)</h1>
          <p className="text-[16px] font-normal">€ 500</p>
        </div>
        <div className="flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Milestones Remaining (2)</h1>
          <p className="text-[16px] font-normal">€ 500</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CBEC5E] xl:hidden block">

      </div>
      <div className="2xl:w-[225px] xl:w-[205px] md:w-fit w-full flex justify-between items-center 2xl:pr-0 xl:pr-[27px] pr-0">
        <div className="w-[1px] h-[90px] bg-[#CBEC5E] xl:block hidden"></div>
        <div className="flex flex-col md:gap-[12px] gap-[8px] md:w-fit w-[100%]">
          <h1 className="text-[20px]">Total Spend</h1>
          <p className="text-[16px] font-normal">€ 2000</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
