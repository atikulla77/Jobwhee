import { usePagination } from "@/utils/hooks/usePaginationHook";
import React, { FC, useEffect, useState } from "react";
import WorkHistoryCard from "./HistoryCard";
import Pagination from "@/shared/ui-kit/Pagination";
import Image from "next/image";

interface CardItem {
  title: string;
  rating: number;
  startDate: string;
  endDate: string;
  description: string;
  budget: number;
  hours: number;
}

interface HistoryCardProps {
  history: CardItem[];
  completedJobsTitle?: string;
  inProgressJobsTitle?: string;
  noJobsImageSrc?: string;
  noJobsText?: string;
  historyTitle: string;
}

const HistorySection: FC<HistoryCardProps> = ({
  history,
  completedJobsTitle,
  inProgressJobsTitle,
  noJobsImageSrc,
  noJobsText,
  historyTitle
}) => {
  const { currentPage, totalPages, currentItems, setCurrentPage } =
    usePagination(history);

  const [historyType, setHistoryType] = useState("completed");

  const handleChangeType = (type: string) => {
    setHistoryType(type);
  };

  return (
    <div>
      <div className={`mt-[32px]`}>
        <div
          className={` mb-[32px] sm:mb-[71px] mt-[14px] flex w-full flex-col  gap-[16px] `}
        >
          <div className={`sm:flex w-full  items-center justify-between`}>
            <h2
              className={` text-[16px] sm:text-[30px] font-medium leading-[100%] text-[#000000]`}
            >
              {historyTitle}
            </h2>
            <div
              className={`flex items-center justify-between gap-1 sm:gap-2.5`}
            >
              <button
                onClick={() => handleChangeType("completed")}
                className={` ${
                  historyType === "completed" ? "text-[#18470D] bg-[#EEF6DB] " : ""
                } h-[42px] w-[197px] rounded-[30px] text-[14px] 2xl:text-[20px] font-medium leading-3  2xl:w-[256px] mt-[16px] sm:mt-0`}
              >
                {completedJobsTitle || "Completed Jobs (24)"}
              </button>
              <button
                onClick={() => handleChangeType("progress")}
                className={`  ${
                  historyType === "progress" ? "text-[#18470D] bg-[#EEF6DB] " : ""
                } text-[#545454 font-medium]  h-[42px] text-[14px] rounded-[30px] sm:text-[16px] flex 2xl:text-[20px]  2xl:w-[186px]  items-center justify-center  mt-[16px] sm:mt-0`}
              >
                {inProgressJobsTitle || "In Progress (6)"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {historyType === "completed" ? (
        <>
          {currentItems.length > 0 ? (
            currentItems.map((work, index) => (
              <WorkHistoryCard key={index} history={work} />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center mx-auto">
              <Image
                src={
                  noJobsImageSrc ||
                  "/images/profile/professional-experience.png"
                }
                alt={"Experience"}
                width={204}
                height={153}
              />
              <p className="font-medium text-[20px] text-center mx-auto text-[#000000]">
                {noJobsText || "No working experience yet"}
              </p>
            </div>
          )}
        </>
      ) : (
        <p>type</p>
      )}
      {(history.length > 0 && totalPages >= 2) && (
        <div className="border-t border-[#AEB3BC]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </div>
      )}
    </div>
  );
};

export default HistorySection;
