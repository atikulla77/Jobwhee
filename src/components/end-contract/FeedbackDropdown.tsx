import Dropdown from "@/shared/ui-kit/Dropdown";

const FeedbackDropdown = ({
	dropDownData,
	setDropDrownData,
	selectedItem,
	setSelectedItem,
}:any) => {
	return (
		<div className="xl:w-[620px] w-[100%] xl:mb-[45px] md:mb-[20px] mb-[25px]">
			<Dropdown
				list={dropDownData}
				setDropDownData={setDropDrownData}
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				label="Why do you want to end the contract?"
				placeholder="Select the reason"
				type="select"
			/>
		</div>
	);
};

export default FeedbackDropdown
