"use client"

import {useLocale} from "next-intl";
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import useSWR from "swr";
import {useState} from "react";
import {DownloadIcon} from "../../../public/icons/talent-client/DownloadIcon";
import {getPrivacyPolicy} from "@/lib/api/PrivacyPolicyApi/privacyPolicyApi";
import {getTermsOfServices} from "@/lib/api/termsOfServicesApi/termsOfServicesApi";


export const PrivacyPolicyPage = () => {

    const locale = useLocale();
    const [activeTab, setActiveTab] = useState("terms");
    const t = useTranslations("PrivacyPolicyPage");
    const pathname = usePathname();
    const languageCode = pathname.split("/")[1];

    const {data: privacyPolicy, error: privacyError} = useSWR(
        languageCode ? ["/privacypolicy", languageCode] : null,
        () => getPrivacyPolicy(languageCode)
    );

    const {data: termsOfServices, error: termsError} = useSWR(
        languageCode ? ["/termsofservices", languageCode] : null,
        () => getTermsOfServices(languageCode)
    );

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };


    return <div
        className="mt-[100px] min-h-[54px] lg:min-h-[74px] w-full flex max-w-[1440px] mx-auto px-[7px] lg:px-0 rounded-[145px] justify-center flex-col">
        <div
            className="flex flex-col justify-between items-start md:flex-col 2xl:flex-row xl:flex-row 2xl:items-center">
            <div>
                <div className=" flex items-center gap-[14px] ">
                    <div className=" w-[14px] h-[14px]  rounded-[3px] bg-[#C0D724]"/>
                    <h1 className="uppercase text-[32px] 2xl:text-[56px] xl:text-[42px] font-extrabold whitespace-nowrap">
                        {t("title1")}
                    </h1>
                </div>
                <div
                    className="absolute  2xl:mt-[0px]  2xl:ml-[350px] 2xl:max-w-[195px] 2xl:h-[5px] xl:mt-[0px] xl:ml-[269px] xl:max-w-[147px] xl:h-[3px] md:mt-[0px] md:ml-[212px] md:max-w-[112px] md:h-[3px] -mt-[5px]  ml-[212px] max-w-[112px]  lg:max-w-[79px] w-full h-[3px] bg-[#C0D724] rounded-[19px]"/>
            </div>
            <div className="md:mt-[30px] 2xl:mt-[0px] xl:mt-[0px]">
                <div className=" flex items-center gap-[14px] ">
                    <div className=" w-[14px] h-[14px]  rounded-[3px] bg-[#C0D724]"/>
                    <h1 className="uppercase text-[32px]  2xl:text-[56px] xl:text-[42px] font-extrabold whitespace-nowrap">
                        {t("title2")}
                    </h1>
                </div>
                <div
                    className="absolute  2xl:mt-[0px]  2xl:ml-[330px] 2xl:max-w-[170px] 2xl:h-[5px] xl:mt-[0px] xl:ml-[252px] xl:max-w-[130px] xl:h-[3px] md:mt-[0px] md:ml-[200px] md:max-w-[95px] md:h-[3px] -mt-[5px] ml-[200px] max-w-[95px] lg:max-w-[79px] w-full h-[3px] bg-[#C0D724] rounded-[19px]"/>
            </div>
        </div>
        <div className="2xl:flex xl:flex justify-between mt-[100px]">
            <div className="flex w-[320px] flex-row bg-white rounded-[20px] justify-between h-[45px]">
                <p
                    onClick={() => handleTabClick("terms")}
                    className={`cursor-pointer p-[10px] pl-[20px] pr-[20px] ${
                        activeTab === "terms" ? "bg-customGreen h-full rounded-[20px]" : ""
                    }`}
                >
                    {t("title1")}
                </p>
                <p
                    onClick={() => handleTabClick("privacy")}
                    className={`cursor-pointer p-[10px] pr-[20px] pl-[20px] ${
                        activeTab === "privacy" ? "bg-customGreen h-full rounded-[20px]" : ""
                    }`}
                >
                    {t("title2")}
                </p>

            </div>
            <div
                className="bg-black 2xl:flex xl:flex rounded-[50px] justify-center items-center hidden h-[45px] pr-[5px] cursor-pointer">
                <p className="text-white p-[10px] pl-[15px]">{t("download")}</p>
                <div className="bg-white rounded-[50px] w-[35px] h-[35px] p-[5px] ">
                    <DownloadIcon/>
                </div>
            </div>
        </div>
        <div className="flex flex-col mt-[30px] gap-[32px]">
            {activeTab === "terms" &&
                termsOfServices?.data?.termsOfServices?.map((item, index) =>
                    <div key={item.id}>
                        <h2 className="2xl:text-[40px] xl:text-[30px] md:text-[28px] text-[20px] text-customDarkGreen font-medium mt-[20px]">{index + 1}.{item.title}</h2>
                        <div
                            className="prose prose-sm 2xl:prose-lg max-w-none text-[#545454] mt-[20px] marker:text-[#545454]"
                            dangerouslySetInnerHTML={{__html: item.text}}
                        />


                    </div>)
            }
            {activeTab === "privacy" &&
                privacyPolicy?.data?.privacyPolicy?.map((item, index) =>
                    <div key={item.id}>
                        <h2 className="2xl:text-[40px] xl:text-[30px] md:text-[28px] text-[20px] text-customDarkGreen font-medium mt-[20px]">{item.title}</h2>
                        <div
                            className="prose prose-sm 2xl:prose-lg max-w-none text-[#545454] mt-[20px] marker:text-[#545454]"
                            dangerouslySetInnerHTML={{__html: item.text}}
                        />
                    </div>)
            }
        </div>
        <div className="flex flex-col 2xl:mt-[130px] xl:mt-[70px] md:mt-[70px] mt-[60px]">
            <h3 className="2xl:text-[36px] xl:text-[27px] md:text-[27px]text-[22px]  font-medium sm:text-[20px] lg:text-[40px]  m-0"></h3>
            <p className=" 2xl:text-[24px] 2xl:max-w-[99%] xl:text-[18px] md:text-[18px] text-[18px] font-normal text-[#545454]"></p>
        </div>
    </div>
}