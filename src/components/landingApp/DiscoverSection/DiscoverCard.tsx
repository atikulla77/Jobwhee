import Image from "next/image";
import {RowIcon} from "../../../../public/icons/talent-client/RowIcon";
import Link from "next/link";

export const DiscoverCard = ({imgSrc, description}) => {
    const truncatedText =
        description.length > 25 ? `${description.slice(0, 25)}...` : description;

    return (
        <Link href={'/auth/signin'}>
            <div className="max-w-[223px] w-full relative group ">
                <Image
                    src={imgSrc}
                    width={223}
                    height={262}
                    className="h-[262px] object-cover rounded-[38px] group-hover:rotate-[1deg] duration-300"
                    alt=""
                />

                <div
                    className="w-full h-[56px]  flex justify-between bg-white rounded-[80px] items-center pl-[18px] pr-1 mt-[11px] relative">
                    <div className="max-w-[75%] overflow-hidden ">
                        <p className="text-sm font-bold truncate">{truncatedText}</p>

                        {description.length > 18 && (
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto min-w-[200px] mt-1 bg-black text-white text-xs p-2 rounded-md max-w-[250px] shadow-lg z-[999] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                                {description}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CBEC5E]">
                        <RowIcon/>
                    </div>
                </div>
            </div>
        </Link>
    );
};
