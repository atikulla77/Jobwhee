import React from 'react';
import Image from 'next/image';

interface StepsOfSuccessCardType {
    number: number,
    title: string,
    subtitle: string,
    imgSrc: string,
}

const StepsOfSuccessCard: React.FC<StepsOfSuccessCardType> = ({number, title, subtitle, imgSrc}) => {
    return (
        <div
            className=" cursor-pointer flex flex-col justify-between min-w-[229px] w-[230px] h-[320px] 2xl:w-[276px]  2xl:h-[384px] relative rounded-[38px] bg-[#FFFFFF] px-3">
            <div className="relative w-[59.81px] h-[59.81px]  2xl:w-[71.83px] 2xl:h-[71.83px] mt-5 ml-2">
                <Image
                    src="/images/steps/Polygon.png"
                    alt="Polygon"
                    width={71.83}
                    height={71.83}
                    className="w-full  h-full"
                />
                <h2 className="absolute inset-0 flex items-center justify-center font-poppins font-semibold text-[30.25px] leading-[45.37px] text-white">
                    {number}
                </h2>
            </div>
            <div
                className="max-h-[159px] min-h-[159px]  w-full flex justify-center items-center -translate-y-[20px]">
                <Image
                    src={imgSrc}
                    alt="steps"
                    width={185}
                    height={160}
                    style={{width: '80%', height: 'auto'}}
                    className='hover:scale-105 duration-300'
                />
            </div>
            <div className="-translate-y-[35px]  max-h-[110px] min-h-[110px] ">
                <div className="relative group w-fit mx-auto h-[38px]">
                    <h2 className="font-bold text-[18px] 2xl:text-[22px] leading-[38px] text-center">
                        {title?.length > 18 ? title.slice(0, 19) + '...' : title}
                    </h2>
                    {title?.length > 18 && (
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-auto min-w-[200px] 2xl:min-w-[225px] mt-1 bg-black text-white text-xs p-2 rounded-md max-w-[280px] shadow-lg z-[999] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                            {title}
                        </div>
                    )}
                </div>
                <div className="relative group w-fit mx-auto mt-2 h-[70px]">
                    <p className="font-normal text-[14px] 2xl:text-[16px] leading-[24px] text-center">
                        {subtitle?.length > 30 ? subtitle.slice(0, 51) + '...' : subtitle}
                    </p>
                    {subtitle?.length > 30 && (
                        <div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-auto min-w-[200px] 2xl:min-w-[225px] mt-1 bg-black text-white text-xs p-2 rounded-md max-w-[280px] shadow-lg z-[999] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                            {subtitle}
                        </div>
                    )}
                </div>
            </div>


            <div
                className="absolute  bottom-0 left-1/2 -translate-x-1/2 w-[80px] sm:w-[124px] 2xl:w-[161px] h-[7px] bg-[#CBEC5E] rounded-t-[500px]"/>
        </div>
    );
};

export default StepsOfSuccessCard;
