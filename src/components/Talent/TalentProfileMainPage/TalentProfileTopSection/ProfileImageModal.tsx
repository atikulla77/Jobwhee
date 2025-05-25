import React, { useRef, useState } from "react";
import Image from "next/image";
// import { XMarkIcon } from "@heroicons/react/24/solid";
import { updateProfileImage } from "@/lib/api/talent/talentProfileImage/talentProfileImage";

interface UploadPortfolioImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmUpload: (previewUrl: string, file: File) => void;
}

const UploadPortfolioImageModal: React.FC<UploadPortfolioImageModalProps> = ({
  isOpen,
  onClose,
  onConfirmUpload,
}) => {
  if (!isOpen) return null;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file: File) => {

    if (file.type === "image/gif") {
      alert("GIF files are not allowed. Please upload a JPG or PNG image.");
      return;
    }

    
    setSelectedFile(file);
    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
  };

  const handleUpload = async () => {
    if (selectedFile && previewUrl) {
      setIsUploading(true);
      try {
        await updateProfileImage(selectedFile);
        onConfirmUpload(previewUrl, selectedFile);
        onClose();
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white flex flex-col justify-between p-6  w-[335px] h-[591px] md:w-[620px] md:h-[662px] xl:w-[764px] xl:h-[741px] rounded-[30px] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2A2E34]"
        >
          {/* <XMarkIcon className="w-6 h-6" /> */}
        </button>
        <h2 className="text-[30px] font-medium text-[#18470D] mb-4">
          Edit Photo
        </h2>
        <div className={`h-[375px] flex flex-col justify-between`}>
          <div
            className={`border-2 border-dashed  rounded-full p-6 flex flex-col justify-center items-center relative w-[288px] h-[288px] mx-auto cursor-pointer ${isDragOver ? "border-green-500" : "border-[#18470D]"}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {previewUrl ? (
              <Image
                src={previewUrl}
                alt="Preview"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <>
                <Image
                  src="/icons/imageUploadIcon.png"
                  alt="Upload Icon"
                  width={80}
                  height={80}
                />
                <div
                  className={`flex flex-col justify-center items-center font-medium text-[#18470D] text-[30px] `}
                >
                  <p>Attach or Drop </p>
                  <p>photo Here</p>
                </div>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
          <div
            className={`flex flex-col justify-center items-center gap-[7px]`}
          >
            <p className=" text-[#A1A1A1] leading-[100%]">
              250x250 Min / 5 MB Max
            </p>
            <p className=" text-[#A1A1A1] leading-[100%]">
              Must be your actual photo.
            </p>
          </div>
        </div>
        <div className="flex justify-between self-end w-[410px] mt-6">
          <button
            className=" px-4 py-2 rounded-[49px] w-[200px]  h-[48px] text-[#18470D] font-medium hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#CBEC5E] text-[#18470D] w-[200px] font-medium h-[48px] rounded-[49px] hover:bg-[#ACD624]"
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? "Uploading..." : "Attach photo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPortfolioImageModal;
