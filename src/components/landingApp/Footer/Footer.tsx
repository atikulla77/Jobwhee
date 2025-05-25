"use client";

import React, { useEffect, useState, useTransition } from "react";
import { CheckIcon } from "../../../../public/icons/talent-client/CheckIcon";
import { ClientIcon } from "../../../../public/icons/talent-client/ClientIcon";
import { TalentIcon } from "../../../../public/icons/talent-client/TalentIcon";
import Image from "next/image";
import { EmailIcon } from "../../../../public/icons/talent-client/EmailIcon";
import { BlackCheckIcon } from "../../../../public/icons/talent-client/BlackCheck";
import { FbIcon } from "../../../../public/icons/talent-client/FbIcon";
import { LinkedinIcon } from "../../../../public/icons/talent-client/LinkedinIcon";
import { InstaramIcon } from "../../../../public/icons/talent-client/InstaIcon";
import { TikTokIcon } from "../../../../public/icons/talent-client/TikTokIcon";
import { $fetch } from "@/$api/fetch.api";
import { useLocale, useTranslations } from "use-intl";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getEmail, getLinks } from "@/lib/api/footerApi/footerApi";
import { subscribeTalent } from "@/lib/api/subscribeApi/subscribeApi";
import Link from "next/link";
import { getLanguages } from "@/lib/api/languageApi/languageApi";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "en", name: "English", flag: "/EnFlag.png" },
  { code: "el", name: "Greek", flag: "/GreekFlag.png" },
];

type Link = {
  url: string;
  label: string;
};

