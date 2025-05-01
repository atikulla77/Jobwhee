import Image from "next/image";
import reloadIcon from "/public/images/icon-images/ReloadIcon.png";

export const ReloadIcon = () => {
    return <Image src={reloadIcon} alt="reload icon" />;
};
