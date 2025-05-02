import { ReactNode } from "react";
import { EditIcon } from "../../../../public/icons/talent-client/editIcon";

interface InfoSectionGreenProps {
	children: ReactNode;
	title: string;
	lineWidth: string;
	sectionStyles?: string;
	handleEditClick?: () => void;
	editMode?: boolean;
}

export const InfoSectionGreen: React.FC<InfoSectionGreenProps> = ({
	children,
	title,
	lineWidth,
	sectionStyles,
	handleEditClick,
	editMode,
}) => {
	return (
		<div
			className={`relative border-[1px] border-[#CBEC5E] rounded-[13px] sm:rounded-[14px] lg:rounded-[16px] p-[14px] sm:p-[20px] lg:p-[28px] ${sectionStyles}`}>
			<div>
				<p className="text-[#8A8A8A] text-[16px] sm:text-[18px] lg:text-[16px]">
					{title}
				</p>
				{editMode && (
					<div
						onClick={() => handleEditClick?.()}
						className=" absolute right-11 top-[10px] z-10 cursor-pointer">
						<EditIcon />
					</div>
				)}
				<div className="relative mt-[5px] h-[5px]">
					<div className="bg-[#AEB3BC] h-[1px]"></div>
					<div
						className={`h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 -top-[2px] ${lineWidth} `}></div>
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};
