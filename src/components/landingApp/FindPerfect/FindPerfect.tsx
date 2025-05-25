"use client";
import useSWR from "swr";
import {useState} from "react";
import Image from "next/image";
import {Search} from "@/shared/widgets/Search";
import {CheckRoundIcon} from "../../../../public/icons/talent-client/CheckRoundIcon";
import {getPerfectMatch} from "@/lib/api/perfectMatchApi/perfectMatchApi";
import {
    getClientImages,
    getTalentImages,
} from "@/lib/api/perfectMatchApi/clientAndTalentImageApi";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";

export const FindPerfectSection = () => {
    const t = useTranslations("HomePage");
    const [isSwitcherActive, setSwitcherActive] = useState(true);
    const pathname = usePathname();
    const languageCode = pathname.split("/")[1];
    const locale = useLocale();
    const isGreek = locale === "el";

    const {data, isLoading} = useSWR(["/perfectmatch", languageCode], () =>
        getPerfectMatch(languageCode)
    );
    const {data: clientImages, error: clientError} = useSWR(
        "/perfectmatchimage/role/Client",
        () => getClientImages()
    );

    const {data: talentImages, error: talentError} = useSWR(
        "/perfectmatchimage/role/Talent",
        () => getTalentImages()
    );

    const matchData = data?.data?.translation;

    const handleSwitcherClick = () => {
        setSwitcherActive(!isSwitcherActive);
    };

    if (isLoading) return <div></div>;

    if (clientError || talentError) {
        console.error(clientError || talentError);
        return <div>Error loading images.</div>;
    }

    return (
        <div className=" mt-[30px] sm:mt-[0px] lg:mt-[0px] 2xl:mt-[80px] max-w-[1440px] mx-auto">
            <div
                className=" flex max-w-[287px] text-center  items-center sm:text-start sm:max-w-[509px] dm:max-w-[509px] lg:max-w-fit mx-auto  flex-col sm:items-end">
                <div className=" flex sm:items-center sm:gap-[14px] ">
                    <div
                        className=" sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] mt-2 sm:mt-0  rounded-[3px] bg-[#C0D724]"/>
                    <h1 className=" uppercase  max-w-[267px] sm:max-w-[578px] lg:max-w-fit text-[20px] sm:text-[25px] lg:text-[30px] font-extrabold">
                        {t("perfectMatch.perfectMatchHeadline")}
                    </h1>
                </div>
                <div
                    className=" block max-w-[70px] mx-auto sm:mx-0 translate-x-7 sm:-translate-x-0 sm:max-w-[248px]  2xl:max-w-[266px] w-full h-[5px] bg-[#C0D724] rounded-[19px]"/>
            </div>

            <div className=" xl:flex mt-[30px]  sm:mt-[18px] 2xl:mt-[70px] justify-between max-w-[1440px] w-full">
                <div className=" max-w-[627px] xl:max-w-[483px] mx-auto lg:mx-0 2xl:max-w-[604px] w-full">
                    <p className=" text-[20px] sm:text-[28px] xl:text-[40px] 2xl:text-[50px] font-medium text-[#18470D] lg:leading-[51px] 2xl:leading-[68px]">
                        {matchData?.title}
                    </p>
                    <p className=" mt-[18px] xl:mt-[23px] lg:max-w-[540px] leading-[28px] 2xl:leading-[38px] xl:text-[20px] 2xl:text-[24px] text-[#545454]">
                        {matchData?.subTitle}
                    </p>
                    <div className=" mt-6">
                        <Search/>
                    </div>
                    <div className=" flex mt-[35px] sm:mt-[23px] 2xl:mt-[40px] gap-[10px] ">
                        <Link href={"/auth/signup"}>
                            <button
                                className=" w-[98px] sm:w-[122px] h-[40px] sm:h-[48px] rounded-[40px] bg-[#CBEC5E] duration-300 hover:bg-[#ACD624] text-[14px]">
                                {t("perfectMatch.signup")}
                            </button>
                        </Link>
                        <Link href={"/about-us"}>
                            <button
                                className={` w-[113px] sm:w-[142px] h-[40px] sm:h-[48px] hover:text-[#ddd] text-white rounded-[40px] border bg-black border-opacity-20 ${
                                    isGreek ? "text-[15px]" : "text-[14px]"
                                }`}
                            >
                                {t("perfectMatch.contactUs")}
                            </button>
                        </Link>
                    </div>
                    <div className="space-y-[7px]  2xl:space-y-[14px] mt-[26px] xl:mt-[23px] 2xl:mt-[44px]">
                        <div className="gap-[13px] flex">
                            <div className=" w-[10px] h-[15px] sm:w-[26px] sm:h-[26px]">
                                <CheckRoundIcon/>
                            </div>
                            <p className=" text-[16px] 2xl:text-[18px] ml-3 sm:ml-0">
                                {matchData?.point1}
                            </p>
                        </div>

                        <div className=" gap-[13px] 2xl:pt-0 flex">
                            <div className=" w-[10px] h-[15px] sm:w-[26px] sm:h-[26px]">
                                <CheckRoundIcon/>
                            </div>
                            <p className="text-[16px] 2xl:text-[18px] ml-3 sm:ml-0">
                                {matchData?.point2}
                            </p>
                        </div>

                        <div className=" gap-[13px] flex">
                            <div className=" w-[10px] h-[15px] sm:w-[26px] sm:h-[26px] ">
                                <CheckRoundIcon/>
                            </div>
                            <p className="text-[16px] 2xl:text-[18px] ml-3 sm:ml-0">
                                {matchData?.point3}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className=" max-w-[335px] lg:mx-auto sm:max-w-[400px] scale-95 sm:scale-105 xl:max-w-[438px] mx-auto xl:mx-0 2xl:max-w-[640px] w-full mt-[20px] sm:mt-[66px] xl:mt-0 relative  ">
                    {/* <Image
          src={isSwitcherActive ? "/Client.png" : "/TalenImg.png"}
          width={600}
          height={1000}
          alt=""
          className=" max-w-[335px] sm:max-w-[400px] 2xl:max-w-[600px]"
          /> */}
                    {!isSwitcherActive ? (
                        <>
                            <div className="flex gap-5">
                                {clientImages?.data.slice(0, 2).map((client) => (
                                    <Image
                                        key={client.id}
                                        src={client.image || ""}
                                        width={310}
                                        height={336}
                                        alt={`Client ${client.id}`}
                                        className="rounded-[32px] object-cover 2xl:max-w-[311px] max-w-[214px] lg:h-[235px] 2xl:h-[319px]"
                                    />
                                ))}
                            </div>
                            {clientImages?.data[2]?.image && (
                                <Image
                                    src={clientImages?.data[2]?.image}
                                    width={642}
                                    height={264}
                                    alt=""
                                    className=" mt-[28px] sm:mt-9 rounded-[32px] object-cover w-full 2xl:max-w-[640px]  lg:h-[180px]  lg:max-w-[438px] 2xl:h-[252px]"
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <div className="flex gap-5">
                                {talentImages?.data.slice(0, 2).map((talent) => (
                                    <Image
                                        key={talent.id}
                                        src={talent.image}
                                        width={310}
                                        height={336}
                                        alt={`Talent ${talent.id}`}
                                        className="rounded-[32px] object-cover w-full 2xl:max-w-[311px] max-w-[214px] lg:h-[235px] 2xl:h-[319px]"
                                    />
                                ))}
                            </div>
                            {talentImages?.data[2]?.image && (
                                <Image
                                    src={talentImages?.data[2]?.image}
                                    width={642}
                                    height={264}
                                    alt=""
                                    className=" mt-[28px] sm:mt-9 rounded-[32px] object-cover w-full md:max-w-[438px] lg:w-[850px]  2xl:max-w-[640px] lg:h-[180px] 2xl:h-[252px]"
                                />
                            )}
                        </>
                    )}

                    <div
                        className=" hidden rounded-[30px] max-w-[190px] w-full min-h-[100px] bg-[#F0F1F4] absolute scale-[.6] sm:scale-[.6] 2xl:scale-100 bottom-[32%] translate-x-3 sm:translate-x-0 right-1/4 sm:right-[28%] md:right-[26%] sm:bottom-[34%] lg:bottom-[42%] xl:bottom-[45.5%] 2xl:right-[35.5%] px-2 sm:flex items-center 2xl:bottom-[45%] translate-y-1  sm:translate-y-0 lg:translate-y-8">
                        <div
                            onClick={() => handleSwitcherClick()}
                            className=" max-w-[170px] min-h-[80px] cursor-pointer  w-full rounded-[61px]  border-[2px] border-[#CBEC5E] flex items-center "
                        >
                            <p
                                className={` text-[#18470D] text-base sm:text-sm font-medium  ${
                                    isSwitcherActive ? "block " : "hidden"
                                } ${isGreek ? "ml-6" : "ml-8"}`}
                            >
                                {t("contract.client")}
                            </p>

                            <div
                                className={` w-[61px] h-[61px] bg-[#CBEC5E]  duration-300 hover:bg-[#ACD624] rounded-full translate-x-[5px]  ${
                                    isSwitcherActive
                                        ? " translate-x-[32%] sm:translate-x-[25px] lg:translate-x-[25px] 2xl:translate-x-[27px]"
                                        : ""
                                }`}
                            ></div>

                            <p
                                className={` text-[#18470D] text-base sm:text-sm font-medium  ${
                                    isSwitcherActive ? "hidden" : "block"
                                } ${isGreek ? "ml-[10px]" : "ml-4"}`}
                            >
                                {t("contract.talent")}
                            </p>
                        </div>
                    </div>

                    <div
                        className=" rounded-[30px] sm:hidden max-w-[190px] w-full min-h-[100px] bg-[#F0F1F4] absolute scale-[.6] sm:scale-[.6] 2xl:scale-100 bottom-[32%] translate-x-3 sm:translate-x-0 right-1/4 sm:right-[28%] sm:bottom-[34%] lg:bottom-[42%] xl:bottom-[45.5%] 2xl:right-[35.5%] px-2 flex items-center 2xl:bottom-[45%] translate-y-1  sm:translate-y-0 lg:translate-y-8">
                        <div
                            onClick={() => handleSwitcherClick()}
                            className=" max-w-[170px] min-h-[80px] cursor-pointer  w-full rounded-[61px]  border-[2px] border-[#CBEC5E] flex items-center "
                        >
                            <p
                                className={` text-[#18470D] text-base sm:text-sm font-medium ml-8 ${
                                    isSwitcherActive ? "block" : "hidden"
                                } ${isGreek ? "ml-[22px]" : "ml-4"}`}
                            >
                                {t("contract.client")}
                            </p>

                            <div
                                className={` w-[61px] h-[61px] bg-[#CBEC5E]  duration-300 hover:bg-[#ACD624] rounded-full  ${
                                    isSwitcherActive
                                        ? " translate-x-[22px] "
                                        : "translate-x-[5px] "
                                }`}
                            ></div>

                            <p
                                className={` text-[#18470D] text-base sm:text-sm font-medium  ${
                                    isSwitcherActive ? "hidden" : "block"
                                } ${isGreek ? "ml-[10px]" : "ml-4"}`}
                            >
                                {t("contract.talent")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
