// "use client";
//
// import React, {FC, useEffect, useRef, useState} from "react";
// import Image from "next/image";
// import {PauseIcon, PlayIcon} from "lucide-react";
//
// // import {PauseIcon, PlayIcon} from "@heroicons/react/24/solid";
//
// interface VideoPlayerProps {
//     url: string;
// }
//
// export const VideoPlayer: FC<VideoPlayerProps> = ({url}) => {
//     const [isPlaying, setIsPlaying] = useState<boolean>(false);
//     const [isLoaded, setIsLoaded] = useState<boolean>(false);
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//
//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.addEventListener("loadedmetadata", () => {
//                 setIsLoaded(true);
//             });
//         }
//         return () => {
//             if (videoRef.current) {
//                 videoRef.current.removeEventListener("loadedmetadata", () => {
//                     setIsLoaded(true);
//                 });
//             }
//         };
//     }, []);
//
//     const togglePlayPause = () => {
//         if (!videoRef.current || !isLoaded) return;
//
//         if (isPlaying) {
//             videoRef.current.pause();
//         } else {
//             videoRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };
//
//     return (
//         <div
//             className="relative flex items-center justify-center w-[277.41px] h-[227.08px] md:h-[180px] xl:h-[218px] 2xl:h-[211px] md:w-[230.57px] xl:w-[265.11] 2xl:w-[317px] overflow-hidden rounded-[15px] border border-[#CBEC5E]"
//             style={{
//                 // backgroundColor: "#EFF4FB",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >
//             {url ? (
//                 <video ref={videoRef} className="h-full w-full object-cover" muted>
//                     <source src={url} type="video/mp4"/>
//                 </video>
//             ) : (<div className={`flex flex-col gap-[30px]`}>
//                     <div
//                         className="w-[92px] cursor-pointer min-h-[86px] border-2 border-dashed border-[#AEB3BC] flex items-center justify-center rounded-[5px] mt-[10px]">
//                         <Image
//                             src={"/icons/film.png"}
//                             alt="Uploaded preview"
//                             width={45}
//                             height={45}
//                             className="rounded-md object-cover"
//                         />
//
//                     </div>
//                     <p className={`text-[18px] leading-8 text-[#545454]`}>No video yet</p>
//                 </div>
//             )}
//
//             {/*{url && (*/}
//             {/*    <button*/}
//             {/*        onClick={togglePlayPause}*/}
//             {/*        className="absolute bottom-2 left-2 flex h-[51px] w-[51px] items-center justify-center rounded-full border-2 border-white/80 bg-black/70 transition hover:border-white hover:bg-black"*/}
//             {/*    >*/}
//             {/*        {isPlaying*/}
//             {/*            ? ""*/}
//             {/*            : // <PauseIcon className="h-5 w-5 text-white/80 transition duration-200 hover:text-white"/>*/}
//             {/*              // <PlayIcon className="h-5 w-5 text-white/80 transition duration-200 hover:text-white"/>*/}
//             {/*            ""}*/}
//             {/*    </button>*/}
//             {/*)}*/}
//
//             {url && (
//                 <button
//                     onClick={togglePlayPause}
//                     className="absolute bottom-2 left-2 flex h-[51px] w-[51px] items-center justify-center rounded-full border-2 border-white/80 bg-black/70 transition hover:border-white hover:bg-black"
//                 >
//                     {isPlaying ? (
//                         <PauseIcon className="h-5 w-5 text-white/80 transition duration-200 hover:text-white"/>
//                     ) : (
//                         <PlayIcon className="h-5 w-5 text-white/80 transition duration-200 hover:text-white"/>
//                     )}
//                 </button>
//             )}
//         </div>
//     );
// };


'use client';

import React, {FC, useEffect, useRef, useState} from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
    url: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({url}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const isYouTubeUrl = (url: string) =>
        url.includes('youtube.com') || url.includes('youtu.be');

    const getYouTubeEmbedUrl = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&?]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    useEffect(() => {
        if (videoRef.current) {
            const handleLoad = () => setIsLoaded(true);
            videoRef.current.addEventListener('loadedmetadata', handleLoad);
            return () => {
                videoRef.current?.removeEventListener('loadedmetadata', handleLoad);
            };
        }
    }, []);

    const togglePlayPause = () => {
        if (!videoRef.current || !isLoaded) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="relative flex items-center justify-center w-[277.41px] h-[227.08px] md:h-[180px] xl:h-[218px] 2xl:h-[211px] md:w-[230.57px] xl:w-[265.11px] 2xl:w-[317px] overflow-hidden rounded-[15px] border border-[#CBEC5E]"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {url ? (
                isYouTubeUrl(url) ? (
                    <iframe
                        src={getYouTubeEmbedUrl(url)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-md"
                        title="YouTube Video"
                    />
                ) : (
                    <video
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        muted
                        controls={false}
                    >
                        <source src={url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )
            ) : (
                <div className="flex flex-col gap-[30px] items-center justify-center">
                    <div
                        className="w-[92px] min-h-[86px] border-2 border-dashed border-[#AEB3BC] flex items-center justify-center rounded-[5px]">
                        <Image
                            src="/images/icon-images/film.png"
                            alt="No video"
                            width={45}
                            height={45}
                            className="rounded-md object-cover"
                        />
                    </div>
                    <p className="text-[18px] leading-8 text-[#545454]">No video yet</p>
                </div>
            )}

            {url && !isYouTubeUrl(url) && (
                <button
                    onClick={togglePlayPause}
                    className="absolute bottom-2 left-2 flex h-[51px] w-[51px] items-center justify-center rounded-full border-2 border-white/80 bg-black/70 transition hover:border-white hover:bg-black"
                >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6"/>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M6.5 5.5v9l7-4.5-7-4.5z"/>
                        </svg>
                    )}
                </button>
            )}
        </div>
    );
};
