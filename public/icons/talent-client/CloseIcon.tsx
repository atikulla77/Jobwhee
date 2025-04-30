import Image from "next/image";
import closeIcon from "/public/images/icon-images/EndIcon.png";

export const CloseIcon = () => {
	return <Image src={closeIcon} alt="close icon" />;
};
