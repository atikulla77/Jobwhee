import {jobData} from "@/components/Talent/JobApply/dummyJobData/jobData";
import {OpenNewTab} from "../../../../public/icons/OpenNewTab";
import {CloseIcon} from "../../../../public/icons/talent-client/CloseIcon";
import {JobDetailsLayout} from "@/components/Talent/JobApply/job-details-layout/JobDetailsLayout";

interface JobDetailsPopupProps {
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobDetailsPopup: React.FC<JobDetailsPopupProps> = ({
                                                                    setPopupVisible,
                                                                }) => {
    return (
        <div
            className="flex items-end w-[100vw] h-[100vh] bg-[rgba(0,_0,_0,_0.42)] z-50 fixed top-0 left-0  overflow-hidden pt-[80px] sm:pt-0">
            <div
                className="w-full flex justify-end h-full max-h-[1055px] sm:max-h-[100vh] lg:max-h-[786px] 2xl:max-h-[964px] animate-slideIn ">
                <div
                    className="bg-white p-[20px] pb-[40px] sm:p-[24px_20px_24px_40px] rounded-tl-[20px] sm:rounded-tl-[50px] max-h-[100vh] lg:max-h-[786px] 2xl:max-h-[964px] lg:max-w-[1250px] 2xl:max-w-[1533px] sm:max-w-[820px] w-full">
                    <div className="w-full flex justify-between">
                        <div
                            className="cursor-pointer"
                            onClick={() => setPopupVisible(false)}
                        >
                            <CloseIcon/>
                        </div>
                        <div
                            className="flex items-center gap-[4px] cursor-pointer 2xl:mr-[18px] lg:mr-[12px] sm:mr-[28px]">
                            <OpenNewTab/>
                            <span
                                className="text-[#18470D] text-[12px]">
                Open in a new tab
              </span>
                        </div>
                    </div>
                    <hr className="h-[1px] text-[#EAEAEA] mt-[24px]"/>
                    <div className="py-[19px] sm:py-[44px] overflow-y-auto h-full">
                        <div className=" overflow-y-auto pr-[10px]">
                            <JobDetailsLayout customStyles=" !px-0 " jobData={jobData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
