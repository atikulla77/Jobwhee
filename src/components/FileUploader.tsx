'use client';

import {
    useCallback,
    useEffect,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import {useDropzone} from 'react-dropzone';
import Image from 'next/image';

interface FileUploaderProps {
    onUpload?: (file: File) => void;
    uploadText?: string;
    dragText?: string;
    acceptFormatText?: string;
    acceptDimensionsText?: string;
    accept?: { [key: string]: string[] };
    dimensions?: { width: number; height: number };
    valueImage?: string | null;
    clearImage?: () => void;
    defaultImage?: string;
}

export const FileUploader = forwardRef<
    {
        clearImageAction: () => void;
        inputRef: React.RefObject<HTMLInputElement | null>;
    },
    FileUploaderProps
>(
    (
        {
            onUpload,
            accept,
            valueImage,
            dimensions,
            clearImage,
            defaultImage = '/images/icon-images/film.png',
        },
        ref
    ) => {
        const [media, setMedia] = useState<string | null>(null);
        const [error, setError] = useState<string | null>(null);
        const [hasValue, setHasValue] = useState(false);

        const acceptedFormats = accept || {'image/jpeg': ['.jpg', '.jpeg']};
        const isVideoUploader = acceptedFormats.hasOwnProperty('video/mp4');
        const inputRef = useRef<HTMLInputElement | null>(null);

        useEffect(() => {
            if (valueImage != null && !hasValue && !media) {
                setMedia(valueImage);
                setHasValue(true);
            } else if (valueImage == null && !media) {
                setMedia(null);
                setHasValue(false);
            }
        }, [valueImage, hasValue, media]);


        const clearImageAction = useCallback(() => {
            setMedia(null);
            setError(null);
            setHasValue(false);
            if (clearImage) clearImage();
        }, [clearImage]);

        useImperativeHandle(
            ref,
            () => ({
                clearImageAction,
                inputRef,
            }),
            [clearImageAction, inputRef]
        );

        useEffect(() => {
            if (ref === null) {
                clearImageAction();
            }
        }, [ref, clearImageAction]);

        const onDrop = useCallback(
            (acceptedFiles: File[]) => {
                const file = acceptedFiles[0];

                if (file) {
                    const fileType = file.type.split('/')[0];

                    if (isVideoUploader && fileType !== 'video') {
                        setError('Only video files are allowed');
                        return;
                    } else if (!isVideoUploader && fileType !== 'image') {
                        setError('Only image files are allowed');
                        return;
                    }

                    const fileURL = URL.createObjectURL(file);
                    setMedia(fileURL);
                    setHasValue(true);
                    setError(null);
                    if (onUpload) onUpload(file);
                }
            },
            [onUpload, isVideoUploader]
        );

        const {getRootProps, getInputProps} = useDropzone({
            onDrop,
            accept: acceptedFormats,
            multiple: false,
        });

        return (
            <div
                {...getRootProps()}
                className="w-[325px] cursor-pointer min-h-[216px] flex items-center justify-center rounded-[20px] mt-[10px]"
            >
                <input {...getInputProps()} ref={inputRef}/>
                {media ? (
                    isVideoUploader ? (
                        <video
                            muted
                            controls
                            autoPlay={true}
                            className=" min-w-[325px] rounded-[20px] object-cover min-h-[216px] max-h-[216px]"
                        >
                            <source src={media} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <Image
                            src={media}
                            alt="Uploaded preview"
                            width={dimensions?.width}
                            height={dimensions?.height}
                            className="max-h-48 w-full rounded-md object-cover"
                        />
                    )
                ) : (
                    <div className="flex flex-col items-center border-2 border-dashed border-[#AEB3BC] ">
                        {defaultImage && (
                            <Image src={defaultImage} alt={'film'} width={45} height={45}/>
                        )}
                        {/* <p className="mt-2 font-medium text-body">
              <span className="text-primary">{uploadText}</span> {dragText}
            </p> */}
                        {/* <p className="mt-1 text-sm text-gray-500">
              {acceptFormatText || (isVideoUploader ? 'MP4' : 'JPG, JPEG')}
              <br />
              {dimensions && (
                <>
                  ({dimensions.width} X {dimensions.height}px)
                </>
              )}
            </p> */}
                        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                    </div>
                )}
            </div>
        );
    }
);

FileUploader.displayName = 'FileUploader';

export default FileUploader;
