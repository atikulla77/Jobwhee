import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NotificationIcon } from "../../../../public/icons/NotificationIcon";
import { NotificationList } from "@/shared/widgets/NotificationList.tsx/NotificationList";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";
import { NotificationDropdownContainer } from "@/shared/widgets/NotificationDropdown/NotificationDropdown";
import useSWR from "swr";
import { getNotificationApi } from "@/lib/api/notificationApi/getNotificationApi";
import useFCM from "@/utils/hooks/getFCMToken/useFCM";
import { timeAgo } from "@/utils/hooks/timeFormatter";

const testNotifies = [
  {
    id: 1,
    type: "viewed",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 2,
    type: "rejected",
    serviceName: "Home Cleaning and Maintenance",
    reason: "Weak Proposal",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 3,
    type: "applied",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 4,
    type: "contract-created",
    serviceName: "Home Cleaning and Maintenance",
    createdWith: "Maria S",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 5,
    type: "accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 6,
    type: "viewed",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 7,
    type: "rejected",
    serviceName: "Home Cleaning and Maintenance",
    reason: "Weak Proposal",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 8,
    type: "applied",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 9,
    type: "contract-created",
    serviceName: "Home Cleaning and Maintenance",
    createdWith: "Maria S",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
  {
    id: 10,
    type: "accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "John Doe",
  },
];

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const [notifies, setNotifies] = useState(testNotifies);
  // const {  FcmToken } = useFCM();
  const [messages, setNotifications] = useState<any[]>([]);
  // useEffect(() => {
  //   console.log("Messages updated:", messages);
  // }, [messages]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedNotifications =
        JSON.parse(localStorage.getItem("notifications") || "[]") || [];
      setNotifications(updatedNotifications);
    };
    window.addEventListener("notification-updated", handleStorageChange);
    return () =>
      window.removeEventListener("notification-updated", handleStorageChange);
  }, []);

  const { data, error, isLoading, mutate } = useSWR(
    "notifications",
    getNotificationApi
  );

  const deleteNotify = (id: number) => {
    setNotifies((prevNotifies) => {
      return prevNotifies.filter((notify) => notify.id !== id);
    });
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li className="list-none">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          href="#"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white border-[#EAEAEA]"
        >
          <div className="relative">
            {notifies && (
              <div className="absolute w-[5px] h-[5px] rounded-full top-0 right-[3px] bg-[#FF0000]"></div>
            )}
            {dropdownOpen ? (
              <NotificationIcon />
            ) : (
              <Image
                src={"/images/icon-images/notification.png"}
                width={24}
                height={24}
                alt="Logo"
                className=" min-w-[24px] min-h-[24px] "
              />
            )}
          </div>
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? "hidden" : "inline"
            }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        </Link>

        {dropdownOpen && (
          <NotificationDropdownContainer>
            <div className="border-[#E2E8F0] lg:p-[17px_17px_13px] 2xl:p-[17px_26px_13px]">
              <h5 className="text-[16px] font-medium text-[#8A99AF]">
                Notification
              </h5>
            </div>
            <div className=" max-h-[575px] overflow-hidden space-y-3">
              {messages &&
                messages.map(
                  (msg: { title: string; body: string }, i: number) => (
                    <li key={i} className=" gap-1">
                      <div className=" w-full h-[110px] flex border gap-[10px] items-center boder-[#CCCCCC] rounded-[20px] p-4">
                        <div className=" w-[38px] h-[39px] rounded-full bg-green-400"></div>

                        <div>
                          <p className=" font-semibold">{msg?.body}</p>
                        </div>
                      </div>
                    </li>
                  )
                )}
              {/* {data?.data?.result?.length && data.data.result.length > 0 && (
                <div className=" w-full h-[110px] flex border gap-[10px] items-center boder-[#CCCCCC] rounded-[20px] p-4">
                  <div className=" w-[38px] h-[39px] rounded-full bg-blue-400"></div>

                  <div>
                    <p className=" font-semibold">
                      {data?.data?.result[0]?.message}
                    </p>
                    {data?.data?.result[0]?.updatedAt && (
                      <p>{timeAgo(data?.data?.result[0]?.updatedAt)}</p>
                    )}
                  </div>
                </div>
              )} */}
              <div className="notification-scrollbar max-h-[570px] sm:max-h-[585px] lg:max-h-[580px] overflow-auto">
                <NotificationList
                  side={"client"}
                  deleteNotify={(id) => deleteNotify(id)}
                  page={true}
                  notifies={notifies}
                />
              </div>

              {/* <NotificationList
                deleteNotify={deleteNotify}
                notifies={notifies}
                // side="talent"
                /> */}
            </div>
            <div className="flex items-center justify-center p-[7px]">
              <Link href={"/freelancer/notifications"}>
                <button className="h-[48px] w-[200px] text-[16px] font-medium text-[#18470D]">
                  View all notifications
                </button>
              </Link>
            </div>
          </NotificationDropdownContainer>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
