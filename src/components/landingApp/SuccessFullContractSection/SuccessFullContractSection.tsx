"use client";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { ContractCard } from "@/components/landingApp/SuccessFullContractSection/ContractCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { RowIconLeft } from "../../../../public/icons/talent-client/RowIconLeft";
import useSWR from "swr";
import { getContracts } from "@/lib/api/contractApi/contractApi";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export const SuccessFullContractSection = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const t = useTranslations("HomePage");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];

  const { data, isLoading, error } = useSWR(
    isClient ? [`/contract`, languageCode] : null,
    () => getContracts(languageCode),
    {
      fallbackData: {
        data: {
          language: { id: 1, code: "en" },
          commonText: "",
          contracts: [],
        },
      },
    }
  );

  const contracts = data?.data?.contracts || [];
  const commonText = data?.data?.commonText || "";

  if (!isClient || isLoading) {
    return (
      <div className="text-center p-10">
        <p className="text-lg font-semibold">Loading contracts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-lg font-semibold text-red-600">
          Error loading contracts or There are no contracts available!
        </p>
      </div>
    );
  }

  return (
    <div
      id={"contracts"}
      className="mt-[35px] lg:mt-[30px] 2xl:mt-[80px] max-w-[1444px] mx-auto"
    >
      <div className="max-w-[285px] sm:max-w-[400px] lg:max-w-fit mx-auto flex flex-col items-end">
        <div className="flex items-center gap-[14px]">
          <div className="sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] rounded-[3px] bg-[#C0D724]" />
          <h1 className="uppercase text-[20px] sm:text-[25px] lg:text-[30px] font-extrabold">
            {t("contract.contractHeadline")}
          </h1>
        </div>
        <div className="max-w-[80px] sm:max-w-[150px] lg:max-w-[185px] 2xl:max-w-[160px] w-full h-[5px] bg-[#C0D724] rounded-[19px]" />
      </div>

      <div className="mt-[20px] sm:mt-[25px] lg:mt-[36px] 2xl:mt-[70px] pb-10">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            400: { slidesPerView: 1.2, spaceBetween: 13 },
            680: { slidesPerView: 1.5, spaceBetween: 13 },
            800: { slidesPerView: 2, spaceBetween: 13 },
            1150: { slidesPerView: 3 },
          }}
        >
          {contracts.length > 0 ? (
            contracts.map((contract) => (
              <SwiperSlide key={contract.id}>
                <ContractCard contract={contract} commonText={commonText} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="text-center p-10">
                <p className="text-lg font-semibold text-gray-600">
                  No contracts available
                </p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        <div className="flex gap-4 sm:gap-6 max-w-[96px] sm:max-w-[150px] mx-auto sm:mt-5 lg:mt-8">
          <button
            title="prev"
            className="w-10 h-10 sm:w-[63px] px-2 py-2 sm:h-[63px] sm:px-0 sm:py-0 bg-white rounded-full flex items-center justify-center"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            <RowIconLeft />
          </button>

          <button
            title="next"
            className="w-10 h-10 sm:w-[63px] sm:h-[63px] px-2 py-2 sm:px-0 sm:py-0 bg-white rounded-full flex items-center justify-center rotate-180"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            <RowIconLeft />
          </button>
        </div>
      </div>
    </div>
  );
};
