import {ImageIcons} from "../../../../../public/icons/talent-client/imageicons";
import {VideoIcons} from "../../../../../public/icons/talent-client/VideoIcons";
import React, {useState, useRef, useEffect} from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {CloseIcon} from "../../../../../public/icons/CloseIcon copy";
import {PhotoPlaceholderIcon} from "../../../../../public/icons/PhotoPlaceholderIcon";
import PortfolioMediaItem from "./PortfolioMediaItem";

import SkillsSelect from "@/shared/widgets/SkillsSelect/SkillsSelect";
import {toast, ToastContainer} from "react-toastify";
import {
    createPortfolio, CreatePortfolioData,
    updatePortfolio,
    UpdatePortfolioData, updatePortfolioStatus,
} from '@/lib/api/talent/portfolio/portfolioApi';
import VideoPortfolioModal from "@/components/Talent/TalentProfileMainPage/Portfolio/PortfolioVideoModal";
import ImagePortfolioModal from "@/components/Talent/TalentProfileMainPage/Portfolio/PortfolioImageModal";
import {usePortfolioById} from "@/components/Talent/TalentProfileMainPage/hooks/useGetPortfolioById";
import Image from "next/image";
import {deletePortfolioContent} from "@/lib/api/talent/portfolio/portfolioContent";
import {usePortfoliosByStatus} from "@/components/Talent/TalentProfileMainPage/hooks/usePortfoliosByStatus";

type MediaFile = {
    id: string;
    url?: string;
    embedUrl?: string;
    type: 'Image' | 'Video';
};


