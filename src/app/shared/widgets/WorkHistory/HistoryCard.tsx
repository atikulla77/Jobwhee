import React from "react";

import Image from "next/image";
import StarRating from "@/shared/ui-kit/StarRating";

const HistoryCard = ({history}: { history: any }) => {
    return (
        <section
            className={`mt-[12px] flex min-h-[197px] w-full items-start justify-between pb-[16px] sm:pb-0 `}
        >
            <div className={`flex w-[303px] sm:w-[559px] flex-col`}>
                <h2 className={`text-[14px] sm:text-[20px] font-medium text-[#18470D]`}>
                    Algebra Tutoring for High School Student
                </h2>
                <div
                    className={`mt-[8px] sm:flex sm:w-[356px] items-center justify-between gap-[10px]`}
                >
                    <div
                        className={` flex h-[24px] w-[134px] items-center justify-between  2xl:w-[124px] `}
                    >
                        <StarRating rating={history.rating}/>
                        <p
                            className={`flex items-center justify-center text-[18px]`}
                        >
                            {history?.rating.toFixed(1)}
                        </p>
                    </div>
                    <p
                        className={`flex h-[24px] w-[219px] whitespace-nowrap sm:border-l border-[#545454] sm:pl-[10px] text-[#545454]`}
                    >
                        {history.startDate} <span className="mx-1">-</span>
                        {history.endDate}
                    </p>
                </div>
                <article className={`mt-[21px] text-[#545454]`}>
                    {history.description}
                </article>
                <div
                    className={`mt-[10px] flex w-[160px] items-center justify-start gap-[10px]`}
                >
                    <p className={`border-r border-[#000000] pr-[10px] text-[#000000]`}>
                        $
                        {history.budget.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </p>
                    <p className={`text-[#000000] text-nowrap`}>{history.hours} hours</p>
                </div>
            </div>
            <div className={`flex h-[24px] w-[24px] items-center justify-center`}>
                <Image
                    src={"/images/icon-images/folderIcon.png"}
                    alt={"folderIcon"}
                    width={19}
                    height={15}
                />
            </div>
        </section>
    );
};
export default HistoryCard;
