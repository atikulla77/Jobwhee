import React, {useEffect, useRef, useState} from 'react';
import FileUploader from '@/components/FileUploader';
import {toast, ToastContainer} from 'react-toastify';
import {createPortfolioContent, updatePortfolioContent} from "@/lib/api/talent/portfolio/portfolioContent";
import {usePortfolioById} from "@/components/Talent/TalentProfileMainPage/hooks/useGetPortfolioById";

interface IntroProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioId: number | null;
    contentId?: number | null;
}

const VideoPortfolioModal: React.FC<IntroProfileModalProps> = ({
                                                                   isOpen,
                                                                   onClose,
                                                                   portfolioId,
                                                                   contentId,
                                                               }) => {

    const [video, setVideo] = useState<string | null>(null);
    const [previewVideo, setPreviewVideo] = useState<string | null>(null);
    const [youtubeUrl, setYoutubeUrl] = useState<string>('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [videoOption, setVideoOption] = useState<'youtube' | 'upload' | 'none'>(
        'upload'
    );
    const videoRef = useRef<any>(null);
    const [description, setDescription] = useState<string>('');

    const {
        portfolio,
        mutate: mutatePortfolio
    } = usePortfolioById(portfolioId ? portfolioId : undefined);

    useEffect(() => {
        if (!isOpen || !portfolio) return;

        if (!contentId) {
            setVideo('');
            setYoutubeUrl('');
            setDescription('');
            setVideoOption('none');
            setUploadedFile(null);
        } else {
            const videoContent = portfolio.contents.find(
                (item) => item.type === 'Video' && Number(item.id) === Number(contentId)
            );
            console.log('Fetched videoContent:', videoContent);
            if (videoContent) {
                setDescription(videoContent.description || '');
                if (videoContent.status === 'Upload') {
                    setVideo(videoContent.url || '');
                    setVideoOption('upload');
                } else if (videoContent.status === 'Embed') {
                    setYoutubeUrl(videoContent.embedUrl || '');
                    setVideoOption('youtube');
                }
            }
        }
    }, [isOpen, contentId, portfolio]);


    const handleCancel = () => {
        const videoContent = portfolio?.contents.find(
            (item) => item.type === 'Video'
        );

        if (videoContent) {
            setDescription(videoContent.description);
            if (videoContent.status === 'Upload' && videoContent.url) {
                setVideo(videoContent.url);
                setYoutubeUrl('');
                setVideoOption('upload');
            } else if (videoContent.status === 'Embed' && videoContent.embedUrl) {
                setYoutubeUrl(videoContent.embedUrl);
                setVideo('');
                setVideoOption('youtube');
            } else {
                setVideo('');
                setYoutubeUrl('');
                setVideoOption('none');
            }
        } else {
            setVideo('');
            setYoutubeUrl('');
            setVideoOption('none');
            setDescription('');
        }
        setPreviewVideo(null);
        setUploadedFile(null);
        onClose();
    };


    const openUploader = () => {
        if (videoRef.current) {
            videoRef.current.inputRef.current.click();
        }
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
                const updateData: any = {
                    description: description.trim(),
                    status: videoOption === "upload" ? "Upload" : "Embed",
                };

                if (videoOption === "upload" && uploadedFile) {
                    updateData.image = uploadedFile;
                }

                if (videoOption === "youtube" && youtubeUrl.trim()) {
                    updateData.embedUrl = youtubeUrl.trim();
                }

                await updatePortfolioContent(contentId, updateData);
                toast.success("Video updated successfully!");
            } else {
                if (videoOption === "upload") {
                    if (!uploadedFile) {
                        toast.error("Please upload a video file.");
                        return;
                    }
                    await createPortfolioContent({
                        portfolioId,
                        type: "Video",
                        description: description.trim(),
                        status: "Upload",
                        image: uploadedFile,
                    });
                    toast.success("Video uploaded successfully!");
                }

                if (videoOption === "youtube") {
                    if (!youtubeUrl.trim()) {
                        toast.error("Please provide a YouTube URL.");
                        return;
                    }
                    await createPortfolioContent({
                        portfolioId,
                        type: "Video",
                        description: description.trim(),
                        status: "Embed",
                        embedUrl: youtubeUrl.trim(),
                    });
                    toast.success("YouTube video linked successfully!");
                }
            }

            await mutatePortfolio();
            setPreviewVideo(null);
            onClose();
        } catch (error) {
            console.error("Failed to save portfolio content:", error);
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
                    onClick={handleCancel}
                >
                    ✖
                </button>
                <div className="overflow-y-auto flex-1 mt-[37px] ">
                    <h2 className="text-[30px] font-medium text-[#18470D] mb-[27px]">
                        Upload video
                    </h2>

                    <div className=" flex items-start gap-2 mb-[10px]">
                        <div className="w-full">
                            <label
                                htmlFor="youtube"
                                className="block text-[18px] leading-[100%] text-[#545454] ml-[30px] mb-[8px]"
                            >
                                Link to Your YouTube Video
                            </label>
                            <div className=" flex items-center gap-2">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        id="youtube"
                                        name="videoOption"
                                        value="youtube"
                                        checked={videoOption === 'youtube'}
                                        onChange={() => setVideoOption('youtube')}
                                        className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                                    />
                                    <div
                                        className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                                            videoOption === 'youtube'
                                                ? 'bg-[#18470D]'
                                                : 'border-2 border-[#AEB3BC]'
                                        }`}
                                    >
                                        {videoOption === 'youtube' && (
                                            <div className="h-3 w-3 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g. https://www.youtube.com/"
                                    value={youtubeUrl}
                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                    className="w-full p-2 border border-[#AEB3BC] rounded-[12px]"
                                    disabled={videoOption !== 'youtube'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-[20px] text-[#B9B9B9] ">or</div>
                    <div className="flex items-start gap-2 mt-[2px] mb-1">
                        <div className="w-full">
                            <label
                                htmlFor="upload"
                                className="block text-[18px] leading-[100%] text-[#545454] ml-[30px] mb-[8px]"
                            >
                                Video upload
                            </label>
                            <div className="flex items-start gap-2 min-w-full">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        id="upload"
                                        name="videoOption"
                                        value="upload"
                                        checked={videoOption === 'upload'}
                                        onChange={() => setVideoOption('upload')}
                                        className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                                    />
                                    <div
                                        className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                                            videoOption === 'upload'
                                                ? 'bg-[#18470D]'
                                                : 'border-2 border-[#AEB3BC]'
                                        }`}
                                    >
                                        {videoOption === 'upload' && (
                                            <div className="h-3 w-3 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="border-2 border-dashed border-[#AEB3BC] w-full h-[352px] rounded-[12px] flex flex-col justify-center items-center gap-[10px]">
                                    {videoOption === 'upload' && previewVideo ? (
                                      <video
                                        src={previewVideo}
                                        controls
                                        className=" min-w-[325px] max-w-[325px] rounded-[20px] object-cover min-h-[216px] max-h-[216px]"
                                      />
                                    ) : (   <FileUploader
                                        defaultImage="/images/icon-images/film.png"
                                        // acceptFormatText={'MP4'}
                                        accept={{'video/mp4': ['.mp4']}}
                                        // dimensions={{ width: 1440, height: 714 }}
                                        ref={videoRef}
                                        valueImage={previewVideo || video}
                                        onUpload={(file) => {
                                            const videoUrl = URL.createObjectURL(file);
                                            // setVideo(videoUrl);
                                            setPreviewVideo(videoUrl);
                                            setUploadedFile(file);
                                        }}
                                      />
                                    )}


                                    <div className="flex flex-col justify-center items-center gap-[16px] ">
                                        <button
                                            onClick={openUploader}
                                            disabled={videoOption !== 'upload'}
                                            className={`bg-[#CBEC5E] text-[#18470D] w-[200px] font-medium h-[48px] rounded-[49px] hover:bg-[#ACD624] disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            Upload Video
                                        </button>
                                        <p className="text-[#A1A1A1] text-[16px]">Up to 100 MB.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-[20px] mt-[20px]  w-auto ml-[30px] ">
                        <label
                            htmlFor="video-description"
                            className="block text-[18px] leading-[100%] text-[#545454] mb-[8px]"
                        >
                            Description
                        </label>
                        <textarea
                            id="video-description"
                            placeholder="Add a short description about your video"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full  p-2 border border-[#AEB3BC] rounded-[12px]"
                        />
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

export default VideoPortfolioModal;
