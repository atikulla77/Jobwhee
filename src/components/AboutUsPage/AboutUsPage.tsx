"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import { getAboutUs } from "@/lib/api/aboutUsApi/aboutUsApi";
import Link from "next/link";

export const AboutUsPage = () => {
  const locale = useLocale();
  const isGreek = locale === "el";
  const t = useTranslations("AboutUsPage");
  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  const { data: aboutUs, error: talentError } = useSWR(
    languageCode ? ["/aboutus", languageCode] : null,
    () => getAboutUs(languageCode)
  );
  return (
    <div className="mt-[100px] min-h-[54px] lg:min-h-[74px] w-full flex max-w-[1440px] mx-auto px-[7px] lg:px-0 rounded-[145px] justify-center flex-col">
      <div className="flex flex-col items-start">
        <div className=" flex items-center gap-[14px] ">
          <div className=" w-[14px] h-[14px]  rounded-[3px] bg-[#C0D724]" />
          <h1
            className="uppercase
        text-[32px]
        2xl:text-[56px]
        font-extrabold"
          >
            {t("title")}
          </h1>
        </div>
        <div
          className="absolute
        2xl:mt-[70px]  2xl:ml-[235px] 2xl:max-w-[70px] 2xl:h-[5px]
        xl:mt-[40px] xl:ml-[143px] xl:max-w-[45px] xl:h-[3px]
        dm:mt-[40px] dm:ml-[145px] dm:max-w-[42px] dm:h-[3px]
        mt-[40px] ml-[130px] max-w-[58px]
        lg:max-w-[79px] w-full h-[3px] bg-[#C0D724] rounded-[19px]"
        />
      </div>
      <div className="flex flex-col mt-[30px]">
        {aboutUs?.data?.aboutUs
          ?.sort((a, b) => a.id - b.id)
          .map((text, index) => (
            <div>
              <h2
                className="
          2xl:text-[40px]
          xl:text-[30px]
          dm:text-[28px]
          text-[20px]
          text-customDarkGreen font-medium mt-[20px]"
              >
                {text.title}
              </h2>
              <p
                className="
          2xl:text-[24px] 2xl:max-w-[99%]
          xl:text-[20px] xl:max-w-[98%]
          dm:text-[16px] dm:max-w-[98%]
          text-[14px]  font-normal text-[#545454] mt-[20px]"
                dangerouslySetInnerHTML={{
                  __html: text.text?.replace("/n", "<br /> <br />"),
                }}
              ></p>
            </div>
          ))}
      </div>
      <div
        className="flex flex-col
    2xl:mt-[130px]
    xl:mt-[70px]
    dm:mt-[70px]
    mt-[60px]"
      >
        <h3
          className="
      2xl:text-[36px]
      xl:text-[27px]
      dm:text-[27px]
      text-[22px]  font-medium sm:text-[20px] lg:text-[40px] font-medium m-0"
        >
          {aboutUs?.data?.president.fullName}
        </h3>
        <p
          className="
      2xl:text-[24px] 2xl:max-w-[99%]
      xl:text-[18px]
      dm:text-[18px]
      text-[18px]
      font-normal text-[#545454]"
        >
          {t("CEO")}
        </p>
      </div>


      <div className=" mt-[64px] sm:mt-[69px] 2xl:mt-[93px]">
        <p className=" text-[35px] sm:text-[52px] lg:text-[70px] font-semibold text-black">Start Your Jurney</p>
        <div className=" flex mt-6 lg:mt-[30px] items-center gap-[7px] 2xl:gap-[10px]">
          <Link href={'/auth/signin'}>
          <button className=" sm:h-[37px] sm:w-[147px] h-10 w-[163px]  lg:w-[123px] xl:w-[164px] lg:h-[50px] bg-[#CBEC5E] hover:bg-[#b5d354] rounded-[40px]">
          Find Talents
          </button>
          </Link>
          <Link href={'/auth/signin'}>

          <button className="lg:w-[123px]  sm:w-[147px]  w-[163px]   h-10 sm:h-[37px] xl:w-[164px] lg:h-[50px] hover:text-[#ddd] bg-black rounded-[40px] text-white">
          Find Job
          </button>
          </Link>


        </div>
      </div>
    </div>
  );
};
