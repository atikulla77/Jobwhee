import ContractSummaryRow from "./ContractSummaryRow";
import ContractMetaInfo from "./ContractMetaInfo";
import ContractSidebar from "./ContractSidebar";
import RecentActivity from "./RecentActivity";

const ContractOverviewBlock = () => {
  const activityData = [
    {
      date: "September 15, 2024",
      description: "You give Maria T. feedback.",
    },
    {
      date: "September 15, 2024",
      description: "Maria T. gives you feedback.",
    },
    {
      date: "September 15, 2024",
      description: "Eleni C. ended your contract.",
    },
    {
      date: "September 15, 2024",
      description:
        "Payment for the milestone Touch-ups & Post-Event Care has been rejected.",
    },
    {
      date: "September 15, 2024",
      description:
        "Payment for the milestone Touch-ups & Post-Event Care has been successfully released.",
    },
    {
      date: "September 15, 2024",
      description:
        "Maria T. send request for payment, milestone Touch-ups & Post-Event Care.",
    },
    {
      date: "September 15, 2024",
      description: "Eleni C. activate milestone Touch-ups & Post-Event Care.",
    },
    {
      date: "September 15, 2024",
      description: "Eleni C. activate milestone Touch-ups & Post-Event Care.",
    },
    {
      date: "September 15, 2024",
      description: "Eleni C. created milestone Touch-ups & Post-Event Care.",
    },
  ];

  return (
    <div className="w-full mx-auto flex xl:flex-row flex-col xl:justify-between justify-center 2xl:gap-[30px] gap-[20px]">
      {/* w-[1047px] */}
      <div className="2xl:w-[1010px] xl:w-[775px] w-full 2xl:space-y-[30px] xl:space-y-[20px] space-y-[10px]">
        <ContractMetaInfo />
        <ContractSummaryRow />
        <RecentActivity activities={activityData} />;
      </div>
      {/* 395px */}
      <div className="2xl:w-[395px] xl:w-[405px] w-full h-full">
        <ContractSidebar />
      </div>
    </div>
  );
};

export default ContractOverviewBlock;