export const PortfolioEditPopUp = ({
                                       closePopup,
                                       initialData,
                                       portfolioType
                                   }: {
    closePopup: () => void;
    portfolioType: "publish" | "draft";
    initialData?: {
        id?: number;
        mainImage?: string;
        title?: string;
        description?: string;
        role?: string;
        skills?: number[];
        contents?: any[];

    };
}) => {

    const [title, setTitle] = useState(initialData?.title || "");
    const [role, setRole] = useState(initialData?.role || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [portfolioSkills, setPortfolioSkills] = useState<number[]>(initialData?.skills || []);
    const [previewMode, setPreviewMode] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [createdPortfolioId, setCreatedPortfolioId] = useState<number | null>(null);
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
    const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedContentId, setSelectedContentId] = useState<number | null>(null);
    const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
    const [allMediaFiles, setAllMediaFiles] = useState<MediaFile[]>([]);

    const {portfolio, mutate: mutatePortfolio} = usePortfolioById(createdPortfolioId ?? initialData?.id);
    const {mutatePortfoliosByStatus} = usePortfoliosByStatus(portfolioType);

    const imageUploadRef = useRef<HTMLInputElement>(null);
    const videoUploadRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        if (
            title &&
            description &&
            portfolioSkills.length > 0 &&
            selectedImageFile &&
            !hasSubmitted
        ) {
            handleSavePortfolio();
        }
    }, [title, role, description, portfolioSkills, selectedImageFile, hasSubmitted]);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setRole(initialData.role || "");
            setDescription(initialData.description || "");
            setPortfolioSkills(initialData.skills || []);
            setSelectedImagePreview(initialData.mainImage || null);
            setCreatedPortfolioId(initialData.id || null);
        }
    }, [initialData]);

    useEffect(() => {
        if (portfolio) {
            setTitle(portfolio.title || "");
            setRole(portfolio.role || "");
            setDescription(portfolio.description || "");
            setCreatedPortfolioId(portfolio.id || null);

            const skillIds = portfolio.skills?.map((skill) => skill.id) || [];
            setPortfolioSkills(skillIds);

            if (portfolio.mainImage) {
                const fullUrl = portfolio.mainImage.startsWith("http")
                    ? portfolio.mainImage
                    : `${process.env.NEXT_PUBLIC_API_URL}${portfolio.mainImage}`;
                setSelectedImagePreview(fullUrl);
            } else {
                setSelectedImagePreview(null);
            }

            const serverMedia = (portfolio.contents || []).map((item: any) => ({
                id: item.id.toString(),
                url: item.url || undefined,
                embedUrl: item.embedUrl || '',
                type: item.type,
                description: item.description || ''
            }));
            setAllMediaFiles(serverMedia);
        }
    }, [portfolio]);

    useEffect(() => {
        const updatePortfolio = async () => {
            if (portfolioSkills.length) {
                try {
                    await handleUpdatePortfolio();
                } catch (error) {
                    console.error("Error updating portfolio:", error);
                }
            }
        };
        updatePortfolio();
    }, [portfolioSkills]);


    const handleVideoModalClick = () => {
        setIsVideoModalOpen(true);
    };
    const handleImageModalClick = () => {
        setIsImageModalOpen(true);
    };

    const handlePreviewMode = (enabled: boolean) => {
        setPreviewMode(enabled);
    };
    const handleSavePortfolio = async () => {
        try {
            setHasSubmitted(true);

            const data: CreatePortfolioData = {
                image: selectedImageFile!,
                title,
                description,
                skills: portfolioSkills,
                role,
                isDraft: true,
            };

            const response = await createPortfolio(data);
            const newId = response.data.id;

            if (newId) {
                setCreatedPortfolioId(newId);
                await mutatePortfolio();
                // toast.success("Portfolio created successfully!");
                setTimeout(() => toast.success("Portfolio published successfully!"), 100);
            } else {
                throw new Error("Portfolio ID not returned.");
            }
        } catch (error) {
            console.error("Failed to create portfolio:", error);
            toast.error("Failed to update your portfolio.");
            setHasSubmitted(false);
        }
    };


    // const handleUpload = (
    //     e: React.ChangeEvent<HTMLInputElement>,
    //     type: "Image" | "Video"
    // ) => {
    //     const file = e.target.files?.[0];
    //     if (!file) return;
    //
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         setMediaFiles((prev) => [
    //             ...prev,
    //             {id: crypto.randomUUID(), url: reader.result as string, type},
    //         ]);
    //     };
    //     reader.readAsDataURL(file);
    // };

    const handleUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "Image" | "Video"
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setAllMediaFiles((prev) => [
                ...prev,
                {id: crypto.randomUUID(), url: reader.result as string, type},
            ]);
        };
        reader.readAsDataURL(file);
    };

    const handleUpdatePortfolio = async (fieldsToUpdate: UpdatePortfolioData = {}) => {
        if (!createdPortfolioId) return;

        const filteredFields: UpdatePortfolioData = {};

        (Object.keys(fieldsToUpdate) as (keyof UpdatePortfolioData)[]).forEach((key) => {
            const newValue = fieldsToUpdate[key];
            const currentValue = portfolio?.[key as keyof typeof portfolio];

            if (key === "skills") {
                const currentSkills = (portfolio?.skills || []).map((s: any) => s.id);
                if (JSON.stringify(newValue) !== JSON.stringify(currentSkills)) {
                    filteredFields[key] = newValue as number[];
                }
            } else if (key === "image") {
                if (newValue) {
                    filteredFields[key] = newValue as File;
                }
            } else if (key === "title" || key === "description" || key === "role") {
                if (JSON.stringify(newValue) !== JSON.stringify(currentValue)) {
                    filteredFields[key] = newValue as string;
                }
            } else if (key === "isDraft") {
                if (newValue !== currentValue) {
                    filteredFields[key] = newValue as boolean;
                }
            }
        });

        if (Object.keys(filteredFields).length === 0) return;

        try {
            await updatePortfolio(createdPortfolioId, filteredFields);
            await mutatePortfolio();
            toast.success("Portfolio updated successfully!");
        } catch (error) {
            console.error("Failed to update portfolio:", error);
            toast.error("Failed to update your portfolio.");
        }
    };
    const handleDeleteContent = async (id: string) => {
        const isServerItem = !isNaN(Number(id));
        if (isServerItem) {
            try {
                await deletePortfolioContent(Number(id));
                await mutatePortfolio();
            } catch (err) {
                console.error("Error deleting:", err);
            }
        } else {
            setMediaFiles((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: any) => {
        const {active, over} = event;
        if (!over || active.id === over.id) return;

        const oldIndex = allMediaFiles.findIndex((item) => item.id === active.id);
        const newIndex = allMediaFiles.findIndex((item) => item.id === over.id);

        setAllMediaFiles((items) => arrayMove(items, oldIndex, newIndex));
    };

    const handleSaveAsDraft = async () => {
        if (!createdPortfolioId) {
            toast.warning("Please first create the portfolio.");
            return;
        }

        try {
            await updatePortfolioStatus(createdPortfolioId, true);
            await mutatePortfolio();
            await mutatePortfoliosByStatus();
            toast.success(`Portfolio saved as draft.`);
            closePopup();
        } catch (error) {
            console.error("Failed to save as draft:", error);
            toast.error("Failed to update the portfolio status.");
        }
    };

    const handlePublishPortfolio = async () => {
        if (!createdPortfolioId) {
            toast.warning("Please first create the portfolio.");
            return;
        }

        try {
            await updatePortfolioStatus(createdPortfolioId, false);
            await mutatePortfolio();
            await mutatePortfoliosByStatus();
            toast.success("Portfolio published successfully!");
            closePopup();
        } catch (error) {
            console.error("Failed to publish portfolio:", error);
            toast.error("Failed to update the portfolio status.");
        }
    };


    return (
        <section className="fixed bg-white w-[100vw] h-screen z-50 top-0 left-0 overflow-y-scroll">
            <ToastContainer position="top-center"/>
            <div
                className=" sm:px-[40px] 2xl:px-0 lg:max-w-[1280px] 2xl:max-w-[1472px] w-full mx-auto lg:mt-[47px] 2xl:mt-[57px] sm:mt-[46px] mt-[26px]">
                <div className="flex justify-between px-[20px] sm:px-0">
                    <p className="text-[20px] sm:text-[30px] text-[#18470D] font-medium">
                        Showcase your work
                    </p>
                    <div onClick={() => closePopup()} className={`hover:cursor-pointer`}>
                        <CloseIcon/>
                    </div>
                </div>

                <div
                    className=" px-5 sm:px-0 justify-center flex flex-col lg:flex-row lg:flex w-full lg:justify-between mt-[24px] 2xl:mt-[38px] sm:mt-[32px]">
                    <div className=" w-full lg:max-w-[595px] 2xl:max-w-[595px] text-[16px] sm:text-[18px]">
                        <div>

                            {!previewMode && (
                                <>
                                    <p className="text-[#545454]">Job Title</p>
                                    <input
                                        className="outline-none text-[14px] sm:text-[16px] lg:max-w-[595px] h-[42px] w-full border border-[#AEB3BC] rounded-[12px] mt-[4px] sm:mt-2 pl-2"
                                        placeholder="e.g. Poster Design"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        onBlur={(e) => {
                                            const newTitle = e.target.value;
                                            setTitle(newTitle);
                                            handleUpdatePortfolio({title: newTitle});
                                        }}
                                    />
                                </>
                            )}
                        </div>
                        <div className="mt-[16px] 2xl:mt-[20px]">
                            {previewMode ? (
                                <p>
                                    <span className="text-[#545454]">My Role: </span>
                                    <span>{role}</span>
                                </p>
                            ) : (
                                <>
                                    <p>Your Role(optional)</p>
                                    <input
                                        className="outline-none text-[14px] sm:text-[16px] lg:max-w-[595px] h-[42px] w-full border border-[#AEB3BC] rounded-[12px] mt-[4px] sm:mt-2 pl-2"
                                        placeholder="e.g. Graphic Designer"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        onBlur={(e) => {
                                            const newRole = e.target.value;
                                            setRole(newRole);
                                            handleUpdatePortfolio({role: newRole});
                                        }}
                                    />
                                </>
                            )}
                        </div>

                        <div className="mt-[16px] 2xl:mt-[20px]">
                            {previewMode ? (
                                <>
                                    <p className="text-[#545454] text-[18px]">Job description</p>
                                    <p className="text-[16px] text-[#242524] mt-[18px]">
                                        {description}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>Job description</p>
                                    <textarea
                                        className="outline-none text-[14px] sm:text-[16px] lg:max-w-[595px] h-[146px] w-full border border-[#AEB3BC] rounded-[12px] p-[10px] mt-[4px] sm:mt-[10px]"
                                        placeholder="Describe your job"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        onBlur={(e) => {
                                            const newDescription = e.target.value;
                                            setDescription(newDescription);
                                            handleUpdatePortfolio({description: newDescription});
                                        }}
                                    ></textarea>
                                </>
                            )}
                        </div>

                        <div className="mt-[10px] sm:mt-[7px] lg:mt-[6px] 2xl:mt-[12px]">
                            <p className="text-[#545454]">Skills</p>
                            <SkillsSelect
                                previewMode={previewMode}
                                selectedSkills={portfolioSkills}
                                setSelectedSkills={(skills: number[] | ((prev: number[]) => number[])) => {
                                    const resolvedSkills = typeof skills === "function" ? skills(portfolioSkills) : skills;
                                    setPortfolioSkills(resolvedSkills);
                                    handleUpdatePortfolio({skills: resolvedSkills});
                                }}
                                height="80px"
                                borderColor="#AEB3BC"
                            />
                        </div>

                        <div className="mt-[17px] sm:mt-[16px] 2xl:mt-[20px]">
                            <p className="text-[#545454]">Job cover</p>
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
                                            handleUpdatePortfolio({image: file});
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                ref={fileInputRef}
                                className="hidden"
                            />
                            <div
                                className={`relative lg:min-w-[595px] min-h-[270px] lg:min-h-[386px] flex items-center justify-center flex-col rounded-[12px] mt-[7px] lg:mt-[7px] 2xl:mt-[11px] sm:pt-[4px] lg:sm:pt-[21px] 2xl:pt-0 lg:pt-0 ${
                                    previewMode
                                        ? ' w-fit '
                                        : ` w-full ${selectedImagePreview ? "border border-solid border-[#AEB3BC]" : "border border-dashed border-[#AEB3BC] "}  `
                                }`}>
                                {selectedImagePreview ? (
                                    <div
                                        className="flex flex-col items-center justify-center 2xl:mt-[18px] 2xl:mb-[24px] gap-[20px]">
                                        <Image
                                            width={421}
                                            height={274}
                                            src={selectedImagePreview}
                                            alt="Preview"
                                            className="object-cover 2xl:w-[421px] 2xl:h-[274px] lg:w-[418px] lg:h-[272px] sm:w-[343px] sm:h-[223px] w-[277px] h-[180px] rounded-[12px] "
                                        />

                                        {!previewMode && (
                                            <button
                                                onClick={() => fileInputRef.current?.click()}
                                                className="flex justify-center items-center w-[212px] h-[48px] border-[1.03px] text-[#18470D] font-medium border-[#CCCCCC] rounded-[50.34px] "
                                            >
                                                Upload new photo
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <div
                                            className="relative w-[92px] h-[86px] flex justify-center items-center lg:mt-[4px] 2xl:mt-[28px] border border-dashed border-[#AEB3BC] rounded-[5px]">
                                            <PhotoPlaceholderIcon/>
                                        </div>
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="max-w-[195px] mt-[16px] 2xl:mt-[15px] text-[16px] w-full h-12 cursor-pointer rounded-[50px] bg-[#CBEC5E] flex items-center justify-center  text-[#18470D] font-medium  hover:bg-[#ACD624] "
                                        >
                                            Upload Image
                                        </button>
                                        <div className="text-[16px] text-[#A1A1A1] text-center mt-[16px]">
                                            <p>Minimum size of “808x632px”</p>
                                            <p className="mt-[5px]">GIF files will not animate</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[540px] 2xl:max-w-[751px]">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <SortableContext
                                items={allMediaFiles.map((file) => file.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                <div className="flex flex-col">
                                    {allMediaFiles.map((file, index) => (
                                        <PortfolioMediaItem
                                            key={file.id}
                                            file={file}
                                            index={index}
                                            mediaFiles={allMediaFiles}
                                            setMediaFiles={setAllMediaFiles}
                                            previewMode={previewMode}
                                            onEdit={(file) => {
                                                const parsedId = Number(file.id);
                                                if (!isNaN(parsedId)) setSelectedContentId(parsedId);
                                                if (file.type === 'Image') setIsImageModalOpen(true);
                                                else setIsVideoModalOpen(true);
                                            }}
                                            onDelete={handleDeleteContent}
                                        />
                                    ))}
                                </div>
                            </SortableContext>
                        </DndContext>
                        {!previewMode && (
                            <div
                                className={`relative 2xl:max-w-[751px] lg:max-w-[449px] min-h-[190px]   min-w-full sm:min-h-[270px] 2xl:pt-[8px] border border-dashed border-[#AEB3BC] rounded-[20px]  flex flex-col items-center justify-center ${
                                    mediaFiles.length
                                        ? 'mt-[24px] sm:mt-[20px]'
                                        : 'sm:mt-[16px] mt-[21px] lg:mt-[33px] 2xl:mt-0'
                                }`}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="flex gap-[61px] lg:gap-[59px] 2xl:gap-[53px]">
                                        <div
                                            onClick={() => handleImageModalClick()}
                                            className="cursor-pointer"
                                        >
                                            <ImageIcons/>
                                        </div>
                                        <div
                                            onClick={() => handleVideoModalClick()}
                                            className="cursor-pointer"
                                        >
                                            <VideoIcons/>
                                        </div>
                                    </div>
                                    <p className="text-[#545454] text-[20px] font-medium mt-[24px] sm:mt-[42px] lg:mt-[48px] 2xl:mt-[55px]">
                                        Upload Content
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div
                    className="flex border-t border-[#18470D] mx-[20px] sm:mx-0 sm:mt-[36px] mt-[66px] 2xl:mb-[24px] lg:mb-[46px] sm:mb-[36px] mb-[33px] 2xl:pt-[30px] lg:pt-[16px] sm:pt-[24px] pt-[16px]">
                    {previewMode && (
                        <button
                            onClick={() => handlePreviewMode(false)}
                            className="text-[#18470D] text-[16px] font-medium w-[220px] h-[51px] border border-[#CCCCCC] rounded-[49px] hover:bg-gray-100"
                        >
                            Back
                        </button>
                    )}
                    <div className="ml-auto flex flex-wrap justify-center sm:justify-end gap-[8px] sm:gap-[20px]">
                        <button
                            onClick={handleSaveAsDraft}
                            className="text-[#18470D] text-[16px] w-[150px] h-[42px] sm:w-[220px] sm:h-[48px] rounded-[49px] font-medium cursor-pointer hover:bg-gray-100">
                            Save as draft
                        </button>
                        <button
                            onClick={previewMode ? handlePublishPortfolio : () => handlePreviewMode(true)}
                            className="rounded-[49px] w-[150px] h-[42px] sm:w-[220px] sm:h-[48px] bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] font-medium cursor-pointer"
                        >
                            {previewMode ? 'Publish' : 'Preview'}
                        </button>

                    </div>
                </div>
            </div>

            <input
                type="file"
                accept="image/*"
                ref={imageUploadRef}
                onChange={(e) => handleUpload(e, "Image")}
                className="hidden"
            />
            <input
                type="file"
                accept="video/*"
                ref={videoUploadRef}
                onChange={(e) => handleUpload(e, "Video")}
                className="hidden"
            />
            <VideoPortfolioModal
                portfolioId={createdPortfolioId}
                isOpen={isVideoModalOpen}
                onClose={() => {
                    setSelectedContentId(null);
                    setIsVideoModalOpen(false);
                }}
                contentId={selectedContentId ?? null}
            />
            <ImagePortfolioModal
                portfolioId={createdPortfolioId}
                isOpen={isImageModalOpen}
                onClose={() => {
                    setSelectedContentId(null);
                    setIsImageModalOpen(false);
                }}
                contentId={selectedContentId}
            />
        </section>
    );
};
