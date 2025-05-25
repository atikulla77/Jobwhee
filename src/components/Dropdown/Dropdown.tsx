"use client";
import { useEffect, useId, useState } from "react";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { WhiteCheckIcon } from "../../../public/icons/WhiteCheckIcon";
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
  readOnly?: boolean;
  listMaxHeight?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
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
  readOnly,
}) => {
  const inputId = useId();
  const [openMenu, setOpenMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
        <div className="relative">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={
              " border-[1px] min-h-[42px]  rounded-[12px] flex items-center px-[8px] py-[8px] 2xl:p-[9px] cursor-pointer" +
              (openMenu
                ? " border-[#18470D] blue-shadow "
                : " border-[#AEB3BC] " + (isValid ? " " : " border-[#DD331D] "))
            }
          >
            {searchField ? (
              <input
                className="w-full text-[16px] text-[#000] outline-none placeholder:text-[#8B939F]"
                placeholder={placeholder}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            ) : (
              <div
                className={` flex items-center select-none w-full min-h-[24px] placeholder:text-[#2B2C2D] 2xl:text-[16px] text-[12px] sm:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:text-[14px] focus:outline-0 ${
                  state ? "text-[#2B2C2D]" : "text-[#8B939F]"
                }`}
              >
                {state || placeholder || list[0].title}
              </div>
            )}
            <div className={openMenu ? "rotate-180" : ""}>
              <DropDownArrowIcon />
            </div>
          </div>
          <div
            className={`bg-white absolute w-full shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1)] border-[0.5px] border-[#EAEAEA] mt-[8px] rounded-[12px] ${
              openMenu ? "block" : "hidden"
            }`}
          >
            <ul className="p-[8px] max-h-[250px] overflow-y-auto">
              {inputValue ? (
                <li className="text-[#8B939F]">Not found</li>
              ) : (
                list.map((item, i) => (
                  <li
                    className={`select-none text-[#2B2C2D]  flex ${
                      i !== list.length - 1
                        ? " mb-[8px] pb-[10px] border-b border-[#EAEAEA] "
                        : ""
                    }`}
                    key={i}
                  >
                    <div
                      className="flex hover:bg-[#F5FFD3] rounded-[8px] w-full cursor-pointer py-[2px] px-[8px]"
                      onClick={() => {
                        if (hasCheckboxes) {
                          toggleCheckbox?.(item.id);
                        } else {
                          setState?.(item.title);
                          setOpenMenu(false);
                        }
                      }}
                    >
                      {hasCheckboxes && (
                        <div className="">
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
                              }`}
                            >
                              {item.checked && <WhiteCheckIcon />}
                            </div>
                            <span className="text-gray-800">{label}</span>
                          </label>
                        </div>
                      )}
                      <div className="text-[14px] lg:text-[16px] flex gap-[10px]  pl-[8px] cursor-pointer">
                        {item.title}
                      </div>
                    </div>
                  </li>
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

export default Dropdown;
