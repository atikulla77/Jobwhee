import React from "react";
import Image from "next/image";
import SelectClientOrTalentBtn from "@/shared/widgets/SelectClientOrTalentBtn";

interface Advantage {
    id: number;
    title: string;
    text: string;
}

interface AdvantageInnerSectionProps {
    selectedRole: "Client" | "Talent";
    onSelect: (role: "Client" | "Talent") => void;
    activeIndex: number | null;
    onClick: (index: number) => void;
    advantages: Advantage[] | undefined;
    imageSrc: string;
}

const AdvantageInnerSection: React.FC<AdvantageInnerSectionProps> = ({
                                                                         selectedRole,
                                                                         onSelect,
                                                                         activeIndex,
                                                                         onClick,
                                                                         advantages,
                                                                         imageSrc,
                                                                     }) => {
    const isArrowActive = (index: number) => activeIndex === index;

    console.log("Advantages Data:", advantages);
    return (
        <section
            className="flex flex-col items-center  h-[532px]  sm:h-[766px]  w-full  lg:h-[1483px] lg:gap-5   lg:flex-row  lg:justify-between lg:items-end">
            {imageSrc && (
                <div
                    className=" relative flex mt-[30px] md:mt-[33px] lg:mt-0 lg:w-[650px] xl:w-[509px]  w-[335px] h-[223px] sm:h-[342px] sm:w-[520px] 2xl:h-[412px]  2xl:w-[628px] rounded-[34px]">
                    <Image
                        src={imageSrc || ""}
                        alt={"Advantage image"}
                        width={614}
                        height={398}
                        className=" lg:w-[650px] border-[7px] xl:w-[509px] border-[#FFFFFF]  w-[335px] lg:object-cover h-[212px] sm:h-[330px] sm:w-[510px] md:h-[342px] md:w-[520px] 2xl:h-[412px]  2xl:w-[628px] rounded-[34px]"
                    />
                    <div
                        className={
                            "absolute top-[8%] left-[65%] sm:left-[65%] md:left-[68%] flex justify-center items-center  w-[91.22] h-[24.54] sm:w-[142px] sm:h-[38.15px] 2xl:w-[171px] 2xl:h-[46px] bg-[#FFFFFF] bg-opacity-[53%] rounded-[37px]"
                        }
                    >
                        <Image
                            src={"/images/all-images/logoAdvantages.png"}
                            width={171}
                            height={46}
                            alt="Logo"
                            className="w-[91.22] h-[24.54] sm:w-[142px] sm:h-[38.15px] 2xl:w-[171px] 2xl:h-[46px]"
                        />
                    </div>
                </div>
            )}

            <div className="flex flex-col justify-end  w-[335px] sm:w-[530px] md:w-[588px]  2xl:w-[710px]  ">
                <div
                    className="flex  justify-end  mt-[47px] mb-[12px] sm:mt-[61px] sm:mb-[18px] xl:mt-[54px] xl:mb-[18px] 2xl:mt-[70px] 2xl:mb-[30px]">
                    <SelectClientOrTalentBtn
                        activeRole={selectedRole}
                        onSelect={onSelect}
                    />
                </div>
                <div
                    className=" flex flex-col self-center justify-between min-h-[190px] w-[335px] sm:w-[530px] md:h-[342px] md:w-full 2xl:h-[412px]  2xl:w-[710px] rounded-[34px]">
                    {(advantages ?? []).map((advantage, index) => (
                        <div
                            key={advantage.id}
                            className={`flex justify-between items-start ${
                                isArrowActive(index)
                                    ? "border-2 border-[#C1EC05] "
                                    : "border-2 border-[#EAEAEA]"
                            }  rounded-[14.15px] md:rounded-[24.88px] 2xl:rounded-[30px] px-[17px] py-[15px] md:p-[26px] 2xl:p-[32px] bg-[#FFFFFF]`}
                        >
                            <div className={"w-[238px] sm:w-[411px]"}>
                                <h2
                                    className={
                                        " w-full font-[500] text-[14px] md:text-[24px] 2xl:text-[30px]"
                                    }
                                >
                                    {advantage.title}
                                </h2>
                                {isArrowActive(index) && (
                                    <p
                                        className={
                                            "w-full font-normal text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] "
                                        }
                                    >
                                        {advantage.text}
                                    </p>
                                )}
                            </div>
                            <button title="Arrow" onClick={() => onClick(index)}>
                                <Image
                                    src={`${
                                        isArrowActive(index)
                                            ? "/images/all-images/arrowDownIcon.png"
                                            : "/images/all-images/arrowUpIcon.png"
                                    }`}
                                    alt={"Arrow Icon"}
                                    width={48}
                                    height={48}
                                    className={
                                        "w-[22.62px] h-[22.76px]  md:w-[39.75px] md:h-[39.75px]  2xl:w-[48px] 2xl:h-[48px]"
                                    }
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AdvantageInnerSection;
