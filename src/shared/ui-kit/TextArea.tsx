import { FC } from "react";

interface TextAreaProps {
	placeholder: string;
	width: string;
	height: string;
	responsiveWidthHeight: string;
	onChange?: (value: string) => void;
}

export const TextArea: FC<TextAreaProps> = ({
	placeholder = "Lorem impsum...",
	width = "335px",
	height = "146px",
	responsiveWidthHeight,
	onChange,
}) => {
	return (
		<div>
			<textarea
				onChange={e => {
					onChange?.(e.target.value);
				}}
				placeholder={placeholder}
				style={{ width: width, height: height }}
				className={`${responsiveWidthHeight} min-h-[146px] border md:text-base text-[14px] placeholder:text-[#8B939F] text-[#8B939F] border-[#AEB3BC] rounded-[12px] px-[10px] py-[10px]`}
			/>
		</div>
	);
};
