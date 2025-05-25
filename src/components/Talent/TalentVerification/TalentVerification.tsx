import React, {useState} from 'react';

import {useImageContext} from '@/contextProviders/TalentVerificationProvider';
import Image from 'next/image';
import VerificationUploadCard
    from '@/components/Talent/TalentVerification/VerificationUploadCard/VerificationUploadCard';
import useSWR, {mutate} from 'swr';
import {getUserProfileByToken} from '@/lib/api/getUserProfileById/getUserProfileByID';
import {verificationRequest} from '@/lib/api/talent/verificationRequest/verificationRequest';
import Spinner from "@/shared/widgets/Loader/Loader";

const TalentVerification = () => {
    const {imageUrls} = useImageContext();
    const {data: userResponse, isLoading} = useSWR('userProfile', getUserProfileByToken);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSentVerification, setHasSentVerification] = useState(false);

    if (isLoading || !userResponse) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner size={40}/>
            </div>
        );
    }

    const imageStatuses = {
        id: userResponse?.data?.freelancerVerification?.p_status || 'not_uploaded',
        selfie:
            userResponse?.data?.freelancerVerification?.s_status || 'not_uploaded',
        selfieWithId:
            userResponse?.data?.freelancerVerification?.ps_status || 'not_uploaded',
    };

    const statuses = Object.values(imageStatuses);

    const allUploaded = statuses.every(
        status => status === 'Pending' || status === 'Accepted'
    );

    const hasAtLeastOnePending = statuses.includes('Pending');
    const hasAnyRejected = statuses.includes('Rejected');

// Final check for showing the verification button
    const shouldShowVerificationButton = allUploaded && hasAtLeastOnePending && !hasAnyRejected;

    const disabled =
        userResponse?.data?.freelancerVerification?.frReadyForVerification;

    const handleVerificationRequest = async () => {
        setIsSubmitting(true);
        try {
            await verificationRequest();
            await mutate('userProfile');
            setHasSentVerification(true);
            alert('Verification request sent successfully!');
        } catch (error) {
            console.error('Verification request failed:', error);
            alert('Failed to send verification request.');
        }
        setIsSubmitting(false);
    };

    return (
        <main
            className={`flex flex-col  mx-auto px-[20px] md:px-0 mt-[223px] md:w-[683] h-fit xl:w-[1065px]  2xl:w-[1140px]`}
        >
            <header
                className={`flex flex-col justify-center items-center text-center order-[-2] xl:order-0 w-[302px]  md:w-full mx-auto gap-[21px] `}
            >
                <h2
                    className={`flex justify-center items-center mx-auto   font-medium text:[20px] md:text-[30px] leading-[30px]  md:leading-[45px] `}
                >
                    Verify your information in just a few steps
                </h2>
                <p
                    className={` mx-auto font-normal text-[14px] text-[#545454] md:text-[18px] leading-[21px] md:leading-[27px] `}
                >
                    Pass this steps for verification
                </p>
            </header>
            <section className={` flex flex-wrap justify-evenly mt-[50px]`}>
                <VerificationUploadCard
                    imageKey="id"
                    defaultImageSrc="/images/verificationTalent/VerificationId.png"
                    description="Upload a photo of your passport or ID, including the image page, with all details visible."
                />
                <VerificationUploadCard
                    imageKey="selfie"
                    defaultImageSrc="/images/verificationTalent/Selfie.png"
                    description="Upload a clear selfie of yourself, ensuring your face is fully visible and unobstructed."
                />
                <VerificationUploadCard
                    imageKey="selfieWithId"
                    defaultImageSrc="/images/verificationTalent/SelfieId.png"
                    description="Upload a clear selfie holding your ID or passport close to your face, ensuring both are visible."
                />
            </section>
            {!disabled && (
                <section
                    className="mx-auto  flex justify-between items-center px-[15px] xl:px-0 order-[-1] xl:order-1 mt-[60px] xl:mt-0 w-[335px] md:w-[683]  xl:w-[810px] 2xl:w-[850px] min-h-[65px]">
                    <div className=" flex flex-col justify-center items-center  w-[106px] h-[65px]">
                        <div
                            className={`flex justify-center items-center w-[36px] h-[36px] rounded-full 
                        ${
                                imageStatuses.id === 'Pending' ||
                                imageStatuses.id === 'Accepted'
                                    ? 'bg-[#CBEC5E]'
                                    : 'bg-[#EAEAEA]'
                            }`}
                        >
                            {imageStatuses.id === 'Pending' ||
                            imageStatuses.id === 'Accepted' ? (
                                <Image
                                    src={'/icons/check.png'}
                                    alt="Check"
                                    width={24}
                                    height={24}
                                />
                            ) : (
                                1
                            )}
                        </div>
                        <p className="whitespace-nowrap text-[14px] text-[#565E69]">
                            Government ID
                        </p>
                    </div>
                    <div
                        className={`w-[294px] h-[1px] ${
                            imageStatuses.selfie === 'Pending'
                                ? 'bg-[#CBEC5E]'
                                : 'bg-[#EAEAEA]'
                        }`}
                    />
                    <div className="flex justify-center items-center   flex-col w-[106px] h-[65px]">
                        <div
                            className={`flex justify-center items-center w-[36px] h-[36px] rounded-[50%]  ${
                                imageStatuses.selfie === 'Pending' ||
                                imageStatuses.selfie === 'Accepted'
                                    ? 'bg-[#CBEC5E]'
                                    : 'bg-[#EAEAEA]'
                            } `}
                        >
                            {imageStatuses.selfie === 'Pending' ||
                            imageStatuses.selfie === 'Accepted' ? (
                                <Image
                                    src={'/icons/check.png'}
                                    alt="Check"
                                    width={24}
                                    height={24}
                                />
                            ) : (
                                2
                            )}
                        </div>
                        <p className="whitespace-nowrap text-[14px] text-[#565E69]">
                            Selfie
                        </p>
                    </div>
                    <div className="w-[294px] h-[1px] bg-[#EAEAEA]"/>
                    <div className="flex justify-center items-center flex-col w-[106px] h-[65px]">
                        <div
                            className={`flex justify-center items-center w-[36px] h-[36px] rounded-[50%]  ${
                                imageStatuses.selfieWithId === 'Pending' ||
                                imageStatuses.selfieWithId === 'Accepted'
                                    ? 'bg-[#CBEC5E]'
                                    : 'bg-[#EAEAEA]'
                            }`}
                        >
                            {imageStatuses.selfieWithId === 'Pending' ||
                            imageStatuses.selfieWithId === 'Accepted' ? (
                                <Image
                                    src={'/icons/check.png'}
                                    alt="Check"
                                    width={24}
                                    height={24}
                                />
                            ) : (
                                3
                            )}
                        </div>
                        <p className="whitespace-nowrap text-[14px] text-[#565E69]">
                            Selfie with ID
                        </p>
                    </div>
                </section>
            )}
            {shouldShowVerificationButton && (
                <button
                    disabled={disabled}
                    onClick={handleVerificationRequest}
                    className={`flex justify-center items-center xl:translate-y-[150px] mx-auto mt-[40px] ${
                        disabled ? 'bg-[#EAEAEA] text-[#B8B8B8]' : 'bg-[#CBEC5E] '
                    }  rounded-[49px] w-[302px] lg:w-[363px] h-[48px] `}
                >
                    {isSubmitting
                        ? 'Submitting...'
                        : disabled
                            ? 'Verification Request Was Sent'
                            : 'Request for Verification'}
                </button>
            )}
        </main>
    );
};

export default TalentVerification;
