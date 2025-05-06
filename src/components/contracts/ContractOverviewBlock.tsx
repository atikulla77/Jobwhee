import ContractSummaryRow from "./ContractSummaryRow";
import ContractMetaInfo from "./ContractMetaInfo";
import ContractSidebar from "./ContractSidebar";
import RecentActivity from "./RecentActivity";

const ContractOverviewBlock = () => {
	return (
		<div className="flex gap-x-[30px]">
			<div className="max-w-[1047px] mx-auto space-y-[30px]">
				<ContractMetaInfo />
				<ContractSummaryRow />
				<RecentActivity />
			</div>
			<div className="max-w-[395px]">
				<ContractSidebar />
			</div>
		</div>
	);
};

export default ContractOverviewBlock;
