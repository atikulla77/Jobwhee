"use client";
import { useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import { SearchIcon } from "../../../public/icons/talent-client/SearchIcon";
import { CheckIcon } from "../../../public/icons/talent-client/CheckIcon";
import { TalentIcon } from "../../../public/icons/talent-client/TalentIcon";
import { ClientIcon } from "../../../public/icons/talent-client/ClientIcon";

export const HeaderSearch = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() =>
    t("shared.client")
  );

  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
  };
  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setDropdownActive(false);
  };

  return (
    <div className="hidden xl:flex relative border  border-[#CCCCCC] rounded-[74.99] lg:max-w-[427px] 2xl:max-w-[548px] mx-auto sm:mx-0  sm:justify-between w-full max-h-[46px] 2xl:h-[60px] xl:rounded-[73px] bg-transparent items-center lg:h-[49px]">
      <div className=" flex  items-center w-full">
        <div className="hidden 2xl:block ">
          <SearchIcon width={42} height={42} />
        </div>
        <div className="hidden lg:block 2xl:hidden ml-[5px]">
          <SearchIcon width={38} height={38} />
        </div>
        <input
          placeholder={t("shared.placeholder")}
          className="ml-2 lg:ml-2 2xl:ml-[20px] text-[#737373] placeholder:text-[#737373] bg-transparent placeholder:font-medium text-[12px] lg:text-base font-medium outline-none min-w-[215px]"
        ></input>
      </div>
      <div className=" flex items-center pr-[27px]">
        <div className="h-6 w-px bg-[#737373] ml-5" />
        <div
          onClick={handleDropdownClick}
          className="flex items-center cursor-pointer ml-[25px] gap-[11px]"
        >
          <p className="text-xs xl:text-base font-medium text-[#474747]">
            {selectedOption}
          </p>
          <div
            className={` ${isDropdownActive ? " rotate-180" : ""} duration-300`}
          >
            <CheckIcon />
          </div>
        </div>
      </div>

      {isDropdownActive && (
        <div
          onClick={handleDropdownClick}
          className="w-full h-full fixed z-10 left-0 top-0"
        ></div>
      )}

      <div
        className={`max-w-[239px] cursor-pointer w-full h-fit z-20 px-[12px] py-[5px] bg-white absolute top-14 xl:top-16 right-0 shadow-md rounded-[12px] transition-all duration-300 ease-in-out 
        ${
          isDropdownActive
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
        }`}
      >
        <div
          className=" flex gap-[6px]"
          onClick={() => handleOptionSelect(t("shared.talent"))}
        >
          <TalentIcon />
          <div>
            <p className=" text-[14px] text-[#181818] font-semibold">
              {t("shared.talent")}
            </p>
            <p className=" text-[11px]">{t("shared.talentDesc")}</p>
          </div>
        </div>
        <div
          className=" flex gap-[6px] mt-[5px]"
          onClick={() => handleOptionSelect(t("shared.client"))}
        >
          <ClientIcon />
          <div>
            <p className=" text-[14px] text-[#181818] font-semibold">
              {t("shared.client")}
            </p>
            <p className=" text-[11px] pb-[5px] ">{t("shared.clientDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
