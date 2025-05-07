import Button from "@/shared/ui-kit/Button";

const ContractRefund = () => {
  return (
    <div className="w-full text-[#545454]">
      <div className="mt-8 xl:mb-[30px] mb-[10px] md:max-w-full mx-auto flex items-center xl:pl-[26px] md:pl-[19px] pl-[12px] border-1 border-[#CBEC5E] rounded-2xl 2xl:h-[121px] xl:h-[116px] md:h-[82px] h-[54px] text-black">
        <h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
          Refund Request
        </h1>
      </div>
      <div className="xl:h-[620px] md:h-[841px] h-[958px] xl:rounded-[16px] md:rounded-[30px] rounded-[16px] border border-[#CBEC5E] 2xl:p-[28px] xl:p-[27px] md:p-[20px] p-[12px]">
        <h2 className="text-[16px] text-[#8A8A8A] font-[500] xl:mb-[4px] md:mb-[12px] mb-[4px]">
          Request
        </h2>
        <div className="w-full h-[1px] bg-[#aeb3bc] relative 2xl:mb-[19px] xl:mb-[29px] md:mb-[24px] mb-[20px]">
          <div className="w-[72px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
        </div>

        <div className="w-full flex xl:flex-row flex-col 2xl:gap-[107px] xl:gap-[83px] md:gap-[22px] gap-[34px] mb-2">
          <div className="2xl:w-[569px] xl:w-[468px] w-full flex flex-col 2xl:gap-[41px] xl:gap-[40px] md:gap-[20px] gap-[12px] 2xl:mt-[8px] mt-0">
            <div className="">
              <p className="md:text-[18px] text-[16px] pb-[8px]">Contract</p>
              <p className="w-full h-[42px] 2xl:text-[16px] text-[14px] flex items-center bg-[#ECEDEF] pl-[8px] rounded-[12px]">
                Hairstylist Needed for Special Events
              </p>
            </div>
            <div className="">
              <p className="md:text-[18px] text-[16px] pb-[8px]">Invoice</p>
              <p className="w-full h-[42px] 2xl:text-[16px] text-[14px] flex items-center bg-[#ECEDEF] pl-[8px] rounded-[12px]">
                Week 1
              </p>
            </div>
            <div>
              <p className="md:text-[18px] text-[16px] pb-[8px]">Amount</p>
              <p className="w-full h-[42px] 2xl:text-[16px] text-[14px] flex items-center bg-[#ECEDEF] pl-[8px] rounded-[12px]">
                € 500.0
              </p>
            </div>
          </div>
          <div className="2xl:w-[743px] xl:w-[583px] w-full ">
            <h3 className="text-[18px] xl:pb-[10px] md:pb-[20px] pb-[10px]">Note</h3>
            <p className="md:text-[16px] text-[14px]">
              I’m requesting a refund for the milestone payment of €500 made for
              the Hairstylist Needed for Special Events project due to<br className="md:hidden block" /> the
              following reasons:
              <br />
              Reason for Refund:
              <br />
              Incomplete Work:
              <br />
              The deliverables did not meet the expectations outlined in the
              project scope. Specifically, the 
              required hairstyling concepts and designs were not completed as
              agreed. The final 
              deliverables didn’t reflect the style we discussed for the<br className="md:hidden block" /> special
              events, and some of the 
              proposed styles were missing key details.
              <br />
              Delayed Delivery:
              <br />
              The work was not completed within the agreed timeframe, which
              impacted our ability to <br className="2xl:block hidden"/>
              move forward with the event <br className="2xl:block hidden"/>
              planning and <br className="2xl:hidden xl:block hidden"/> caused significant delays in our project schedule. <br className="2xl:block hidden"/>
              Please process the refund for the milestone amount of €500. Let me
              know if you have any 
              questions or if further clarification is needed. I appreciate your
              prompt attention <br className="xl:hidden md:block hidden"/>to this 
              matter.
              <br />
              <br />
              Best regards,
              <br />
              Eleni C.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:mt-[152px] xl:mt-[50px] md:mt-[40px] mt-[34px] flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px]">
        <div className="md:w-[200px] w-[100%] xl:h-[48px] md:h-[44px] h-[40px]">
          <Button action={"Decline"} type={"nonBorder"} />
        </div>
        <div className="md:w-[200px] w-[100%] xl:h-[48px] md:h-[44px] h-[40px]">
          <Button action={"Give Refund"} type="active" />
        </div>
      </div>
    </div>
  );
};

export default ContractRefund;