export const Footer = () => {
  const t = useTranslations("HomePage");
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(t("contract.talent"));
  const router = useRouter();
  const { data: languagesData, error } = useSWR("/language", getLanguages);
  const locale = useLocale();
  const languages = languagesData?.data ?? [];
  const [isLngClicked, setLngClicked] = useState(false);
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const [firstName, setFirstName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { data: links, error: linksError } = useSWR("/footerlink", () =>
    getLinks()
  );

  const linksData = links?.data as Link[] | undefined;

  const facebookLink = linksData?.find(
    (link) => link.label === "Facebook"
  )?.url;
  const linkedinLink = linksData?.find(
    (link) => link.label === "Linkedin"
  )?.url;
  const tiktokLink = linksData?.find((link) => link.label === "Tiktok")?.url;
  const instagramLink = linksData?.find(
    (link) => link.label === "Instagram"
  )?.url;

  const handleSubscribe = async () => {
    if (!firstName || !emailInput) {
      alert("Please enter your full name and email.");
      return;
    }

    try {
      await subscribeTalent({ fullName: firstName, email: emailInput });
      console.log("Subscribed successfully!");
      // Optional: clear inputs or show toast
      setFirstName("");
      setEmailInput("");
    } catch (error) {
      console.error("Failed to subscribe:", error);
      // Optional: show error toast
    }
  };
  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
  };
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownActive(false);
  };
  const handleLngClick = () => {
    setLngClicked(!isLngClicked);
  };

  const pathname = usePathname();
  console.log(pathname);
  const { data: email, error: emailError } = useSWR(["/supportemail"], () =>
    getEmail()
  );
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

  return (
    <div className=" pb-10">
      <div className=" lg:mt-[146px] 2xl:mt-[115px] hidden lg:block  ">
        <p className=" text-[#18470D] text-[30px] font-medium  text-center">
          {t("subscribeNow")}
          <br /> {t("beFirstToKnow")}
        </p>

        <div className="relative max-w-[1440px] mx-auto ">
          <Image
            src={"/images/all-images/foot.png"}
            width={1440}
            height={484}
            alt=""
            className=" mx-auto"
          />

          <div className=" absolute left-1/2 -translate-x-1/2 top-[55px] 2xl:top-[66px] lg:max-w-[850px] xl:max-w-[964px] 2xl:max-w-[1210px] w-full">
            <div>
              <div className=" w-full flex gap-11">
                <div className="relative max-w-[335px] mx-auto sm:mx-0 sm:max-w-[459px] sm:justify-between xl:max-w-[555px] drop-shadow-xl pl-4 w-full h-[50px] 2xl:h-[60px] xl:rounded-[73px] bg-white flex items-center px-1 rounded-[60px]">
                  <div className=" flex items-center w-full">
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={t("shared.firstNameLastName")}
                      className="ml-2 lg:ml-2 w-full text-[#737373] placeholder:text-[#737373] placeholder:font-medium text-[12px] lg:text-base font-medium outline-none"
                    ></input>
                  </div>
                  <div className=" flex items-center pr-[27px]">
                    <div className="h-6 w-px bg-[#737373] ml-5" />
                    <div
                      onClick={handleDropdownClick}
                      className="flex items-center cursor-pointer ml-[15px] gap-[11px]"
                    >
                      <p className="text-xs xl:text-base font-medium text-[#474747]">
                        {selectedOption}
                      </p>
                      <div
                        className={` ${
                          isDropdownActive ? " rotate-180" : ""
                        } duration-300`}
                      >
                        <CheckIcon />
                      </div>
                    </div>
                  </div>

                  {isDropdownActive && (
                    <div
                      onClick={handleDropdownClick}
                      className="w-screen h-screen fixed z-10 -left-[400px]  -top-[600px]"
                    ></div>
                  )}

                  {isDropdownActive && (
                    <div
                      onClick={handleDropdownClick}
                      className="w-full h-full fixed z-10 left-0 top-0"
                    ></div>
                  )}

                  <div
                    className={` cursor-pointer max-w-[239px] w-full h-fit z-20 px-[12px] py-[5px] bg-white absolute top-14 xl:top-16 right-0 shadow-md rounded-[12px] transition-all duration-300 ease-in-out 
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
                        <p className=" text-[11px]">{t("shared.talent")}</p>
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
                        <p className=" text-[11px] pb-[5px] ">
                          {" "}
                          {t("shared.client")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex gap-1 items-center w-full">
                  <div className="  max-w-[426px] w-full h-[50px] 2xl:h-[60px] drop-shadow-xl bg-white rounded-[73px] flex items-center px-[5px] gap-[15px]">
                    <Image
                      src={"/images/all-images/userIcon.png"}
                      width={50}
                      height={50}
                      alt=""
                    />
                    <input
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder={t("enterYourEmail")}
                      className=" outline-none text-[#737373] text-[14px] min-w-[80%] "
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className=" w-[127px] h-[50px] 2xl:h-[60px] bg-[#CBEC5E] hover:bg-[#b6d15c] rounded-[27px] text-sm 2xl:text-base text-[#18470D] shadow-xl border-[3px] border-white"
                  >
                    {t("subscribe")}
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-full lg:mt-[30px] xl:mt-[62px] 2xl:mt-[74px] flex">
              <div className=" lg:h-[130px] xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between lg:max-w-[350px] xl:max-w-[440px] w-full ">
                <Image
                  src={"/images/all-images/jobWheeLogos.png"}
                  width={166}
                  height={26}
                  alt=""
                  className=" 2xl:max-w-[166px] xl:max-w-[118px]"
                />
                <div className=" flex gap-1">
                  <EmailIcon />
                  <a>{email?.data?.email}</a>
                </div>
                <div className="relative">
                  <div
                    onClick={() => handleLngClick()}
                    className="w-[95px] h-[34px] lg:h-[48px] flex items-center border pl-[9px] gap-[10px] border-[#949494] border-opacity-50 rounded-[40px] cursor-pointer"
                  >
                    {languages.map(
                      (lang) =>
                        locale === lang.code && (
                          <div
                            key={lang.code}
                            className="flex items-center gap-[10px] cursor-pointer"
                          >
                            <Image
                              src={lang.image}
                              width={24}
                              height={24}
                              alt=""
                            />
                            <div className="flex items-center gap-1">
                              <p className="text-black text-sm">
                                {lang.code.toUpperCase()}
                              </p>
                              <div
                                className={`transform duration-300 ease-in-out ${
                                  isLngClicked ? "rotate-180" : "rotate-0"
                                }`}
                              >
                                <BlackCheckIcon />
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  {isLngClicked && (
                    <div
                      onClick={() => handleLngClick()}
                      className=" absolute -left-96 -top-[900px]  w-screen h-screen z-30 opacity-50"
                    ></div>
                  )}

                  {isLngClicked && (
                    <div className="absolute cursor-pointer bg-white w-[131px] h-auto px-2 py-2 top-14 z-30 border border-[#949494] border-opacity-50 rounded-[14px]">
                      {languages.map((lang) => (
                        <div
                          key={lang.code}
                          onClick={() => handleSetLanguage(lang.code)}
                          className="flex items-center gap-2 mt-2 first:mt-0 "
                        >
                          <Image
                            src={lang.image}
                            width={24}
                            height={24}
                            alt=""
                          />
                          <p className="text-black text-sm">{lang.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className=" lg:h-[130px]   xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between text-base font-medium lg:max-w-[200px] xl:max-w-[300px] w-full ">
                <Link
                  href="/about-us"
                  className="hover:text-[#ddd] w-min text-nowrap"
                >
                  {t("aboutUs")}
                </Link>
                <Link
                  href="#faq"
                  className="hover:text-[#ddd] w-min text-nowrap "
                >
                  {t("FAQ")}
                </Link>
                <Link
                  href="#stepsOfSuccess"
                  className="hover:text-[#ddd] w-min text-nowrap"
                >
                  {t("stepsOfSuccess")}
                </Link>
              </div>

              <div className="lg:h-[130px]  xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between text-base font-medium lg:max-w-[170px]  xl:max-w-[210px] w-full  ">
                <Link href="/" className="hover:text-[#ddd] w-min text-nowrap">
                  {t("platform")}
                </Link>
                <Link
                  href="#contracts"
                  className="hover:text-[#ddd] w-min text-nowrap"
                >
                  {t("contracts")}
                </Link>
                <Link
                  href="#advantages"
                  className="hover:text-[#ddd] w-min text-nowrap "
                >
                  {t("advantages")}
                </Link>
              </div>

              <div className=" xl:h-[132px]  2xl:h-[155px] flex flex-col justify-between text-base font-medium max-w-[210px] w-full">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#ddd] w-min text-nowrap"
                >
                  {t("services")}
                </Link>
                <Link
                  href="#topTalent"
                  className="hover:text-[#ddd] w-min text-nowrap"
                >
                  {t("topTalentFooter")}
                </Link>

                <div className=" flex gap-[10px]">
                  <Link target="_blank" href={facebookLink || ""}>
                    <FbIcon />
                  </Link>
                  <Link target="_blank" href={linkedinLink || ""}>
                    <LinkedinIcon />
                  </Link>
                  <Link target="_blank" href={instagramLink || ""}>
                    <InstaramIcon />
                  </Link>
                  <Link target="_blank" href={tiktokLink || ""}>
                    <TikTokIcon />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" h-px max-w-[1260px] w-full bg-[#DBDBDB] lg:mt-[20px] xl:mt-11 2xl:mt-[51px]"></div>

            <div className=" max-w-[1260px] w-full justify-between flex mt-5 pb-2 xl:pb-0">
              <p className=" text-sm text-[#757575]">
                © {t("allRightsReserved")}
              </p>
              <div className=" text-[14px] text-[#757575] flex gap-[70px]">
                <p>{t("termsOfService")}</p>
                <p>{t("privacyPolicy")}</p>
                <p>{t("cookies")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[55px] sm:mt-[88px] block lg:hidden sm:max-w-[780px] w-full mx-auto">
        <div className=" text-center">
          <p className=" text-[17px]  text-[#18470D] font-medium">
            {t("subscribeNow")}
          </p>
          <p className=" text-[17px]  text-[#18470D] font-medium">
            {t("beFirstToKnow")}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="z-[20] relative  max-w-[90%] xs:max-w-[305px] sm:max-w-[462px] mx-auto sm:mx-0 mt-2 sm:mt-5 drop-shadow-xl pl-3 xs:pl-4 w-full h-[36px] xs:h-[38px] sm:h-[50px] 2xl:h-[60px] xl:rounded-[73px] bg-white flex items-center px-1 rounded-[60px]">
            <div className="flex items-center w-full">
              <input
                placeholder={t("shared.firstNameLastName")}
                className="ml-2 text-[#737373] placeholder:text-[#737373] placeholder:font-medium text-[11px] xs:text-[12px] sm:text-base font-medium outline-none w-full"
              />
            </div>
            <div className="flex items-center pr-4 xs:pr-[27px] z-[200]">
              <div className="h-6 w-px bg-[#737373] ml-3 xs:ml-5" />
              <div
                onClick={handleDropdownClick}
                className="flex items-center cursor-pointer ml-2 xs:ml-[15px] gap-2 xs:gap-[11px]"
              >
                <p className="text-[11px] xs:text-xs sm:text-base font-medium text-[#474747]">
                  {t("shared.talent")}
                </p>
                <div
                  className={` ${
                    isDropdownActive ? "rotate-180" : ""
                  } duration-300`}
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
              className={`w-[90%] xs:max-w-[239px] h-fit z-[200] px-3 xs:px-[12px] py-[5px] bg-white absolute top-12 xs:top-14 sm:top-16 right-0 shadow-md rounded-[12px] transition-all duration-300 ease-in-out 
        ${
          isDropdownActive
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
        }`}
            >
              <div
                className="flex gap-[6px]"
                onClick={() => handleOptionSelect("talent")}
              >
                <TalentIcon />
                <div>
                  <p className="text-[13px] xs:text-[14px] text-[#181818] font-semibold">
                    {t("shared.talent")}
                  </p>
                  <p className="text-[10px] xs:text-[11px]">
                    {t("shared.talent")}
                  </p>
                </div>
              </div>
              <div
                className="flex gap-[6px] mt-[5px]"
                onClick={() => handleOptionSelect("client")}
              >
                <ClientIcon />
                <div>
                  <p className="text-[13px] xs:text-[14px] text-[#181818] font-semibold">
                    {t("shared.client")}
                  </p>
                  <p className="text-[10px] xs:text-[11px] pb-[5px]">
                    {t("shared.client")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" block lg:hidden sm:max-w-[780px]  w-full min-h-[239px] bg-white  rounded-[30px] mt-[18px]">
          <div className="flex gap-1 items-center w-full max-w-[305px] sm:max-w-[462px] mx-auto -translate-y-2 relative">
            <div className="  sm:max-w-[326px] w-full h-[38px] sm:h-[50px] 2xl:h-[60px] drop-shadow-xl bg-white rounded-[73px] flex items-center px-[5px] gap-[15px]">
              <Image
                src={"/images/all-images/userIcon.png"}
                width={32}
                height={32}
                alt=""
              />
              <input
                placeholder={t("enterYourEmail")}
                className="outline-none text-[#737373] text-[14px] w-full"
              />
            </div>

            <button className="w-[181px]  h-[38px] sm:h-[50px] 2xl:h-[60px] bg-[#CBEC5E] rounded-[27px] text-sm 2xl:text-base text-[#18470D] shadow-xl border-[3px] border-white">
              {t("subscribe")}
            </button>
          </div>

          <div className=" mt-10 lg:mt-[30px] xl:mt-[62px] 2xl:mt-[74px]  sm:flex-row max-w-[620px] mx-auto w-full px-2 md:px-0 sm:flex flex-col items-center hidden ">
            <div className=" h-[112px] lg:h-[130px] xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between max-w-[182px]  w-full ">
              <Image
                src={"/images/all-images/jobWheeLogos.png"}
                width={166}
                height={26}
                alt=""
                className=" 2xl:max-w-[166px] xl:max-w-[118px] sm:max-w-[108px] max-w-[182px]"
              />
              <div className=" flex gap-1 text-[12px] ">
                <EmailIcon />
                <a>{email?.data?.email}</a>
              </div>
              <div className="relative">
                <div
                  onClick={() => handleLngClick()}
                  className="w-[95px] h-[34px]  lg:h-[48px] flex items-center border pl-[9px] gap-[10px] border-[#949494] border-opacity-50 rounded-[40px] cursor-pointer"
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
                            <p className="text-black text-sm">
                              {lang.code.toUpperCase()}
                            </p>
                            <div
                              className={`transform duration-300 ease-in-out ${
                                isLngClicked ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <BlackCheckIcon />
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>

                {isLngClicked && (
                  <div className="absolute w-[131px] h-auto px-2 py-2  -mt-4 bg-[#3D4A5A] top-14 z-30 border border-[#949494] border-opacity-50 rounded-[14px]">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => handleSetLanguage(lang.code)}
                        className="flex items-center gap-2 mt-2 first:mt-0"
                      >
                        <Image src={lang.image} width={24} height={24} alt="" />
                        <p className="text-black text-sm">{lang.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className=" sm:h-[100px] lg:h-[130px] xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between text-xs font-medium max-w-[177px]  w-full ">
              <Link href="/about-us">{t("aboutUs")}</Link>
              <Link href="#faq">{t("FAQ")}</Link>
              <Link href="#stepsOfSuccess">{t("stepsOfSuccess")}</Link>
            </div>

            <div className="  sm:h-[100px] lg:h-[130px] xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between text-xs font-medium max-w-[151px] w-full  ">
              <p>Platform</p>
              <Link href="#contracts">{t("contracts")}</Link>
              <Link href="#advantages">{t("advantages")}</Link>
            </div>

            <div className="  sm:h-[100px] xl:h-[132px] 2xl:h-[155px] flex flex-col justify-between text-xs font-medium max-w-[97px] w-full  ">
              <Link href="/privacy-policy">{t("services")}</Link>
              <Link href="#topTalent">{t("topTalentFooter")}</Link>

              <div className=" flex gap-[10px]">
                <FbIcon width={20} height={20} />
                <LinkedinIcon width={20} height={20} />
                <InstaramIcon width={20} height={20} />
                <TikTokIcon width={20} height={20} />
              </div>
            </div>
          </div>

          <div className=" mt-10 lg:mt-[30px] xl:mt-[62px] 2xl:mt-[74px] flex sm:flex-row max-w-[620px] mx-auto w-full px-2 md:px-0 sm:hidden flex-col items-center">
            <div className=" h-[112px] lg:h-[130px] xl:h-[132px] 2xl:h-[155px] flex flex-col items-center justify-between max-w-[182px]  w-full ">
              <Image
                src={"/images/all-images/jobWheeLogos.png"}
                width={166}
                height={26}
                alt=""
                className=" 2xl:max-w-[166px] xl:max-w-[118px] sm:max-w-[108px] max-w-[182px]"
              />
              <div className=" flex gap-1 text-[12px] ">
                <EmailIcon />
                <a>{email?.data?.email}</a>
              </div>
              <div className="relative">
                <div
                  onClick={() => handleLngClick()}
                  className="w-[95px] h-[34px]  lg:h-[48px] flex items-center border pl-[9px] gap-[10px] border-[#949494] border-opacity-50 rounded-[40px] cursor-pointer"
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
                            <p className="text-black text-sm">
                              {lang.code.toUpperCase()}
                            </p>
                            <div
                              className={`transform duration-300 ease-in-out ${
                                isLngClicked ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <BlackCheckIcon />
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>

                {isLngClicked && (
                  <div className="absolute w-[131px] h-auto px-2 py-2   -mt-4 bg-[#3D4A5A] top-14 z-30 border border-[#949494] border-opacity-50 rounded-[14px]">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => handleSetLanguage(lang.code)}
                        className="flex items-center gap-2 mt-2 first:mt-0"
                      >
                        <Image src={lang.image} width={24} height={24} alt="" />
                        <p className="text-black text-sm">{lang.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between text-xs font-medium  text-center space-y-[16px] mt-[15px] ">
              <Link href="/about-us">{t("aboutUs")}</Link>
              <Link href="#faq">{t("FAQ")}</Link>
              <Link href="#stepsOfSuccess">{t("stepsOfSuccess")}</Link>
            </div>

            <div className=" flex flex-col justify-between text-xs font-medium  text-center  space-y-[16px] mt-[16px]  ">
              <p>Platform</p>
              <Link href="#contracts">{t("contracts")}</Link>
              <Link href="#advantages">{t("advantages")}</Link>
            </div>

            <div className=" flex flex-col justify-between text-xs font-medium  text-center  space-y-[16px]  mt-[16px] ">
              <Link href="/privacy-policy">{t("services")}</Link>
              <Link href="#topTalent">{t("topTalentFooter")}</Link>

              <div className=" flex gap-[10px]">
                <FbIcon width={20} height={20} />
                <LinkedinIcon width={20} height={20} />
                <InstaramIcon width={20} height={20} />
                <TikTokIcon width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="dm:flex dm:flex-row dm:max-w-[650px] dm:items-center dm:justify-between  dm:w-full pb-4 max-w-[314px] w-full border-t border-t-[#DBDBDB]  space-y-5 text-center text-[#757575] pt-[13px] text-[10px] flex flex-col items-center justify-center mx-auto mt-[22px]">
            <p>© {t("allRightsReserved")}</p>
            <div
              className="dm:flex dm:flex-row dm:items-center dm:gap-[20px]"
              style={{ marginTop: 0 }}
            >
              <p>{t("termsOfService")}</p>
              <p>{t("privacyPolicy")}</p>
              <p>{t("cookies")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
