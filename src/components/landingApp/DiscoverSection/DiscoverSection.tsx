'use client';
import useSWR from 'swr';
import {useRef} from 'react';
import {usePathname} from 'next/navigation';
import {DiscoverCard} from '@/components/landingApp/DiscoverSection/DiscoverCard';
import {RowIconLeft} from '../../../../public/icons/talent-client/RowIconLeft';
import {getCategories} from '@/lib/api/categoriesApi/categoriesApi';
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {useTranslations} from 'next-intl';
import type {Swiper as SwiperType} from 'swiper';

export const DiscoverSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const pathname = usePathname();
    const languageCode = pathname.split('/')[1];
    const {data, error} = useSWR(['/category', languageCode], () =>
        getCategories(languageCode)
    );
    const t = useTranslations('HomePage');

    if (error) return <div>Error loading categories.</div>;
    if (!data) return <div></div>;

    const {categories} = data?.data;

    return (
        <div className="mt-[80px] lg:mt-[80px] 2xl:mt-[125px] max-w-[1444px] mx-auto">
            <div className="max-w-[100px] sm:max-w-[180px] mx-auto flex flex-col items-end">
                <div className="flex items-center gap-[14px]">
                    <div className="w-[14px] h-[14px] rounded-[3px] bg-[#C0D724]"/>
                    <h1 className="uppercase text-[16px] sm:text-[26px] lg:text-[30px] font-extrabold">
                        {t('discover')}
                    </h1>
                </div>
                <div className="max-w-[70px] lg:max-w-[79px] w-full h-[5px] bg-[#C0D724] rounded-[19px]"/>
            </div>

            <div
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                className="mt-[50px] lg:mt-[50px] 2xl:mt-[70px] pb-10 "
            >
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        410: {
                            slidesPerView: 1.7,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        560: {
                            slidesPerView: 3,
                        },
                        860: {
                            slidesPerView: 3.3,
                        },
                        1440: {
                            slidesPerView: 5,
                        },
                        1500: {
                            slidesPerView: 6,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <DiscoverCard
                                imgSrc={category.translation.image}
                                description={category.translation.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="gap-6 max-w-[96px] sm:max-w-[150px] mx-auto mt-5 lg:mt-[30px] hidden lg:flex">
                    <button
                        className="w-10 h-10 sm:w-[63px] px-2 py-2 sm:h-[63px] sm:px-0 sm:py-0 bg-white rounded-full flex items-center justify-center"
                        onClick={() => {
                            swiperRef.current?.slidePrev();
                        }}
                    >
                        <RowIconLeft/>
                    </button>

                    <button
                        className="w-10 h-10 sm:w-[63px] sm:h-[63px] px-2 py-2 sm:px-0 sm:py-0 bg-white rounded-full flex items-center justify-center rotate-180"
                        onClick={() => {
                            swiperRef.current?.slideNext();
                        }}
                    >
                        <RowIconLeft/>
                    </button>
                </div>
            </div>
        </div>
    );
};
