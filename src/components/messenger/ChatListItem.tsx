"use client";

import React, { useState, useMemo } from "react";
import chatListData from "../../app/[locale]/messenger/data/mockChatList";
import NoConversationPlaceholder from "@/shared/ui-kit/Placeholders/NoConversationPlaceholder";
import ChatItem from "@/shared/widgets/Messenger/ChatItem";

interface ChatListItemProps {
  search: string;
  filter: string;
  onSelectChat: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ search, filter, onSelectChat }) => {
  const [selectedUser, setSelectedUser] = useState<string | number>(101);

  const filteredChatList = useMemo(() => {
    return chatListData
      .filter((chat) => {
        const matchesSearch = chat.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || (filter === "Unread" && chat.unreadCount && chat.unreadCount !== "");
        return matchesSearch && matchesFilter;
      });
  }, [search, filter]);

  return (
    <div className="mt-3 h-[655px] overflow-y-scroll p-1 mb-5 flex flex-col items-center">
      {filteredChatList.length > 0 ? (
        filteredChatList.map((chat) => (
          <React.Fragment key={chat.id}>
            <ChatItem
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              response={chat}
              onSelectChat={onSelectChat}
            />
          </React.Fragment>
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <NoConversationPlaceholder />
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
