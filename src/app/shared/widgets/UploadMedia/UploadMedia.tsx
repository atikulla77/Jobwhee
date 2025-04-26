"use client"

import { PhotoPlaceholderIcon } from "../../../../public/icons/PhotoPlaceholderIcon";
import React, { useState, useRef } from "react";

interface UploadMediaProps {
  setSelectedImageFile: (file: File) => void;
  type: string;
  title: string;
}

const UploadMedia = (media: UploadMediaProps) => {
  const [selectedImagePreview, setSelectedImagePreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  return <div className="mt-[17px] sm:mt-[16px] 2xl:mt-[20px]">
    <p className="text-[#545454]">{media.title}</p>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          media.setSelectedImageFile(file);
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }}
      ref={fileInputRef}
      className="hidden"
    />
    <div
      className="relative lg:max-w-[595px] min-h-[270px] w-full flex items-center justify-center flex-col rounded-[12px] mt-[7px] lg:mt-[7px] 2xl:mt-[11px] sm:pt-[4px] lg:sm:pt-[21px] 2xl:pt-0 lg:pt-0 border border-dashed border-[#AEB3BC]">
      {selectedImagePreview ? (
        <div
          className="flex flex-col items-center justify-center 2xl:mt-[18px] 2xl:mb-[24px] gap-[20px]">
          <img
            src={selectedImagePreview}
            alt="Preview"
            className="object-cover 2xl:w-[421px] 2xl:h-[274px] lg:w-[418px] lg:h-[272px] sm:w-[343px] sm:h-[223px] w-[277px] h-[180px] rounded-[12px]"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex justify-center items-center w-[212px] h-[48px] border-[1.03px] text-[#18470D] font-medium border-[#CCCCCC] rounded-[50.34px]"
          >
            Upload new {media.type}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div
            className="relative w-[92px] h-[86px] flex justify-center items-center lg:mt-[4px] 2xl:mt-[28px] border border-dashed border-[#AEB3BC] rounded-[5px]">
            <PhotoPlaceholderIcon/>
          </div>
          <div className="text-[16px] text-[#A1A1A1] text-center mt-[16px]">
            <p className="mt-[5px]">Drag and drop files here</p>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="max-w-[195px] mt-[16px] 2xl:mt-[15px] text-[16px] w-full h-12 cursor-pointer rounded-[50px] bg-[#CBEC5E] flex items-center justify-center  text-[#18470D] font-medium  hover:bg-[#ACD624] "
          >
            Upload {media.type[0].toUpperCase() + media.type.slice(1)}
          </button>

        </div>
      )}
    </div>
  </div>
}
export default UploadMedia;
