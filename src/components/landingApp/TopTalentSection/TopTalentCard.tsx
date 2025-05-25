import Image from "next/image";
import {GreenCheck} from "../../../../public/icons/talent-client/GreenCheck";
import { BoldStarIcon } from "../../../../public/icons/talent-client/boldStarIcon";

interface TalentCardProps {
    cardInfo: {
        id: number;
        fullname: string;
        greeting: string;
        image: string;
        rating: number;
        isVerified: string;
        profession: string;
    };
}

export const TopTalentCard = ({cardInfo}: TalentCardProps) => {
    return (
        <div
            className="  max-w-[158px] hover:scale-110 duration-300 w-full h-[230px] cursor-pointer  px-[0px] sm:max-w-[183px] 2xl:max-w-[223px] 2xl:h-[276px] rounded-[16px] pt-[14px] 2xl:pt-[17px] xl:rounded-[20px] bg-white  drop-shadow-[#29415517] ">
            <div
                className=" 2xl:w-[113px] max-w-[92px] 2xl:h-[113px] h-[92px] rounded-full flex items-center justify-center bg-[#87A1C0] px-[3px]  py-[3px] mx-auto ">
                <Image
                    src={cardInfo.image}
                    width={113}
                    height={113}
                    alt=""
                    className=" rounded-full object-cover 2xl:max-w-[113px] max-w-[91px] sm:max-w-[94px] "
                />
            </div>
            <p className=" mt-[7px] text-sm sm:text-base 2xl:text-lg  font-semibold text-black text-center">
                {cardInfo.fullname}
            </p>
            <p className="text-[12px] 2xl:text-[14px] text-[#A5A5A5] text-center">
                {cardInfo.greeting}
            </p>

            <div
                className=" max-w-[51px] lg:max-w-[62px] h-[22px] lg:h-[26px] bg-[#F0F1F4] rounded-[47px] mt-1 mx-auto flex items-center justify-center gap-[2px]">
                <BoldStarIcon/>
                <p className=" text-[12px] font-bold">{cardInfo.rating}</p>
            </div>
            <div className=" flex items-start justify-center ml-[8px] 2xl:ml-0 mt-[7px] 2xl:mt-3p">
                <GreenCheck/>
                <p className=" text-[12px] text-[#487C27] font-semibold">
                    {cardInfo.isVerified}{" "}
                    <span className=" text-[12px] font-normal">
            {cardInfo.profession}
          </span>
                </p>
            </div>
        </div>
    );
};
