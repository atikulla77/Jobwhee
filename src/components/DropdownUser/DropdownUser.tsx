"use client";
import React, { FC, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

import jwt from "jsonwebtoken";
import { getAuthToken } from "@/lib/authUtil";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";
import { Link, useRouter } from "@/i18n/routing";
import { UserTypeEnum } from "@/constants/UserTypeAndRoleEnum";
import { logoutWithFCMAndSignOut } from "@/utils/hooks/logoutWithFCM";

interface UserProps {
  imageUrl?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

const DropdownUser: FC<UserProps> = ({
  imageUrl,
  lastName,
  firstName,
  role,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = await getAuthToken();
        if (!token) {
          setUserRole("");
          return;
        }
        const decoded = jwt.decode(token);
        if (decoded && typeof decoded === "object" && "role" in decoded) {
          setUserRole(decoded.role as string);
        } else {
          console.error("Invalid token payload");
        }
      } catch (error) {
        console.error("Failed to fetch user role:", error);
        setUserRole("");
      }
    };

    fetchUserRole();
  }, [userRole]);

  const profileUrl =
    userRole === UserTypeEnum.Talent
      ? "/freelancer/profile"
      : userRole === UserTypeEnum.Client
      ? "/client/profile"
      : "/profile";

  const settingsUrl =
    userRole === UserTypeEnum.Talent
      ? "/freelancer/settings"
      : "/client/settings";

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="min-w-[46px]  w-[46px] h-[46px] lg:min-w-[44px] lg:w-[44px] lg:h-[44px] 2xl:h-[60px] 2xl:min-w-[60px] 2xl:w-[60px] rounded-full xl:transform">
          <Image
            width={46}
            height={46}
            src={`${imageUrl ? imageUrl : "/images/all-images/no-image.png"}`}
            className=" w-full h-full rounded-[50%] "
            alt="User"
          />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div className="relative z-50 z-[9999] ">
          <div className="absolute  -left-[55%] top-1 w-0 h-0 border-l-[35.5px] border-r-[35.5px] border-b-[34px] border-transparent border-b-white z-20 "></div>
          <div
            className={`absolute right-0 mt-4  z-40 flex w-[271px] flex-col  border-stroke bg-white shadow-default  dark:border-strokedark dark:bg-boxdark border  border-[#CCCCCC] rounded-[10px]`}
          >
            <div className="flex py-3 px-[22px] gap-4 justify-start items-center">
              <span className="h-[51px] w-[51px] rounded-full">
                <Image
                  width={46}
                  height={46}
                  src={`${
                    imageUrl ? imageUrl : "/images/all-images/no-image.png"
                  }`}
                  className="max-w-[46px] max-h-[46px] xl:min-w-[60px] xl:min-h-[60px] rounded-[50%]"
                  alt="User"
                />
              </span>
              <div className="flex flex-col justify-center items-start pt-2 bg-white ">
                <h2 className="whitespace-nowrap font-medium">
                  {firstName} {lastName}
                </h2>
                <p className="font-medium text-[12px] leading-[18px] tracking-normal">
                  {role}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark bg-white ">
              <li className="leading-6 pt-3.5">
                <Link
                  onClick={() => setDropdownOpen(false)}
                  href={profileUrl}
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                  <Image
                    src={"/images/icon-images/user.png"}
                    width={24}
                    height={24}
                    alt="Logo"
                    className="min-w-[24px] min-h-[24px]"
                  />
                  Your Profile
                </Link>
              </li>
              <li className="leading-6 pb-3.5">
                <Link
                  onClick={() => setDropdownOpen(false)}
                  href={settingsUrl}
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                  <Image
                    src={"/images/icon-images/settings.png"}
                    width={24}
                    height={24}
                    alt="Logo"
                    className="min-w-[24px] min-h-[24px]"
                  />
                  Account Settings
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base bg-white z-40  ">
              <button
  onClick={() => logoutWithFCMAndSignOut(router)}
                  className=" flex gap-[15px]"
                // onClick={async () => {
                //   await signOut({ redirect: false });
                //   router.push("/auth/signin");
                // }}
              >
                <Image
                  src={"/images/icon-images/log-out.png"}
                  width={24}
                  height={24}
                  alt="Logo"
                  className="min-w-[24px] min-h-[24px]"
                />
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
