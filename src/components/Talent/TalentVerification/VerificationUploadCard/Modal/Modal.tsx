// import React, {useRef, useState} from "react";
// import Image from "next/image";
//
// interface UploadModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     isDisabled: boolean;
//     imageKey?: string;
//     onConfirmUpload?: (previewUrl: string, file: File) => void;
// }
//
// const UploadModal: React.FC<UploadModalProps> = ({isOpen, onClose, isDisabled, imageKey, onConfirmUpload}) => {
//     if (!isOpen) return null;
//
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//     const [isDragOver, setIsDragOver] = useState(false);
//     const fileInputRef = useRef<HTMLInputElement | null>(null);
//
//     const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         setIsDragOver(true);
//     };
//
//     const handleDragLeave = () => {
//         setIsDragOver(false);
//     };
//
//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         setIsDragOver(false);
//
//         const files = e.dataTransfer.files;
//         if (files.length > 0) {
//             handleFileSelection(files[0]);
//         }
//     };
//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             handleFileSelection(file);
//         }
//     };
//
//     const handleFileSelection = (file: File) => {
//         setSelectedFile(file);
//         const fileUrl = URL.createObjectURL(file);
//         setPreviewUrl(fileUrl);
//     };
//
//     const handleUpload = () => {
//         if (selectedFile && previewUrl && onConfirmUpload) {
//             onConfirmUpload(previewUrl, selectedFile);
//             onClose();
//         }
//     };
//
//     const handleAreaClick = () => {
//         fileInputRef.current?.click();
//     };
//
//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//             <div className="bg-white p-6 w-[392px] h-[500px] rounded-[12px] shadow-lg max-w-sm mx-auto">
//                 <h2 className="text-xl font-bold mb-4">Selfie</h2>
//                 <p className="text-sm text-[#545454]">
//                     Upload a clear selfie of yourself, ensuring your face is fully visible.
//                 </p>
//                 <div
//                     className={`mt-4 border-2 w-[326px] h-[201px] ${
//                         isDragOver ? "border-blue-500" : "border-dashed border-gray-300"
//                     } rounded-lg p-4 text-center cursor-pointer relative`}
//                     onClick={handleAreaClick}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     onDrop={handleDrop}
//                 >
//                     {previewUrl ? (
//                         <Image
//                             src={previewUrl}
//                             alt="Uploaded Image"
//                             layout="fill"
//                             objectFit="cover"
//                             className="rounded-lg"
//                         />
//                     ) : (
//                         <div className="flex flex-col justify-center items-center h-[150px]">
//                             <Image
//                                 src="/icons/upload-cloud.png"
//                                 alt="upload-cloud icon"
//                                 height={24}
//                                 width={24}
//                             />
//                             <p className="text-sm text-green-700">Upload photo</p>
//                             <p className="text-xs text-gray-500">
//                                 Drag and drop files here or click to select a file
//                             </p>
//                             <input
//                                 id="fileInput"
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleFileChange}
//                                 className="hidden"
//                                 ref={fileInputRef}
//                             />
//                         </div>
//                     )}
//                 </div>
//
//                 <div className="mx-auto h-[107px] mt-[21px] flex flex-col justify-between">
//                     <button
//                         className={`flex justify-center items-center text-white px-[35px] mb-[10px] w-[321px] h-[48px] rounded-[49px] ${
//                             isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-[#CBEC5E]"
//                         }`}
//                         onClick={isDisabled ? undefined : handleUpload}
//                         disabled={isDisabled}
//                     >
//                         Send
//                     </button>
//                     <button
//                         className="bg-gray-200 bg-transparent border border-[#EAEAEA] text-gray-600 py-2 px-4 w-[321px] h-[48px] rounded-[49px]"
//                         onClick={onClose}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default UploadModal;
//


import React, {useRef, useState} from "react";
import Image from "next/image";

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDisabled: boolean;
    imageKey?: string;
    onConfirmUpload?: (previewUrl: string, file: File) => void;
    title?: string;
    description?: string;
    buttonText?: string;
    styles?: {
        modalBg?: string;
        buttonBg?: string;
        buttonTextColor?: string;
    };
}

const UploadModal: React.FC<UploadModalProps> = ({
                                                     isOpen,
                                                     onClose,
                                                     isDisabled,
                                                     imageKey,
                                                     onConfirmUpload,
                                                     title = "Selfie",
                                                     description = "Upload a clear selfie of yourself, ensuring your face is fully visible.",
                                                     buttonText = "Upload",
                                                     styles = {
                                                         modalBg: "bg-white",
                                                         buttonBg: "bg-[#CBEC5E]",
                                                         buttonTextColor: "text-white",
                                                     },
                                                 }) => {
    if (!isOpen) return null;

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
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
        setSelectedFile(file);
        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
    };

    const handleUpload = () => {
        if (selectedFile && previewUrl && onConfirmUpload) {
            onConfirmUpload(previewUrl, selectedFile);
            onClose();
        }
    };

    const handleAreaClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
            <div className={`${styles.modalBg} p-6 w-[392px] h-[500px] rounded-[12px] shadow-lg max-w-sm mx-auto`}>
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="text-sm text-[#545454]">{description}</p>
                <div
                    className={`mt-4 border-2 w-[326px] h-[201px] ${
                        isDragOver ? "border-blue-500" : "border-dashed border-gray-300"
                    } rounded-lg p-4 text-center cursor-pointer relative`}
                    onClick={handleAreaClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {previewUrl ? (
                        <Image
                            src={previewUrl}
                            alt="Uploaded Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    ) : (
                        <div className="flex flex-col justify-center items-center h-[150px]">
                            <Image src="/icons/upload-cloud.png" alt="upload-cloud icon" height={24} width={24}/>
                            <p className="text-sm text-green-700">Upload photo</p>
                            <p className="text-xs text-gray-500">Drag and drop files here or click to select a file</p>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                                ref={fileInputRef}
                            />
                        </div>
                    )}
                </div>

                <div className="mx-auto h-[107px] mt-[21px] flex flex-col justify-between">
                    <button
                        className={`flex justify-center items-center px-[35px] mb-[10px] w-[321px] h-[48px] rounded-[49px] ${
                            isDisabled ? "bg-gray-300 cursor-not-allowed text-gray-500" : `${styles.buttonBg} ${styles.buttonTextColor}`
                        }`}
                        onClick={isDisabled ? undefined : handleUpload}
                        disabled={isDisabled}
                    >
                        {buttonText}
                    </button>
                    <button
                        className="bg-gray-200 bg-transparent border border-[#EAEAEA] text-gray-600 py-2 px-4 w-[321px] h-[48px] rounded-[49px]"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadModal;

