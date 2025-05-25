'use client';
import useSWR from 'swr';
import Image from 'next/image';
import { EffectFade } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Search } from '@/shared/widgets/Search';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayIcon } from '../../../../public/icons/talent-client/PlayIcon';
import { Autoplay } from 'swiper/modules';

import {
    getHomePageData,
    HomePageSlider,
} from '@/lib/api/homeSectionApi/homeSectionApi';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export const HeroSection = () => {

    const swiperRef = useRef<SwiperType | null>(null);

    const t = useTranslations('HomePage');
    const pathname = usePathname();
    const languageCode = pathname.split('/')[1];
    const { data, error } = useSWR(['/home', languageCode], () =>
        getHomePageData(languageCode)
    );
    const [activeSlide, setActiveSlide] = useState<HomePageSlider | undefined>(
        undefined
    );

    useEffect(() => {
        if (data?.data?.homePageSlider?.length) {
            setActiveSlide(data?.data?.homePageSlider[0]);
        }
    }, [data]);

    if (error) return <div></div>;
    if (!data || !data.data) return <div></div>;

    const { translation, homePageSlider } = data?.data;

    console.log(activeSlide, "activeSlide");


    return (
        <div className=" relative">
            <div className=" max-w-[1441px] mx-auto mt-[20px] relative">
                {/* <Image
          src={"/NeedDone.png"}
          width={608}
          height={191}
          alt=""
          className=" hidden md:block absolute left-[3%] top-[6%] z-30 xl:max-w-[472px] 2xl:max-w-[567px] w-full sm:max-w-[299px]"
        /> */}
                <svg
                    width="568"
                    height="191"
                    viewBox="0 0 568 191"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block absolute left-[3%] lg:top-[6%] z-30 xl:max-w-[472px] 2xl:max-w-[567px] w-full sm:max-w-[299px]"
                >
                    <defs>
                        <clipPath id="bgblur_clip" transform="translate(80.4 80.4)">
                            <path
                                d="M0 28C0 12.536 12.536 0 28 0H539.5C554.964 0 567.5 12.536 567.5 28V86.7992C567.5 92.4661 565.781 97.9996 562.569 102.668L510.149 178.869C504.925 186.463 496.298 191 487.081 191H28C12.536 191 0 178.464 0 163V28Z" />
                        </clipPath>
                    </defs>
                    <foreignObject x="-80.4" y="-80.4" width="728.3" height="351.8">
                        <svg
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                                backdropFilter: 'blur(40.2px)',
                                WebkitBackdropFilter: 'blur(40.2px)', // for Safari
                                clipPath: 'url(#bgblur_clip)',
                                height: '100%',
                                width: '100%',
                            }}
                        ></svg>
                    </foreignObject>
                    <path
                        data-figma-bg-blur-radius="80.4"
                        d="M0 28C0 12.536 12.536 0 28 0H539.5C554.964 0 567.5 12.536 567.5 28V86.7992C567.5 92.4661 565.781 97.9996 562.569 102.668L510.149 178.869C504.925 186.463 496.298 191 487.081 191H28C12.536 191 0 178.464 0 163V28Z"
                        fill="#6C6C6C"
                        fillOpacity="0.06"
                    />
                </svg>
                {/*<div*/}
                {/*    className="absolute left-[5%] top-[14%] sm:mt-[1%] lg:top-[16%] xl:top-[10%] z-40 text-white ">*/}
                {/*    <div*/}
                {/*        className="hidden md:block  prose max-w-none  text-white [&>*]:text-inherit "*/}
                {/*        dangerouslySetInnerHTML={{__html: translation?.title1}}*/}
                {/*    />*/}
                {/*    <div*/}
                {/*        className=" hidden md:block prose max-w-none "*/}
                {/*        dangerouslySetInnerHTML={{__html: translation?.title2}}*/}
                {/*    />*/}
                {/*</div>*/}
                <div
                    className="absolute left-[5%] top-[14%] sm:mt-[1%] lg:top-[16%] xl:top-[10%] z-40 text-white"
                >
                    <div
                        className="hidden md:block ql-editor prose max-w-none text-white [&_*]:text-white"
                        dangerouslySetInnerHTML={{ __html: translation?.title1 }}
                    />
                    <div
                        className="hidden md:block ql-editor prose max-w-none text-white [&_*]:text-white"
                        dangerouslySetInnerHTML={{ __html: translation?.title2 }}
                    />
                </div>

                <div className="absolute z-30 right-[4%] top-[17%] hidden md:block ">
                    <svg
                        width="497"
                        height="145"
                        viewBox="0 0 497 145"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" hidden md:block  z-30 2xl:max-w-[496px] w-full xl:max-w-[413px] sm:max-w-[289px]"
                    >
                        <defs>
                            <clipPath id="bgblur_clip_2" transform="translate(79.9 80.4)">
                                <path
                                    d="M497 117C497 132.464 484.464 145 469 145H28.5C13.036 145 0.5 132.464 0.5 117V83.3061C0.5 76.352 3.08777 69.6467 7.75952 64.4956L57.9189 9.18956C63.2264 3.33754 70.7591 0 78.6594 0H469C484.464 0 497 12.536 497 28V117Z" />
                            </clipPath>
                        </defs>

                        <foreignObject x="-79.9" y="-80.4" width="657.3" height="305.8">
                            <svg
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                    backdropFilter: 'blur(40.2px)',
                                    WebkitBackdropFilter: 'blur(40.2px)',
                                    clipPath: 'url(#bgblur_clip_2)',
                                    height: '100%',
                                    width: '100%',
                                }}
                            ></svg>
                        </foreignObject>

                        <path
                            data-figma-bg-blur-radius="80.4"
                            d="M497 117C497 132.464 484.464 145 469 145H28.5C13.036 145 0.5 132.464 0.5 117V83.3061C0.5 76.352 3.08777 69.6467 7.75952 64.4956L57.9189 9.18956C63.2264 3.33754 70.7591 0 78.6594 0H469C484.464 0 497 12.536 497 28V117Z"
                            fill="#6C6C6C"
                            fillOpacity="0.06"
                        />
                    </svg>

                    <div
                        className="absolute left-[15%] top-[15%] z-40 text-white text-xl md:text-2xl font-bold pt-5 md:pt-3">
                        <div
                            className="hidden md:block ql-editor prose max-w-none text-white [&_*]:text-white leading-[20px] xl:leading-[31px]"
                            dangerouslySetInnerHTML={{ __html: translation?.title3 }}
                        />
                    </div>

                    <div
                        className="  justify-end gap-[10px] hidden sm:flex -translate-y-[54px] lg:-translate-y-[27px] cursor-pointer 2xl:-translate-x-10">
                        <Link href={'auth/signup'} className=" w-full max-w-[222px]">
                            <div
                                className=" hidden  max-w-[175px] text-xs lg:text-base lg:max-w-[222px] w-full h-[40px] lg:h-[51px] rounded-[40px] bg-[#CBEC5E]  hover:bg-[#b5d354] sm:flex items-center justify-center">
                                <p className="text-[#18470D]">{t('hero.contractBtn')}</p>
                            </div>
                        </Link>
                        <Link href={'#video'}>
                            <div
                                className=" bg-[#E0E0E0] sm:bg-white w-[40px] h-[40px] lg:w-[51px] lg:h-[51px] rounded-full flex items-center justify-center ">
                                <PlayIcon />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="  hidden sm:block">
                    <div
                        className=" md:h-[46px] z-10 drop-shadow-sm max-w-[207px] lg:max-w-[355px] w-full h-10 lg:h-[52px] 2xl:h-[62px] text-black rounded-[61px] absolute left-1/2 -translate-x-1/2 bg-white bottom-0 sm:translate-y-5 lg:translate-y-0  sm:bottom-3 xl:bottom-[10px] flex items-center justify-center">
                        <p className=" uppercase text-[12px] sm:text-[20px] font-extrabold">
                            {activeSlide?.title}
                        </p>
                    </div>
                    <div
                        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                    >
                        <Swiper
                            slidesPerView={1}
                            className="2xl:rounded-[45px]"
                            spaceBetween={0}
                            modules={[EffectFade, Autoplay]}
                            loop={true}
                            speed={1100}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveSlide(homePageSlider[swiper.activeIndex]);
                            }}
                        >
                            {homePageSlider.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <svg
                                        width="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 1441 716"
                                        fill="none"
                                        className="overflow-hidden object-contain"
                                    >
                                        <mask
                                            id={`mask_${slide.id}`}
                                            style={{ maskType: 'luminance' }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="1441"
                                            height="716"
                                        >
                                            <path
                                                d="M0 50C0 22.3858 22.3858 0 50 0H722.188H1390.04C1417.65 0 1440.04 22.3858 1440.04 50V665.682C1440.04 693.296 1417.65 715.682 1390.04 715.682H1157.28C1107.36 715.682 1057.58 710.491 1008.73 700.192L804.515 657.134C750.227 645.688 694.149 645.688 639.862 657.134L435.644 700.192C386.799 710.491 337.016 715.682 287.098 715.682H49.9999C22.3857 715.682 0 693.296 0 665.682V50Z"
                                                fill="white"
                                            />
                                        </mask>

                                        <g mask={`url(#mask_${slide.id})`}>
                                            <image
                                                xlinkHref={slide.image}
                                                x="0"
                                                y="0"
                                                width="1441"
                                                height="716"
                                                className="w-full h-auto max-w-none"
                                                style={{ width: '100%', minWidth: '1444px' }}
                                                preserveAspectRatio="xMidYMid meet"
                                            />
                                        </g>
                                    </svg>

                                    {/*<Image src={slide.image} alt={"icon"} width={0} height={0} sizes={"100vw"} className={"w-full aspect-video mask object-cover"}  />*/}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="  block sm:hidden">
                    <div
                        className=" z-30 drop-shadow-xl max-w-[207px] sm:max-w-[355px] w-full h-10 sm:h-[62px] text-black rounded-[61px] absolute left-1/2 translate-y-3 -translate-x-1/2 bg-white bottom-0  sm:bottom-3 xl:bottom-8 flex items-center justify-center">
                        <p className=" uppercase text-[12px] sm:text-[20px] font-extrabold">
                            {activeSlide?.title}
                        </p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        className=""
                        spaceBetween={0}
                        modules={[EffectFade, Autoplay]}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={(swiper) => {
                            setActiveSlide(homePageSlider[swiper.activeIndex]);
                        }}
                    >
                        {homePageSlider.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Image
                                    src={slide.image}
                                    width={335}
                                    height={285}
                                    alt=""
                                    className=" mx-auto h-[285px] object-cover rounded-[22px]"
                                />
                                {/*<Image src={slide.image} alt={"icon"} width={0} height={0} sizes={"100vw"} className={"w-full aspect-video mask object-cover"}  />*/}
                            </SwiperSlide>
                        ))}

                        <div
                            className="absolute block bottom-12 sm:bottom-28 md:bottom-24 xl:bottom-32 z-40 left-1/2 -translate-x-1/2 w-full max-w-[459px] xl:max-w-[555px]">
                            <div className=" hidden md:block">
                                <Search />
                            </div>

                            {/* <div className=" flex space-x-[7px] mt-4 justify-center ">
              <div className=" w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] 2xl:w-[11px] 2xl:h-[11px] rounded-full bg-[#D0FF00]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
            </div> */}
                        </div>
                    </Swiper>
                </div>
            </div>
            <div
                className="absolute block bottom-12 sm:bottom-28 md:bottom-16 lg:bottom-24 xl:bottom-[102px] z-40 left-1/2 -translate-x-1/2 w-full max-w-[459px] 2xl:max-w-[555px]">
                <div className=" hidden md:block">
                    <Search />
                </div>

                {/* <div className=" flex space-x-[7px] mt-4 justify-center ">
              <div className=" w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] 2xl:w-[11px] 2xl:h-[11px] rounded-full bg-[#D0FF00]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
              <div className="  w-[7px] h-[7px] sm:w-[9px] sm:h-[9px]  rounded-full 2xl:w-[11px] 2xl:h-[11px] bg-[#8E9A57]" />
            </div> */}
            </div>


            <div className="mt-[36px] block relative sm:hidden">
                <div className=" relative ">
                    <Image
                      src={'/images/all-images/needDoneMobile1.png'}
                        width={299}
                        height={107}
                        alt="Need Done Mobile"
                        className="mx-auto"
                    />
                    <div
                        className="absolute left-[15%] xx:left-[23%] gx:left-1/2 gx:-translate-x-1/2 top-[12%] z-40 text-white text-xl md:text-2xl font-bold leading-61px ">
                        <div
                            className=" ql-editor prose max-w-none text-white [&_*]:text-white leading-[30px]"

                            dangerouslySetInnerHTML={{ __html: translation?.title1 }}
                        />
                        <div
                            className=" ql-editor prose max-w-none text-white [&_*]:text-white leading-[30px]"
                            dangerouslySetInnerHTML={{ __html: translation?.title2 }}
                        />
                    </div>

                </div>
                <div className=" relative ">
                    <Image
                        src={'/images/all-images/handleMobile1.png'}
                        width={289}
                        height={107}
                        alt="Handle Mobile"
                        className="mx-auto mt-3"
                    />

                    <div
                        className=" -translate-y-[20px] absolute left-1/2 -translate-x-[43%]   justify-end gap-[10px] flex  lg:-translate-y-[27px] cursor-pointer 2xl:-translate-x-10">
                        <Link href={'auth/signup'}>
                            <div
                                className="   flex  w-[175px] text-[13px] font-medium  lg:text-base lg:max-w-[222px]  h-[40px] lg:h-[51px] rounded-[40px] bg-[#CBEC5E]  hover:bg-[#b5d354] sm:flex items-center justify-center">
                                <p className="text-[#18470D]">{t('hero.contractBtn')}</p>
                            </div>
                        </Link>
                        <Link href={'#video'}>
                            <div
                                className=" bg-[#E0E0E0] sm:bg-white w-[40px] h-[40px] lg:w-[51px] lg:h-[51px] rounded-full flex items-center justify-center ">
                                <PlayIcon />
                            </div>
                        </Link>
                    </div>

                    <div
                        className="absolute  left-[25%] xx:left-[31%] gx:left-1/2 gx:-translate-x-1/2 top-[20%] z-40 text-white text-xl md:text-2xl font-bold">
                        <div
                            className="ql-editor prose max-w-none text-white [&_*]:text-white leading-[30px]"
                            dangerouslySetInnerHTML={{ __html: translation?.title3 }}
                        />

                    </div>
                </div>
                <div className="mt-14">
                    <Search />
                </div>
            </div>
        </div>
    );
};
