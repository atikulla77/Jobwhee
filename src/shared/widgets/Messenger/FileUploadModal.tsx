// components/FileUploadModal.tsx
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';

interface FileUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileUploaded: (file: File | null) => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ isOpen, onClose, onFileUploaded }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            if (file.type.startsWith('image/')) {
                // setPreviewUrl(URL.createObjectURL(file));
                onClose()
            } else {
                setPreviewUrl(null);
            }
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
        }
    }, []);

    const handleSend = useCallback(() => {
        onFileUploaded(selectedFile);
        onClose();
        setSelectedFile(null);
        setPreviewUrl(null);
    }, [onClose, onFileUploaded, selectedFile]);

    const handleCancel = useCallback(() => {
        onClose();
        setSelectedFile(null);
        setPreviewUrl(null);
    }, [onClose]);

    if (!isOpen && !isVisible) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Light transparent black background with controlled opacity */}
            <div
                className="absolute inset-0 bg-black"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 10% opacity (light black)
                }}
                onClick={handleCancel}
            ></div>

            <div className="relative bg-white shadow-lg w-[335px] h-[426px] xl:w-[860px] xl:h-[556px] lg:w-[700px] md:h-[502px] xs:w-[335px] xs:h-[426px] z-10 rounded-[30px]">

                <div className="px-6 py-6 md:py-10 w-full h-full flex flex-col justify-between items-start">
                    <div className='w-full flex justify-between items-start'>
                        <h2 className="text-xl font-semibold mb-4 text-[#18470D] text-medium text-[20px] lg:text-[30px]">Upload File</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>


                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center h-[200px] md:h-[232px] w-full">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-center"
                        >
                            {previewUrl ? (
                                <Image src={previewUrl} alt="Preview" className="max-h-32 max-w-full rounded-md mb-2" />
                            ) : (
                                <svg
                                    className="w-12 h-12 text-gray-400 mx-auto mb-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                                    />
                                </svg>
                            )}
                            <span className="text-sm text-gray-600">
                                {selectedFile ? selectedFile.name : 'Click to upload a file'}
                            </span>
                            <input
                                id="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>

                    <div className='border-t border-[#18470D] w-full'></div>

                    <div className="w-full flex justify-end gap-2">
                        <button
                            onClick={handleCancel}
                            className="w-[200px] h-[49px] text-[#18470D] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSend}
                            disabled={!selectedFile}
                            className={`w-[200px] h-[49px] rounded-full bg-[#CBEC5E] px-4 py-2 text-[#18470D] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 cursor-not-allowed ${selectedFile ? 'text-white cursor-pointer' : ''
                                }`}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadModal;
