"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";

import {usePathname} from "next/navigation";
import useSWR from "swr";
import {
    getClientAdvantages,
    getTalentAdvantages,
} from "@/lib/api/advantages/advantages";
import AdvantageInnerSection from "@/components/landingApp/Advantages/AdvantageInnerSection";

const AdvantagesOfThePlatform = () => {
    const t = useTranslations("HomePage");
    const pathname = usePathname();
    const languageCode = pathname.split("/")[1];
    const [selectedRole, setSelectedRole] = useState<"Client" | "Talent">(
        "Client"
    );
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const {data: clientAdvantages, error: clientError} = useSWR(["/advantages/Client", languageCode],
        () => getClientAdvantages(languageCode)
    );

    const {data: talentAdvantages, error: talentError} = useSWR(["/advantages/Talent", languageCode],
        () => getTalentAdvantages(languageCode)
    );
    const clientImage = clientAdvantages?.data?.image;

    const talentImage = talentAdvantages?.data?.image;

    const imageSrc = selectedRole === "Client" ? clientImage : talentImage;
    const advantages =
        selectedRole === "Client"
            ? clientAdvantages?.data?.advantages
            : talentAdvantages?.data?.advantages;

    const handleSwitcherClick = (role: "Client" | "Talent") => {
        setSelectedRole(role);
    };

    const handleArrowClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    if (clientError) return <div>Error loading client advantages</div>;
    if (talentError) return <div>Error loading talent advantages</div>;

    if (!clientAdvantages && selectedRole === "Client")
        return <div></div>;
    if (!talentAdvantages && selectedRole === "Talent")
        return <div>Loading Talent Advantages...</div>;

    return (
        <>
            <div
                id={"advantages"}
                className="flex flex-col items-center  pb-6   sm:h-[900px] lg:max-h-[525px] 2xl:max-h-[623px] 2xl:justify-between 2xl:pb-0 -mt-[85px]  sm:-mt-[60px] lg:mt-0 2xl:mt-[110px] max-w-[1444px] mx-auto"
            >
                <div
                    className="flex text-center 2xl:-translate-x-1 sm:text-start max-w-[326px] max-h-[60px] sm:max-w-fit mx-auto flex-col sm:items-end">
                    <div className="flex sm:items-center ">
                        <div
                            className="sm:w-[14px] w-[10px] h-[10px] sm:h-[14px] mt-2 sm:mt-0 rounded-[3px] bg-[#C0D724]"/>
                        <h1 className="uppercase max-w-[250px] ml-0 md:ml-[10px] sm:max-w-[578px] lg:max-w-fit text-[20px] sm:text-[25px] lg:text-[30px] font-extrabold">
                            {t("advantagesOf")}
                        </h1>
                    </div>
                    <div
                        className="self-end max-w-[95px] sm:mx-0 -translate-x-1/2 sm:-translate-x-0 sm:max-w-[162px] w-full h-[5px] bg-[#C0D724] rounded-[19px]"/>
                </div>

                <AdvantageInnerSection
                    selectedRole={selectedRole}
                    onSelect={handleSwitcherClick}
                    activeIndex={activeIndex}
                    onClick={handleArrowClick}
                    advantages={advantages}
                    imageSrc={imageSrc ?? "/images/no-images.png"}
                />
            </div>
        </>
    );
};

export default AdvantagesOfThePlatform;
