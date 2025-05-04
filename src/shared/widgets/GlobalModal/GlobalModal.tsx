// components/GlobalModal.tsx
import React, { useEffect } from "react";
import { CloseIcon } from "../../../../public/icons/CloseIcon";

interface GlobalModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	width?: string;
	height?: string;
}

export const GlobalModal: React.FC<GlobalModalProps> = ({
	isOpen,
	onClose,
	children,
	width,
	height,
}) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.addEventListener("keydown", handleEsc);
		}
		return () => document.removeEventListener("keydown", handleEsc);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className={`${
				isOpen ? "flex" : "hidden"
			} w-full fixed left-0 top-0 h-[100vh] z-50 justify-center items-center bg-[#00000069]`}>
			<div
				className={`${width}   ${height} md:px-[38px] px-[24px] xl:py-[28px] py-[24px] bg-white rounded-[30px] relative overflow-hidden`}>
				{/* Close Button */}
				<div
					onClick={onClose}
					className="absolute xl:right-[38px] right-[24px] xl:top-[38px] top-[27px] cursor-pointer z-50">
					<CloseIcon />
				</div>

				{/* Scrollable content */}
				<div className="overflow-y-auto max-h-[calc(768px-80px)] pr-2">
					{children}
				</div>
			</div>
		</div>
	);
};
