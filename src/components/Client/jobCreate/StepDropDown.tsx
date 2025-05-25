"use client";
import { useEffect, useId, useState } from "react";
import { ArrowIcon } from "../../../../public/icons/ArrowIcon";
import { WhiteCheckIcon } from "../../../../public/icons/WhiteCheckIcon";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";

type DropdownProps = {
    list: Array<{ title: string; checked?: boolean; id: number }>;
    label?: string;
    placeholder?: string;
    hasCheckboxes?: boolean;
    toggleCheckbox?: (id: number) => void;
    setState?: React.Dispatch<React.SetStateAction<string>>;
    searchField?: boolean;
    state?: string;
    isValid?: boolean;
    inValidText?: string;
    dropDownHeight?: string;
};

const StepDropDown: React.FC<DropdownProps> = ({
    list,
    label,
    placeholder,
    hasCheckboxes,
    toggleCheckbox,
    searchField,
    state,
    setState,
    isValid = true,
    inValidText,
    dropDownHeight
}) => {
    const inputId = useId();
    const [openMenu, setOpenMenu] = useState(false);
    const [filteredList, setFilteredList] = useState<
        { title: string; checked?: boolean; id: number }[]
    >([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (inputValue) setOpenMenu(true);
        setFilteredList(
            list.filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase().trim())
            )
        );
    }, [inputValue, list]);

    return (
        <ClickOutside onClick={() => setOpenMenu(false)}>
            <div className="w-full">
                {label && (
                    <div className="mb-[8px]">
                        <label
                            className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]"
                            htmlFor={inputId}
                        >
                            {label}
                        </label>
                    </div>
                )}
                <div>
                    <div
                        onClick={() => setOpenMenu(!openMenu)}
                        className={
                            " border-[1px] min-h-[42px]  rounded-[12px] flex items-center px-[8px] py-[8px] 2xl:p-[9px] cursor-pointer" +
                            (openMenu
                                ? " border-[#18470D] "
                                : " border-[#242524] " + (isValid ? " " : " border-[#DD331D] "))
                        }
                    >
                        {searchField ? (
                            <input
                                className="w-full text-[16px] text-[#000] outline-none placeholder:text-[#8B939F]"
                                placeholder="Select Skills"
                                type="text"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }}
                            />
                        ) : (
                            <div
                                className={` flex items-center select-none w-full min-h-[24px] placeholder:text-[#2B2C2D] 2xl:text-[16px] text-[12px] sm:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:text-[14px] focus:outline-0 ${state ? "text-[#2B2C2D]" : "text-[#8B939F]"
                                    }`}
                            >
                                {state || placeholder || list[0].title}
                            </div>
                        )}
                        <div className={openMenu ? "rotate-180" : ""}>
                            <ArrowIcon />
                        </div>
                    </div>
                    <div
                        className={`shadow-[2px_2px_5px_0px_#0000001A] border-[0.5px] border-[#EAEAEA] mt-[4px] rounded-[12px] ${openMenu ? "block" : "hidden"
                            }`}
                    >
                        <ul className={`p-[8px] pb-[8px]  ${dropDownHeight ?? 'max-h-[250px]'}  overflow-y-auto`}>
                            {filteredList.length === 0 && inputValue ? (
                                <li className="text-[#8B939F]">Not found</li>
                            ) : (
                                (inputValue ? filteredList : list).map((item, i) => (
                                    <div key={i}  onClick={() => {
                                        if (hasCheckboxes) {
                                            toggleCheckbox?.(item.id);
                                        } else {
                                            setState?.(item.title);
                                            setOpenMenu(false);
                                        }
                                    }} className={`flex  gap-[8px] py-[8px] hover:bg-[#F5FFD3] border-[#EAEAEA] items-center ${i != list.length - 1 ? "border-b-[0.5px]" : ""}`}>
                                        <li>
                                            {hasCheckboxes && (
                                                <div>
                                                    <label className="flex items-center hover:bg-[#F5FFD3] cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            onChange={() => toggleCheckbox?.(item.id)}
                                                            className="hidden"
                                                        />
                                                        <div
                                                            className={`w-[24px] h-[24px] flex items-center justify-center border rounded-[6px] ${item.checked
                                                                    ? "bg-[#18470D] border-[#18470D]"
                                                                    : "bg-none border-[#AEB3BC]"
                                                                }`}
                                                        >
                                                            {item.checked && <WhiteCheckIcon />}
                                                        </div>
                                                        <span className="text-gray-800">{label}</span>
                                                    </label>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            className={`select-none cursor-pointer items-cente hover:bg-[#F5FFD3] text-[#2B2C2D] w-full flex
                                                }`}
                                            key={i}
                                        >

                                            <div
                                                className="text-[14px] lg:text-[16px] flex items-center hover:bg-[#F5FFD3]  cursor-pointer"
                                               
                                            >
                                                {item.title}
                                            </div>
                                        </li>
                                    </div>
                                ))
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

export default StepDropDown;
