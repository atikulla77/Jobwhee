"use client";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import jwt from "jsonwebtoken";
import { getSession } from "next-auth/react";

import { MenuIcon } from "../../../../public/icons/talent-client/MenuIcon";
import { Link, Locale, usePathname, useRouter } from "@/i18n/routing";
import { CloseIcon } from "../../../../public/icons/talent-client/CloseIcon";
import { WhiteCheck } from "../../../../public/icons/talent-client/WhiteCheck";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import useSWR from "swr";
import { getLanguages } from "@/lib/api/languageApi/languageApi";
import { SelectLanguage } from "@/shared/widgets/SelectLanguage";
import { UserTypeEnum } from "@/constants/UserTypeAndRoleEnum";

const languages = [
  { code: "en", name: "English", flag: "/EnFlag.png" },
  { code: "el", name: "Greek", flag: "/GreekFlag.png" },
];

export const Header = () => {
  const t = useTranslations("HomePage");

  const router = useRouter();
  const [isBurgerActive, setBurgerActive] = useState(false);
  const locale = useLocale();
  const [isLngClicked, setLngClicked] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { data: languagesData, error } = useSWR("/language", getLanguages);
  const languages = languagesData?.data ?? [];
  const [session, setSession] = useState<any>(null); // State to store session data

  useEffect(() => {
    // Fetch session data once on component mount
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };
    fetchSession();
  }, []);
  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
  };

  const handleLngClick = () => {
    setLngClicked(!isLngClicked);
  };

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

  const getRedirectLink = () => {
    if (session && session.accessToken) {
      const decodedToken = jwt.decode(session.accessToken);
      if (typeof decodedToken === "object" && decodedToken !== null) {
        if (decodedToken.role === UserTypeEnum.Talent) {
          return "/freelancer";
        } else if (decodedToken.role === UserTypeEnum.Client) {
          return "/client";
        }
      }
    }
    return "/";
  };

  return (
    <div className="bg-[#000000] min-h-[44px] sm:min-h-[54px] lg:min-h-[74px] w-full flex max-w-[1440px] mx-auto  lg:px-3 pr-[8px] rounded-[145px] items-center justify-between">
      <Link href={getRedirectLink()}>
        <Image
          src={"/images/all-images/jobwheelogo.png"}
          width={197}
          height={31}
          alt=""
          className=" ml-[16px] lg:ml-[17px] max-w-[108px] xl:max-w-[190px]"
        />
      </Link>
      <Link href={"/auth/signin"}>
        <div className=" md:flex cursor-pointer  text-white hidden uppercase  md:ml-7 lg:ml-0 sm:gap-[10px] lg-[23px] xl:gap-[34px]">
          <p className="text-[12px] md:text-[12px] hover:text-[#ddd]  lg:text-[14px] 2xl:text-[16px] whitespace-nowrap">
            {t("header.postJob")}
          </p>
          <p className="text-[12px] md:text-[12px] hover:text-[#ddd]  lg:text-[14px] 2xl:text-[16px] whitespace-nowrap">
            {t("header.exploreJobs")}
          </p>
          <p className=" text-[12px] md:text-[12px]  hover:text-[#ddd]  lg:text-[14px] 2xl:text-[16px] whitespace-nowrap">
            {t("header.howItWorks")}
          </p>
        </div>
      </Link>
      <div className=" w-full max-w-[140px] sm:max-w-[630px] lg:max-w-[355px] flex items-center  sm:justify-between lg:justify-between md:gap-[5px] lg:gap-[5px] cursor-pointer font-semibold">
        <div className=" flex justify-end items-center w-full  md:min-w-[300px]   lg:max-w-[374px] gap-[10px] font-medium text-sm">
          <div className="relative  lg:block">
            <div
              onClick={() => handleLngClick()}
              className="w-[95px] sm:max-h-[40px] 2xl:max-h-[48px] mt-1 lg:mt-0 hidden h-[40px] md:flex lg:h-[48px]  items-center border pl-[9px] gap-[6px]  border-[#949494] border-opacity-50 rounded-[40px]"
            >
              {languages.map(
                (lang) =>
                  locale === lang.code && (
                    <div
                      key={lang.code}
                      className="flex items-center gap-[10px]"
                    >
                      <Image
                        src={lang.image}
                        width={24}
                        height={24}
                        alt="Language"
                      />
                      <div className="flex items-center gap-1">
                        <p className="text-white text-sm">
                          {lang.code.toUpperCase()}
                        </p>
                        <div className={`transform duration-300 ease-in-out ${isLngClicked ? "rotate-180" : "rotate-0"}`}>
                          <WhiteCheck />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            {isLngClicked && (
              <div
                onClick={() => handleLngClick()}
                className=" fixed left-0 top-0  w-screen h-screen z-30 opacity-50"
              ></div>
            )}
            {isLngClicked && (
              <div className="absolute w-[131px]  h-auto px-2 py-2 bg-black -right-5 top-14 z-30 border border-[#949494] border-opacity-50 rounded-[14px]">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleSetLanguage(lang.code)}
                    className="flex items-center gap-2 mt-2 first:mt-0 "
                  >
                    <Image src={lang.image} width={24} height={24} alt="lang" />
                    <p className="text-white text-sm">{lang.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/auth/signin"
            className="hidden md:flex max-w-[100px] xl:max-w-[122px] w-full sm:max-h-[40px] 2xl:max-h-[48px] hover:text-[#ddd]  md:h-[40px] lg:h-[48px] border border-[#94949480] text-white rounded-[40px] items-center justify-center"
          >
            {t("header.signIn")}
          </Link>
          <Link
            href="/auth/signup"
            className=" max-w-[90px] lg:max-w-[122px]  w-full min-h-[34px] sm:max-h-[40px] 2xl:max-h-[48px] hover:text-[#666] md:h-[40px] lg:h-[48px] bg-white rounded-[40px] flex justify-center items-center"
          >
            {t("header.signup")}
          </Link>
          <div className=" w-[34px] h-[34px] flex justify-center md:hidden relative items-center">
            <div onClick={() => handleBurgerClick()}>
              <MenuIcon />
            </div>
            {isBurgerActive && (
              <div className=" w-[340px]  min-h-[234px] bg-[#3D4A5A] rounded-[22px] absolute -right-2.5 -top-3 z-40">
                <div className=" flex justify-between">
                  <div></div>
                  <div
                    onClick={() => handleBurgerClick()}
                    className=" mr-[5px] mt-[5px]"
                  >
                    <CloseIcon />
                  </div>
                </div>

                <div className=" space-y-[14px] text-base text-white font-semibold ml-3 mt-3">
                  <p>{t("header.postJob")}</p>
                  <p>{t("header.exploreJobs")}</p>
                  <p>{t("header.howItWorks")}</p>
                </div>
                <div className=" flex justify-between px-3 mt-8 gap-2">
                  <div className="relative">
                    <div
                      onClick={() => handleLngClick()}
                      className=" w-[95px] h-[34px]  lg:mt-0 flex md:hidden lg:h-[48px]  items-center border pl-[9px] gap-[10px]  border-[#949494] border-opacity-50 rounded-[40px]"
                    >
                      {languages.map(
                        (lang) =>
                          locale === lang.code && (
                            <div
                              key={lang.code}
                              className="flex items-center gap-[10px]"
                            >
                              <Image
                                src={lang.image}
                                width={24}
                                height={24}
                                alt=""
                              />
                              <div className="flex items-center gap-1">
                                <p className="text-white text-sm">
                                  {lang.code.toUpperCase()}
                                </p>
                                <div className={`transform duration-300 ease-in-out ${isLngClicked ? "rotate-180" : "rotate-0"}`}>
                                  <WhiteCheck />
                                </div>
                              </div>
                            </div>
                          )
                      )}
                    </div>

                    {isLngClicked && (
                      <div className="absolute w-[131px] h-auto px-2 py-2 bg-[#3D4A5A] -right-5 top-14 z-30 border border-[#949494] border-opacity-50 rounded-[14px]">
                        {languages.map((lang) => (
                          <div
                            key={lang.code}
                            onClick={() => handleSetLanguage(lang.code)}
                            className="flex items-center gap-2 mt-2 first:mt-0"
                          >
                            <Image
                              src={lang.image}
                              width={24}
                              height={24}
                              alt=""
                            />
                            <p className="text-white text-sm">{lang.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className=" flex gap-2">
                    <Link href={"/auth/signin"}>
                      <div className=" w-[100px] h-[34px] rounded-[32px] border border-[#94949480] text-xs text-white flex items-center justify-center">
                        {t("header.signIn")}
                      </div>
                    </Link>
                    <Link href={"/auth/signup"}>
                      <div className=" w-[100px] h-[34px] bg-white rounded-[32px] text-xs flex items-center justify-center">
                        {t("header.signup")}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
