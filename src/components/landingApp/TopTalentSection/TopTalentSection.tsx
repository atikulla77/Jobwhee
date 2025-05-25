"use client";
import { CheckRoundIcon } from "../../../../public/icons/talent-client/CheckRoundIcon";
import { TopTalentCard } from "@/components/landingApp/TopTalentSection/TopTalentCard";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";
import useSWR from "swr";
import { getTalentByLang } from "@/lib/api/talent/talentsApi/talentsApi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    image: "/images/topTalents/userPhoto.png",
    fullname: "Ioanna Spirou",
    greeting: "Beauty and Wellness",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: " in Cosmetology",
  },
  {
    id: 2,
    fullname: "Alexandros Markou",
    greeting: "Legal and Consulting",
    image: "/images/topTalents/elegantMan.png",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: "in Accounting",
  },
  {
    id: 3,
    fullname: "Sofia Nikolaidis",
    greeting: "Education & Tutoring",
    image: "/images/topTalents/girl.png",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: "in Math Tutoring",
  },
  {
    id: 4,
    fullname: "Eleni Papadaki",
    greeting: "Event and Entertainment",
    image: "/images/topTalents/woman.png",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: "in Photography",
  },
  {
    id: 5,
    fullname: "Dimitrios Vasilakis",
    greeting: "Education & Tutoring",
    image: "/images/topTalents/man.png",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: "in History Tutoring",
  },
  {
    id: 6,
    fullname: "Thanos Karamanlis",
    greeting: "Event and Entertainment",
    image: "/images/topTalents/boy.png",
    rating: 4.5,
    isVerified: "Verified Talent",
    profession: "in Videography",
  },
];

export const TopTalentSection = () => {
  const locale = useLocale();
  const isGreek = locale === "el";
  const t = useTranslations("HomePage");

  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  const { data: topTalentInfo, error: topTalentError } = useSWR(
    languageCode ? ["/toptalent", languageCode] : null,
    () => getTalentByLang(languageCode)
  );
  return (
    <div
      id={"topTalent"}
      className=" mt-[75px] sm:mt-[160px] lg:mt-[240px] 2xl:mt-[265px]"
    >
      <div className="flex text-center sm:text-start max-w-[296px] max-h-[60px] sm:max-w-fit mx-auto flex-col sm:items-end">
        <div className="flex sm:items-center ">
          <div className="sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] mt-2 sm:mt-0 rounded-[3px] bg-[#C0D724]" />
          <h1 className="uppercase max-w-[220px] ml-1 md:ml-[10px] sm:max-w-[578px] lg:max-w-fit text-[20px] sm:text-[25px] lg:text-[30px] font-extrabold whitespace-nowrap">
            {t("topTalent")}
          </h1>
        </div>
        <div className="self-end 2xl:max-w-[225px] xl:max-w-[225px] max-w-[120px] sm:mx-0 dm:max-w-[188px]  sm:-translate-x-0 sm:max-w-[250px] w-full h-[5px] bg-[#C0D724] rounded-[19px] " />
      </div>

      <div className=" max-w-[1438px] w-full mx-auto justify-between lg:flex items-center 2xl:items-start">
        <div className=" mt-[30px] sm:mt-[40px] lg:mt-[77px] w-full  flex-wrap flex gap-4 sm:gap-5 justify-center  max-w-[590px] mx-auto lg:mx-0 lg:max-w-[710px] gap-y-[10px] md:gap-y-[0px] sm:gap-y-[44px] ">
          {cardData?.map((item, index) => (
            <div
              key={item.id}
              className={` ${
                index === 1 || index === 3 || index === 5
                  ? " mt-[10px] sm:mt-4"
                  : index === 4
                  ? " 2xl:mt-8 xl:mt-8 dm:mt-8"
                  : ""
              } max-w-[158px]  sm:max-w-[183px] 2xl:max-w-[223px] w-full gap-5`}
            >
              <TopTalentCard cardInfo={item} />
            </div>
          ))}
        </div>

        <div className=" max-w-[553px] mx-auto 2xl:mx-0  lg:max-w-[627px] xl:max-w-[447px] 2xl:max-w-[563px] w-full mt-[50px]  sm:mt-[40px] md:mt-[66px] lg:mt-[65px]">
          <p className=" text-[20px] sm:text-[28px] xl:text-[40px] 2xl:text-[50px] font-medium text-[#18470D] leading-[36px] lg:leading-[68px]">
            {topTalentInfo?.data?.translation?.title}
          </p>
          <p className=" mt-[15px] sm:mt-[18px] xl:mt-[45px] lg:max-w-[565px] xl:text-[20px] 2xl:text-[24px] text-[#545454]">
            {topTalentInfo?.data?.translation?.description}
          </p>

          <div className=" flex mt-[23px] 2xl:mt-[30px] gap-[7px] sm:gap-[18px] ">
            <Link href={"/auth/signup"}>
              <button className=" w-[98px] sm:w-[122px] h-[40px] sm:h-[48px] rounded-[40px] bg-[#CBEC5E] duration-300 hover:bg-[#ACD624] text-[14px]">
                {t("perfectMatch.signup")}
              </button>
            </Link>
            <Link href={"/about-us"}>
              <button
                className={` w-[113px] sm:w-[142px] h-[40px] sm:h-[48px] text-white rounded-[40px] border bg-black  hover:text-[#dddd] border-opacity-20 ${
                  isGreek ? "text-[15px]" : "text-[14px]"
                }`}
              >
                {t("perfectMatch.contactUs")}
              </button>
            </Link>
          </div>
          <div className=" space-y-[14px] mt-[24px] sm:mt-[26px] xl:mt-[33px] 2xl:mt-[50px]">
            <div className=" gap-[13px] flex items-center">
              <div className=" w-[15px] h-[15px] sm:w-[26px] sm:h-[26px]">
                <CheckRoundIcon />
              </div>
              <p className=" text-[16px] font-medium 2xl:text-[18px] ml-3 sm:ml-0">
                {topTalentInfo?.data?.translation?.point1}
              </p>
            </div>

            <div className=" gap-[13px] flex items-center">
              <div className=" w-[15px] h-[15px] sm:w-[26px] sm:h-[26px]">
                <CheckRoundIcon />
              </div>
              <p className="text-[16px] font-medium 2xl:text-[18px] ml-3 sm:ml-0">
                {topTalentInfo?.data?.translation?.point2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
