import React, {useEffect, useRef, useState} from "react";

interface ImageUploadProps {
    height: number | string;
    width: number | string;
    defaultImage?: string;
    onSelect: (file: File) => void;
    isDisabled?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
                                                            height,
                                                            width,
                                                            defaultImage,
                                                            onSelect,
                                                            isDisabled = false,
                                                        }) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>(defaultImage);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDivClick = () => {
        if (!isDisabled) {
            fileInputRef?.current?.click();
        }
    };

    useEffect(() => {
        if (defaultImage) {
            setImageSrc(defaultImage);
        }
    }, [defaultImage]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        const file = files ? files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === "string") {
                    setImageSrc(reader.result);
                }
            };
            reader.readAsDataURL(file);

            if (onSelect) {
                onSelect(file);
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                onClick={handleDivClick}
                className="group relative flex w-[268px] cursor-pointer items-center justify-center rounded-[18px] bg-[#629FFF2E] bg-opacity-[18%]"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {!imageSrc && <p className="text-center text-white">Upload Image</p>}
                <input
                    title="Upload Image"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

        </div>
    );
};
