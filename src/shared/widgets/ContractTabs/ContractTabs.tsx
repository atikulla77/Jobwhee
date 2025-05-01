import { Tabs } from "../../ui-kit/Tabs";
interface TabState {
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const ContractTabs = ({ activeTab, setActiveTab }: TabState) => {
	return (
		<div>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
};

export default ContractTabs;
