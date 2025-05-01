"use client";
import { useTranslations } from "next-intl";
import React from "react";

interface SelectClientOrTalentBtnProps {
  activeRole: "Client" | "Talent";
  onSelect: (role: "Client" | "Talent") => void;
}

const SelectClientOrTalentBtn: React.FC<SelectClientOrTalentBtnProps> = ({
  activeRole,
  onSelect,
}) => {
  const t = useTranslations("HomePage");

  return (
    <div className=" flex justify-center items-center w-[224px] h-[46px] sm:w-[297px] sm:h-[56px] rounded-[30px] bg-[#FFFFFF]">
      <button
        onClick={() => onSelect("Client")}
        className={`text-[18px] font-[500] 2xl:text-[20px] w-[112px] py-[7px] sm:w-[148.5px] sm:py-[12px] rounded-[30px] border-2 border-[#FFFFFF] ${
          activeRole === "Client" ? " bg-[#CBEC5E] duration-300 hover:bg-[#ACD624]" : "bg-[#FFFFFF]"
        }`}
      >
        {t("shared.client")}
      </button>
      <button
        onClick={() => onSelect("Talent")}
        className={`text-[18px] font-[500] 2xl:text-[20px] w-[112px] py-[7px] sm:w-[148.5px] sm:py-[12px] rounded-[30px] border-2 border-[#FFFFFF] ${
          activeRole === "Talent" ? "bg-[#CBEC5E] duration-300 hover:bg-[#ACD624]" : "bg-[#FFFFFF]"
        }`}
      >
        {t("shared.talent")}
      </button>
    </div>
  );
};

export default SelectClientOrTalentBtn;
