"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";
import DropdownFindJobByCategory from "@/components/UserHeader/DropdownFindJobByCategory";
import { NotificationList } from "@/shared/widgets/NotificationList.tsx/NotificationList";
import { NotificationIcon } from "../../../public/icons/NotificationIcon";
import { TransparentHeartIcon } from "../../../public/icons/TransparentHeartIcon";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useParams, usePathname } from "next/navigation";
import useSWR from "swr";
import { getLanguages } from "@/lib/api/languageApi/languageApi";
import { Locale } from "@/i18n/routing";
import { SelectLanguage } from "@/shared/widgets/SelectLanguage";

const testNotifies = [
  {
    id: 1,
    type: "rejected",
    serviceName: "Home Cleaning and Maintenance",
    reason: "Weak Proposal",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 2,
    type: "milestone",
    serviceName: "Home Cleaning and Maintenance",
    milestoneName: "Week 1",
    milestoneUrl: "",
    talentName: "Maria T.",
    timestamp: "Today, 12:57 PM",
  },
  {
    id: 3,
    type: "contract-created",
    serviceName: "Home Cleaning and Maintenance",
    createdWith: "Maria T",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 4,
    type: "accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 5,
    type: "applied",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 6,
    type: "contract-accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 7,
    type: "contract-rejected",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
    reason: "Mismatch in Budget or Rate",
  },
];

const Hamburger = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifies, setNotifies] = useState(testNotifies);

  const router = useRouter();
  const [isBurgerActive, setBurgerActive] = useState(false);
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { data: languagesData, error } = useSWR("/language", getLanguages);
  const [notifyVisible, setNotifyVisible] = useState(false);

  const languages = languagesData?.data ?? [];

  const handleSetLanguage = (lng: string) => {
    const nextLocale = lng as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [dropdownOpen]);

  const deleteNotify = (id: number) => {
    setNotifies((prevNotifies) =>
      prevNotifies.filter((notify) => notify.id !== id)
    );
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div className="z-[201]">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center"
        >
          <Image
            src={`${
              dropdownOpen ? "/icons/closeicon.png" : "/icons/hamburger.png"
            }`}
            alt={"Hamburger"}
            width={38}
            height={38}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute flex flex-col -right-[75px] md:-right-[94px] overflow-y-auto max-h-[calc(100vh_-_65px)] mt-3 w-[100vw]  bg-white lg:shadow-lg rounded-md z-[201] ">
            <ul className="py-2 pr-[10px] sm:pr-[20px] pt-[14px] sm:pt-[45px] sm:px-[40px] flex flex-col justify-start items-start w-full h-[100vh]">
              <li className="pl-[20px] sm:pl-0 cursor-pointer flex justify-start items-center gap-[10px] w-full ">
                <div>
                  <SelectLanguage theme="light" />
                </div>
              </li>

              <li
                onClick={() => setNotifyVisible(!notifyVisible)}
                className="mt-[26px] border-y border-[#EAEAEA] pl-[25px] sm:pl-[15px] px-4 hover:bg-gray-100 cursor-pointer flex justify-start items-center gap-[10px] w-full "
              >
                <div className="relative">
                  {testNotifies && (
                    <div className="absolute w-[5px] h-[5px] rounded-full top-0 right-[3px] bg-[#FF0000]"></div>
                  )}
                  {notifyVisible ? (
                    <NotificationIcon />
                  ) : (
                    <Image
                      src={"/icons/notification.png"}
                      width={24}
                      height={24}
                      alt="Logo"
                      className=" min-w-[24px] min-h-[24px] "
                    />
                  )}
                </div>
                <h2
                  className={`py-[11.5px] text-[14px] sm:text-[18px] ${
                    notifyVisible ? "text-[#18470D]" : "text-black"
                  } font-medium`}
                >
                  Notification
                </h2>
              </li>

              {notifyVisible && (
                <div className="mr-[10px] sm:mr-0">
                  <ul className="mt-[5px] sm:mt-[10px] pl-[15px] sm:pl-0 notification-scrollbar max-h-[385px] sm:max-h-[475px] overflow-auto w-full">
                    <NotificationList
                      side="client"
                      deleteNotify={deleteNotify}
                      notifies={notifies}
                    />
                  </ul>
                  <div className="flex justify-center">
                    <button className="ml-[10px] sm:ml-0 mt-[20px] text-[16px] font-medium text-[#18470D]">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}

              <li className="pl-[10px] sm:pl-0 w-full">
                <div className="border-b border-[#EAEAEA] h-[54px] sm:h-[59px] px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-start items-center gap-[10px] w-full ">
                  <Image
                    src={"/icons/mail.png"}
                    width={24}
                    height={24}
                    alt="Logo"
                    className=" min-w-[24px] min-h-[24px] "
                  />
                  <h2 className="font-medium text-[14px] sm:text-[18px]">
                    Messages
                  </h2>
                </div>
                <div className="border-b border-[#EAEAEA] h-[54px] sm:h-[59px] px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-start items-center gap-[10px] w-full ">
                  <TransparentHeartIcon />
                  <h2 className="font-medium text-[14px] sm:text-[18px]">
                    Favorites
                  </h2>
                </div>
                <div className="pl-[15px] sm:pl-[27px] pr-4 h-[48px] hover:bg-gray-100 cursor-pointer flex justify-start items-center font-medium gap-[10px] w-full text-[14px]">
                  <DropdownFindJobByCategory
                    triggerLabel="Find Work by Category"
                    positionClass="-right-[150px]"
                  />
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default Hamburger;
