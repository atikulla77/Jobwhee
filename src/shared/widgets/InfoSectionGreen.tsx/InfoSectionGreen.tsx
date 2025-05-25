import React, { ReactNode } from "react";
import { EditIcon } from "../../../../public/icons/talent-client/editIcon";
import { OrderIcon } from "../../../../public/icons/OrderIcon";
import { PlusIcons } from "../../../../public/icons/PlusIcons";

interface InfoSectionGreenProps {
  children: ReactNode;
  title: string;
  lineWidth: string;
  sectionStyles?: string;
  handleEditClick?: () => void;
  handleAddClick?: () => void;
  handleOrderClick?: () => void;
  editMode?: boolean;
  addMode?: boolean;
  orderMode?: boolean;
  isViewedClient?: boolean;
}

export const InfoSectionGreen: React.FC<InfoSectionGreenProps> = ({
  children,
  title,
  lineWidth,
  sectionStyles,
  handleEditClick,
  handleAddClick,
  handleOrderClick,
  editMode,
  addMode,
  orderMode,
  isViewedClient,
}) => {
  return (
    <section
      className={`infoSectionGreen relative border-[1px] border-[#CBEC5E] rounded-[13px] sm:rounded-[14px] lg:rounded-[16px] p-[14px] sm:p-[20px] lg:p-[28px] ${sectionStyles}`}
    >
      <div>
        <p className="text-[#8A8A8A] text-[16px] sm:text-[18px] lg:text-[16px]">
          {title}
        </p>
        {editMode && (
          <div
            onClick={() => handleEditClick?.()}
            className=" absolute right-11 top-[10px] z-10 cursor-pointer"
          >
            <button className={`${isViewedClient ? "hidden" : "block"}`}>
              <EditIcon />
            </button>
          </div>
        )}
        {orderMode && (
          <div
            onClick={() => handleOrderClick?.()}
            className=" absolute right-11 top-[10px] z-10 cursor-pointer"
          >
            <OrderIcon />
          </div>
        )}
        {addMode && (
          <div
            onClick={() => handleAddClick?.()}
            className=" absolute right-11 top-[10px] z-10 cursor-pointer"
          >
            <PlusIcons />
          </div>
        )}
        <div className="relative mt-[5px] h-[5px]">
          <div className="bg-[#AEB3BC] h-[1px]"></div>
          <div
            className={`h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 -top-[2px] ${lineWidth} `}
          ></div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};
