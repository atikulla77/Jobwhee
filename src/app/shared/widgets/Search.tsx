"use client";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "../../../public/icons/talent-client/CheckIcon";
import { SearchIcon } from "../../../public/icons/talent-client/SearchIcon";
import { TalentIcon } from "../../../public/icons/talent-client/TalentIcon";
import { ClientIcon } from "../../../public/icons/talent-client/ClientIcon";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { SearchIconCopy } from "../../../public/icons/talent-client/SearchIconCopy";

export const Search = () => {
  const router = useRouter();
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(() => t("shared.jobs"));

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setDropdownActive(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/auth/signin");
    }
  };

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownActive(false);
      }
    };

    if (isDropdownActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownActive]);

  return (
    <div
      className="relative max-w-[335px] mx-auto sm:mx-0 sm:max-w-[459px] 2xl:max-w-[555px] w-full "
      ref={dropdownRef}
    >
      <div className="w-full h-[50px] 2xl:h-[60px] xl:rounded-[73px] bg-white flex items-center px-1 rounded-[60px]">
        <div className="flex items-center w-full">
          <div className="hidden lg:block">
            <div className="w-[42px] h-[42px] 2xl:w-[50px] 2xl:h-[50px]">
              <SearchIconCopy />
            </div>
          </div>
          <div className="lg:hidden block">
            <SearchIcon width={41} height={41} />
          </div>
          <input
            onKeyDown={handleKeyDown}
            placeholder={t("shared.placeholder")}
            className="ml-2  2xl:pr-[14px] lg:ml-4 text-[#737373] placeholder:text-[#737373] placeholder:font-medium text-[12px] lg:text-base font-medium outline-none max-w-[165px] sm:max-w-[290px] lg:max-w-[255px] w-full 2xl:max-w-[706px]"
          />
        </div>

        <div className="flex items-center pr-[27px]">
          <div className="h-6 w-px bg-[#737373] ml-5" />
          <div
            onClick={handleDropdownClick}
            className="flex items-center cursor-pointer ml-[15px] gap-[11px]"
          >
            <p className="text-xs xl:text-base font-medium text-[#474747]">
              {selectedOption}
            </p>
            <div
              className={`${isDropdownActive ? "rotate-180" : ""} duration-300`}
            >
              <CheckIcon />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`max-w-[239px] w-full h-fit px-[12px] py-[5px] bg-white absolute top-14 xl:top-16 right-0 shadow-md rounded-[12px] transition-all duration-300 ease-in-out
          ${
            isDropdownActive
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
          }`}
      >
        <div
          className="flex gap-[6px] cursor-pointer"
          onClick={() => handleOptionSelect(t("shared.talent"))}
        >
          <TalentIcon />
          <div>
            <p className="text-[14px] text-[#181818] font-semibold">
              {t("shared.talent")}
            </p>
            <p className="text-[11px]">{t("shared.talentDesc")}</p>
          </div>
        </div>
        <div
          className="flex gap-[6px] mt-[5px] cursor-pointer"
          onClick={() => handleOptionSelect(t("shared.jobs"))}
        >
          <ClientIcon />
          <div>
            <p className="text-[14px] text-[#181818] font-semibold">
              {t("shared.jobs")}
            </p>
            <p className="text-[11px] pb-[5px]">{t("shared.clientDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
