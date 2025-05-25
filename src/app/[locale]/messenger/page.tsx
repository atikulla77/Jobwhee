'use client'

import React, { useEffect, useRef, useState } from 'react'

import noMessageAndConversation from "../../../../public/images/all-images/noMessageAndConversation.png"
import Image from 'next/image'
import MessengerChatWindow from '@/components/Messenger/MessengerChatWindow'
import MessengerInfoSidebar from '@/components/Messenger/MessengerInfoSidebar'
import MessengerSidebar from '@/components/Messenger/MessengerSidebar'
import { useUser } from '@/utils/hooks/useUser'
import { RoomI, useMessenger } from '@/contextProviders/MessengerContext'

interface MessageItemI {
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

interface MessageI {
    map(arg0: (msg: any) => React.JSX.Element): React.ReactNode
    items: MessageItemI[]
    meta: {
        "totalItems": 5
        "itemCount": 5
        "itemsPerPage": 1000
        "totalPages": 1
        "currentPage": 0
    }
}

export interface ChatUser {
    id: string;
    name: string;
    avatarUrl?: string;
}

interface INewFormat {
    id: any;
    name: any;
    description: any;
    avatarUrl: any;
    isOnline: string;
}[]
const Messenger = () => {
    const currentUser = useUser()
    const [otherUserTyping] = useState(false)
    const [isTyping] = useState(false)
    const [newFormat, setNewFormat] = useState<INewFormat | null>(null)
    const [searchMessageId, setSearchMessageId] = useState<number>(0)
    const { rooms, selectedRoom, setSelectedRoom, onlineUsers, messages } = useMessenger();
    const [file, setFile] = useState<File | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isTablet, setIsTablet] = useState<boolean>(false)
    const [showChat, setShowChat] = useState<boolean>(false)
    const [isToggleSidebar, setIsToggleSidebar] = useState<0 | 1 | 2>(0)
    const [isToggleSection, setIsToggleSection] = useState<boolean>(false)
    const [selectedChatUser, setSelectedChatUser] = useState<ChatUser | null>(null);


