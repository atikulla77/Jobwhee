import React from "react";
import Image from "next/image";

interface DropdownContainerProps {
  children: React.ReactNode;
}

export const NotificationDropdownContainer = ({ children }: DropdownContainerProps) => {
  return (
    <div
      className={`shadow-[0px_11px_28.3px_0px_#617CAE21] lg:px-[9px] absolute rounded-[20px] min-h-[300px] -right-[85px] mt-[17px] flex w-[595px] flex-col border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="absolute right-[80px] -top-[12px]">
        <Image
          alt="header-icon"
          src={"/images/icon-images/notifyHeaderIcon.png"}
          width={32}
          height={13}
        />
      </div>
      {children}
    </div>
  );
};