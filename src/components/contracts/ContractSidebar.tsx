import Feedback from "@/shared/widgets/Feedback/Feedback";
import ContractDetailsClient from "./ContractDetailsClient";

const ContractSidebar = () => {
  return (
    <div className="w-full h-full 2xl:space-y-[30px] xl:space-y-[20px] space-y-[10px]">
      <ContractDetailsClient />
      <Feedback />
    </div>
  );
};

export default ContractSidebar;
