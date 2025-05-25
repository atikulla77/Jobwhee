// MessengerContext.tsx
"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { getSession } from "next-auth/react";
import { io, Socket } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/utils/hooks/useUser";

export interface MessageItemI {
  id: number
  createdAt: string
  updatedAt: string
  text: string
  data: any
  type: string
  user: {
    id: number
    createdAt: string
    updatedAt: string
    firstName: string
    lastName: string
    country: string
    city: string
    phoneNumber: string
    email: string
    password: string
    isVerified: boolean
    profileImage: string
    introTitle: string
    introText: string
    video: string
    embedUrl: string
    videoStatus: string
    languages: any
    role: string
    stripeAccountId: string
    stripeAccount: string
    accountStatus: string
    suspended: boolean
    deleted: boolean
    resetToken: string
    resetTokenExpiration: string
  }
}
export interface MessageI { items: MessageItemI[]; meta: any; }
export interface UserI { id: number; firstName: string; lastName: string; email: string; role: string; profileImage?: string | null; }
export interface RoomI { id: number; name: string; description: string; createdAt: string; updatedAt: string; users: UserI[]; unread?: number; }
export interface OnlineUserI { id: number; socketId: string; user: { id: number; firstName: string; lastName: string }; }

interface MessengerContextValue {
  socket: Socket | null;
  rooms: RoomI[];
  selectedRoom: RoomI | null;
  messages: MessageI | undefined;
  onlineUsers: OnlineUserI[];
  setSelectedRoom: (room: RoomI | null) => void;
  sendMessage: (text: string) => void;
  currentUser: UserI | null;
  setSearchMessageId: (id: number) => void;
  searchMessageId: number;
}

const MessengerContext = createContext<MessengerContextValue | null>(null);

export const MessengerProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [rooms, setRooms] = useState<RoomI[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomI | null>(null);
  const [messages, setMessages] = useState<MessageI>();
  const [onlineUsers, setOnlineUsers] = useState<OnlineUserI[]>([]);
  const [searchMessageId, setSearchMessageId] = useState<number>(0);
  const currentUser = useUser();

  useEffect(() => {
    const connectSocket = async () => {
      const session = await getSession();
      const token = session?.accessToken;
      if (!token) return;

      const newSocket = io("http://localhost:5050", {
        transports: ["websocket"],
        auth: { Authorization: `${token}` },
        withCredentials: true,
        reconnection: true,
      });

      newSocket.on("connect", () => console.log("Connected to socket"));
      newSocket.on("rooms", (data: { items: RoomI[] }) => setRooms(data.items));
      newSocket.on("onlineUsers", (users: OnlineUserI[]) => setOnlineUsers(users));
      newSocket.on("messages", (messages: MessageI) => setMessages(messages));
      newSocket.on("messageAdded", (messages: MessageI) => setMessages(messages));

      setSocket(newSocket);
    };

    connectSocket();
  }, []);

  useEffect(() => {
    if (socket && selectedRoom) {
      socket.emit('leaveRoom')
      socket.emit('joinRoom', selectedRoom)
      sessionStorage.setItem('selectedRoom', JSON.stringify(selectedRoom))
      socket.emit('markAsRead', selectedRoom.id)
      socket.on('messages', (messages: MessageI) => {
        setMessages(messages)
      })
      // setUnreadMessages(prev => prev.filter(msg => msg.roomId !== room.id))
    }
  }, [socket, selectedRoom]);

  const sendMessage = (text: string) => {
    if (!socket || !selectedRoom || !text.trim()) return;
    socket.emit("addMessage", {
      text,
      room: { id: selectedRoom.id },
    });
  };
  console.log("SELECTED ROOM", selectedRoom);
  console.log(messages)
  return (
    <MessengerContext.Provider
      value={{
        socket,
        rooms,
        selectedRoom,
        setSelectedRoom,
        messages,
        onlineUsers,
        sendMessage,
        currentUser,
        setSearchMessageId,
        searchMessageId,
      }}
    >
      {children}
    </MessengerContext.Provider>
  );
};

export const useMessenger = () => {
  const context = useContext(MessengerContext);
  if (!context) throw new Error("useMessenger must be used within a MessengerProvider");
  return context;
};