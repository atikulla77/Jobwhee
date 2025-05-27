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
        <div className="w-full flex justify-center absolute left-0 2xl:bottom-[-7px] bottom-[-1px]">
          <Image
            width={28}
            height={30}
            src="/images/all-images/proTalentBadge.png"
            alt="pro-talent-badge"
            className="w-[28px] h-[30px] "
          />
        </div>

      )}
    </div>
  );
};
export default ProfileAvatar;
