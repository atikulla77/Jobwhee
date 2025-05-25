/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ToggleSidebar from "../../../public/images/icon-images/Togglesidebar.svg";
import Avatar from '@/shared/ui-kit/Avatar';
import StatusDot from '@/shared/widgets/Messenger/StatusDot';
import greenLinkIcon from '../../../public/images/icon-images/green-link.svg';
import greenSerachIcon from '../../../public/images/icon-images/green-search.svg';
import greenUserIcon from '../../../public/images/icon-images/green-user.svg';
import { DropDownArrowIcon } from '../../../public/icons/DropDownArrowIcon';
import { FullStarIcon } from '../../../public/icons/FullStarIcon';
import verifiedUserIcon from "../../../public/images/icon-images/verified-user.svg";
import FilesAndLinks from './FilesAndLinks';
import MessageSearch from './MessageSearch';


interface ChatUser {
    id: string;
    name: string;
    avatarUrl?: string;
    isOnline?: string
    // Add or remove fields as per your actual data
}

interface MessengerInfoSidebarProps {
    isToggleSidebar: 0 | 1 | 2;
    setIsToggleSidebar: React.Dispatch<React.SetStateAction<0 | 1 | 2>>; // Correct type for the setter function
    isToggleSection: boolean;
    selectedChatUser: ChatUser | null
    setSearchMessageId: React.Dispatch<React.SetStateAction<number>>;
}

const MessengerInfoSidebar: React.FC<MessengerInfoSidebarProps> = ({ isToggleSidebar, setIsToggleSidebar, isToggleSection, selectedChatUser, setSearchMessageId }) => {

    const [openMenu, setOpenMenu] = useState(false);
    const [isShowSearchMessage, setIsShowSearchMessage] = useState(false);
    const [isShowFileAndLinks, setIsShowFileAndLinks] = useState(false);


    useEffect(() => {
        setOpenMenu(false)
        setIsShowSearchMessage(false)
        setIsShowFileAndLinks(false)
        setSearchMessageId(0)
    }, [selectedChatUser])

    return (
        <div>
            {
                isToggleSidebar == 0 || isToggleSidebar == 2 ?
                    <>
                        <div className={` ${isToggleSidebar ? "flex" : "hidden"} ${!isToggleSection || isToggleSidebar == 2 ? "flex" : "hidden"} lg:flex justify-center sm:justify-start items-center xl:pl-0 md:pl-0 sm:pl-4 xs:pl-0`}>
                            <div className='w-[335px] 2xl:w-[390px] xl:w-[285px] lg:w-[334px] md:w-[334px] sm:w-[420px] border border-[#CBEC5E] rounded-[30px]'>

                                {/* Default View */}
                                {!isShowSearchMessage && !isShowFileAndLinks && (
                                    <>
                                        <div className='p-4'>
                                            <h1 className='font-medium text-[26px]'>
                                                <Image src={ToggleSidebar} alt='' className='cursor-pointer' onClick={() => setIsToggleSidebar(1)} />
                                            </h1>
                                            <div className='flex flex-col justify-center items-center'>
                                                <div className='h-full w-full flex justify-center items-center'>
                                                    <div className="relative">
                                                        <Avatar src={selectedChatUser?.avatarUrl} size={123} fallbackName={`Maria T.`} />
                                                        <div className="absolute bottom-1 right-[4px]">
                                                            <StatusDot status={selectedChatUser?.isOnline} size="26px" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='my-4'>
                                                    <h1 className='text-xl font-semibold'>{selectedChatUser?.name}</h1>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#545454] font-normal text-center'>
                                                        Experienced Math Teacher | Algebra, Calculus
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col justify-start items-center mt-8 gap-4 h-[491px]'>
                                                <div className={`2xl:w-[310px] lg:w-[257px] md:w-[296px] sm:w-[334px] w-[296px] ${openMenu ? 'h-[266px]' : ''} border border-[#B9B9B9] rounded-xl p-2 px-3 cursor-pointer`} onClick={() => setOpenMenu(!openMenu)}>
                                                    <div>
                                                        <div className='flex justify-center items-center'>
                                                            <Image src={greenUserIcon} alt='' />
                                                            <div className='w-full flex justify-between items-center'>
                                                                <p className='text-[16px] 2xl:text-[18px] text-[#18470D] font-normal ml-3'>About User</p>
                                                                <div className={openMenu ? "rotate-180" : ""}>
                                                                    <DropDownArrowIcon />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {openMenu && (
                                                            <div className='flex flex-col justify-between'>
                                                                <div className='mt-4 flex justify-start items-center gap-3'>
                                                                    <Image src={verifiedUserIcon} alt='' />
                                                                    <h3 className='text-[#545454] font-normal text-[16px]'>Verified User</h3>
                                                                </div>

                                                                <div className='flex justify-start items-center gap-2 mt-3'>
                                                                    <div className='flex justify-start items-center h-[16px]'>
                                                                        <FullStarIcon />
                                                                        <FullStarIcon />
                                                                        <FullStarIcon />
                                                                        <FullStarIcon />
                                                                        <FullStarIcon />
                                                                    </div>
                                                                    <div className='text-[#545454] text-[16px] 2xl:text-[18px] font-normal mt-1'>
                                                                        5.0 of 6 reviews
                                                                    </div>
                                                                </div>

                                                                <div className='flex flex-col gap-2 mt-10'>
                                                                    <p className='text-[#545454] font-normal text-[16px] 2xl:text-[18px]'>1 ongoing job</p>
                                                                    <p className='text-[#545454] font-medium text-[16px] 2xl:text-[18px]'>$3K+ total earning</p>
                                                                    <p className='text-[#545454] font-normal text-[16px] 2xl:text-[18px]'>3 total jobs</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className='2xl:w-[310px] lg:w-[257px] md:w-[296px] sm:w-[334px] w-[296px] border border-[#B9B9B9] rounded-xl flex justify-start items-center p-2 px-3 cursor-pointer' onClick={() => setIsShowSearchMessage(true)}>
                                                    <Image src={greenSerachIcon} alt='' />
                                                    <div className='w-full flex justify-between items-center'>
                                                        <p className='text-[16px] 2xl:text-[18px] text-[#18470D] font-normal ml-3'>Search messages</p>
                                                        <DropDownArrowIcon />
                                                    </div>
                                                </div>

                                                <div className='2xl:w-[310px] lg:w-[257px] md:w-[296px] sm:w-[334px] w-[296px] border border-[#B9B9B9] rounded-xl flex justify-start items-center p-2 px-3 cursor-pointer' onClick={() => setIsShowFileAndLinks(true)}>
                                                    <Image src={greenLinkIcon} alt='' />
                                                    <div className='w-full flex justify-between items-center'>
                                                        <p className='text-[16px] 2xl:text-[18px] text-[#18470D] font-normal ml-3'>Files and links</p>
                                                        <DropDownArrowIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Search Message Section */}
                                {isShowSearchMessage && (
                                    <>
                                        <MessageSearch setSearchMessageId={setSearchMessageId} setIsShowSearchMessage={setIsShowSearchMessage} selectedChatUser={selectedChatUser} />
                                    </>
                                )}

                                {/* Files and Links Section */}
                                {isShowFileAndLinks && (
                                    <>
                                        <FilesAndLinks setIsShowFileAndLinks={setIsShowFileAndLinks} />
                                    </>
                                )}

                            </div>
                        </div>
                    </> : <></>
            }
        </div>
    );
};

export default MessengerInfoSidebar;
