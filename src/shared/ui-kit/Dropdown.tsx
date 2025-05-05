"use client";
import { useEffect, useId, useState } from "react";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { SearchIconGray } from "../../../public/icons/SearchIconGray";
import { WhiteCheckIcon } from "../../../public/icons/WhiteCheckIcon";
import ClickOutside from "../widgets/ClickOutside/ClickOutside";

type DropdownProps = {
	list: Array<{ title: string; checked?: boolean; id: number }>; // data with checkboxes
	setDropDownData?: React.Dispatch<
		React.SetStateAction<Array<{ title: string; checked?: boolean; id: number }>>
	>;
	label?: string;
	placeholder?: string;
	hasCheckboxes?: boolean;
	searchField?: boolean;
	state?: string;
	isValid?: boolean;
	inValidText?: string;
	listMaxHeight?: string;
	type: "checkboxes" | "search-checkboxes" | "select";
	selectedItem?: string;
	setSelectedItem?: React.Dispatch<React.SetStateAction<string>> | undefined;
};

const Dropdown: React.FC<DropdownProps> = ({
	list,
	label,
	placeholder,
	state,
	isValid = true,
	inValidText,
	setDropDownData,
	type,
	selectedItem,
	setSelectedItem,
}) => {
	const inputId = useId();
	const [openMenu, setOpenMenu] = useState(false);
	const [selectedPlaceholder, setSelectedPlaceholder] = useState(placeholder);
	const [searchValue, setSearchValue] = useState("");
	const filteredList = searchValue
		? list.filter(item =>
				item.title.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: list;

	useEffect(() => {
		const checkedItems = list.filter(item => item.checked);
		if (checkedItems.length === 0) {
			setSelectedPlaceholder(placeholder);
		} else {
			setSelectedPlaceholder(checkedItems.map(item => item.title).join(", "));
		}
	}, [list]);

	const toggleCheckbox = (id: number) => {
		setDropDownData?.(prevProps => {
			return prevProps.map(item => {
				if (item.id === id) {
					return { ...item, checked: !item.checked };
				}
				return item;
			});
		});
	};

	return (
		<ClickOutside onClick={() => setOpenMenu(false)}>
			<div className="w-full min-w-[350px]">
				{label && (
					<div className="mb-[8px]">
						<label
							className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]"
							htmlFor={inputId}>
							{label}
						</label>
					</div>
				)}
				<div className="relative">
					<div
						onClick={() => setOpenMenu(!openMenu)}
						className={
							" border-[1.4px] min-h-[42px]  rounded-[12px] flex items-center px-[8px] py-[7px] 2xl:p-[9px] 2xl:py-[7px] cursor-pointer" +
							(openMenu
								? " border-[#18470D] blue-shadow "
								: " border-[#AEB3BC] " + (isValid ? " " : " border-[#DD331D] "))
						}>
						<div
							className={` flex items-center select-none w-full min-h-[24px] 2xl:text-[16px] text-[12px] sm:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:text-[14px] focus:outline-0 ${
								state ? "text-[#2B2C2D]" : "text-[#8B939F]"
							} ${
								selectedPlaceholder !== placeholder
									? " !text-[#2B2C2D] "
									: !selectedItem
									? " !text-[#8B939F] "
									: " !text-[#2B2C2D] "
							}`}>
							{type === "checkboxes" || type === "search-checkboxes"
								? selectedPlaceholder || placeholder
								: selectedItem || placeholder}
						</div>

						<div className={openMenu ? "rotate-180" : ""}>
							<DropDownArrowIcon />
						</div>
					</div>
					<div
						className={`bg-white absolute w-full z-10 p-[8px] shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1)] border-[0.5px] border-[#EAEAEA] mt-[8px] rounded-[12px] ${
							openMenu ? "block" : "hidden"
						}`}>
						{type === "search-checkboxes" && (
							<div className="p-[3px_8px] flex items-center gap-[10px] h-[28px] border-b border-[#EAEAEA] pb-[10px] mb-[10px] mt-[10px]">
								<div className="w-[21px] h-[21px]">
									<SearchIconGray />
								</div>
								<input
									value={searchValue}
									onChange={e => setSearchValue(e.target.value)}
									className="w-full outline-none placeholder:text-[#B1B9C5] text-[18px] text-[#414750]"
									type="text"
									placeholder="Search"
								/>
							</div>
						)}
						<ul className="max-h-[250px] overflow-y-auto">
							{filteredList.length > 0 ? (
								filteredList.map((item, i) => (
									<li
										className={`select-none text-[#2B2C2D]  flex ${
											i !== filteredList.length - 1
												? " mb-[8px] pb-[10px] border-b border-[#EAEAEA] "
												: ""
										}`}
										key={i}>
										<div
											className="flex hover:bg-[#F5FFD3] rounded-[8px] w-full cursor-pointer py-[2px] px-[8px]"
											onClick={() => {
												if (
													type === "checkboxes" ||
													type === "search-checkboxes"
												) {
													toggleCheckbox?.(item.id);
												} else if (type === "select") {
													setSelectedItem?.(item.title);
													setOpenMenu(false);
												}
											}}>
											{(type === "checkboxes" ||
												type === "search-checkboxes") && (
												<div className="mr-[8px]">
													<label className="flex items-center cursor-pointer">
														<input
															type="checkbox"
															checked={item.checked}
															onChange={() => toggleCheckbox?.(item.id)}
															className="hidden"
														/>
														<div
															className={`min-w-[24px] h-[24px] flex items-center justify-center border rounded-[6px] ${
																item.checked
																	? "bg-[#18470D] border-[#18470D]"
																	: "bg-none border-[#AEB3BC]"
															}`}>
															{item.checked && <WhiteCheckIcon />}
														</div>
													</label>
												</div>
											)}
											<div className="text-[14px] lg:text-[16px] flex gap-[10px] cursor-pointer">
												{item.title}
											</div>
										</div>
									</li>
								))
							) : (
								<li className="text-[#565E69] text-[16px] pb-[4px] pl-[39px]">
									No results found
								</li>
							)}
						</ul>
					</div>
					{!isValid && (
						<p className="mt-[8px] text-[#DD331D] text-[12px]">{inValidText}</p>
					)}
				</div>
			</div>
		</ClickOutside>
	);
};

export default Dropdown;
