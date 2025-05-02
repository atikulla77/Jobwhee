// ChatItem.tsx
import React from 'react'
import Avatar from '../../ui-kit/Avatar'
import MessageUnreadBadge from '../../ui-kit/MessageUnreadBadge'
import { MessageBriefcase } from '../../../../public/icons/MessageBriefcase'
import StatusDot from './StatusDot'
import { StaticImageData } from 'next/image'

type ChatUser = {
    id: number | string
    name: string
    avatarUrl: string | StaticImageData
    lastMessageTime: string
    unreadCount?: string | number
    isOnline: 'online' | 'offline' | 'away'
    headline: string
}

type ChatItemProps = {
    setSelectedUser: React.Dispatch<React.SetStateAction<string | number>>
    selectedUser: string | number
    response: ChatUser
    onSelectChat: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ setSelectedUser, selectedUser, response, onSelectChat }) => {
    return (
        <div
            className={`w-full flex items-center px-2 cursor-pointer 
          ${selectedUser === response?.id
                    ? 'bg-[#B5D89666] rounded-[18px] border-b border-transparent'
                    : 'hover:bg-[#e8f7db66] hover:rounded-[18px] hover:border-transparent'
                }`}
            onClick={() => {
                setSelectedUser(response?.id);
                onSelectChat();
            }}
        >

            <div className={`h-full w-full flex border-b border-[#C7CBD1] py-4 hover:border-transparent ${selectedUser === response?.id ? "border-transparent" : ""}`}>
                {/* Avatar Section */}
                <div className="relative">
                    <Avatar src={response?.avatarUrl} size={56} alt={response?.name} fallbackName={response?.name} />
                    <div className="absolute bottom-0 right-[2px]">
                        <StatusDot status={response?.isOnline} size="14px" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center flex-grow h-full px-4 overflow-hidden gap-[10px]">
                    <div className="text-[16px] font-semibold text-black flex items-center gap-2">
                        {response?.name}
                        {response?.unreadCount && <MessageUnreadBadge counts={response?.unreadCount} />}
                    </div>

                    <div className={`flex items-center text-[#545454] text-[14px] w-full overflow-hidden ${selectedUser === response?.id ? "font-medium" : ""}`}>
                        <div className="flex-shrink-0 mr-1">
                            <MessageBriefcase width={16} height={16} />
                        </div>
                        <div className="truncate ml-1">{response?.headline}</div>
                    </div>
                </div>

                {/* Time */}
                <div className="flex items-start justify-end h-full">
                    <p className={`${selectedUser === response?.id ? "text-[#717680]" : "text-[#AEB3BC]"}   text-[14px] font-medium whitespace-nowrap`}>{response?.lastMessageTime}</p>
                </div>
            </div>


        </div>

    )
}

export default ChatItem
