interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="w-full  overflow-x-auto scrollbar-hide"
    >
      <div className="flex justify-between   border border-[#CBEC5E] rounded-[184px] pr-[62px]  py-[1px] md:w-full  w-[780px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`lg:px-[30px] px-[22px] text-[20px] h-[50px] whitespace-nowrap rounded-[100px] font-medium ${
              activeTab === tab ? "bg-[#CBEC5E] text-[#18470D]" : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
