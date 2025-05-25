import Image from "next/image";
import timeIcon from "../images/icon-images/timeIcon.png";

export const TimeIcon = () => {
  return (
    <Image className="h-[16px] w-[16px]" src={timeIcon} alt="reload icon" />
  );
};
