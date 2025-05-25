"use client";
import Image from "next/image";
import React from "react";

import { useTalentProfile } from "../Talent/TalentProfileMainPage/hooks/useTalentProfile";
import Link from "next/link";

import { BlackHeartIcon } from "../../../public/icons/BlackHeartIcon";
import { HeaderSearch } from "@/components/UserHeader/HeaderSearch";
import DropdownFindJobByCategory from "@/components/UserHeader/DropdownFindJobByCategory";
import { SelectLanguage } from "@/shared/widgets/SelectLanguage";

import DropdownUser from "@/components/DropdownUser/DropdownUser";
import { SearchIcon } from "../../../public/icons/talent-client/SearchIcon";
import Hamburger from "@/components/UserHeader/Hamburger";
import DropdownNotification from "@/components/Notification/DropdownNotification/DropdownNotification";

const UserHeader = () => {
  const { user, error, isLoading } = useTalentProfile();

  return (
    <header className="2xl:max-w-[1730px] lg:max-w-[1280px] lg:px-[40px] w-full fixed left-1/2 transform -translate-x-1/2 top-0 z-999 flex bg-white h-[64px] md:h-[62px] xl:h-[90px] 2xl:h-[100px] ">
      <div className="flex items-center w-full shadow-2 px-[20px] sm:px-[40px] lg:px-0">
        <div className="w-full 2xl:w-[75%] flex items-center justify-start">
          <Link href={"/client"}>
            <Image
              src={"/images/all-images/logoBlack.png"}
              width={171}
              height={27.33}
              alt="Logo"
              className=" lg:mr-[64px] 2xl:mr-[48px] xl:ml-0  w-[108px] h-[17px] sm:w-[143px] sm:h-[23px] xl:w-[124px] xl:h-[20px] 2xl:w-[171px] 2xl:h-[27.33px]"
            />
          </Link>
          <HeaderSearch />
          <div className="2xl:ml-[28px] lg:ml-[16px] lg:mt-[8px] 2xl:mt-[3px]">
            <DropdownFindJobByCategory hiddenClass="hidden xl:flex" />
          </div>
        </div>

        <div className=" hidden xl:flex items-center justify-between min-h-[60px] ml-auto">
          <div className="2xl:mr-[26px] lg:mr-[19px]">
            <SelectLanguage theme={"light"} />
          </div>
          <div className="flex 2xl:gap-[30px] items-center justify-between 2xl:mr-[50px] lg:mr-[32px]">
            <div className="lg:mr-[19px] 2xl:mr-0">
              {" "}
              <DropdownNotification />
            </div>
            <Image
              src={"/images/all-images/mail.png"}
              width={24}
              height={24}
              alt="Logo"
              className=" min-w-[24px] min-h-[24px] lg:mr-[15px] 2xl:mr-0"
            />
            <div className="min-w-[24px] h-[24px]">
              <BlackHeartIcon />
            </div>
          </div>
          <DropdownUser
            imageUrl={user?.profileImage ?? "/images/all-images/no-image.png"}
            firstName={user?.firstName}
            lastName={user?.lastName}
          />
        </div>
        <div className="xl:hidden gap-[5px] flex items-center justify-between  w-[137px] max-h-[46px]">
          <SearchIcon width={38} height={38} />
          <Hamburger />
          <DropdownUser
            imageUrl={user?.profileImage ?? "/images/all-images/no-image.png"}
            firstName={user?.firstName}
            lastName={user?.lastName}
          />
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
