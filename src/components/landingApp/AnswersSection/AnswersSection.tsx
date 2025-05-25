"use client";
import { useState } from "react";
import Image from "next/image";
import { BlackRowIcon } from "../../../../public/icons/talent-client/BlackRowIcon";
import useSWR from "swr";
import { getAnswer } from "@/lib/api/getAnswerApi/getAnswerApi";
import { getFAQ } from "@/lib/api/advantages/faqApi";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Advantages = [
  {
    title: "How does the platform work?",
    description: "Clients hire, talents work, and payments stay secure.",
  },
  {
    title: "Are there any additional fees?",
    description: "Clients hire, talents work, and payments stay secure.",
  },
  {
    title: "How can I access the platform?",
    description: "Clients hire, talents work, and payments stay secure.",
  },
  {
    title: "What services do you offer?",
    description: "Clients hire, talents work, and payments stay secure.",
  },
];

export const AnswerSection = () => {
  const t = useTranslations("HomePage");
  const [openIndex, setOpenIndex] = useState(null);
  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  const count = 4;

  const toggleCard = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { data: answerData, error: answerError } = useSWR(
    languageCode ? ["/getanswer", languageCode] : null,
    () => getAnswer(languageCode)
  );
  const { data: faqData, error: faqError } = useSWR(
    count ? ["/faq", count, languageCode] : null,
    () => getFAQ(languageCode, count)
  );
  if (answerError || faqError) {
    return <div>Error loading data...</div>;
  }

  if (!answerData || !faqData) {
    return <div></div>;
  }

  const translation = answerData?.data?.translation;
  const title = translation?.title;

  const titleParts = title?.split(/([?,!])/);
  console.log("titleParts", titleParts);

  const firstPart = titleParts?.slice(0, 2).join("").trim();
  const secondPart = titleParts?.slice(2).join("").trim();

  const faq = faqData?.data?.faq;

  return (
    <div
      id="faq"
      className=" mt-[64px] sm:mt-[70px] lg:mt-[60px] 2xl:mt-[110px]"
    >
      <div className="flex text-center sm:text-start max-w-[136px] max-h-[60px] sm:max-w-fit mx-auto flex-col sm:items-end">
        <div className="flex sm:items-center gap-1">
          <div className="sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] mt-2 sm:mt-0 rounded-[3px] bg-[#C0D724]" />
          <h1 className="uppercase max-w-[200px] text-nowrap ml-0 md:ml-[10px] sm:max-w-[578px] lg:max-w-fit text-[20px] sm:text-[25px] lg:text-[30px] font-extrabold">
            {t("getAnswers")}
          </h1>
        </div>
        <div className=" flex self-end -translate-x-2.5 max-w-[100px] sm:mx-0  sm:-translate-x-0 sm:max-w-[134px] w-full h-[5px] bg-[#C0D724] rounded-[19px]" />
      </div>

      <div className="max-w-[1430px] w-full lg:flex justify-between mx-auto lg:mt-[70px]">
        <div className=" mt-[30px] sm:mt-[34px] lg:mt-0">
          <div className=" block sm:hidden lg:block">
            <p className="w-full text-[20px] lg:text-[50px] sm:leading-[68px]  font-medium text-[#18470D]">
              {firstPart}
            </p>
            <p className="w-full text-[20px] lg:text-[50px] sm:leading-[68px] font-medium text-[#18470D]">
              {secondPart}
            </p>
          </div>

          <div className=" md:max-w-[431px] mx-auto xl:mx-0">
            <div className="hidden w-auto mx-auto sm:block lg:hidden">
              <p className="w-full text-[28px] leading-[68px]  font-medium text-[#18470D]">
                {title}
              </p>
            </div>

            <p className=" text-[16px] mt-3 lg:text-[24px] text-[#545454] max-w-[370px] md:max-w-[463px] sm:mt-[0px] lg:mt-[28px]">
              {translation?.text || "No data available"}
            </p>
            <Link href={"/faq"}>
              <div className="max-w-[155px] h-[48px] bg-[#CBEC5E] duration-300 hover:bg-[#ACD624] cursor-pointer rounded-[39px] mt-[18px] lg:mt-[92px] px-2 flex items-center justify-between">
                <p className="text-[14px] text-[#18470D] font-medium ml-4">
                  {t("moreFAQ")}
                </p>

                <Image
                  src={"/images/all-images/arrowUpIcon.png"}
                  alt={"Arrow Icon"}
                  width={48}
                  height={48}
                  className="w-[34px] h-[34px] md:w-[34px] md:h-[34px] 2xl:w-[34px] 2xl:h-[34px]"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className=" mt-10 lg:mt-0 w-full mx-auto lg:mx-0 sm:max-w-[591px] 2xl:max-w-[710px] space-y-5">
          {faq?.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`cursor-pointer  rounded-t-[20px] px-[15px]  hover:scale-105 duration-300  sm:px-8 py-[18px] duration-200 border-b border-b-[#E2E2E2]
                ${
                  openIndex === index
                    ? " h-[99px] sm:h-[146px] bg-white"
                    : "bg-transparent sm:h-[108px]"
                }`}
            >
              <div className=" w-full flex justify-between items-center">
                <h2 className=" text-[14px] sm:text-[22px] lg:text-[26px] font-medium text-black">
                  {item.question}
                </h2>
                <div
                  className={` lg:w-12 lg:h-12 sm:w-10 sm:h-10 bg-[#C1EC05] rounded-full flex items-center transition-all duration-300 justify-center ${
                    openIndex === index ? " " : " -rotate-90"
                  } `}
                >
                  <BlackRowIcon />
                </div>
              </div>
              {openIndex === index && (
                <p className=" sm:text-base text-[12px] sm:mt-[15px] text-[#3F3C3C]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
