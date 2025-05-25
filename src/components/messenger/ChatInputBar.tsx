import React, { useState } from 'react'
import Image from 'next/image'

import paperClip from "../../../public/images/icon-images/paperclip.svg"
import messageSendIcon from "../../../public/images/icon-images/message-send-icon.svg"
import FileUploadModal from '@/shared/widgets/Messenger/FileUploadModal'
import Button from '@/shared/ui-kit/Button'

const ChatInputBar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isMessageSend, setIsMessageSend] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFileUploaded = (file: File | null) => {
        setUploadedFile(file);
        console.log('Uploaded File:', file);
        // Do something with the uploaded file
    };

    const handleSubmit = () => {
        setIsMessageSend(true);

        setTimeout(() => {
            setIsMessageSend(false);
        }, 1500); // 1500 milliseconds = 1.5 seconds
    }

    return (
        <>
            <div className="hidden sm:flex py-2 flex-col justify-between px-4 mt-2 md:rounded-[25px] rounded-[20px] border border-[#EAEAEA] border-b-[6px] border-b-[#CBEC5E] bg-white shadow-[0px_4px_20px_0px_#00000017] w-full">
                <div className='mt-3 ml-2 mb-1 h-full'>
                    <textarea name="" id="" className='w-full h-full outline-none resize-none text-[#545454] placeholder-[#545454]' placeholder='Send a message...' />
                </div>
                <div className='w-full mb-1'>
                    <div className='flex justify-end items-center gap-4'>
                        <Image src={paperClip} alt='' className='cursor-pointer' onClick={openModal} />
                        <div className='w-[115px] h-[48px] relative'>
                            <Button type={"active"} action={<>
                                <span>{isMessageSend ? "Sending..." : "Send"}</span> {!isMessageSend && <>
                                    <Image src={messageSendIcon} alt='' className='ml-2' />
                                </>}
                            </>} onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:hidden flex w-full justify-center items-center gap-3 mt-5 h-36'>
                <div className='border border-[#EAEAEA] h-full w-full rounded-[20px] p-3'>
                    <textarea name="" id="" placeholder='Send a message...' className='w-full text-[#545454] text-[14px] h-18 border-none outline-none' />
                    <div className='w-full flex justify-end items-center'>
                        <button className='w-[38px] h-[38px] bg-[#CBEC5E] hover:bg-[#ACD624] rounded-[75px] flex justify-center items-center'>
                            <Image src={messageSendIcon} alt='' className='' />
                        </button>
                    </div>
                </div>
                {/* <div className='w-[43.58px] h-[43.58px] rounded-[27.24px] border border-[#CBEC5E] flex justify-center items-center' onClick={openModal}>
                    <Image src={paperClip} alt='' className='cursor-pointer w-[16px]' />
                </div> */}
                {/* <div className='w-[284px] border border-[#EAEAEA] rounded-[47px] h-[44px] p-[2px] flex justify-start items-center'>
                    <div className='w-full'>
                        <textarea className='mt-[26px] w-full h-full text-[14px] pl-3 pr-3 outline-none text-[#545454]' placeholder='Send a message...' />
                    </div>
                    <div className='w-[45px] h-full bg-[#CBEC5E] flex justify-center items-center rounded-[75px]'>
                        <Image src={messageSendIcon} alt='' />
                    </div>
                </div> */}

            </div>


            <FileUploadModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onFileUploaded={handleFileUploaded}
            />
        </>
    )
}

export default ChatInputBar