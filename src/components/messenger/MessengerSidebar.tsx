"use client"
import React, { useState } from 'react'

import ChatListItem from './ChatListItem'
import { SearchBar } from '@/shared/ui-kit/SearchBar';
import DropdownSelect from '@/shared/ui-kit/DropdownSelect';


interface ChatUser {
    id: string;
    name: string;
    avatarUrl?: string;
    isOnline?: string
}

interface MessengerSidebarProps {
    setSelectedChatUser: React.Dispatch<React.SetStateAction<ChatUser | null>>;
    chatListData: any;
}

const MessengerSidebar: React.FC<MessengerSidebarProps> = ({ setSelectedChatUser, chatListData }) => {
    const [filter, setFilter] = useState<string>('All');
    const [search, setSearch] = useState<string>("")

    return (
        <div>
            <div className='flex justify-center sm:justify-start items-center'>
                <div className='w-[335px] 2xl:w-[390px] xl:w-[285px] lg:w-[334px] md:w-[334px] sm:w-[420px] border border-[#CBEC5E] rounded-[30px] rou p-1'>
                    <h1 className='font-medium text-[20px] sm:text-[26px] p-2 mt-3'>
                        Messages
                    </h1>
                    <div className='flex justify-between items-center mt-7 px-1'>
                        <div className=''>
                            <SearchBar className="w-[260px] 2xl:w-[309px] xl:w-[204px] lg:w-[236px] md:w-[260px] sm:[249px]" placeholder="Search" setSearch={setSearch} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <DropdownSelect
                                options={['All', 'Unread']}
                                selected={filter}
                                onSelect={setFilter}
                            />
                        </div>
                    </div>
                    <ChatListItem chatListData={chatListData} search={search} filter={filter} setSelectedChatUser={setSelectedChatUser} />
                </div>
            </div>
        </div>
    )
}

export default MessengerSidebar