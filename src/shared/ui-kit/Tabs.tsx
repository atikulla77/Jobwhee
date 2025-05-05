interface TabState {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export const Tabs = ({ activeTab, setActiveTab }: TabState) => {
  const tabs = ["Overview", "Messages", "Contract Details"];

  return (
    <div
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
      className="overflow-x-auto "
    >
      <div className="flex justify-between items-center border text-[20px] font-medium border-[#CBEC5E] 2xl:w-[601px] xl:w-[674px] md:w-[100%] w-[631px] rounded-[184px] px-[2px] h-[56px] min-h-[56px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`${
              tab === "Overview"
                ? "w-[195px] "
                : tab === "Messages"
                ? "w-[196px]"
                : tab === "Contract Details"
                ? "w-[200px]"
                : "w-[195px]"
            } h-[50px] flex justify-center items-center rounded ${
              activeTab === tab
                ? "bg-[#CBEC5E] text-[#18470D] rounded-[100px]"
                : " text-[#18470D]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
