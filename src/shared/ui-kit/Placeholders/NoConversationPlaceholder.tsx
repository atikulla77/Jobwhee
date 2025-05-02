import React from 'react'
import noConversation from "../../../../public/images/all-images/noConversation.png"
import Image from 'next/image'

const NoConversationPlaceholder = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={noConversation} alt='' className='w-[199.25px] h-[176px]' />
            <p className='text-[#545454] text-[16px]'>
                Conversations will appear here
            </p>
        </div>
    )
}

export default NoConversationPlaceholder