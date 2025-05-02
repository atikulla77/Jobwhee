import React from 'react'

interface Props {
    counts?: string | number;
}

const MessageUnreadBadge: React.FC<Props> = ({ counts = "" }) => {
    return (
        <div className='w-6 h-6 bg-[#E1EFD5] rounded-full text-xs flex justify-center items-center'>
            {counts}
        </div>
    )
}

export default MessageUnreadBadge