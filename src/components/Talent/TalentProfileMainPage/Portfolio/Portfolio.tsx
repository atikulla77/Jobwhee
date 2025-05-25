import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PortfolioCard from "./PortfolioCard";
import Pagination from "@/shared/ui-kit/Pagination";
import {PortfolioEditPopUp} from "./PortfolioEditPopUp";
import React, {useEffect, useRef, useState} from "react";
import {useTalentProfile} from "../hooks/useTalentProfile";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Pagination as SwiperPagination} from "swiper/modules";
import {PlusIcons} from "../../../../../public/icons/PlusIcons";
import {OrderIcon} from "../../../../../public/icons/OrderIcon";
import {deletePortfolio} from "@/lib/api/talent/portfolio/portfolioApi";
import {PortfolioWorksPopup, UIReorderPortfolio} from "./PortfolioWorksPopup";
import {UniversalPopup} from "@/shared/widgets/UniversalPopup/UniversalPopup";
import {InfoSectionGreen} from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import {reorderPortfolios} from "@/lib/api/talent/portfolio/reorderPortfolioApi";
import {usePortfoliosByStatus} from "@/components/Talent/TalentProfileMainPage/hooks/usePortfoliosByStatus";
import {changePortfolioStatus} from "@/components/Talent/TalentProfileMainPage/hooks/useMovePortfolioToDraft";


