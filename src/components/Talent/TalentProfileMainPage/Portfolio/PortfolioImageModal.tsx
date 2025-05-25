import React, {useEffect, useRef, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import {createPortfolioContent, updatePortfolioContent} from "@/lib/api/talent/portfolio/portfolioContent";
import {PhotoPlaceholderIcon} from "../../../../../public/icons/PhotoPlaceholderIcon";
import {usePortfolioById} from "@/components/Talent/TalentProfileMainPage/hooks/useGetPortfolioById";

interface IntroProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioId: number | null;
    contentId?: number | null;
}

const ImagePortfolioModal: React.FC<IntroProfileModalProps> = ({
                                                                   isOpen,
                                                                   onClose,
                                                                   portfolioId,
                                                                   contentId,
                                                               }) => {

    const [isSaving, setIsSaving] = useState(false);
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
    const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState<string>('');

    const {
        portfolio,
        mutate: mutatePortfolio
    } = usePortfolioById(portfolioId ? portfolioId : undefined);


    useEffect(() => {
        if (!isOpen || !portfolio) return;
        if (!contentId) {
            setDescription('');
            setSelectedImagePreview(null);
            setSelectedImageFile(null);
        } else {
            const imageContent = portfolio.contents.find(
                (item) => item.type === "Image" && Number(item.id) === Number(contentId)
            );

            console.log('Loaded Image Content:', imageContent);

            if (imageContent) {
                setDescription(imageContent.description || '');
                setSelectedImagePreview(imageContent.url || null);
                setSelectedImageFile(null);
            }
        }
    }, [isOpen, contentId, portfolio]);

    const handleCancel = () => {
        const imageContent = portfolio?.contents.find(
            (item) => item.type === "Image"
        );

        if (imageContent) {
            setDescription(imageContent.description || "");
            if (imageContent.url) {
                setSelectedImagePreview(imageContent.url);
                setSelectedImageFile(null);
            } else {
                setSelectedImagePreview(null);
            }
        } else {
            setDescription("");
            setSelectedImagePreview(null);
        }

        setSelectedImageFile(null);

        onClose();
    };


    const handleSave = async () => {
        setIsSaving(true);
        try {
            if (portfolioId === null) {
                toast.error("Portfolio ID is missing.");
                return;
            }
            if (!description.trim()) {
                toast.error("Please add a description.");
                return;
            }
            if (contentId) {
                await updatePortfolioContent(contentId, {
                    description: description.trim(),
                    ...(selectedImageFile && {image: selectedImageFile}),
                });
                await mutatePortfolio();
                toast.success("Image updated successfully!");
            } else {
                if (!selectedImageFile) {
                    toast.error("Please upload an image.");
                    return;
                }
                await createPortfolioContent({
                    portfolioId,
                    type: "Image",
                    description: description.trim(),
                    image: selectedImageFile,
                });
                await mutatePortfolio();
                toast.success("Image uploaded successfully!");
            }
            await mutatePortfolio();
            onClose();
        } catch (error) {
            console.error("Failed to save portfolio image content:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ToastContainer position="top-center"/>
            <div
                className="bg-white w-[90%] md:w-[80%] max-w-[878px] rounded-[30px] shadow-lg relative min-h-[860px] max-h-[860px] flex flex-col overflow-hidden px-[5px] md:px-[38px] ">
                <button
                    className="absolute top-6 right-4 text-gray-500 text-lg"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div className="overflow-y-auto flex-1 mt-[37px] ">
                    <h2 className="text-[30px] font-medium text-[#18470D] mb-[27px]">
                        Upload picture
                    </h2>

                    <div className=" flex items-start gap-2 mb-[70px]">
                        <div className="w-full">
                            <div className="flex flex-col mb-[20px] mt-[20px]  w-auto  ">
                                <label
                                    htmlFor="video-description"
                                    className="block text-[18px] leading-[100%] text-[#545454] mb-[8px]"
                                >
                                    Image Description
                                </label>
                                <textarea
                                    id="video-description"
                                    placeholder="Add a short description about your image"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full h-[42px]  p-2 border border-[#AEB3BC] rounded-[12px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 mt-[2px] mb-1">
                        <div className="w-full">
                            <label
                                htmlFor="upload"
                                className="block text-[18px] leading-[100%] text-[#545454] mb-[8px]"
                            >
                                Image upload
                            </label>
                            <div className="flex items-start gap-2 min-w-full">

                                <div
                                    className="border-2 border-dashed border-[#AEB3BC] w-full h-[352px] rounded-[12px] flex flex-col justify-center items-center gap-[10px]">
                                    <div className="mt-[17px] sm:mt-[16px] 2xl:mt-[20px]">

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setSelectedImageFile(file);
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
                                        {selectedImagePreview ? (
                                            <div
                                                className="flex flex-col items-center justify-center 2xl:mt-[18px] 2xl:mb-[24px] ">
                                                <img
                                                    src={selectedImagePreview}
                                                    alt="Preview"
                                                    className="object-cover 2xl:w-[400px] 2xl:h-[250px] lg:w-[418px] lg:h-[272px] sm:w-[343px] sm:h-[223px] w-[277px] h-[180px] rounded-[12px] mb-[15px]"
                                                />
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="flex justify-center items-center w-[212px] h-[48px] border-[1.03px] text-[#18470D] font-medium border-[#CCCCCC] rounded-[50.34px]"
                                                >
                                                    Upload new photo
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className="relative w-[92px] h-[86px] flex justify-center items-center lg:mt-[4px] 2xl:mt-[28px] border border-dashed border-[#AEB3BC] rounded-[5px]">
                                                    <PhotoPlaceholderIcon/>
                                                </div>
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="w-[256px] mt-[16px] 2xl:mt-[15px] text-[16px] h-12 cursor-pointer rounded-[50px] bg-[#CBEC5E] flex items-center justify-center  text-[#18470D] font-medium  hover:bg-[#ACD624] "
                                                >
                                                    Upload Picture
                                                </button>
                                                <div className="text-[16px] text-[#A1A1A1] text-center mt-[16px]">
                                                    <p>Up to 100 MB.</p>

                                                </div>
                                            </div>
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between md:self-end md:w-[410px] mt-6">
                    <button
                        className=" px-4 py-2 rounded-[49px] w-[200px]  h-[48px] text-[#18470D] font-medium hover:bg-gray-100"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`bg-[#CBEC5E] text-[#18470D] w-[200px] font-medium h-[48px] rounded-[49px] hover:bg-[#ACD624] mb-[50px] mr-[40px] ${
                            isSaving ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {contentId ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImagePortfolioModal
