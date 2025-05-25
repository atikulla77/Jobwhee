import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import leftBlackArrow from "../../../public/images/icon-images/left-black-arrow.svg";
import { SearchBar } from '@/shared/ui-kit/SearchBar';

import searchMessageImage from "../../../public/images/all-images/search-message.png"
import Avatar from '@/shared/ui-kit/Avatar';
import StatusDot from '@/shared/widgets/Messenger/StatusDot';

import messagesData from "../../app/[locale]/messenger/data/mochMessagesData";

interface ChatUser {
    id: string | number;
    name: string;
    avatarUrl?: string;
    isOnline?: string;
    // Add or remove fields as per your actual data
}


interface MessageSearchProps {
    setIsShowSearchMessage: React.Dispatch<React.SetStateAction<boolean>>;
    selectedChatUser: ChatUser | null;
    setSearchMessageId: React.Dispatch<React.SetStateAction<number>>;
}

const MessageSearch: React.FC<MessageSearchProps> = ({ setIsShowSearchMessage, selectedChatUser, setSearchMessageId }) => {
    const [search, setSearch] = useState<string>("");


    const highlightText = (text: string, keyword: string) => {
        if (!keyword) return text;

        const regex = new RegExp(`(${keyword})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="bg-[#EBF8C2] font-normal text-[#545454] px-1">{part}</span>
            ) : (
                <React.Fragment key={index}>{part}</React.Fragment>
            )
        );
    };

    const filteredMessages = messagesData.filter((msg) =>
        msg.type === 'text' &&
        typeof msg.content === 'string' &&
        msg.content.toLowerCase().includes(search.toLowerCase())
    );


    useEffect(() => {
        if (search?.length <= 0) {
            setSearchMessageId(0)
        }
    }, [search])

    return (
        <div className=''>
            <div className='flex justify-start items-center gap-2 p-4'>
                <Image src={leftBlackArrow} alt='' className='cursor-pointer' onClick={() => setIsShowSearchMessage(false)} />
                <SearchBar className="w-[244px] lg:w-[309px]" placeholder="Search" setSearch={setSearch} />
            </div>

            <div className='h-[735px] overflow-y-scroll mt-4 p-2'>
                {filteredMessages.length > 0 && search.length > 0 ? (
                    filteredMessages.map((msg, index) => (
                        <div key={index} className='w-full flex justify-start items-start gap-4 border-b border-[#AEB3BC] py-3 cursor-pointer p-2 hover:bg-[#e8f7db66] hover:rounded-[18px] hover:border-none' onClick={() => setSearchMessageId(msg?.id)}>
                            <div className="relative">
                                <Avatar src={msg.sender !== "Maria T" ? selectedChatUser?.avatarUrl : ""} size={48} fallbackName={msg.sender} />
                                <div className="absolute bottom-0 right-[2px]">
                                    <StatusDot status={msg.sender !== "Maria T" ? selectedChatUser?.isOnline : "online"} size="14px" />
                                </div>
                            </div>
                            <div className='flex justify-between items-start w-full'>
                                <div>
                                    <h3 className='text-[16px] font-semibold'>{msg.sender !== "Maria T" ? selectedChatUser?.name : "Maria T"}</h3>
                                    <p className='text-[#545454] text-[16px] font-normal mt-1'>
                                        {typeof msg.content === 'string' ? highlightText(msg.content, search) : ''}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-[#AEB3BC] text-xs font-normal text-nowrap'>{msg.time}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='h-[600px] flex justify-center items-center'>
                        <div className='flex flex-col justify-center items-center'>

                            <Image src={searchMessageImage} alt='' className='w-[163px]' />
                            <h1 className='font-medium text-[24px]'>
                                Search Messages
                            </h1>
                            <p className='text-center text-[#545454] text-[16px] font-normal'>
                                Between you and {selectedChatUser?.name} in this
                                conversation
                            </p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageSearch