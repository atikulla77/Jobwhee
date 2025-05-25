"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import {GeoLocationIcon} from "../../../public/icons/GeoLocationIcon";
import {CameraIcon} from "../../../public/icons/CameraIcon";
import {ClockIcon} from "../../../public/icons/ClockIcon";
import {SecuredButton} from "../../../public/icons/SecuredButton";
import {StarIcon} from "../../../public/icons/talent-client/StarIcon";

interface Data {
    name: string;
    rating: string;
    utc: string;
    geoLocation: string;
    registrationDate: string;
    amount: string;
    postedJobs: number;
    hiredTalents: number;
    imgUrl: string;
}

interface ProfileHeaderProps {
    clientData: Data;
    setPopupOpened: (popupOpened: boolean) => void;
}

export const ClientProfileHeader: React.FC<ProfileHeaderProps> = ({
                                                                      clientData,
                                                                      setPopupOpened
                                                                  }) => {
    const [shortenedName, setShortenedName] = useState('');

    useEffect(() => {
        if (window.innerWidth <= 1440) {
            const nameParts = clientData.name.split(" ");
            if (nameParts.length > 1) {
                setShortenedName(`${nameParts[0]} ${nameParts[1][0]}.`);
            } else {
                setShortenedName(clientData.name);
            }
        } else {
            setShortenedName(clientData.name);
        }
    }, [clientData.name]);

    return (
        <div className="flex justify-center gap-x-[53px] lg:justify-between flex-wrap lg:flex-nowrap gap-y-[36px]">
            <div className="flex lg:gap-[30px] sm:gap-[15px] min-w-[331px] gap-[6px]">
                <div
                    className="2xl:w-[263px] 2xl:h-[263px] sm:w-[153px] sm:min-w-[153px] sm:h-[153px] min-w-[137px] h-[137px] relative rounded-full">
                    <Image
                        className="border-[#CBEC5E] border-[3px] 2xl:border-[5px] rounded-full w-[100%] h-[100%]"
                        src={clientData.imgUrl}
                        alt="client-avatar"
                        width={263}
                        height={263}
                    />
                    <div onClick={() => setPopupOpened(true)}
                         className="w-[36px] h-[36px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute lg:bottom-[3px] lg:left-[3px] 2xl:bottom-[21px] 2xl:left-[32px] sm:-bottom-[4px] sm:left-[6px] left-[9px] -bottom-[3px] cursor-pointer">
                        <div className="w-[18px] h-[18px]">
                            <CameraIcon/>
                        </div>
                    </div>
                    <div
                        className="2xl:w-[34px] 2xl:h-[34px] sm:w-[19px] sm:h-[19px] right-[18px] bottom-[6px] w-[17px] h-[17px] rounded-full border-[#CBEC5E] border-[1px] bg-white flex justify-center items-center absolute lg:right-[20px] lg:bottom-[6px] 2xl:bottom-[8px] 2xl:right-[37px] sm:right-[20px] sm:bottom-[6px]">
                        <div
                            className="2xl:w-[24px] 2xl:h-[24px] sm:w-[13px] sm:h-[13px] w-[12px] h-[12px] rounded-full bg-[#0EA200]"></div>
                    </div>
                </div>
                <div className="2xl:pt-[40px] sm:pt-[4px] pt-[13px]">
                    <div className="flex 2xl:gap-[13px] lg:gap-[6px] sm:gap-[8px] items-center">
                        <span className="lg:text-[44px] sm:text-[24px] text-[20px]">{shortenedName}</span>
                        <div className="lg:w-[40px] lg:h-[40px] w-[24px] h-[24px]">
                            <SecuredButton/>
                        </div>
                    </div>
                    <div
                        className={`flex flex-col lg:flex-row lg:text-[24px] text-[14px] text-[#64748B] gap-y-[4px] mt-[6px] gap-x-[6px]  font-medium`}
                    >
                        <div className="flex gap-[8px] lg:gap-[2px] items-center">
                            <div>
                                <GeoLocationIcon/>
                            </div>
                            <span>{clientData.geoLocation}</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <div>
                                <ClockIcon/>
                            </div>
                            <span>{clientData.utc}</span>
                        </div>
                    </div>
                    <div className="mt-[16px]">
                        <div
                            className="lg:w-[98px] w-[84px] h-[36px] flex gap-[7px] rounded-[64px] border-[1px] border-[#AEB3BC] justify-center items-center">
                            <div className="w-[23px] h-[23px]"><StarIcon/></div>
                            <span className={` font-medium text-[18px]`}>
                {clientData.rating}
              </span>
                        </div>
                    </div>
                    <div className="lg:mt-[8px] 2xl:mt-[25px] text-[#64748B] text-[16px] lg:text-[18px] mt-[5px]">
                        <span>In Jobwhee since {clientData.registrationDate}</span>
                    </div>
                </div>
            </div>
            <div className="2xl:pt-[45px] lg:pt-[8px]">
                <div className="flex justify-center lg:justify-end">
                    <button
                        className="w-[157px] h-[38px] lg:w-[200px] lg:h-[48px] sm:w-[146px] sm:h-[38px] rounded-[49px] bg-[#CBEC5E] text-[#18470D] text-[16px] cursor-pointer font-medium">
                        Profile Settings
                    </button>
                </div>
                <div className="flex 2xl:gap-[38px] lg:gap-[16px] gap-[13px] sm:mt-[23px] lg:mt-[60px] mt-[32px]">
                    <div
                        className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] w-[90px] h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
                        <div className="text-center">
                            <p
                                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold `}
                            >
                                {clientData.amount}
                            </p>
                            <p
                                className={`text-black text-[11px] lg:text-[14px] font-medium `}
                            >
                                Total Spent
                            </p>
                        </div>
                    </div>
                    <div
                        className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] w-[90px] h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
                        <div className="text-center">
                            <p
                                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold `}
                            >
                                {clientData.postedJobs}
                            </p>
                            <p
                                className={`text-black text-[11px] lg:text-[14px] font-medium `}
                            >
                                Posted Jobs
                            </p>
                        </div>
                    </div>
                    <div
                        className="lg:w-[106px] lg:h-[106px] 2xl:w-[100px] 2xl:h-[100px] w-[90px] h-[90px] rounded-full border-[1px] border-[#AEB3BC] flex justify-center items-center">
                        <div className="text-center">
                            <p
                                className={`text-[#18470D] text-[15px] lg:text-[18px] font-bold `}
                            >
                                {clientData.hiredTalents}
                            </p>
                            <p
                                className={`text-black text-[11px] lg:text-[14px] font-medium `}
                            >
                                Hired Talents
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
