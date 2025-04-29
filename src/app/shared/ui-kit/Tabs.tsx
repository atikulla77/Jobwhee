"use client"
import { useState } from "react";


export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Overview", "Messages", "Contract Details"];

  return (
    <div className="flex justify-between border text-[20px] font-medium border-[#CBEC5E] max-w-[601px] rounded-[184px]">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-8 py-3 rounded ${
            activeTab === index
              ? "bg-[#CBEC5E] text-[#18470D] rounded-[100px]"
              : " text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};