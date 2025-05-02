"use client";
import Dropdown from "@/shared/ui-kit/Dropdown";
import { NotificationList } from "@/shared/widgets/NotificationList.tsx/NotificationList";
import { useEffect, useState } from "react";

const categories = [
  { id: 1, title: "Job applied", type: "applied", checked: false },
  { id: 2, title: "Invitation", type: "invitation", checked: false },
  { id: 3, title: "Offer received", type: "offer", checked: false },
  { id: 4, title: "Milestone created", type: "milestone", checked: false },
  {
    id: 5,
    title: "Contract created",
    type: "contract-created",
    checked: false,
  },
];

const testNotifies = [
  {
    id: 1,
    type: "rejected",
    serviceName: "Home Cleaning and Maintenance",
    reason: "Weak Proposal",
    timestamp: "Today, 12:57 PM",
    unRead: true,
    talentName: "Maria T.",
  },
  {
    id: 2,
    type: "milestone",
    serviceName: "Home Cleaning and Maintenance",
    milestoneName: "Week 1",
    milestoneUrl: "",
    talentName: "Maria T.",
    timestamp: "Today, 12:57 PM",
    unRead: true,
  },
  {
    id: 3,
    type: "contract-created",
    serviceName: "Home Cleaning and Maintenance",
    createdWith: "Maria T",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 4,
    type: "accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 5,
    type: "applied",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 6,
    type: "contract-accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 7,
    type: "contract-rejected",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
    reason: "Mismatch in Budget or Rate",
  },
];

const testNotifies2 = [
  {
    id: 1,
    type: "rejected",
    serviceName: "Home Cleaning and Maintenance",
    reason: "Weak Proposal",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 2,
    type: "milestone",
    serviceName: "Home Cleaning and Maintenance",
    milestoneName: "Week 1",
    milestoneUrl: "",
    talentName: "Maria T.",
    timestamp: "Today, 12:57 PM",
  },
  {
    id: 3,
    type: "contract-created",
    serviceName: "Home Cleaning and Maintenance",
    createdWith: "Maria T",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 4,
    type: "accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 5,
    type: "applied",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 6,
    type: "contract-accepted",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
  },
  {
    id: 7,
    type: "contract-rejected",
    serviceName: "Home Cleaning and Maintenance",
    timestamp: "Today, 12:57 PM",
    talentName: "Maria T.",
    reason: "Mismatch in Budget or Rate",
  },
];

const ClientNotifications = () => {
  const [dropDownData, setDropDownData] = useState(categories);

  const [unfilteredNotifiesResents, setUnfilteredNotifiesResents] =
    useState(testNotifies);
  const [unfilteredNotifiesEarlier, setUnfilteredNotifiesEarlier] =
    useState(testNotifies2);

  const [filteredNotifiesResents, setFilteredNotifiesResents] = useState(
    testNotifies.filter((notify) => notify.type !== "earlier")
  );
  const [filteredNotifiesEarlier, setFilteredNotifiesEarlier] = useState(
    testNotifies2.filter((notify) => notify.type !== "resent")
  );

  const deleteNotify = (id: number, section: "resents" | "earlier") => {
    if (section === "resents") {
      setFilteredNotifiesResents((prevNotifies) =>
        prevNotifies.filter((notify) => notify.id !== id)
      );
      setUnfilteredNotifiesResents((prevNotifies) =>
        prevNotifies.filter((notify) => notify.id !== id)
      );
    } else if (section === "earlier") {
      setFilteredNotifiesEarlier((prevNotifies) =>
        prevNotifies.filter((notify) => notify.id !== id)
      );
      setUnfilteredNotifiesEarlier((prevNotifies) =>
        prevNotifies.filter((notify) => notify.id !== id)
      );
    }
  };

  useEffect(() => {
    const selectedTypes = dropDownData
      .filter((item) => item.checked)
      .flatMap((item) =>
        item.type === "invitation" ? ["rejected", "accepted"] : [item.type]
      );

    if (selectedTypes.length === 0) {
      setFilteredNotifiesResents(
        unfilteredNotifiesResents.filter((notify) => notify.type !== "earlier")
      );
      setFilteredNotifiesEarlier(
        unfilteredNotifiesEarlier.filter((notify) => notify.type !== "resent")
      );
    } else {
      setFilteredNotifiesResents(
        unfilteredNotifiesResents.filter(
          (notify) =>
            selectedTypes.includes(notify.type) && notify.type !== "earlier"
        )
      );
      setFilteredNotifiesEarlier(
        unfilteredNotifiesEarlier.filter(
          (notify) =>
            selectedTypes.includes(notify.type) && notify.type !== "resent"
        )
      );
    }
  }, [dropDownData, unfilteredNotifiesResents, unfilteredNotifiesEarlier]);

  const toggleCheckbox = (id: number) => {
    setDropDownData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="2xl:pt-[204px] lg:pt-[180px] sm:pt-[162px] pt-[114px] mx-auto px-[20px] sm:px-[40px] lg:max-w-[1280px] 2xl:max-w-[1470px]">
      <h1 className="text-[#18470D] font-medium text-[20px] sm:text-[24px] lg:text-[40px] 2xl:text-[56px]">
        Notifications
      </h1>
      <div className="mt-[23px] sm:mt-[21px] lg:mt-[48px]">
        <div className="flex flex-wrap justify-between items-center gap-[20px] pr-[6px] sm:pr-[8px] lg:pr-[13px] 2xl:pr-[15px]">
          <span className="text-[18px] sm:text-[20px] lg:text-[30px] text-black font-medium">
            Resents
          </span>
          <div className="w-full max-w-[350px] mb-[14px]">
            <Dropdown
              hasCheckboxes
              list={dropDownData}
              placeholder="Notification type"
              toggleCheckbox={toggleCheckbox}
              searchField={false}
              readOnly
            />
          </div>
        </div>
        <div className="notification-scrollbar max-h-[570px] sm:max-h-[585px] lg:max-h-[580px] overflow-auto">
          <NotificationList
            side={"client"}
            deleteNotify={(id) => deleteNotify(id, "resents")}
            page={true}
            notifies={filteredNotifiesResents}
          />
        </div>
        <div className="flex justify-between gap-[20px] sm:mt-[58px] mt-[52px]">
          <span className="text-[18px] sm:text-[20px] lg:text-[30px] text-black font-medium">
            Earlier
          </span>
        </div>
        <div className="notification-scrollbar max-h-[570px] sm:max-h-[585px] lg:max-h-[580px] overflow-auto mt-[11px]">
          <NotificationList
            side={"client"}
            deleteNotify={(id) => deleteNotify(id, "earlier")}
            page={true}
            notifies={filteredNotifiesEarlier}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientNotifications;
