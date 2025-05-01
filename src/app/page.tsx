"use client";

import Button from "@/shared/ui-kit/Button";
import CheckBox from "@/shared/ui-kit/CheckBox";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";
import Dropdown from "@/shared/ui-kit/Dropdown";
import { EmptyFileCard } from "@/shared/ui-kit/EmptyFileCard";
import { Input } from "@/shared/ui-kit/Input";
import RadioButtons from "@/shared/ui-kit/RadioButtons";
import { Search } from "@/shared/ui-kit/Search";
import { StatusTag } from "@/shared/ui-kit/StatusTag";
import StepsPanel from "@/shared/ui-kit/StepsPanel";
import SwitchOption from "@/shared/ui-kit/SwitchOption";
import { Tabs } from "@/shared/ui-kit/Tabs";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { useState, useEffect } from "react";
import { EmptyJobField } from "@/shared/ui-kit/EmptyJobField";
import ComponentItem from "@/shared/ui-kit/ComponentItem";
import Link from "next/link";

const dropDownDataInit = [
	{
		id: 1,
		title: "Software Engineer",
		checked: false,
	},
	{
		id: 2,
		title: "Laboratory Technician",
		checked: false,
	},
	{
		id: 3,
		title: "Graphic Designer",
		checked: false,
	},
];
const radioButtonsData = ["Entry", "Intermediate"];
const categories = [
	{ id: 1, title: "Option A", checked: false },
	{ id: 2, title: "Option B ", checked: false },
	{ id: 3, title: "Option C", checked: false },
];
const stepsData = [
	{ stepCount: 1, active: false, checked: true },
	{ stepCount: 2, active: false, checked: true },
	{ stepCount: 3, active: true, checked: false },
	{ stepCount: 4, active: false, checked: false },
	{ stepCount: 5, active: false, checked: false },
];

export default function ComponentsPage() {
	const [selectedItem, setSelectedItem] = useState("");
	const [checkboxChecked, setCheckboxChecked] = useState(false);
	const [selectedOption, setSelectedOption] = useState(0);
	const [switchEnabled, setSwitchEnabled] = useState(false);
	const [dropDownData, setDropDrownData] = useState(categories);
	const [date, setDate] = useState<Date | null>(null);
	const [currentStepsData, setCurrentStepsData] = useState(stepsData);

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<div className="p-10 flex flex-col gap-8   ">
			<Link href={"/local/contracts"}>Go to Contracts page</Link>
			<h1 className="mb-[2em]">Components Page</h1>
			<ComponentItem name="Dropdown" src="src/shared/ui-kit/Dropdown.tsx">
				<Dropdown
					list={dropDownData}
					setDropDownData={setDropDrownData}
					label="Label"
					placeholder="Dropdown"
					type="checkboxes"
				/>
				<Dropdown
					list={dropDownData}
					setDropDownData={setDropDrownData}
					label="Label"
					placeholder="Dropdown"
					type="search-checkboxes"
				/>
				<Dropdown
					list={dropDownData}
					setDropDownData={setDropDrownData}
					selectedItem={selectedItem}
					setSelectedItem={setSelectedItem}
					label="Label"
					placeholder="Dropdown"
					type="select"
				/>
			</ComponentItem>
			<ComponentItem name="CheckBox" src="src/shared/ui-kit/CheckBox.tsx">
				<CheckBox
					setChecked={setCheckboxChecked}
					checked={checkboxChecked}
					labelPosition="right"
				/>
				<CheckBox
					setChecked={setCheckboxChecked}
					checked={true}
					labelPosition="right"
				/>
				<CheckBox
					label="Option"
					setChecked={setCheckboxChecked}
					checked={true}
					labelPosition="right"
				/>
				<CheckBox
					label="Option"
					setChecked={setCheckboxChecked}
					checked={false}
					labelPosition="right"
				/>
				<CheckBox
					label="Option"
					setChecked={setCheckboxChecked}
					checked={false}
					labelPosition="left"
				/>
				<CheckBox
					label="Option"
					setChecked={setCheckboxChecked}
					checked={true}
					labelPosition="left"
				/>
			</ComponentItem>
			<ComponentItem
				name="RadioButtons"
				src="src/shared/ui-kit/RadioButtons.tsx">
				<RadioButtons
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
				<RadioButtons
					radioButtonsData={radioButtonsData}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					labelPosition="right"
				/>
				<RadioButtons
					radioButtonsData={radioButtonsData}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					labelPosition="left"
				/>
			</ComponentItem>
			<ComponentItem name="Input" src="src/shared/ui-kit/Input.tsx">
				<Input type="text" />
			</ComponentItem>

			{/* <ComponentItem name="Button" src="src/shared/ui-kit/Button.tsx">
				<Button type={"active"} />
			</ComponentItem>

			<ComponentItem name="Tabs" src="src/shared/ui-kit/Tabs.tsx">
				<Tabs />
			</ComponentItem>

			<ComponentItem name="Search" src="src/shared/ui-kit/Search.tsx">
				<Search />
			</ComponentItem> */}

			<ComponentItem name="Status" src="src/shared/ui-kit/StatusTag.tsx">
				<div className=" space-y-5">
					<StatusTag status="Valid" />
					<StatusTag status="Success" />
					<StatusTag status="Reject" />
					<StatusTag status="Pending" />
					<StatusTag status="Inactive" />
				</div>
			</ComponentItem>

			<ComponentItem name="TextArea" src="src/shared/ui-kit/TextArea.tsx">
				<TextArea />
			</ComponentItem>

			<ComponentItem name="TextArea" src="src/shared/ui-kit/TextArea.tsx">
				<div className=" bg-slate-200 pl-5 py-3 max-w-[510px] w-full rounded-xl ">
					<EmptyFileCard />
				</div>
			</ComponentItem>

			<ComponentItem name="TextArea" src="src/shared/ui-kit/TextArea.tsx">
				<div className=" mt-[80px] max-w-[1430px] w-full">
					<EmptyJobField />
				</div>
			</ComponentItem>
			<ComponentItem
				name="SwitchOption"
				src="src/shared/ui-kit/SwitchOption.tsx">
				<SwitchOption
					labelPosition="right"
					enabled={switchEnabled}
					setEnabled={setSwitchEnabled}
				/>
				<SwitchOption
					labelPosition="right"
					enabled={true}
					setEnabled={setSwitchEnabled}
				/>
				<SwitchOption
					labelPosition="right"
					label="Option"
					enabled={false}
					setEnabled={setSwitchEnabled}
				/>
				<SwitchOption
					labelPosition="right"
					label="Option"
					enabled={true}
					setEnabled={setSwitchEnabled}
				/>
				<SwitchOption
					labelPosition="left"
					label="Option"
					enabled={false}
					setEnabled={setSwitchEnabled}
				/>
				<SwitchOption
					labelPosition="left"
					label="Option"
					enabled={true}
					setEnabled={setSwitchEnabled}
				/>
			</ComponentItem>
			<ComponentItem
				name="CustomDatePicker"
				src="src/shared/ui-kit/CustomDatePicker.tsx">
				<div className={" z-50 w-full"}>
					<CustomDatePicker onChangeDate={setDate} />
				</div>
			</ComponentItem>
			<ComponentItem name="StepsPanel" src="src/shared/ui-kit/StepsPanel.tsx">
				<StepsPanel stepsData={currentStepsData} />
			</ComponentItem>
		</div>
	);
}
