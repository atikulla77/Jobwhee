"use client"
import React, { useState } from 'react'

import ChatListItem from './ChatListItem'
import { SearchBar } from '@/shared/ui-kit/SearchBar';
import DropdownSelect from '@/shared/ui-kit/DropdownSelect';


interface MessengerSidebarProps {
    onSelectChat: () => boolean;
  }

const MessengerSidebar: React.FC<MessengerSidebarProps> = ({ onSelectChat }) => {
    const [filter, setFilter] = useState<string>('All');
    const [search, setSearch] = useState<string>("")

    return (
        <div>
            <div className='flex justify-center sm:justify-start items-center'>
                <div className='w-[334px] lg:w-[390px] lg:h-[830px] border border-[#CBEC5E] rounded-[30px] p-1'>
                    <h1 className='font-medium text-[26px] p-2 mt-3'>
                        Messages
                    </h1>
                    <div className='flex justify-between items-center mt-7 px-1'>
                        <div className=''>
                            <SearchBar className="w-[244px] lg:w-[309px]" placeholder="Search" setSearch={setSearch} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <DropdownSelect
                                options={['All', 'Unread']}
                                selected={filter}
                                onSelect={setFilter}
                            />
                        </div>
                    </div>
                    <ChatListItem onSelectChat={onSelectChat} search={search} filter={filter} />
                </div>
            </div>
        </div>
    )
}

export default MessengerSidebar