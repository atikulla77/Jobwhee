"use client";
import useSWR from "swr";
import React, {useRef, useState} from "react";
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import {
    getClientSteps,
    getTalentSteps,
} from "@/lib/api/stepsOfSuccessApi/stepsOfSuccess";
import StepsOfSuccessCard from "@/components/landingApp/StepsOfSuccess/StepsOfSuccessCard";
import SelectClientOrTalentBtn from "@/shared/widgets/SelectClientOrTalentBtn";

import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const StepsOfSuccess = () => {
    const t = useTranslations("HomePage");
    const pathname = usePathname();
    const languageCode = pathname.split("/")[1];
    const [selectedRole, setSelectedRole] = useState<"Client" | "Talent">(
        "Client"
    );

    const swiperRef = useRef<SwiperRef>(null);

    const handleSwitcherClick = (role: "Client" | "Talent") => {
        setSelectedRole(role);
    };

    const {data: clientSteps, error: clientStepsError} = useSWR(
        ["/step/Client", languageCode],
        () => getClientSteps(languageCode)
    );
    const {data: talentSteps, error: talentStepsError} = useSWR(
        ["/step/Talent", languageCode],
        () => getTalentSteps(languageCode)
    );

    if (clientStepsError) return <div>Error loading client steps</div>;
    if (talentStepsError) return <div>Error loading talent steps</div>;

    if (!clientSteps && selectedRole === "Client")
        return <div></div>;
    if (!talentSteps && selectedRole === "Talent")
        return <div></div>;

    return (
        <>
            <div
                id="stepsOfSuccess"
                className="flex  h-[600px]  flex-col mt-[68px] sm:mt-[95px] lg:mt-[100px] 2xl:mt-[110px] max-w-[1444px] mx-auto"
            >
                <div className="flex text-center sm:text-start max-w-fit  mx-auto flex-col sm:items-end">
                    <div className="flex sm:items-center sm:gap-[0px] ">
                        <div
                            className="sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] mt-2 sm:mt-0 rounded-[3px] bg-[#C0D724]"/>
                        <h1 className="uppercase max-w-[224px] ml-[5px] xl:ml-[10px] sm:max-w-[578px] lg:max-w-fit text-[20px] sm:text-[25px] md:text-[30px]  lg:text-[30px] font-extrabold">
                            {t("stepsOfSuccess")}
                        </h1>
                    </div>
                    <div
                        className="self-end max-w-[92px] sm:mx-0 -translate-x-1 sm:-translate-x-0 sm:max-w-[124px] w-full h-[5px] bg-[#C0D724] rounded-[19px]"/>
                </div>

                <div className=" mt-[30px] 2xl:mt-[70px]">
                    <SelectClientOrTalentBtn
                        activeRole={selectedRole}
                        onSelect={handleSwitcherClick}
                    />
                    <div className="relative w-full overflow-hidden mt-[12px] sm:mt-[18px] lg:mt-[20px] 2xl:mt-[30px] ">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={0}
                            slidesPerView={1.3}
                            className=""
                            breakpoints={{
                                375: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 5,
                                },
                                530: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                860: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1920: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {selectedRole === "Client"
                                ? clientSteps?.data?.steps.map((step) => (
                                    <SwiperSlide key={step?.stepId}>
                                        <div className="w-[230px] h-fit lg:w-[278px] lg:h-[384px]  ">
                                            <StepsOfSuccessCard
                                                key={step?.stepId}
                                                imgSrc={`/images/steps/steps${step?.step}.png`}
                                                number={step?.step}
                                                title={step?.translation?.name}
                                                subtitle={step?.translation?.description}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                                : talentSteps?.data?.steps.map((step) => (
                                    <SwiperSlide key={step.stepId}>
                                        <div className="w-[230px] h-[320px] lg:w-[278px] lg:h-[384px]">
                                            <StepsOfSuccessCard
                                                key={step?.stepId}
                                                imgSrc={`/images/steps/steps${step?.step}.png`}
                                                number={step?.step}
                                                title={step?.translation?.name}
                                                subtitle={step?.translation?.description}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepsOfSuccess;
