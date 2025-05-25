import Image from "next/image";
import { StarIcon } from "../../../../public/icons/talent-client/StarIcon";
import { FolderIcon } from "../../../../public/icons/talent-client/FolderIcon";
import { BackPackIcon } from "../../../../public/icons/talent-client/BackPackIcon";
import { useLocale, useTranslations } from "next-intl";
import { FolderIconMobile } from "../../../../public/icons/talent-client/FolderIconMobile";
import { BackPackIconMobile } from "../../../../public/icons/talent-client/BackpackMobile";
import { BoldStarIcon } from "../../../../public/icons/talent-client/boldStarIcon";

export const ContractCard = ({
  contract,
  commonText,
}: {
  contract: any;
  commonText: string;
}) => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isGreek = locale === "el";
  const { translation } = contract;

  if (!translation) {
    return (
      <div className="text-center p-10">
        <p className="text-lg font-semibold text-gray-600">
          Contract details unavailable
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-[335px] w-full md:max-w-[387px] 2xl:max-w-[467px]">
      <div className=" relative">
        <Image
          src={"/images/all-images/cardTop.png"}
          width={0}
          height={0}
          alt="card"
          sizes="100vw"
          className=" w-full  max-h-[53px] hidden sm:block translate-y-1 2xl:translate-x-[0.8px]  "
        />
        <div className=" flex justify-end">
          <Image
            src={"/images/all-images/cardTopMobile.png"}
            width={227}
            height={47}
            alt="card"
            className=" w-full max-w-[227px]  max-h-[53px] block sm:hidden 2xl:translate-x-[0.8px]  "
          />
        </div>

        <p className=" lg:text-[18px] 2xl:text-[20px] font-black  absolute left-[36px] text-[14px] sm:left-[37px] 2xl:left-[49px] top-[11px] ">
          {t("contract.contractItemTitle")}
        </p>

        <div className="absolute z-10 right-4 font-roboto_condenst sm:right-[23px] 2xl:right-[34px] top-[8px] sm:top-[14px] 2xl:top-[11px] flex flex-col items-end leading-[29.12px] group">
          <p className=" pl-[50px] md:pl-[25px] 2xl:pl-[5px]   text-xs sm:text-[14px] 2xl:text-base font-semibold top-5 truncate max-w-[200px]">
            {translation.title.length > 23
              ? translation.title.slice(0, 23) + "..."
              : translation.title}
          </p>
          {translation.title.length > 23 && (
            <div className="absolute top-[50%] mt-0.5 right-0 hidden group-hover:flex bg-black text-white text-xs p-2 rounded-md max-w-[250px] shadow-lg z-20">
              {translation.title}
            </div>
          )}
          <p className="text-xs sm:text-[11px] 2xl:text-[13.35px] leading-[29.12px] 2xl:leading-[23px] font-normal top-5">
            {t("contract.paymentType")}: {translation.paymentType}
          </p>
        </div>
        <div className=" relative bg-white rounded-[30px] rounded-tr-none px-[10px] 2xl:px-[28px] py-6 sm:max-h-[430px] 2xl:max-h-[440px]">
          <div className="w-full flex     gap-[6px] justify-between">
            <div className=" px-[9px] py-[9px] max-w-[161px]  2xl:max-w-[203px] min-h-[107px] sm:min-h-[124px] w-full rounded-[18px] bg-[#F4F5F8]">
              <div className=" flex justify-between">
                <Image
                  src={translation.clientImage}
                  width={49}
                  height={49}
                  alt=""
                  className=" 2xl:max-w-[49px] w-full max-w-[37px] h-[37px] 2xl:h-[49px] rounded-full object-cover"
                />
                <div className="">
                  <div className=" w-[74px] sm:w-[102px] bg-[#0D40BE1A] flex items-center h-6 justify-center rounded-[47px]">
                    <p className=" text-[13px]">{t("contract.client")}</p>
                  </div>

                  <div className=" flex gap-[3px] justify-end mt-[5px]">
                    <BoldStarIcon />
                    <p className=" text-[12px] font-bold">
                      {translation.clientRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-[10px]">
                <p className=" text-[12px] sm:text-[15px] font-semibold">
                  {translation.clientFirstName} {translation.clientLastName}
                </p>
                <p className=" text-[12px] sm:text-[13px] text-[#818181]">
                  {translation.clientPosition}
                </p>
              </div>
            </div>

            <div className=" px-[9px] py-[9px]  max-w-[161px] 2xl:max-w-[203px] min-h-[107px]  sm:min-h-[124px] w-full rounded-[18px] bg-[#F4F5F8]">
              <div className=" flex justify-between">
                <Image
                  src={translation.talentImage}
                  width={49}
                  height={49}
                  alt=""
                  className=" 2xl:max-w-[49px] w-full max-w-[37px] h-[37px] 2xl:h-[49px] rounded-full object-cover"
                />
                <div className="">
                  <div className=" w-[74px] sm:w-[102px] bg-[#CBEC5E] flex items-center h-6 justify-center rounded-[47px]">
                    <p className=" text-[13px]">{t("contract.talent")}</p>
                  </div>

                  <div className=" flex gap-[3px] justify-end items-center mt-[5px]">
                    <BoldStarIcon />
                    <p className=" text-[12px] font-bold">
                      {translation.talentRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-[10px]">
                <p className=" text-[12px] sm:text-[15px] font-semibold">
                  {translation.talentFirstName} {translation.talentLastName}
                </p>
                <p className=" text-[12px] sm:text-[13px] text-[#818181]">
                  {translation.talentMajor}
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-4 lg:mt-5 min-h-[95px] group relative">
            <div className="flex gap-[6px] items-center">
              <div className=" hidden sm:block">
                <FolderIcon />
              </div>
              <div className=" block sm:hidden">
                <FolderIconMobile />
              </div>
              <p className="text-[14px] sm:text-[15px] font-semibold">
                {t("contract.description")}
              </p>
            </div>
            <p className="text-[12px] sm:text-[13px] text-[#474747] mt-[8px] max-w-[400px] line-clamp-3 overflow-hidden">
              {translation.description}
            </p>
            {translation.description.length > 150 && (
              <div className="absolute top-full mt-0.5 left-0 hidden group-hover:flex bg-black text-white text-xs p-2 rounded-md max-w-[400px] shadow-lg z-20">
                {translation.description}
              </div>
            )}
          </div>

          <div className="   w-full sm:mt-4 lg:mt-5 xl:mt-0">
            <div className=" flex gap-[6px] items-center">
              <div className=" hidden sm:block">
                <BackPackIcon />
              </div>
              <div className=" block sm:hidden">
                <BackPackIconMobile />
              </div>
              <p className=" text-[15px] font-semibold">
                {t("contract.jobDetails")}
              </p>
            </div>

            <div className=" mt-[8px] w-full flex justify-start xl:justify-between gap-[30px] sm:gap-3 2xl:gap-0 max-w-[406px]">
              <div className=" max-w-[160px] sm:max-w-[210px] w-full">
                <div className="flex gap-2 2xl:gap-[15px] justify-between  max-w-[210px] min-w-0">
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    }  font-semibold whitespace-nowrap`}
                  >
                    {t("contract.startDate")}
                  </p>
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    }  text-[#474747] whitespace-nowrap`}
                  >
                    {translation.startDate}.
                  </p>
                </div>
                <div className="flex gap-2 2xl:gap-[15px]  max-w-[210px] min-w-0 justify-between">
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    }  font-semibold whitespace-nowrap`}
                  >
                    {t("contract.endDate")}
                  </p>
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    }  text-[#474747] whitespace-nowrap`}
                  >
                    {translation.endDate}
                  </p>
                </div>
              </div>

              <div className=" max-w-[120px] sm:max-w-[154px] w-full">
                <div className=" flex gap-2 2xl:gap-[15px] max-w-[210px] min-w-0 justify-between">
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    } font-semibold whitespace-nowrap`}
                  >
                    {t("contract.status")}
                  </p>
                  <p
                    className={` ${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    } text-[#474747] whitespace-nowrap`}
                  >
                    {translation.status}{" "}
                  </p>
                </div>
                <div className=" flex gap-2 2xl:gap-[15px] max-w-[210px] min-w-0 justify-between">
                  <p
                    className={`${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    } font-semibold whitespace-nowrap`}
                  >
                    {t("contract.budget")}
                  </p>
                  <p
                    className={` ${
                      isGreek ? "text-[11px]" : "text-[13px]"
                    }  text-[#474747] whitespace-nowrap`}
                  >
                    {translation.budget}
                  </p>
                </div>
              </div>
            </div>
            <div className="  max-w-[413px] w-full h-12 bg-black rounded-[14px] px-2 sm:px-0 mt-5 text-white text-[12px] sm:text-[13.35px] flex items-center justify-center">
              <p className=" max-w-[341px] text-center mx-auto">{commonText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
