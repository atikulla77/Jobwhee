import React, {useState} from "react";
import Image from "next/image";
import UploadPortfolioImageModal
    from "@/components/Talent/TalentProfileMainPage/TalentProfileTopSection/ProfileImageModal";

const TalentProfileTopSection = ({
                                     user,
                                     onProfileImageUpdate,
                                     isViewedClient,
                                     setIsViewedClient,
                                     talentSide = true
                                 }: {
    user: any;
    onProfileImageUpdate: (previewUrl: string, file: File) => void;
    isViewedClient: boolean;
    setIsViewedClient: (val: boolean) => void;
    talentSide?: boolean;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isVerified = Array.isArray(user?.freelancerverification) && user.freelancerverification.length > 0
        ? user.freelancerverification[0]?.isVerified
        : false;

    const fullName = ` ${user?.firstName} ${user?.lastName?.slice(0, 1)}.`;

    return (
        <section
            className={` mt-0 lg:mt-[38px] flex flex-col md:flex-row h-fit md:min-h-[274px] w-full items-center  md:justify-between relative `}
        >
            <div className={`flex gap-[15px] lg:gap-[30px] w-full lg:w-[70%]`}>
                <div
                    className=" flex h-[137px] w-[137px] md:h-[153px] md:w-[153px] 2xl:h-[274px] 2xl:w-[274px] items-center justify-center overflow-hidden rounded-[50%] border-4 border-[#CBEC5E] relative ">
                    <Image
                        src={
                            user?.profileImage ? user.profileImage : "/images/all-images/no-image.png"
                        }
                        alt="Profile Image"
                        width={153}
                        height={153}
                        className="rounded-full flex h-[137px] w-[137px] md:h-[153px] md:w-[153px] 2xl:h-[274px] 2xl:w-[274px] "
                    />
                </div>
                <div
                    className={` flex xl:h-[250px] 2xl:h-[274px]  flex-col items-start justify-center lg:w-[70%] `}
                >
                    <div
                        className={`mb-[10px] flex items-between items-center  gap-2 w-full`}
                    >
                        <h2 className="text-[20px] md:text-[24px] xl:text-[44px] font-medium leading-[100%] text-[#1C2434] 2xl:text-[44px]">
                            {fullName}
                        </h2>
                        {isVerified && (
                            <Image
                                src={"/images/icon-images/verifyTalentIcon.png"}
                                alt={"verify Icon"}
                                width={40}
                                height={40}
                            />
                        )}
                    </div>
                    <div className={`flex flex-col xl:flex-row items-center gap-1 mt-1 sm:mt-2`}>
                        <div className={`flex items-center gap-1`}>
                            <Image
                                src={"/images/icon-images/map-pin.png"}
                                alt={"verify Icon"}
                                width={20}
                                height={20}
                            />
                            <p className="whitespace-nowrap text-[14px] font-medium text-[#64748B] 2xl:text-[24px] ">
                                Athene, Greece
                            </p>
                        </div>
                        <div className={`flex items-center gap-1`}>
                            <Image
                                src={"/images/icon-images/clockIcon.png"}
                                alt={"verify Icon"}
                                width={20}
                                height={20}
                            />
                            <p className="whitespace-nowrap text-[14px]  font-medium  text-[#64748B] 2xl:text-[24px] ">
                                12:10 PM UTC +1
                            </p>
                        </div>
                    </div>
                    <button
                        className={`mt-[8px] lg:mt-[20px] flex h-[36px] w-[98px] items-center justify-center rounded-[64px] border border-[#AEB3BC]`}
                    >
                        <Image
                            src={"/images/icon-images/starIcon.png"}
                            alt={"verify Icon"}
                            width={23}
                            height={23}
                        />
                        <p className={`text-[18px] font-bold`}>4.9</p>
                    </button>
                    <div
                        className={` mt-6 sm:mt-2 lg:mt-[18px] flex items-center -translate-x-[120px] md:translate-x-0 gap-3`}
                    >
                        <Image
                            src={"/images/talent-status/growingStar.png"}
                            alt={"verify Icon"}
                            width={38.79}
                            className=" max-w-[25px]  md:max-w-[38px]"
                            height={47.28}
                        />
                        <p className={`text-[16px] font-normal text-black`}>Top Talent</p>
                    </div>
                </div>
            </div>
            <section className={`flex flex-col justify-between sm:gap-[23px] w-auto lg:gap-[57px]`}>
                <div
                    className={` mt-[24px] sm:mt-[35px] flex justify-end xl:w-[420px] h-[48px] ${isViewedClient ? 'hidden' : ' '}`}
                >
                    <button
                        onClick={() => setIsViewedClient(true)}
                        className={` flex text-[#18470D] font-medium justify-center items-center border border-[#CCCCCC] rounded-[49px] w-[157px] md:w-[146px] min-h-[38px] xl:w-[200px] xl:h-[48px]`}
                    >
                        See Public View
                    </button>
                    {/*<button*/}
                    {/*    className={`flex text-[#18470D]  font-medium  justify-center items-center bg-[#CBEC5E] rounded-[49px] w-[157px] md:w-[146px] min-h-[38px] xl:w-[200px] xl:h-[48px]`}*/}
                    {/*>*/}
                    {/*    Profile Settings*/}
                    {/*</button>*/}
                </div>

                <div
                    className={` mt-[24px] sm:mt-[35px] flex justify-end xl:w-[420px] h-[48px] ${isViewedClient && talentSide ? '' : 'hidden '}`}
                >

                    {/*<button*/}
                    {/*    className={`flex text-[#18470D]  font-medium  justify-center items-center bg-[#CBEC5E] rounded-[49px] w-[157px] md:w-[146px] min-h-[38px] xl:w-[200px] xl:h-[48px]`}*/}
                    {/*>*/}
                    {/*    Message*/}
                    {/*</button>*/}
                    <button
                        onClick={() => setIsViewedClient(false)}
                        className={` flex text-[#18470D] font-medium justify-center items-center border border-[#CCCCCC] rounded-[49px] w-[157px] md:w-[146px] min-h-[38px] xl:w-[200px] xl:h-[48px]`}
                    >
                        Edit Profile
                    </button>
                </div>
                <div
                    className={` sm:mb-[50px] lg:mb-[40px] hidden  md:flex h-[100px] md:gap-[14px] xl:gap-[16px] 2xl:gap-[37px]  items-center  justify-between self-end `}
                >
                    <div
                        className={`flex md:h-[90px] md:w-[90px] xl:h-[106px] xl:w-[106px] 2xl:h-[109px] w-[109px] flex-col items-center justify-center rounded-[50%] border border-[#AEB3BC]`}
                    >
                        <h2
                            className={`text-[15.28px] xl:text-[18px] font-bold text-[#18470D]`}
                        >
                            $3K+
                        </h2>
                        <p className={`text-[11px] xl:text-[14px] font-medium text-black`}>
                            Total Earning
                        </p>
                    </div>
                    <div
                        className={`flex md:h-[90px] md:w-[90px] xl:h-[106px] xl:w-[106px] 2xl:h-[109px] 2xl:w-[109px] flex-col items-center justify-center rounded-[50%] border border-[#AEB3BC]`}
                    >
                        <h2
                            className={`text-[15.28px] xl:text-[18px] font-bold text-[#18470D]`}
                        >
                            12
                        </h2>
                        <p className={`text-[11px] xl:text-[14px] font-medium text-black`}>
                            Total Jobs
                        </p>
                    </div>
                    <div
                        className={`flex md:h-[90px] md:w-[90px] xl:h-[106px] xl:w-[106px] 2xl:h-[109px] 2xl:w-[109px] flex-col items-center justify-center rounded-[50%] border border-[#AEB3BC]`}
                    >
                        <h2
                            className={`text-[15.28px] xl:text-[18px] font-bold text-[#18470D]`}
                        >
                            155
                        </h2>
                        <p className={`text-[11px] xl:text-[14px] font-medium text-black`}>
                            Total Hours
                        </p>
                    </div>
                </div>
            </section>

            {!isViewedClient && (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute bottom-[150px]  md:bottom-[120px] left-[20px] 2xl:bottom-7 2xl:left-5 max-w-[36px] max-h-[36px] rounded-full "
                >
                    <Image
                        src={"/images/icon-images/cameraIcon.png"}
                        alt={"Camera"}
                        width={36}
                        height={36}
                    />
                </button>
            )}
            {!isViewedClient && (
                <UploadPortfolioImageModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirmUpload={onProfileImageUpdate}
                />
            )}
        </section>
    );
};
export default TalentProfileTopSection;
