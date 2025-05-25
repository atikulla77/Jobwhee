"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { Link } from "@/i18n/routing";
import { CircleKey } from "@/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { getVideosUrl } from "@/lib/api/videoApi/videoApi";
import { usePathname } from "next/navigation";

export const VideoSection = () => {
  const t = useTranslations("HomePage.Video");
  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  const { data, error } = useSWR("/video", () => getVideosUrl(languageCode));

  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = data?.data?.videoUrl;
  return (
    <div
    id="video"
    className=" mt-[70px] sm:mt-[70px] lg:mt-[80px] 2xl:mt-[120px]">
      {/* Title */}
      <div className="mx-auto w-max flex flex-col items-end">
        <div className="flex items-center gap-[14px] ">
          <div className="w-[14px] h-[14px]  rounded-[3px] bg-[#C0D724]" />
          <h1 className="uppercase  text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold">
            {t("videoHeadline")}
          </h1>
        </div>
        <div className="max-w-[95px] xl:max-w-[104px] w-full h-[5px] bg-[#C0D724] rounded-[19px]" />
      </div>

      {/* Auth Buttons */}
      <div className=" mt-[30px] sm:mt-[39px] md:mt-[21px] xl:mt-[35px] flex gap-2.5 justify-center items-center">
        <Link
          href="/auth/signin"
          className=" min-w-[98px] sm:min-w-[164px] h-[40px] sm:h-[49px] bg-black hover:text-[#ddd] text-sm text-white font-medium flex justify-center items-center rounded-full"
        >
          {t("sign-in")}
        </Link>
        <Link
          href="/auth/signup"
          className="transition  min-w-[98px] sm:min-w-[164px]  h-[40px] sm:h-[49px] bg-[#CBEC5E] text-sm text-[#18470D] hover:bg-[#ACD624] hover:text-[#18470D] font-medium flex justify-center items-center rounded-full"
        >
          {t("sign-up")}
        </Link>
      </div>

      <div className="mx-auto mt-[25px] md:mt-[73px] lg:mt-[103px] 2xl:mt-[115px] max-w-full md:max-w-[585px] xl:max-w-[932px] 2xl:max-w-[1017px] w-full relative">
        {/* top left ball */}
        <div className="hidden md:block opacity-30 absolute top-[10px] left-[10px] -translate-x-1/2 -translate-y-1/2  md:w-[73px] xl:w-[112] 2xl:w-[122px] md:h-[73px] xl:h-[112px] 2xl:h-[122px] rounded-full bg-[#FFADFC57] border-[3px] border-[#DFCCDE] backdrop-blur-[23.3px]"></div>

        {/* top right */}
        <div className="hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/images/all-images/video-section-top-right.png"}
            alt={"icon"}
            width={0}
            height={0}
            sizes={"100vw"}
            className="md:w-[95px] xl:w-[146px] 2xl:w-[159px] md:h-[88px] xl:h-[134px] 2xl:h-[147px]"
          />
        </div>

        {/* Left Card */}
        <div
          className={`hidden transition duration-500 ${
            isPlaying ? "translate-x-[-100%] opacity-0" : "opacity-100"
          } md:block absolute z-20 top-[8%] left-0 -translate-x-1/2 xl:translate-x-[-80%] w-max md:py-[13px] xl:py-[16px] 2xl:py-[19px] md:px-[8px] xl:px-[11px] 2xl:px-[12px] bg-white rounded-[11px]`}
        >
          <div className="flex items-center justify-center gap-[11px]">
            <Image
              src={"/images/all-images/video-section-contract-left.png"}
              alt={"icon"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="md:w-[51px] xl:w-[66px] 2xl:w-[75px] aspect-square"
            />
            <Image
              src={"/images/all-images/video-section-contract-right.png"}
              alt={"icon"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="md:w-[51px] xl:w-[66px] 2xl:w-[75px] aspect-square"
            />
          </div>
          <h2 className="mt-[13px] text-sm font-medium text-center">
            {t("contract.title")}
          </h2>
          <button className="mt-[19px] rounded-full md:px-[12px] xl:px-[23px] 2xl:px-[27px] md:py-[4px] xl:py-[8px] bg-[#CBEC5E59] text-[#0DA45D] text-sm">
            {t("contract.btn")}
          </button>
        </div>

        {/* Unlock */}
        <div
          className={`hidden md:flex transition duration-500 ${
            isPlaying ? "translate-x-[100%] opacity-0" : "opacity-100"
          } absolute z-20 bottom-[20%] left-0 -translate-x-1/2 xl:-translate-x-2/3 py-[4px] pl-[4px] 2xl:py-[6px] 2xl:pl-[6px] md:pr-[13px] xl:pr-[26px] 2xl:pr-[17px] items-center md:gap-[6px] lg:gap-[11px] bg-white rounded-[14px] shadow-[0px_11px_28.3px_0px_#617CAE21]`}
        >
          <CircleKey />
          <p className="text-sm font-medium text-black">{t("unlock")}</p>
        </div>

        {/* Video */}
        <div className="relative z-10 w-full aspect-video rounded-[20px] sm:rounded-[50px] overflow-hidden">
          <VideoPlayer
            url={videoUrl}
            onPlay={() => {
              setIsPlaying(true);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
          />
        </div>
        {/* Right Card */}
        <div
          className={`hidden md:block transition duration-500 ${
            isPlaying ? "translate-x-[100%] opacity-0" : "opacity-100"
          } absolute z-10 bottom-[60px] right-0 translate-x-1/2 w-max md:px-[7px] 2xl:px-[11px] md:py-[15px] xl:py-[17px] 2xl:py-[19px] bg-white rounded-[11px]`}
        >
          <div className="flex justify-center items-center">
            <Image
              src={"/images/all-images/video-section-maria-smith.png"}
              alt={"icon"}
              width={75.6}
              height={75}
              className="object-cover"
            />
          </div>
          <h2 className="mt-[2px] text-sm text-center font-medium">
            {t("send-message.name")}
          </h2>
          <p className="text-[#949494] text-xs text-center">
            {t("send-message.profession")}
          </p>
          <button className="mt-[12px] rounded-full md:px-[22px] xl:px-[29px] 2xl:px-[32px] md:py-[5px] xl:py-[7px] 2xl:py-[8px] bg-[#CBEC5E59] text-[#0DA45D] text-sm">
            {t("send-message.btn")}
          </button>
        </div>

        {/*Bottom Left*/}
        <div className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
          <Image
            src={"/images/all-images/video-section-top-right.png"}
            alt={"icon"}
            width={0}
            height={0}
            sizes={"100vw"}
            className="md:w-[95px] xl:w-[146px] 2xl:w-[159px] md:h-[88px] xl:h-[134px] 2xl:h-[147px]"
          />
        </div>

        {/* Bottom Triangle */}
        <div className="absolute -bottom-2 left-[15%] translate-y-1/2">
          <Image
            src={"/images/all-images/video-section-triangle.png"}
            alt={"icon"}
            width={0}
            height={0}
            sizes={"100vw"}
            className="md:w-[105px] xl:w-[161px] 2xl:w-[176px] md:h-[105px] xl:h-[161px] 2xl:h-[176px]"
          />
        </div>

        {/* bottom right */}
        <div className="hidden md:block absolute bottom-4 right-0 translate-x-full translate-y-1/2 ">
          <Image
            src={"/images/all-images/video-section-bottom-right.png"}
            alt={"icon"}
            width={0}
            height={0}
            sizes={"100vw"}
            className="md:w-[111px] xl:w-[172px] 2xl:w-[187px] md:h-[111px] xl:h-[172px] 2xl:h-[187px] object-contain object-left-bottom"
          />
        </div>
      </div>
    </div>
  );
};
