"use client";
import React, { useMemo, useState } from "react";
import { EditIcon } from "../../../../../public/icons/talent-client/editIcon";
import SkillsModal from "@/components/Talent/TalentProfileMainPage/Skills/SkillsModal";
import Image from "next/image";



const SkillsTalentSection = ({ user }: { user: any }) => {
  const [isTalentPopUpActive, setTalentPopUpActive] = useState(false);

  const handlePopupClick = () => {
    setTalentPopUpActive(!isTalentPopUpActive);
  };


  return (
    <section
      className={` mt-[43px] relative flex h-fit min-h-[277px] w-full flex-col rounded-[30px] border border-[#CBEC5E] px-[9px] sm:px-[45px]`}
    >
      <div className={`mt-[32px]`}>
        <h2 className={`font-medium text-[#8A8A8A]`}>Skills</h2>
        <div
          onClick={() => handlePopupClick()}
          className=" absolute right-11 top-[10px] z-10 cursor-pointer"
        >
          <EditIcon />
        </div>

        

        <div className={`flex w-full `}>
          <hr
            className={` w-[7%] rounded-[15px] border-[3px] border-[#CBEC5E]`}
          />
          <hr
            className={` w-[93%] translate-y-[3px] border border-[#E6E6E6]`}
          />
        </div>
        <div className={`mt-[14px] flex w-full flex-col gap-[16px] `}>
          <h2
            className={`text-[30px] font-medium leading-[100%] text-[#000000]`}
          >
            Skills
          </h2>
          
        </div>
      </div>
    </section>
  );
};
export default SkillsTalentSection;
