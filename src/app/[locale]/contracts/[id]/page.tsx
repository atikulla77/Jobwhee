import ContractTabs from "@/app/shared/widgets/ContractTabs/ContractTabs";
import ContractHeader from "../../../../components/contract-overview/ContractHeader";
import {mockContractDetail} from "./data/mockContractDetail";
import FinancialSummary from "@/app/shared/widgets/FinancialSummary/FinancialSummary";
import ContractMetaRow from "@/components/contract-overview/ContractMetaRow";

const page = () => {
	return (
		<div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] mx-auto [@media(min-width:835px)]:px-0 md:px-[10px] px-0 overflow-x-auto">
			<div className="2xl:mb-[30px] mb-[20px] mt-8">
				<ContractHeader contract={mockContractDetail} />
			</div>
            <div className="2xl:mb-[30px] mb-[20px] ">
				<ContractTabs />
			</div>
            <div className="2xl:mb-[50px] mb-[20px]">
				<FinancialSummary />
			</div>
			<div className="pb-[30rem]">
				<ContractMetaRow />
			</div>
		</div>
	);
};

export default page;