const Portfolio = ({isViewedClient}: { isViewedClient: boolean }) => {
    const swiperRef = useRef<SwiperRef>(null);
    const {user} = useTalentProfile();
    const [currentPage, setCurrentPage] = useState(1);
    const [showPortfolioWorks, setShowPortfolioWorks] = useState(false);
    const [isPortfolioEditActive, setPortfolioEditActive] = useState(false);
    const [editPortfolioData, setEditPortfolioData] = useState<any>(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [portfolioToDelete, setPortfolioToDelete] = useState<number | null>(null);
    const [portfolioType, setPortfolioType] = useState<"publish" | "draft">("publish");
    const {portfolios, mutatePortfoliosByStatus} = usePortfoliosByStatus(portfolioType);
    const [reorderPortfoliosSequence, setReorderPortfoliosSequence] = useState<UIReorderPortfolio []>([]);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        if (showPortfolioWorks && portfolios) {
            const sorted = [...portfolios].sort((a, b) => a.order - b.order);
            setReorderPortfoliosSequence(
                sorted.map((portfolio) => ({
                    id: String(portfolio.id),
                    url: portfolio.mainImage || "",
                    text: portfolio.title || "",
                }))
            );
        }
    }, [showPortfolioWorks, portfolios]);

    const handlePortfolioEdit = () => {
        setPortfolioEditActive(!isPortfolioEditActive);
    };
    const handleConfirmDelete = async () => {
        if (portfolioToDelete !== null) {
            try {
                await deletePortfolio(portfolioToDelete);
                await mutatePortfoliosByStatus();
                setDeleteModalOpen(false);
                setPortfolioToDelete(null);
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }
    };
    const handleChangePortfolioStatus = async (portfolioId: number, toDraft: boolean) => {
        await changePortfolioStatus(portfolioId, toDraft, mutatePortfoliosByStatus);
    };

    const handleSavePortfolioOrder = async () => {
        try {
            const payload = reorderPortfoliosSequence.map((item, index) => ({
                id: Number(item.id),
                order: index + 1,
            }));
            await reorderPortfolios(payload);
            await mutatePortfoliosByStatus();
            setShowPortfolioWorks(false);
        } catch (error) {
            console.error("Reorder failed:", error);
        }
    };
    return (
        <InfoSectionGreen title="Portfolio" sectionStyles="mt-[43px] flex relative h-fit min-h-[277px] flex-col"
                          lineWidth=" w-[13%] ">
            <div className={`mt-[32px] `}>

                {!isViewedClient && (user?.portfolios?.length ?? 0) > 0 && (
                    <div
                        className="absolute right-[88px] top-[12px] z-10 cursor-pointer"
                        onClick={() => setShowPortfolioWorks(true)}
                    >
                        <OrderIcon/>
                    </div>
                )}

                {!isViewedClient && (
                    <div
                        onClick={() => handlePortfolioEdit()}
                        className="absolute right-[42px] top-[12px] z-10 cursor-pointer"
                    >
                        <PlusIcons/>
                    </div>
                )}

                {isPortfolioEditActive && (
                    <PortfolioEditPopUp
                        closePopup={() => {
                            setPortfolioEditActive(false);
                            setEditPortfolioData(null);
                        }}
                        initialData={editPortfolioData}
                        portfolioType={portfolioType}/>
                )}
                {showPortfolioWorks && (
                    <PortfolioWorksPopup
                        works={reorderPortfoliosSequence}
                        setWorks={setReorderPortfoliosSequence}
                        closePopup={() => setShowPortfolioWorks(false)}
                        onSave={handleSavePortfolioOrder}
                    />
                )}

                <div
                    className={` mb-[18px] sm:mb-[71px] mt-[14px] flex w-full flex-col  gap-[16px] `}
                >
                    <div className={`flex w-full  items-center justify-between`}>
                        <h2
                            className={` text-[16px] sm:text-[30px] font-medium leading-[100%] text-[#000000]`}
                        >
                            Portfolio
                        </h2>
                        {!isViewedClient && (<div
                            className={`flex items-center justify-between gap-1 sm:gap-2.5`}
                        >
                            <button
                                onClick={() => setPortfolioType("publish")}
                                className={` ${
                                    portfolioType === "publish" ? "text-[#18470D] bg-[#EEF6DB] hover:bg-[#D9E9B8]  " : " hover:bg-gray-100"
                                } h-[42px] w-[111px] rounded-[30px] text-[14px] 2xl:text-[20px] font-medium leading-3   mt-[16px] sm:mt-0`}
                            >
                                Published
                            </button>
                            <button
                                onClick={() => setPortfolioType("draft")}
                                className={`  ${
                                    portfolioType === "draft" ? "text-[#18470D] bg-[#EEF6DB] hover:bg-[#D9E9B8] " : "hover:bg-gray-100"
                                } text-[#545454 font-medium]  h-[42px] text-[14px] rounded-[30px] sm:text-[16px] flex 2xl:text-[20px]  w-[111px]  items-center justify-center  mt-[16px] sm:mt-0`}
                            >
                                Draft
                            </button>
                        </div>)}

                    </div>
                </div>
            </div>
            {user && (portfolios?.length ?? 0) > 0 && (
                <div className={`flex h-[200px] w-full items-center justify-between`}>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        pagination={{clickable: true}}
                        modules={[SwiperPagination]}
                        breakpoints={{
                            375: {slidesPerView: 1},
                            768: {slidesPerView: 2},
                            800: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                            1150: {slidesPerView: 4},
                            1600: {slidesPerView: 5},
                        }}
                        watchOverflow={true}
                        onSwiper={(swiperInstance) => {
                            const perView = swiperInstance.slidesPerViewDynamic();
                            const pages = Math.ceil((portfolios?.length ?? 0) / perView);
                            setTotalPages(pages);
                        }}
                        onSlideChange={(swiper) => {
                            const activeIndex = swiper.activeIndex;
                            const perView = swiper.slidesPerViewDynamic();
                            const total = Math.ceil((portfolios?.length ?? 0) / perView);
                            const pageNumber = Math.min(Math.ceil((activeIndex + 1) / perView), total);
                            setCurrentPage(pageNumber);
                            setTotalPages(total);

                            const pages = Math.ceil((portfolios?.length ?? 0) / perView);
                            setTotalPages(pages);
                        }}
                        className=""
                    >
                        {(portfolios?.length ?? 0) > 0 ? (
                            [...(portfolios ?? [])].sort((a, b) => a.order - b.order).map((portfolio: any, index: any) => (
                                <SwiperSlide key={index} className="">
                                    <PortfolioCard
                                        isDraft={portfolio?.isDraft}
                                        onMoveToDraft={() =>
                                            handleChangePortfolioStatus(portfolio.id, !portfolio.isDraft)}
                                        isViewedClient={isViewedClient}
                                        imageSrc={portfolio?.mainImage}
                                        description={portfolio?.title}
                                        onEdit={() => {
                                            setEditPortfolioData(portfolio);
                                            setPortfolioEditActive(true);
                                        }}
                                        onDelete={() => {
                                            setPortfolioToDelete(portfolio.id);
                                            setDeleteModalOpen(true);
                                        }}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="flex flex-col mx-auto">
                                <Image
                                    src={"/images/profile/portfolio.png"}
                                    alt={"Education"}
                                    width={159}
                                    height={159}
                                />
                                <p className="mt-4 text-center text-gray-500">
                                    No portfolio work yet
                                </p>
                            </div>
                        )}
                    </Swiper>
                </div>
            )}
            {(portfolios?.length ?? 0) > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={() => {
                        if (swiperRef.current) {
                            const swiper = swiperRef.current.swiper;
                            const perView = swiper.slidesPerViewDynamic();
                            const nextIndex = swiper.activeIndex + perView;
                            const maxIndex = Math.max((portfolios?.length ?? 0) - perView, 0);
                            swiper.slideTo(Math.min(nextIndex, maxIndex));
                        }
                    }}
                    onPrev={() => {
                        if (swiperRef.current) {
                            const swiper = swiperRef.current.swiper;
                            const perView = swiper.slidesPerViewDynamic();
                            const prevIndex = Math.max(swiper.activeIndex - perView, 0);
                            swiper.slideTo(prevIndex);
                        }
                    }}
                />


            )}
            {isDeleteModalOpen && <UniversalPopup
                imageSrc="/images/profile/deleteProfile/deletePortfolio.png"
                heading="Delete Portfolio"
                description="Deleting this portfolio item will remove it from your profile permanently."
                cancelText="Cancel"
                confirmText="Yes, Delete"
                onCancel={() => {
                    setDeleteModalOpen(false)
                }}
                onConfirm={handleConfirmDelete}
                descriptionWidth="405px"
            />}

        </InfoSectionGreen>
    );
};
export default Portfolio;
