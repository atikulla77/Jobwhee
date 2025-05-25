import React from 'react'
import { MessageBriefcase } from '../../../public/icons/MessageBriefcase'
import ChatMessageItem from '@/shared/widgets/Messenger/ChatMessageItem'
import ToggleSidebar from "../../../public/images/icon-images/Togglesidebar.svg";
import Image from 'next/image'
import ChatInputBar from './ChatInputBar'
import cancelIcon from "../../../public/images/icon-images/cancel-icon.svg"

export interface ChatUser {
    id: string | number;
    name: string;
    avatarUrl?: string;
    isOnline?: string;
    // Add or remove fields as per your actual data
}

// ✅ Define proper prop types
interface MessengerChatWindowProps {
    isToggleSidebar: number;
    setIsToggleSidebar: React.Dispatch<React.SetStateAction<0 | 1 | 2>>; // Correct type for the setter function
    isToggleSection: boolean;
    handleBack: () => boolean;
    selectedChatUser: ChatUser | null;
    searchMessageId: number;
    messagesData: any
}


const MessengerChatWindow: React.FC<MessengerChatWindowProps> = ({
    isToggleSidebar,
    setIsToggleSidebar,
    isToggleSection,
    handleBack,
    selectedChatUser,
    searchMessageId,
    messagesData
}) => {

    return (
        <>
            {
                isToggleSidebar == 0 || isToggleSidebar == 1 ?
                    <>
                        <div className={`px-4 sm:px-0 2xl:w-full xl:w-full lg:w-full ${isToggleSidebar !== 1 && isToggleSidebar !== 0 ? "hidden" : "sm:flex"} ${!isToggleSection && isToggleSidebar == 0 ? "hidden" : ""} flex-col justify-start items-center 2xl:px-6 lg:px-6 md:pl-6 sm:pl-4 xs:pl-0`}>
                            <div className='flex justify-between items-start w-full'>
                                <div className='flex flex-col xl:flex-row justify-start xl:items-center items-start xl:gap-7 xs:gap-1 w-[75%] sm:w-full'>
                                    <h1 className='text-[30px] 2xl:text-[30px] xl:text-[24px] sm:text-[30px] font-semibold text-nowrap'>{selectedChatUser?.name}</h1>
                                    <div className={`flex items-center text-[#545454] text-[14px] w-full overflow-hidden`}>
                                        <div className="flex-shrink-0 mr-1">
                                            <MessageBriefcase width={16} height={16} />
                                        </div>
                                        <div className="truncate ml-1 text-[14px]">{`Hairstylist Needed for Special Events`}</div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        isToggleSidebar == 1 || isToggleSection && isToggleSidebar == 0 ? <>
                                            <div className='flex justify-center items-center gap-3'>
                                                <h1 className='font-medium text-[26px] rotate-180'>
                                                    <Image src={ToggleSidebar} alt='' className='cursor-pointer' onClick={() => setIsToggleSidebar(isToggleSection ? 2 : 0)} />
                                                </h1>
                                                <div className='flex sm:hidden'>
                                                    <Image src={cancelIcon} alt='' className='cursor-pointer w-[24px] h-[24px]' onClick={() => handleBack()} />
                                                </div>
                                            </div>
                                        </> : <></>
                                    }
                                </div>
                            </div>
                            <div className='h-[450px] overflow-y-scroll w-full 2xl:h-[578px] xl:h-[586px] lg:h-[591px] md:h-[593px] sm:h-[587px] mt-[25px] xl:mt-[60px]'>
                                <ChatMessageItem messagesData={messagesData} selectedChatUser={selectedChatUser} searchMessageId={searchMessageId} />
                            </div>

                            <ChatInputBar />

                        </div>
                    </> : <></>
            }
        </>
    )
}

export default MessengerChatWindow