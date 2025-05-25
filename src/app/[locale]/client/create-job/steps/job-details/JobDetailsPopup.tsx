import { CloseIcon } from "../../../../../../../public/icons/talent-client/CloseIcon";
import Link from "next/link";
import { PopupCheckIcon } from "../../../../../../../public/icons/PopupCheckIcon";
import { useRouter } from "next/navigation";

interface PopupProps {
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleChangeStep: (step: number) => void;
}

export const JobDetailsPopup: React.FC<PopupProps> = ({
    setPopupVisible,
    handleChangeStep,
}) => {
    const router = useRouter()

    return (
        <div
            className="w-[100vw] h-[100vh] bg-[rgba(0,_0,_0,_0.42)] z-10 fixed top-0 left-0 flex justify-center items-center p-[20px]">
            <div
                className="max-w-[637px] h-[390px] bg-white w-full rounded-[20px] flex flex-col items-center pt-[20px] sm:pt-[35px] px-[25px]">
                <div className="w-full flex justify-end mb-[20px] sm:mb-[10px]">
                    <div
                        className="cursor-pointer"
                        onClick={() => setPopupVisible(false)}
                    >
                        <CloseIcon />
                    </div>
                </div>
                <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px]">
                    <PopupCheckIcon />
                </div>
                <span
                    className="text-[16px] sm:text-[20px] lg:text-[26px] text-black font-medium mt-[6px] sm:mt-[27px]">
                    Job created successfully!
                </span>
                <p className="text-[14px] lg:text-[16px] text-[#545454] max-w-[390px] text-center mt-[10px]">
                    Your job has been created successfully. You can proceed with the next
                    steps.
                </p>
                <div className="flex gap-[16px] mt-[30px] sm:mt-[47px] justify-center flex-wrap">
                    <Link
                        href="/client"
                        className="w-[190px] h-[48px] text-[#18470D] flex items-center justify-center text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
                    >
                        Back to Home
                    </Link>
                    <button
                        onClick={() => {
                            handleChangeStep(0);
                            router.push("/client/create-job");
                        }}
                        className="w-[190px] h-[48px] text-[#18470D]  flex items-center justify-center text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]"
                    >
                        Create a new job
                    </button>
                </div>
            </div>
        </div>
    );
};
