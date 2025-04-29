"use client"
import { useState } from "react";


export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Overview", "Messages", "Contract Details"];

  return (
    <div className="flex justify-between items-center border text-[20px] font-medium border-[#CBEC5E] 2xl:w-[601px] xl:w-[675px] md:w-[100%] w-[631px] rounded-[184px] pl-[2px] 2xl:pr-[7px] xl:pr-[20px] md:pr-[50px] pr-[2px] h-[56px] min-h-[56px] 2xl:gap-[2px] xl:gap-[32px] md:gap-[70px] gap-[20px]">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`2xl:w-[195px] md:w-[100%] w-[195px] h-[50px] flex justify-center items-center rounded ${
            activeTab === index
              ? "bg-[#CBEC5E] text-[#18470D] rounded-[100px]"
              : " text-[#18470D]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};