import Image from "next/image";
import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width: string;
  height: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, width, height }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } w-full absolute left-0 top-0 h-[100vh] z-50 justify-center items-center bg-[#00000069]`}
    >
      <div
        className={`xl:w-[${width}] md:w-[556px] w-[335px] ${height} md:px-[38px] px-[24px] xl:py-[28px] py-[24px] bg-white rounded-[30px] relative`}
      >
        <div onClick={onClose} className="absolute xl:right-[38px] right-[24px] xl:top-[38px] top-[27px] cursor-pointer z-50">
          <Image
            src={"/images/icon-images/xicon.png"}
            width={24}
            height={24}
            alt=""
            className="rounded-[50%]"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
