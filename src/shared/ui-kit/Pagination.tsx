"use client";
import React from "react";
import Image from "next/image";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   onNext,
                                                   onPrev,
                                               }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-[24px] flex h-[28px] w-[125px] items-center justify-between">
            <button onClick={onPrev} disabled={currentPage === 1}>
                <Image
                    src={
                        currentPage === 1
                            ? "/images/icon-images/greyArrowIcon.png"
                            : "/images/icon-images/arrowGreenIcon.png"
                    }
                    alt="Previous Page"
                    width={28}
                    height={28}
                    className={`transition-transform ${
                        currentPage === 1 ? "opacity-50" : "rotate-180"
                    }`}
                />
            </button>
            <p className="text-[18.51px] font-medium leading-[27.76] text-[#1C2434]">
                {currentPage} - {totalPages}
            </p>

            <button onClick={onNext} disabled={currentPage === totalPages}>
                <Image
                    src={
                        currentPage === totalPages
                            ? "/images/icon-images/greyArrowIcon.png"
                            : "/images/icon-images/arrowGreenIcon.png"
                    }
                    alt="Next Page"
                    width={28}
                    height={28}
                    className={`transition-transform ${
                        currentPage === totalPages ? "rotate-180 opacity-50" : ""
                    }`}
                />
            </button>
        </div>
    );
};

export default Pagination;
