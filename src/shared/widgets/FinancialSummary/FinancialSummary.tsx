const FinancialSummary = ({ contract }: any) => {
  return (
    <div className="w-full md:h-[104px]  flex xl:flex-row flex-col justify-between items-center border-[1.5px] border-[#CBEC5E] rounded-2xl md:text-center text-left text-black 2xl:px-[25px] xl:px-[25px] md:px-[25px] px-[14px] md:text-[20px] text-[16px] font-[500] md:py-0 py-[14px]">
      <div className="w-full h-full flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-[22px]">
        <div className="md:w-auto w-full flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Project Price</h1>
          <p className="text-[16px] font-normal md:text-center">
            € {contract?.projectPrice}
          </p>
        </div>
        <div className="md:w-auto w-full flex flex-col xl:gap-[12px] gap-[14px]">
          <h1 className="">Money in Secure</h1>
          <p className="text-[16px] font-normal md:text-center">
            € {contract?.inEscrow}
          </p>
        </div>
        <div className="2xl:w-[213px] xl:w-[175px] md:w-[227px] w-full h-full flex md:flex-row flex-col md:justify-between justify-start items-center 2xl:pr-[30px] xl:pr-[18px] md:pr-[35px] pr-0 md:gap-0 gap-[14px]">
          <div className="md:w-[1px] w-[100%] md:h-[90%] h-[1px] bg-[#CBEC5E]"></div>
          <div className="md:w-auto w-full flex flex-col md:justify-center justify-start items-center md:text-center text-left xl:gap-[12px] gap-[14px] ">
            <h1 className="2xl:text-[20px] md:text-[16px] text-[20px] md:w-auto w-full">Total Spend</h1>
            <p className="text-[16px] font-normal md:w-auto w-full">€ {contract?.totalSpend}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
