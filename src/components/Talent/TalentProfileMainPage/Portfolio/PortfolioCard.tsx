import React from "react";
import Image from "next/image";
import ThreeDotDropdown from "@/shared/widgets/ThreeDotDropdown/ThreeDotDropdown";

const PortfolioCard = ({
                           imageSrc,
                           description,
                           onEdit,
                           onDelete,
                           onMoveToDraft,
                           isViewedClient,
                           isDraft
                       }: {
    imageSrc?: string;
    description: string;
    onEdit?: () => void;
    onDelete?: () => void;
    onMoveToDraft?: () => void;
    isViewedClient: boolean;
    isDraft?: boolean;
}) => {


    return (
        <div
            className={`flex h-[200px] w-[232.13px] relative flex-col items-start justify-start gap-[15px] rounded-[16px] `}
        >
            {!isViewedClient && (<div className="absolute right-[5px] top-[5px]">
                <ThreeDotDropdown>
                    {(closeDropdown) => (
                        <ul className="text-[#545454] text-[16px] font-medium flex flex-col gap-[8px]">
                            <li className="cursor-pointer" onClick={() => {
                                onEdit?.();
                                closeDropdown();
                            }}>Edit
                            </li>
                            <li className="cursor-pointer" onClick={() => {
                                onMoveToDraft?.();
                                closeDropdown();
                            }}> {isDraft ? "Move to Published" : "Move to Drafts"}
                            </li>
                            <li className="cursor-pointer" onClick={() => {
                                onDelete?.();
                                closeDropdown();
                            }}>Delete
                            </li>
                        </ul>
                    )}
                </ThreeDotDropdown>
            </div>)}

            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt="Portfolio"
                    width={232.13}
                    height={157}
                    className="rounded-[16px] max-w-[232.13px] max-h-[157px] min-h-[157px]"
                />
            ) : (
                <div className="w-[232.13px] h-[158px] bg-gray-200 rounded-[16px] flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                </div>
            )}

            <h2 className="text-[20px] font-medium text-[#18470D]">{description}</h2>
        </div>
    );
};

export default PortfolioCard;
