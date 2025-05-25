import React, {useEffect, useState} from "react";
import Image from "next/image";
import UploadModal from "@/components/Talent/TalentVerification/VerificationUploadCard/Modal/Modal";
import {useImageContext} from "@/contextProviders/TalentVerificationProvider";
import {
    uploadImage
} from "@/lib/api/talent/talentProfileImage/freelancerVerificationImages/freelancerVerificationImages";
import useSWR, {mutate} from "swr";
import {getUserProfileByToken} from "@/lib/api/getUserProfileById/getUserProfileByID";

interface VerificationUploadCardProps {
    description: string;
    imageKey: "id" | "selfie" | "selfieWithId";
    defaultImageSrc: string;
}

type ImageStatus = "Pending" | "Rejected" | "Approved" | null;

const VerificationUploadCard = ({
                                    description,
                                    imageKey,
                                    defaultImageSrc,
                                }: VerificationUploadCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const {imageUrls, setImageUrls} = useImageContext();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [localStatus, setLocalStatus] = useState<string | null>(null);


    const [imageStatuses, setImageStatuses] = useState<{
        id: ImageStatus;
        selfie: ImageStatus;
        selfieWithId: ImageStatus;
    }>({
        id: null,
        selfie: null,
        selfieWithId: null,
    });

    const {data: userResponse} = useSWR("userProfile", getUserProfileByToken);

    useEffect(() => {
        if (userResponse) {
            const {freelancerVerification} = userResponse.data;
            if (freelancerVerification) {
                const serverImages = {
                    id: freelancerVerification.p_image,
                    selfie: freelancerVerification.s_image,
                    selfieWithId: freelancerVerification.ps_image,
                };
                const serverStatuses = {
                    id: freelancerVerification.p_status,
                    selfie: freelancerVerification.s_status,
                    selfieWithId: freelancerVerification.ps_status,
                };
                setImageUrls((prev) => ({...prev, ...serverImages}));
                setImageStatuses(serverStatuses);
                setLocalStatus(serverStatuses[imageKey]);
            }
        }
    }, [userResponse, setImageUrls]);

    const handleConfirmUpload = (uploadedImageUrl: string, file: File) => {
        setImageUrls((prev) => ({...prev, [imageKey]: uploadedImageUrl}));
        setSelectedFile(file);
        setUploadSuccess(false);
        setLocalStatus("New");
    };

    const handleCancel = () => {
        setImageUrls((prev) => ({...prev, [imageKey]: null}));
        setSelectedFile(null);
        setUploadSuccess(false);
        setLocalStatus(null);
    };

    const handleSend = async () => {
        if (!selectedFile) {
            console.error("No file selected for upload");
            return;
        }
        setUploading(true);
        try {
            const imageTypeMap = {
                id: "p_image",
                selfie: "s_image",
                selfieWithId: "ps_image",
            };

            const imageType = imageTypeMap[imageKey] as "p_image" | "s_image" | "ps_image";

            if (!imageType) {
                console.error(`Invalid imageKey: ${imageKey}`);
                return;
            }

            await uploadImage(selectedFile, imageType);
            setImageStatuses((prev) => ({...prev, [imageKey]: "Pending"}));
            setUploadSuccess(true);
            setLocalStatus("Pending");
            await mutate("userProfile");
            setImageStatuses((prev) => ({...prev, [imageKey]: "Pending"}));
            setLocalStatus("Pending");
        } catch (error) {
            console.error(`Upload error for ${imageKey}:`, error);
        }
        setUploading(false);
    };

    const rejectionReasons = {
        id: userResponse?.data?.freelancerVerification?.p_reason || null,
        selfie: userResponse?.data?.freelancerVerification?.s_reason || null,
        selfieWithId: userResponse?.data?.freelancerVerification?.ps_reason || null,
    };


    const rejectionReason = rejectionReasons[imageKey];

    const hasImage = !!imageUrls[imageKey];
    const currentStatus = localStatus || imageStatuses[imageKey];
    const isPendingOrAccepted = ["Pending", "Accepted"].includes(currentStatus || "");
    const isRejected = currentStatus === "Rejected";

    return (
        <div>
            <div
                className="mb-[15px] flex flex-col gap-[15px] border-[1.03px] border-[#EAEAEA] rounded-[12.33px] x-[335px] sm:w-[313px] h-[230px]"
            >
                {!hasImage ? (
                    <>
                        <div className="2xl:w-[164.2px] 2xl:h-[128px]">
                            <Image src={defaultImageSrc} alt="Verification Placeholder" width={164.2} height={128}/>
                        </div>
                        <p className="w-full h-[63px] px-[21px] text-[14px] text-[#545454]">{description}</p>
                    </>) : (
                    <div
                        className={`relative rounded-[12.33px] w-[335px] sm:w-[313px] h-[230px] flex items-center justify-center overflow-hidden border ${
                            currentStatus === "Pending" ? "border-[#BAA428]" :
                                currentStatus === "Accepted" ? "border-[#5A7D06] " : currentStatus === "Rejected" ? "border-[#E73E1E]" : ""}`}>
                        <Image
                            src={imageUrls[imageKey] as string}
                            alt="Verification Image"
                            width={223}
                            height={140}
                            className="rounded-[12.33px] max-w-[223px] max-h-[140px] "
                        />
                        <div
                            className={`absolute top-[16px] right-[17px] w-[110px] flex justify-center items-center h-[32px]  ${
                                currentStatus === "Pending" ? "bg-[#FCF5E2]" :
                                    currentStatus === "Accepted" ? "bg-[#EEF6DB] " : currentStatus === "Rejected" ? "bg-[#F7E7E3]" : ""}  rounded-[30px] `}>
                            <p className={`font-medium  ${
                                currentStatus === "Pending" ? "text-[#BAA428]" :
                                    currentStatus === "Accepted" ? "text-[#5A7D06] " : currentStatus === "Rejected" ? "text-[#E73E1E]" : ""}`}>
                                {currentStatus}...
                            </p>
                        </div>

                    </div>)}
            </div>
            {isRejected && rejectionReason && (
                <div className="mt-2  pb-[27px]  text-[#E73E1E]  w-full">
                    <p>{rejectionReason}</p>
                </div>
            )}
            {(!hasImage || (isRejected && localStatus !== "New" && localStatus !== "Pending")) ? (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className=" mb-[42px] flex justify-center items-center w-full h-[40px] border-[1.03px] border-[#CCCCCC] rounded-[50.34px]"
                >
                    {isRejected ? "Re-upload" : "Upload"}
                </button>
            ) : (
                <>
                    {localStatus === "New" && !isPendingOrAccepted && (
                        <div className="mt-[15px] mb-[42px] flex justify-between items-center">
                            <button
                                onClick={handleCancel}
                                className="flex justify-center items-center w-[135px] h-[40px] border-[1.03px] border-[#CCCCCC] rounded-[50.34px]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSend}
                                className={`flex justify-center items-center w-[135px] h-[40px] border-[1.03px] rounded-[50.34px] ${
                                    selectedFile ? "bg-[#CBEC5E] cursor-pointer" : "bg-gray-300 cursor-not-allowed"
                                }`}
                                disabled={!selectedFile || uploading}
                            >
                                {uploading ? "Uploading..." : "Submit"}
                            </button>
                        </div>
                    )}
                </>
            )}
            <UploadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isDisabled={false}
                imageKey={imageKey}
                onConfirmUpload={handleConfirmUpload}

            />
        </div>
    );
};


export default VerificationUploadCard;

