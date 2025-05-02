// mockChatList.ts
import { StaticImageData } from "next/image";
import userImage from "../../../../../public/images/all-images/user-01.png";


export interface ChatItemData {
  id: number;
  name: string;
  avatarUrl: string | StaticImageData;
  lastMessageTime: string;
  unreadCount: string;
  isOnline: "online" | "offline";
  headline: string;
}

const chatListData: ChatItemData[] = [
  {
    id: 101,
    name: "Michael S.",
    avatarUrl: userImage,
    lastMessageTime: "5:12 PM",
    unreadCount: "",
    isOnline: "online",
    headline: "Hairstylist Needed for Events"
  },
  {
    id: 102,
    name: "Andrey S.",
    avatarUrl: userImage,
    lastMessageTime: "4:30 PM",
    unreadCount: "5",
    isOnline: "offline",
    headline: "Makeup Artist for Wedding"
  },
  {
    id: 103,
    name: "John D.",
    avatarUrl: userImage,
    lastMessageTime: "2:00 PM",
    unreadCount: "",
    isOnline: "offline",
    headline: "Photographer for Birthday"
  },
  {
    id: 104,
    name: "Liam C.",
    avatarUrl: userImage,
    lastMessageTime: "7:15 PM",
    unreadCount: "",
    isOnline: "offline",
    headline: "Catering Services Required"
  },
  {
    id: 105,
    name: "Noah M.",
    avatarUrl: userImage,
    lastMessageTime: "1:10 PM",
    unreadCount: "",
    isOnline: "offline",
    headline: "MC for Corporate Event"
  },
  {
    id: 106,
    name: "William R.",
    avatarUrl: userImage,
    lastMessageTime: "9:25 AM",
    unreadCount: "4",
    isOnline: "offline",
    headline: "Live Band Needed"
  },
  {
    id: 107,
    name: "James K.",
    avatarUrl: userImage,
    lastMessageTime: "12:45 PM",
    unreadCount: "6",
    isOnline: "offline",
    headline: "Catering for Anniversary"
  },
  {
    id: 108,
    name: "Benjamin H.",
    avatarUrl: userImage,
    lastMessageTime: "10:15 AM",
    unreadCount: "2",
    isOnline: "offline",
    headline: "Face Painter for Kids Party"
  },
  {
    id: 109,
    name: "Lucas T.",
    avatarUrl: userImage,
    lastMessageTime: "6:30 AM",
    unreadCount: "8",
    isOnline: "offline",
    headline: "Lighting Setup for Stage"
  },
  {
    id: 110,
    name: "Henry Z.",
    avatarUrl: userImage,
    lastMessageTime: "5:05 PM",
    unreadCount: "3",
    isOnline: "offline",
    headline: "Stage Anchor Needed"
  },
  {
    id: 111,
    name: "Elijah Y.",
    avatarUrl: userImage,
    lastMessageTime: "3:40 PM",
    unreadCount: "5",
    isOnline: "offline",
    headline: "Bridal Makeup Artist"
  },
  {
    id: 112,
    name: "Daniel P.",
    avatarUrl: userImage,
    lastMessageTime: "7:25 PM",
    unreadCount: "2",
    isOnline: "online",
    headline: "Wedding Photographer"
  },
  {
    id: 113,
    name: "Matthew W.",
    avatarUrl: userImage,
    lastMessageTime: "5:55 PM",
    unreadCount: "",
    isOnline: "offline",
    headline: "Sound Engineer for Events"
  },
  {
    id: 114,
    name: "Christopher M.",
    avatarUrl: userImage,
    lastMessageTime: "8:30 PM",
    unreadCount: "1",
    isOnline: "online",
    headline: "Event Planning Consultant"
  },
  {
    id: 115,
    name: "David T.",
    avatarUrl: userImage,
    lastMessageTime: "6:50 PM",
    unreadCount: "4",
    isOnline: "offline",
    headline: "Stage Lighting Specialist"
  },
  {
    id: 116,
    name: "George R.",
    avatarUrl: userImage,
    lastMessageTime: "3:40 PM",
    unreadCount: "7",
    isOnline: "online",
    headline: "Security Guard for Events"
  },
  {
    id: 117,
    name: "Oliver F.",
    avatarUrl: userImage,
    lastMessageTime: "4:15 PM",
    unreadCount: "",
    isOnline: "offline",
    headline: "DJ for Wedding Reception"
  },
  {
    id: 118,
    name: "Jack B.",
    avatarUrl: userImage,
    lastMessageTime: "2:30 PM",
    unreadCount: "3",
    isOnline: "online",
    headline: "Event Videographer"
  },
  {
    id: 119,
    name: "Thomas N.",
    avatarUrl: userImage,
    lastMessageTime: "1:45 PM",
    unreadCount: "2",
    isOnline: "offline",
    headline: "Catering for Corporate Event"
  },
  {
    id: 120,
    name: "Adam K.",
    avatarUrl: userImage,
    lastMessageTime: "5:00 PM",
    unreadCount: "4",
    isOnline: "online",
    headline: "Public Speaker for Conference"
  }
];

export default chatListData;
