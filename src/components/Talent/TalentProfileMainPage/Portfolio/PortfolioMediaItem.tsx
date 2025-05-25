import {DragIcon} from '../../../../../public/icons/talent-client/DragIcon';
import {OutlineArrowGray} from '../../../../../public/icons/OutlineArrowGray';
import {OutlineArrowGreen} from '../../../../../public/icons/OutlineArrowGreen';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import React, {useRef, useState} from 'react';
import {DeleteIcon} from '../../../../../public/icons/DeleteIcon';
import {EditIcon} from '../../../../../public/icons/talent-client/editIcon';
import {VideoPausedIcon} from '../../../../../public/icons/VideoPausedIcon';


type mediaFile = {
    id: string;
    url?: string;
    embedUrl?: string;
    type: 'Image' | 'Video';
    description?: string;
};


interface PortfolioItemProps {
    file: {
        embedUrl?: string;
        id: string;
        url?: string;
        type: 'Image' | 'Video';
        description?: string;
    };
    index: number;
    mediaFiles: mediaFile[];
    setMediaFiles: React.Dispatch<React.SetStateAction<mediaFile[]>>;
    previewMode: boolean;
    onEdit: (file: mediaFile) => void;
    onDelete: (id: string) => void;
}

const extractYouTubeId = (url: string): string => {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
};
const PortfolioMediaItem: React.FC<PortfolioItemProps> = ({
                                                              file,
                                                              index,
                                                              mediaFiles,
                                                              setMediaFiles,
                                                              previewMode,
                                                              onEdit,
                                                              onDelete
                                                          }) => {
    const {setNodeRef, transform, transition, attributes, listeners} =
        useSortable({id: file.id});
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [videoPausedVisible, setVideoPausedVisible] = useState(true);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const videoRef = (index: number) => (el: HTMLVideoElement | null) => {
        videoRefs.current[index] = el;
    };

    const handleSetPosition = (id: string, direction: 'up' | 'down') => {
        setMediaFiles((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index === -1) return prev;
            if (direction === 'up' && index > 0) {
                const newArray = [...prev];
                const temp = newArray[index - 1];
                newArray[index - 1] = newArray[index];
                newArray[index] = temp;
                return newArray;
            }
            if (direction === 'down' && index < prev.length - 1) {
                const newArray = [...prev];
                const temp = newArray[index + 1];
                newArray[index + 1] = newArray[index];
                newArray[index] = temp;
                return newArray;
            }
            return prev;
        });
    };
    const handlePlayVideo = (fileId: string) => {
        const isVideoPlaying = !videoRefs.current[index]?.paused ? true : false;
        if (fileId) {
            mediaFiles.forEach((item) => {
                if (item.id === fileId) {
                    isVideoPlaying
                        ? videoRefs.current[index]?.pause()
                        : videoRefs.current[index]?.play();
                }
            });
        }
        return isVideoPlaying;
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            className=" lg:max-w-[540px] 2xl:max-w-[751px] h-[506px] rounded-[20px] w-full border border-[#AEB3BC] p-[14px] pb-[20px] mb-[42px]"
        >
            <div className="max-w-[723px] w-full h-[419px] rounded-[7px] overflow-hidden border">
                {file.type === 'Image' ? (
                    <img
                        {...attributes}
                        {...listeners}
                        title="Drag to reorder"
                        src={file.url}
                        alt="uploaded"
                        className="w-full h-full object-cover cursor-move"
                    />
                ) : file.embedUrl && (file.embedUrl.includes("youtube.com") || file.embedUrl.includes("youtu.be")) ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeId(file.embedUrl)}`}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                ) : (
                    <div className="h-full relative">
                        <video
                            ref={videoRef(index)}
                            {...attributes}
                            {...listeners}
                            title="Drag to reorder"
                            src={file.url}
                            controls={true}
                            className="w-full h-full object-cover  cursor-move"
                            onPause={() => setVideoPausedVisible(true)}
                            onPlay={() => setVideoPausedVisible(false)}
                        />
                        {videoPausedVisible && (
                            <div
                                onClick={() => {
                                    handlePlayVideo(file.id);
                                    setVideoPausedVisible(false);
                                }}
                                className="cursor-pointer absolute z-10 top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2"
                            >
                                <VideoPausedIcon/>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="mt-3 flex items-center">
                {previewMode ? (
                    <p>{file.description}</p>
                ) : (
                    <>
                        <p className="max-w-[511px] w-full h-[42px] text-[#2B2C2D]  pl-2">{file.description}</p>
                        <div className="flex gap-2 items-center ml-[24px]">
                            <div onClick={() => onEdit(file)} className="cursor-pointer">
                                <EditIcon/>
                            </div>
                            <div onClick={() => onDelete(file.id)} className="cursor-pointer">
                                <DeleteIcon width={35} height={35}/>
                            </div>
                            <div className="flex gap-[10px] h-fit ml-[9px]">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => handleSetPosition(file.id, 'up')}
                                >
                                    {mediaFiles.findIndex((w) => w.id === file.id) === 0 ? (
                                        <OutlineArrowGray/>
                                    ) : (
                                        <div className="rotate-180">
                                            <OutlineArrowGreen/>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="cursor-pointer"
                                    onClick={() => handleSetPosition(file.id, 'down')}
                                >
                                    {mediaFiles.findIndex((w) => w.id === file.id) ===
                                    mediaFiles.length - 1 ? (
                                        <div className="rotate-180">
                                            <OutlineArrowGray/>
                                        </div>
                                    ) : (
                                        <OutlineArrowGreen/>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div
                            {...attributes}
                            {...listeners}
                            className="cursor-move ml-auto"
                            title="Drag to reorder"
                        >
                            <DragIcon/>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default PortfolioMediaItem;





