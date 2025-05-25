"use client";
import React, { useState } from "react";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";
import { Link } from "@/i18n/routing";
import { CheckIcon } from "../../../public/icons/talent-client/CheckIcon";

const DropdownFindJobByCategory = ({
  triggerLabel = "Find work by category",
  hiddenClass = "",
  positionClass = "-right-[80px]",
  items = [
    "Household Services",
    "Home Maintenance Services",
    "Beauty and Wellness",
    "Education and Tutoring",
    "Event and Entertainment",
    "Logistics and Delivery Services",
    "Legal and Consulting Services",
    "Vehicle Services",
  ],
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`items-center text-nowrap  flex ${hiddenClass}`}
        href="#"
      >
        <div
          className={
            " flex justify-start gap-[4px] items-center 2xl:w-[218px] "
          }
        >
          <p>{triggerLabel}</p>
          <div className={` ${dropdownOpen ? " rotate-180" : ""} duration-300`}>
            <CheckIcon />
          </div>
        </div>
      </Link>
      {dropdownOpen && (
        <div className="relative">
          <div
            className={`absolute pb-[10px] ${positionClass} mt-4 flex w-[322px] flex-col  bg-white  border  border-[#CCCCCC] rounded-[10px]`}
          >
            <ul className="flex flex-col  cursor-pointer  px-6 py-7.5 ">
              {items.map((item, index) => (
                <li key={index} className="leading-6 pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownFindJobByCategory;