    useEffect(() => {
        if (!selectedChatUser || !rooms) return
        return handleRoomSelect(rooms.find(room => +room.id === +selectedChatUser.id) || rooms[0])
    }, [selectedChatUser])

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < 768)
            if (window.innerWidth < 1140) {
                setIsToggleSection(true)
                setIsToggleSidebar(1)
            } else {
                setIsToggleSection(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInput(e.target.value)

    //     if (!socket || !selectedRoom) return

    //     const now = Date.now()
    //     const throttleRate = 300

    //     if (now - lastTypingTimeRef.current > throttleRate) {
    //         socket.emit('typing', { roomId: selectedRoom.id })
    //         lastTypingTimeRef.current = now
    //     }

    //     if (!isTyping) {
    //         setIsTyping(true)
    //     }

    //     if (typingTimeoutRef.current) {
    //         clearTimeout(typingTimeoutRef.current)
    //     }

    //     typingTimeoutRef.current = setTimeout(() => {
    //         if (isTyping) {
    //             socket.emit('stopTyping', { roomId: selectedRoom.id })
    //             setIsTyping(false)
    //         }
    //     }, 1000)
    // }

    useEffect(() => {
        if (!currentUser) return;

        const formatted = rooms.map((room: any) => {
            const otherUser = room.users.find((user: any) => user.id !== currentUser.id)
            return {
                id: room.id,
                name: room.name,
                description: room.description,
                avatarUrl: otherUser?.profileImage,
                isOnline: onlineUsers.some(u => u.user.id === otherUser?.id) ? "online" : "offline",
            }
        }) as unknown as INewFormat;

        setNewFormat(formatted);
    }, [rooms, onlineUsers, currentUser]);


    // useEffect(() => {
    //     if (!socket) return
    //     socket.on('userTyping', (data: { userId: number }) => {
    //         if (data.userId !== currentUser?.id) {
    //             setOtherUserTyping(true)
    //             if (typingTimeoutRef.current) {
    //                 clearTimeout(typingTimeoutRef.current)
    //             }
    //             typingTimeoutRef.current = setTimeout(() => {
    //                 setOtherUserTyping(false)
    //             }, 2000)
    //         }
    //     })
    //     socket.on('userStoppedTyping', (data: { userId: number }) => {
    //         if (data.userId !== currentUser?.id) {
    //             setOtherUserTyping(false)
    //         }
    //     })
    //     return () => {
    //         if (typingTimeoutRef.current) {
    //             clearTimeout(typingTimeoutRef.current)
    //         }
    //     }
    // }, [socket, currentUser?.id])

    useEffect(() => {
        const messagesContainer = document.getElementById('messages-container')
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight
        }
    }, [messages, isTyping, otherUserTyping])
    const handleRoomSelect = (room: RoomI) => {
        setSelectedRoom(room)
    }

    // const sendMessage = () => {
    //     if (!socket || !input.trim() || !selectedRoom || !currentUser) return

    //     if (isTyping) {
    //         socket.emit('stopTyping', { roomId: selectedRoom.id })
    //         setIsTyping(false)
    //     }

    //     if (typingTimeoutRef.current) {
    //         clearTimeout(typingTimeoutRef.current)
    //     }

    //     const message = {
    //         text: input,
    //         room: {
    //             id: selectedRoom.id
    //         }
    //     }

    //     socket.emit('addMessage', message)
    //     setInput('')
    // }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async () => {
        if (!file || !selectedRoom || !currentUser) return

        setIsUploading(true)

        try {

            const formData = new FormData()
            formData.append('file', file)
            formData.append('roomId', selectedRoom.id.toString())

            const mockUpload = () => new Promise<{ url: string }>((resolve) => {
                setTimeout(() => {
                    resolve({
                        url: URL.createObjectURL(file),
                        //@ts-ignore
                        fileName: file.name,
                        fileType: file.type,
                        fileSize: file.size
                    })
                }, 1000)
            })

            const uploadResponse = await mockUpload()

            const message = {
                type: "File",
                data: {
                    url: uploadResponse.url,
                    fileName: file.name,
                    fileType: file.type,
                    fileSize: file.size
                },
                room: {
                    id: selectedRoom.id
                }
            }

            // socket.emit('addMessage', message)
            console.log(message)
            setFile(null)
            if (fileInputRef.current) fileInputRef.current.value = ""

        } catch (error) {
            console.error("Upload failed:", error)
        } finally {
            setIsUploading(false)
        }
    }

    const formatFileSize = (bytes?: number) => {
        if (!bytes) return ''
        if (bytes < 1024) return `${bytes} bytes`
        if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`
        return `${(bytes / 1048576).toFixed(1)} MB`
    }

    const handleSelectChat = () => {
        setShowChat(true)
        return true;
    }

    const handleBack = () => {
        setShowChat(false)
        return true;
    }

    return (
        <div className='px-6 lg:px-8 md:px-6 xl:px-36 sm:px-8 py-10'>
            <div className='flex justify-center md:justify-between items-start'>
                {
                    isTablet ? <>
                        {
                            !showChat ? <>
                                <MessengerSidebar chatListData={newFormat} setSelectedChatUser={setSelectedChatUser} />
                            </> : <>
                                {
                                    selectedChatUser ? <>
                                        <MessengerChatWindow searchMessageId={searchMessageId} selectedChatUser={selectedChatUser} setIsToggleSidebar={setIsToggleSidebar} isToggleSidebar={isToggleSidebar} isToggleSection={isToggleSection} handleBack={handleBack} />
                                        <MessengerInfoSidebar setSearchMessageId={setSearchMessageId} selectedChatUser={selectedChatUser} setIsToggleSidebar={setIsToggleSidebar} isToggleSidebar={isToggleSidebar} isToggleSection={isToggleSection} />
                                    </> : <>
                                        <div className='w-full h-[655px] flex flex-col justify-center items-center'>
                                            <Image src={noMessageAndConversation} alt='' className='w-[300.91px] h-[367px]' />
                                            <h1 className='text-[#18470D] text-[40px] font-medium'>
                                                Welcome to Messenges!
                                            </h1>
                                            <p className='text-[#545454] text-[16px] font-normal'>
                                                You’ll see your chats here once you’ve made a connection.
                                            </p>
                                        </div>
                                    </>
                                }
                            </>
                        }

                    </> : <>
                        <MessengerSidebar chatListData={newFormat} setSelectedChatUser={setSelectedChatUser} />
                        {
                            selectedChatUser ? <>
                                <MessengerChatWindow searchMessageId={searchMessageId} selectedChatUser={selectedChatUser} setIsToggleSidebar={setIsToggleSidebar} isToggleSidebar={isToggleSidebar} isToggleSection={isToggleSection} handleBack={handleBack} />
                                <MessengerInfoSidebar setSearchMessageId={setSearchMessageId} selectedChatUser={selectedChatUser} setIsToggleSidebar={setIsToggleSidebar} isToggleSidebar={isToggleSidebar} isToggleSection={isToggleSection} />

                            </> : <>
                                <div className='w-full h-[655px] flex flex-col justify-center items-center'>
                                    <Image src={noMessageAndConversation} alt='' className='w-[300.91px] h-[367px]' />
                                    <h1 className='text-[#18470D] text-[40px] font-medium'>
                                        Welcome to Messenges!
                                    </h1>
                                    <p className='text-[#545454] text-[16px] font-normal'>
                                        You’ll see your chats here once you’ve made a connection.
                                    </p>
                                </div>
                            </>
                        }

                    </>
                }

            </div>
        </div>
    )
}

export default Messenger