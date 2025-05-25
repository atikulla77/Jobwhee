'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface UniversalPopupProps {
    imageSrc: string;
    heading: string;
    description: string;
    cancelText: string;
    confirmText: string;
    onCancel: () => void;
    onConfirm: () => void;
    descriptionWidth?: string;
}

export const UniversalPopup: React.FC<UniversalPopupProps> = ({
    imageSrc,
    heading,
    description,
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    descriptionWidth
}) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onCancel();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onCancel]);

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center w-full h-screen">
            <div
                ref={popupRef}
                className="bg-white h-[414px] rounded-[20px] px-[20px]   py-[29px] sm:py-[16px]   w-full max-w-[335px] sm:h-[390px] md:h-[390px] lg:h-[390px] sm:max-w-[596px] md:max-w-[596px] lg:max-w-[636px] text-center shadow-lg"
            >
                <div className="  h-[120px] w-[120px]  mx-auto sm:mt-[34px]">
                    <Image src={imageSrc} alt="Popup Icon" width={204} height={153} className="mx-auto"/>
                </div>

                <h2 className="sm:mt-[7px] md:mt-[7px] lg:mt-[7px] text-[18px] sm:w-full md:w-full lg:w-full w-[240px] mx-auto sm:text-[26px] md:text-[26px] lg:text-[26px] font-semibold text-[#000]">
                    {heading}
                </h2>
                <p className="mt-[19px]  text-[14px] sm:text-[16px] text-[#545454] mx-auto"
                   style={{width: descriptionWidth || "100%", maxWidth: descriptionWidth && "520px"}}>{description}</p>

                <div
                    className="sm:mt-[36px] mx-auto md:mt-[36px] lg:mt-[36px] mt-[27px] flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-[25px] md:gap-[25px] lg:gap-[25px]">
                    <button
                        onClick={onCancel}
                        className="w-[284px] ml-[6px] mt-[1px] sm:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:w-[188px] md:w-[188px] lg:w-[188px]  sm:h-[48px] md:h-[40px] lg:h-[48px] h-[40px] border border-[#18470D] text-[#18470D] rounded-full text-[16px] font-medium"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="w-[284px] ml-[6px] mt-[1px] sm:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:w-[188px] md:w-[188px] lg:w-[188px] sm:h-[48px] md:h-[40px] lg:h-[48px] h-[40px] bg-[#CBEC5E] text-[#18470D] rounded-full text-[16px] font-medium"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};
