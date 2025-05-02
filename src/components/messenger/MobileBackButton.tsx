"use client"
import { MoveLeft } from 'lucide-react'
import React from 'react'

const MobileBackButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className='w-[334px] lg:w-[390px] h-[830px]  border border-[#CBEC5E] rounded-[30px] p-2 m-4'>
            <button onClick={onClick} className="text-black sm:hidden w-10 h-10 rounded-full flex justify-center items-center bg-[#CBEC5E] mt-5 ml-3">
                <MoveLeft />
            </button>
        </div>
    )
}

export default MobileBackButton