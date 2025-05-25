import Image from "next/image";
import React from "react";

interface ProfileAvatarProps {
  imgSrc: string;
  isOnline: boolean;
  hasBadge: boolean;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ imgSrc, isOnline, hasBadge }) => {
  return (
    <div className="relative w-[84px] h-[95px]">
      <div>
        <Image
          className="min-w-[84px] w-[84px] h-[84px] rounded-full"
          width={84}
          height={84}
          src={imgSrc}
          alt="profile-avatar"
        />
      </div>
      {isOnline && (
        <div className="w-[13px] h-[13px] top-[5px] left-[8px] rounded-full  border-[1px] bg-white flex justify-center items-center absolute ">
          <div className="w-[10px] h-[10px] rounded-full bg-[#00FF4D]"></div>
        </div>
      )}
      {hasBadge && (
        <Image
          width={30}
          height={30}
          src="/images/all-images/proTalentBadge.png"
          alt="pro-talent-badge"
          className="w-[30px] h-[30px] left-2/4 -translate-x-2/4 absolute bottom-0"
        />
      )}
    </div>
  );
};
export default ProfileAvatar;
