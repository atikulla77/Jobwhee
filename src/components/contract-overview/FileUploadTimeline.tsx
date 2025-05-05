"use client";
import Button from "@/shared/ui-kit/Button";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { ReloadIcon } from "../../../public/icons/ReloadIcon";
import { useState } from "react";

const FileUploadTimeline = () => {
  const handleButton = (action: string) => {
    alert(action);
  };
  const FileUploadTimelineAccount = [
    {
      id: 1,
      name: "Eleni C.",
      profileImg: "/images/maria.png",
      uploadDate: "Fri, 14 March",
      uploadTime: "2:25 PM",
      uploadeFile: [
        {
          id: 1,
          uploadeImg: "/images/image373.png",
          uploadeImgName: "image 1.jpg",
          uploadeImgSize: "915KB",
        },
        {
          id: 2,
          uploadeImg: "/images/image373.png",
          uploadeImgName: "image 2.jpg",
          uploadeImgSize: "915KB",
        },
      ],
    },
    {
      id: 2,
      name: "Eleni C.",
      profileImg: "/images/maria.png",
      uploadDate: "Fri, 14 March",
      uploadTime: "2:25 PM",
      uploadeFile: [
        {
          id: 1,
          uploadeImg: "/images/image373.png",
          uploadeImgName: "image 1.jpg",
          uploadeImgSize: "915KB",
        },
        {
          id: 2,
          uploadeImg: "/images/image373.png",
          uploadeImgName: "image 2.jpg",
          uploadeImgSize: "915KB",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex flex-wrap justify-between items-center relative md:pb-[27px] pb-[30px]">
        <h1 className="text-[20px] font-[500] text-[#000000]">
          Milestone Timeline
        </h1>

        <div className="cursor-pointer w-[38px] h-[38px] border-[1px] border-[#CBEC5E] flex items-center justify-center rounded-[100%]">
          <ReloadIcon />
        </div>
      </div>

      {FileUploadTimelineAccount.map((key) => {
        return (
          <div
            key={key.id}
            className={`w-full ${
              FileUploadTimelineAccount.length === key.id
                ? ""
                : "2xl:pb-[29px] md:pb-[27px] pb-[30px]"
            }`}
          >
            <p className="text-[16px] font-[400] text-[#B9B9B9]">
              {key.uploadDate}
            </p>
            <div className="flex items-center pt-[8px] md:pb-[21px] pb-[30px]">
              <img src={"/images/maria.png"} className="w-[48px] h-[48px]" />
              <div className="text-[16px] pl-[10px] ">
                <h3 className="text-[#000000] font-[500]">{key.name}</h3>
                <p className="text-[#B9B9B9] font-[400] pt-[3px]">
                  {key.uploadTime}
                </p>
              </div>
            </div>

            <UploadeFile uploadeFileData={key.uploadeFile} />

            <div
              className={`${
                FileUploadTimelineAccount.length === key.id ? "hidden" : ""
              } w-full h-[1px] bg-[#CBEC5E] opacity-[50%] 2xl:mt-[32px] xl:mt-[20px] mt-[30px]`}
            ></div>
          </div>
        );
      })}

      <div className="w-[233px] xl:h-[48px] h-[40px] mx-auto 2xl:mt-[44px] md:mt-[69px] mt-[55px] xl:mb-0 md:mb-[8px] mb-[4px]">
        <Button
          type="transparent"
          action="Show More Files"
          onClick={() => handleButton}
        />
      </div>
    </>
  );
};

export default FileUploadTimeline;

interface UploadeFileProps {
  uploadeFileData: any;
}
const UploadeFile: React.FC<UploadeFileProps> = ({ uploadeFileData }) => {
  const [dropDownUploadFile, setdropDownUploadFile] = useState(false);
  return (
    <>
      <div
        onClick={() => setdropDownUploadFile(!dropDownUploadFile)}
        className="w-full flex items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-[400] text-[#B9B9B9] pr-[8px]">
          {uploadeFileData.length} files
        </h3>
        <div className="w-[20px] h-[20px]">
          <DropDownArrowIcon color="#c9c9c9" />
        </div>
      </div>

      {uploadeFileData.map((key:any) => {
        return (
          <div
            key={key.id}
            className={`${
              dropDownUploadFile ? "hidden" : ""
            } flex justify-between items-start pt-[12px]`}
          >
            <div className="flex">
              <img src={key.uploadeImg} className="w-[80px] h-[80px]" />
              <div className="font-[400] pl-[8px]">
                <h2 className="text-[16px] font-[500] text-[#000000] tracking-[-0.3px] pb-[10px]">
                  {key.uploadeImgName}
                </h2>
                <p className="text-[14px] text-[#B9B9B9]">
                  {key.uploadeImgSize}
                </p>
              </div>
            </div>
            <div className="flex items-center md:gap-[24px] gap-[16px]">
              <img
                src="/images/icon-images/link.png"
                className="w-[24px] h-[24px]"
              />
              <img
                src="/images/icon-images/download-cloud.png"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
