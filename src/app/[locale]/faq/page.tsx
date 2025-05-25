"use client";
import { BlackRowIcon } from "../../../../public/icons/talent-client/BlackRowIcon";
import { Header } from "@/components/landingApp/Header/Header";
import { useState } from "react";
import { Footer } from "../../../components/landingApp/Footer/Footer";
import { usePathname } from "next/navigation";
import { getFAQ } from "@/lib/api/advantages/faqApi";
import { getAnswer } from "@/lib/api/getAnswerApi/getAnswerApi";
import useSWR from "swr";
import ArrowDropDown from "@/shared/widgets/ArrowDropDown/ArrowDropDown";

export default function FAQ() {
  const count = 10;

  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  // const t = useTranslations("HomePage");
  const [openIndex, setOpenIndex] = useState(null);
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

  const faq = faqData?.data?.faq;

  return (
    <div className=" bg-[#F0F1F4] px-[20px] sm:px-[40px] xxl:px-[120px] 2xl:px-0 pt-[30px] sm:pt-[34px] min-h-screen">
      <Header />

      <div className=" max-w-[1440px] w-full mx-auto mt-[30px] lg:mt-[130px]">
        <div className=" gap-[15px] items-center flex">
          <div className=" w-[22px] h-[22px] bg-[#C0D724] rounded" />
          <h1 className=" uppercase lg:text-[30px] 2xl:text-[56px] font-extrabold">
            Get answers
          </h1>
        </div>
        <p className=" font-medium text-[#18470D] mt-[27px] text-[20px] hidden sm:block sm:mt-[34px]  sm:text-[28px] 2xl:text-[40px] lg:mt-[30px] 2xl:mt-[57px]">
          Need Help? Start with Our FAQ!
        </p>
        <p className=" font-medium text-[#18470D] mt-[27px] text-[20px] block sm:hidden sm:mt-[34px]  sm:text-[28px] 2xl:text-[40px] lg:mt-[30px] 2xl:mt-[57px]">
          Need Help? <br /> Start with Our FAQ!
        </p>
      </div>

      <div className="lg:mt-0 w-full flex flex-col  space-y-[30px] max-w-[1440px] mx-auto pt-[30px]">
        {faq?.map((item, index) => (
          <ArrowDropDown
            key={index}
            title={item.question}
            open={openIndex == index}
            setOpen={() => toggleCard(index)}
            hasBg={true}
            insideElement={
              <p className=" sm:text-base text-[12px] sm:mt-[15px] text-[#3F3C3C]">
                {item.answer}
              </p>
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
