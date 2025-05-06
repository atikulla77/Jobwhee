import Feedback from "@/shared/widgets/Feedback/Feedback";
import ContractDetailsClient from "./ContractDetailsClient";

const ContractSidebar = () => {
	return (
		<div className="space-y-[30px]">
			<ContractDetailsClient />
			<Feedback />
		</div>
	);
};

export default ContractSidebar;
