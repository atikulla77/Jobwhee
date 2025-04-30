const MilestoneItem = () => {
  return (
    <div className="pt-[20px]" style={{ width: "calc(100% - 538px)" }}>
      <h1 className="text-[30px] font-medium text-[#18470D]">
        Milestone Timeline
      </h1>
      <div className="w-[593px] pt-[33px] ml-[8.2rem]">
        {/*  */}
        <div className="w-full flex justify-start">
          <div className="w-[297px] h-fit pb-[40px] flex justify-start relative">
            {/* Middle Line */}
            <div className="absolute right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
            <div className="w-[290px] h-[128px] flex justify-start items-center relative">
              {/* Middle Line cercle */}
              <div className="absolute right-[-14px] top-0 h-full z-[1] flex items-center">
                <div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
              </div>
              {/* left Arrow */}
              <div className="absolute right-[0px] top-0 h-full z-[0] flex items-center">
                <div
                  className="w-[27px] h-[22px] rotate-[90deg] bg-[#F5F5F5]"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
              {/* content */}
              <div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#F5F5F5] rounded-[16px] relative">
                <div className="space-y-[8px] opacity-50">
                  <h4 className="text-[16px] font-medium text-[#18470D] ">
                    Week 1
                  </h4>
                  <p className="text-[16px] font-[400] text-[#000000]">
                    € 500.0
                  </p>
                  <button className="text-[15px] font-[500] text-[#5B5B5B] bg-[#e2e2e27a] rounded-[30px] px-[17px] py-[5px]">
                    Closed
                  </button>
                </div>
                <div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
                  <div className="w-full h-[80%] bg-white"></div>
                </div>
                <div className="font-[500] text-[#00000078] flex flex-col items-center leading-[30px]">
                  <p className="text-[14px]">March</p>
                  <h1 className="text-[35px] font-[400]">01</h1>
                  <p className="text-[14px]">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          {/* --------------------------------40px----------- */}
          <div className="w-[297px] h-fit pb-[80px] flex justify-end relative">
            {/* Middle Line */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
            <div className="w-[290px] h-[128px] flex justify-end items-center relative">
              {/* Middle Line cercle */}
              <div className="absolute left-[-14px] top-0 h-full z-[1] flex items-center">
                <div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
              </div>
              {/* left Arrow */}
              <div className="absolute left-[0px] top-0 h-full z-[0] flex items-center">
                <div
                  className="w-[27px] h-[22px] rotate-[270deg] bg-[#CBEC5E]"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
              {/* content */}
              <div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#CBEC5E] rounded-[16px] relative">
                {/* ---------------opacity-50--------*/}
                <div className="space-y-[8px]">
                  <h4 className="text-[16px] font-medium text-[#18470D] ">
                    Week 1
                  </h4>
                  <p className="text-[16px] font-[400] text-[#000000]">
                    € 500.0
                  </p>
                  {/* ----------------------------------------text-[#5B5B5B] bg-[#e2e2e27a]----------- */}
                  <button className="text-[15px] font-[500] text-[#5A7D06] bg-[#EEF6DB] rounded-[30px] px-[17px] py-[5px]">
                    Ongoing
                  </button>
                </div>
                <div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
                  <div className="w-full h-[80%] bg-white"></div>
                </div>
                <div className="font-[500] text-[#000000] flex flex-col items-center leading-[30px]">
                  <p className="text-[14px]">March</p>
                  <h1 className="text-[35px] font-[400]">01</h1>
                  <p className="text-[14px]">2025</p>
                </div>
              </div>
              {/* Button */}
              <button className="absolute bottom-[-50px] right-0 w-[266px] h-[38px] text-[15px] font-[500] text-[#18470D] bg-[#CBEC5E] rounded-[30px]">
                Submit the payment
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-start">
          <div className="w-[297px] h-fit pb-[40px] flex justify-start relative">
            {/* Middle Line */}
            <div className="absolute right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
            <div className="w-[290px] h-[128px] flex justify-start items-center relative">
              {/* Middle Line cercle */}
              <div className="absolute right-[-14px] top-0 h-full z-[1] flex items-center">
                <div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
              </div>
              {/* left Arrow */}
              <div className="absolute right-[0px] top-0 h-full z-[0] flex items-center">
                <div
                  className="w-[27px] h-[22px] rotate-[90deg] bg-[#F0F1F4]"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
              {/* content */}
              <div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#F0F1F4] rounded-[16px] relative">
                <div className="space-y-[8px]">
                  <h4 className="text-[16px] font-medium text-[#18470D] ">
                    Week 1
                  </h4>
                  <p className="text-[16px] font-[400] text-[#000000]">
                    € 500.0
                  </p>
                  <button className="text-[15px] font-[500] text-[#CAAC00] bg-[#F6EED9] rounded-[30px] px-[17px] py-[5px]">
                    Not started
                  </button>
                </div>
                <div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
                  <div className="w-full h-[80%] bg-white"></div>
                </div>
                <div className="font-[500] text-[#000000] flex flex-col items-center leading-[30px]">
                  <p className="text-[14px]">March</p>
                  <h1 className="text-[35px] font-[400]">01</h1>
                  <p className="text-[14px]">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Middle Line Bottom Dot */}
        <div className="w-full flex justify-center">
          <div className="w-[1px] h-[30px] bg-[#c6c2c2a6] relative">
            <div className="absolute bottom-0 left-[-2.75px] w-[5.5px] h-[5.5px] rounded-[50%] bg-[#c6c2c2a6] "></div>
          </div>
        </div>
{/* Add new milestone Button */}
        <div className="w-full flex justify-center mt-[11px] relative">
          <div className="w-[36px] h-[36px] rounded-[50%] border-[1px] border-[#CBEC5E] flex justify-center items-center">
            <p className="text-[18px] h-[20px] text-[#18470D]">+</p>
          </div>
          <div className="absolute right-0 top-0 w-full h-full flex items-center justify-center">
              <h3 className="text-[16px] font-[500] text-[#18470D] ml-[13.7rem]">
                Add new milestone
              </h3>
            </div>
        </div>

        <button className="w-[233px] h-[48px] mt-[110px] text-[15px] font-[500] text-[#18470D] border-[1px] border-[#CCCCCC] rounded-[50px] flex justify-center items-center mx-auto">Manage Milestones</button>
      </div>
    </div>
  );
};

export default MilestoneItem;
