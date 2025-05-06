import ContractSummaryRow from "./ContractSummaryRow";
import ContractMetaInfo from "./ContractMetaInfo";
import ContractSidebar from "./ContractSidebar";
import RecentActivity from "./RecentActivity";

const ContractOverviewBlock = () => {
	return (
		<div className="w-full mx-auto flex xl:flex-row flex-col xl:justify-between justify-center 2xl:gap-[30px] gap-[20px]">
			{/* w-[1047px] */}
			<div className="2xl:w-[1047px] xl:w-[775px] w-full 2xl:space-y-[30px] xl:space-y-[20px] space-y-[10px]">
				<ContractMetaInfo />
				<ContractSummaryRow />
				<RecentActivity />
			</div>
			{/* 395px */}
			<div className="2xl:w-[395px] xl:w-[405px] w-full h-full">
				<ContractSidebar />
			</div>
		</div>
	);
};

export default ContractOverviewBlock;
