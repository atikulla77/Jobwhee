import React, {useEffect, useRef, useState} from 'react';
import {useTalentProfile} from '@/components/Talent/TalentProfileMainPage/hooks/useTalentProfile';
import FileUploader from '@/components/FileUploader';
import {
    updateTalentVideo,
    updateTalentVideoStatus,
    UpdateVideoStatus,
} from '@/lib/api/talent/talentById/talentIntroSection/postUpdateIntroVideoApi';
import {toast, ToastContainer} from 'react-toastify';

interface IntroProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VideoProfileModal: React.FC<IntroProfileModalProps> = ({
                                                                 isOpen,
                                                                 onClose,
                                                             }) => {
    const {user, mutate} = useTalentProfile();
    const [video, setVideo] = useState<string | null>(null);

    const [previewVideo, setPreviewVideo] = useState<string | null>(null);
    const [youtubeUrl, setYoutubeUrl] = useState<string>('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [videoOption, setVideoOption] = useState<'youtube' | 'upload' | 'none'>(
        'upload'
    );
    const videoRef = useRef<any>(null);

    useEffect(() => {
        if (isOpen && user) {
            if (user.video) {
                setVideo(user.video);
            }
            if (user.embedUrl) {
                setYoutubeUrl(user.embedUrl);
            }
            if (user.videoStatus === 'Direct') {
                setVideoOption('upload');
            } else if (user.videoStatus === 'Embed' && user.embedUrl) {
                setYoutubeUrl(user.embedUrl);
                setVideoOption('youtube');
            } else {
                setVideoOption('none');
            }
        }
    }, [isOpen, user]);

    const handleCancel = () => {
        setVideo(user?.video || '');
        setYoutubeUrl(user?.embedUrl || '');
        setUploadedFile(null);
        setPreviewVideo(null);
        setVideoOption(user?.videoStatus === 'Embed' ? 'youtube' : 'upload');
        onClose();
    };

    const openUploader = () => {
        if (videoRef.current) {
            videoRef.current.inputRef.current.click();
        }
    };

    const handleSave = async () => {
        const videoStatus: UpdateVideoStatus['videoStatus'] =
            videoOption === 'upload'
                ? 'Direct'
                : videoOption === 'youtube'
                    ? 'Embed'
                    : 'Hidden';
        setIsSaving(true);

        try {
            if (videoStatus === 'Direct' && uploadedFile) {
                await updateTalentVideo({
                    videoStatus: 'Direct',
                    image: uploadedFile,
                });
                toast.success('Video uploaded successfully!');
            }

            if (videoStatus === 'Embed') {
                if (!youtubeUrl.trim()) {
                    toast.error('Please provide a YouTube URL.');
                    return;
                }

                await updateTalentVideo({
                    videoStatus: 'Embed',
                    embedUrl: youtubeUrl.trim(),
                });

                toast.success('YouTube video linked successfully!');
                console.log('Link video');
            }

            await updateTalentVideoStatus({videoStatus});
            toast.success('Video status updated successfully!');
            console.log('Status updated');

            await mutate();
            setPreviewVideo(null);
        } catch (error) {
            console.error('Failed to update video or status', error);
            toast.error('Failed to update video. Please try again.');
        } finally {
            setIsSaving(false);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ToastContainer position="top-right"/>
            <div
                className="bg-white w-[90%] md:w-[80%] max-w-[878px] rounded-[30px] shadow-lg relative min-h-[860px] max-h-[860px] flex flex-col overflow-hidden px-[5px] md:px-[38px] ">
                <button
                    className="absolute top-6 right-4 text-gray-500 text-lg"
                    onClick={handleCancel}
                >
                    ✖
                </button>
                <div className="overflow-y-auto flex-1 mt-[37px]">
                    <h2 className="text-[30px] font-medium text-[#18470D] mb-[37px]">
                        Add video introduction
                    </h2>

                    <div className=" flex items-start gap-2 mb-[20px]">
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
                                        className={` flex h-[24px] w-[24px] items-center justify-center rounded-full ${
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
                    <div className="text-center text-[20px] text-[#B9B9B9] mb-4">or</div>
                    <div className="flex items-start gap-2 mt-[20px] mb-4">
                        <div className="w-full">
                            <label
                                htmlFor="upload"
                                className="block text-[18px] leading-[100%] text-[#545454] ml-[30px] mb-[8px]"
                            >
                                Upload video
                            </label>
                            <div className="flex items-start gap-2 min-w-full  pr-[40px]">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        id="upload"
                                        name="videoOption"
                                        value="upload"
                                        checked={videoOption === 'upload'}
                                        onChange={() => setVideoOption('upload')}
                                        className="absolute h-[24px] w-[24px]cursor-pointer opacity-0"
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
                                    className="border-2 border-dashed border-[#AEB3BC] min-w-full h-[352px] rounded-[12px] flex flex-col justify-center items-center gap-[10px]">
                                    {videoOption === 'upload' && previewVideo ? (
                                        <video
                                            src={previewVideo}
                                            controls
                                             className=" min-w-[325px] max-w-[325px] rounded-[20px] object-cover min-h-[216px] max-h-[216px]"
                                        />
                                    ) : (
                                        <FileUploader
                                            defaultImage="/images/icon-images/film.png"
                                            accept={{'video/mp4': ['.mp4']}}
                                            ref={videoRef}
                                            valueImage={previewVideo || video}
                                            onUpload={(file) => {
                                                const videoUrl = URL.createObjectURL(file);
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

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="radio"
                            id="none"
                            name="videoOption"
                            value="none"
                            checked={videoOption === 'none'}
                            onChange={() => setVideoOption('none')}
                            className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                        />
                        <div
                            className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                                videoOption === 'none'
                                    ? 'bg-[#18470D]'
                                    : 'border-2 border-[#AEB3BC]'
                            }`}
                        >
                            {videoOption === 'none' && (
                                <div className="h-3 w-3 rounded-full bg-white"></div>
                            )}
                        </div>
                        <label htmlFor="none" className="text-sm text-gray-500">
                            Don&#39;t show (None of them are showing on the profile.)
                        </label>
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
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoProfileModal;
