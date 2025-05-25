"use client";

import React, { useState, useMemo, useEffect } from "react";
import NoConversationPlaceholder from "@/shared/ui-kit/Placeholders/NoConversationPlaceholder";
import ChatItem from "@/shared/widgets/Messenger/ChatItem";


interface ChatUser {
  id: string;
  name: string;
  avatarUrl?: string;
  isOnline?: string
  // Add or remove fields as per your actual data
}


interface ChatListItemProps {
  search: string;
  filter: string;
  setSelectedChatUser: React.Dispatch<React.SetStateAction<ChatUser | null>>;
  chatListData: any
}


const ChatListItem: React.FC<ChatListItemProps> = ({ search, filter, setSelectedChatUser, chatListData }) => {

  const [selectedUser, setSelectedUser] = useState<string | number>(101);


  const filteredChatList = useMemo(() => {
    return chatListData
      // .filter((chat: any) => {
      //   const matchesSearch = chat.name.toLowerCase().includes(search.toLowerCase());
      //   const matchesFilter = filter === "All" || (filter === "Unread" && chat.unreadCount && chat.unreadCount !== "");
      //   return matchesSearch && matchesFilter;
      // });
  }, [search, filter, chatListData]);

  useEffect(() => {
    if (chatListData && selectedUser) {
      const findChatUser = chatListData.find((elem: any) => elem?.id == selectedUser) || null;
      setSelectedChatUser(findChatUser);
    }
  }, [selectedUser]);

  return (
    <div className="mt-3 h-[655px] overflow-y-scroll p-1 mb-3 flex flex-col items-center">
      {filteredChatList && filteredChatList.length > 0 ? (
        filteredChatList.map((chat: any) => (
          <React.Fragment key={chat.id}>
            <ChatItem
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              response={chat}
            />
          </React.Fragment>
        ))
      ) : (
        <div className="w-full h-[75%] flex justify-center items-center">
          <NoConversationPlaceholder />
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
