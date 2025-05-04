import React, { useEffect } from "react";
import { CloseIcon } from "../../../../public/icons/CloseIcon";

interface GlobalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
}

export const GlobalModal: React.FC<GlobalModalProps> = ({
  isOpen,
  onClose,
  children,
  width,
  height,padding = "md:px-[38px] px-[24px] xl:py-[28px] py-[24px]"
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
      document.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = ""; // Reset scroll
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center bg-[#00000069] cursor-default`}
    >
      <div
        className={`${width} ${height} ${padding} bg-white rounded-[30px] relative overflow-hidden`}
      >
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute xl:right-[38px] right-[24px] xl:top-[38px] top-[27px] cursor-pointer z-50"
        >
          <CloseIcon />
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[calc(768px-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
