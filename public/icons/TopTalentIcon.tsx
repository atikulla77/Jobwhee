import Image from "next/image";
import topTalent from "../images/icon-images/topTalent.png";

export const TopTalentIcon = () => {
  return (
    <Image className=" w-[28px] h-[30px]" src={topTalent} alt="reload icon" />
  );
};
