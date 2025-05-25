"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Avatar from '@/shared/ui-kit/Avatar'
import StatusDot from './StatusDot'
import pdfIcon from "../../../../public/images/icon-images/pdf-icon.svg"
import downloadImage from "../../../../public/images/icon-images/download-cloud.png"
import Button from '@/shared/ui-kit/Button';
import { useUser } from '@/utils/hooks/useUser';
import { useMessenger } from '@/contextProviders/MessengerContext';

type ChatUser = {
    id: string | number;
    name: string;
    avatarUrl?: string | undefined;
    isOnline?: string;
};

type ChatMessageItemProps = {
    selectedChatUser: ChatUser | null;
    searchMessageId: number
}


const ChatMessageItem = ({ searchMessageId }: ChatMessageItemProps) => {
    const { messages, onlineUsers, selectedRoom } = useMessenger()
    const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const currentUser = useUser()
    const [otherUser, setOtherUser] = useState(null)
    useEffect(() => {
        if (searchMessageId && messageRefs.current[searchMessageId]) {
            messageRefs.current[searchMessageId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [searchMessageId]);
    console.log("SELECTED ROOM", selectedRoom)
    console.log("Current User", currentUser)
    console.log("Other User", otherUser)
    
    useEffect(() => {
        if (!selectedRoom || !currentUser) return;

        const other = selectedRoom.users.find(u => u.id !== currentUser.id);
        const isOnline = onlineUsers.find(o => o.user.id === other?.id);

        setOtherUser({
            ...other,
            isOnline: isOnline ? 'online' : 'offline',
        });
    }, [selectedRoom, currentUser, onlineUsers]);


    return (
        <div className='flex flex-col justify-start items-start gap-7'>

            <div className="flex items-center w-full text-sm text-[#AEB3BC] px-1">
                <span className="whitespace-nowrap text-[12px]">{`Wednesday, March 12`}</span>
                <div className="flex-grow border-t border-[#AEB3BC] ml-2"></div>
            </div>

            <div className='flex flex-col justify-start items-start gap-7'>
                {messages && messages.items.map((msg: any) => {
                    const isTextOrFile = msg.type === 'Text' || msg.type === 'File';
                    const isOffer = msg.type === 'Offer';
                    return (
                        <div key={msg.id} className={`w-full flex flex-col gap-2`} ref={(el) => (messageRefs.current[msg.id] = el)}>
                            {isTextOrFile && (
                                <div className="w-full flex justify-start items-start gap-6">
                                    <div className="relative">
                                        <Avatar src={otherUser?.avatarUrl ? otherUser.avatarUrl : ""} size={48} fallbackName={msg.sender} />
                                        <div className="absolute bottom-0 right-[2px]">
                                            <StatusDot status={otherUser?.isOnline} size="14px" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-start items-start">
                                        <div className="flex justify-center items-center gap-3">
                                            <h1 className="font-medium text-[16px]">{msg.sender !== "Maria T" ? `${otherUser?.name}` : "Maria T"}</h1>
                                            <span className="text-[12px] text-[#AEB3BC] font-normal">{msg.time}</span>
                                        </div>

                                        {msg.type === 'Text' && typeof msg.text === 'string' && (
                                            <div className={`text-[16px] text-[#545454] font-normal mt-2 w-full ${searchMessageId === msg.id ? 'bg-[#EBF8C2] p-1' : ''
                                                }`}>
                                                {msg.text}
                                            </div>
                                        )}

                                        {msg.type === 'file' && typeof msg.content === 'string' && (
                                            <div className="text-[16px] text-[#545454] font-normal mt-2 w-full flex gap-4 cursor-pointer">
                                                <div>
                                                    <Image
                                                        src={pdfIcon}
                                                        alt="PDF file"
                                                        className="w-[65px] p-2 rounded-[10px] bg-[#F0F1F4]"
                                                    />
                                                </div>
                                                <div className="h-[55px] flex flex-col justify-between gap-3">
                                                    <div className="flex gap-3 text-[16px]">
                                                        <p className="text-black">{msg.content}</p>
                                                        <Image
                                                            src={downloadImage}
                                                            alt="Download"
                                                            className="h-[16px] w-[16.56px] mt-1"
                                                        />
                                                    </div>
                                                    <div className="text-[#B9B9B9] text-[14px] font-normal">915KB</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* {isOffer && typeof msg.content === 'object' && (
                                <div className="flex flex-col justify-center items-start gap-2 pb-3 px-3">
                                    <div className="relative h-[128px] w-[287px] md:rounded-[10px] rounded-[10px] border border-[#EAEAEA] border-b-[6px] border-b-[#CBEC5E] bg-[#F0F1F4]">
                                        <div className="absolute w-5 h-5 rotate-45 -left-2 top-[54px] bg-[#F0F1F4]"></div>
                                        <div className="mt-3 ml-2 mb-1 h-[80%] flex justify-start items-center">
                                            <div className="flex flex-col gap-2 pl-4">
                                                <p className="text-[14px]">
                                                    <span>Work Scope: </span>
                                                    <span className="text-[#545454]">{msg.content.workScope}</span>
                                                </p>
                                                <p className="text-[14px]">
                                                    <span>Experience Level: </span>
                                                    <span className="text-[#545454]">{msg.content.experienceLevel}</span>
                                                </p>
                                                <p className="text-[14px]">
                                                    <span>Budget: </span>
                                                    <span className="text-[#545454]">{msg.content.budget}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-[287px] h-[48px] flex justify-center items-center rounded-[49px] font-medium cursor-pointer">
                                        <Button type={"outlineButton"} onClick={() => { }} action='View Offer' />
                                    </div>


                                </div>
                            )} */}
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default ChatMessageItem