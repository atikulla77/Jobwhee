import { MilestoneIcon } from "lucide-react";
import Link from "next/link";
import { ApplyBriefcase } from "../../../../public/icons/ApplyBriefcase";
import { BlackCloseIcon } from "../../../../public/icons/BlackCloseIcon";
import { BlueBriefcase } from "../../../../public/icons/BlueBriefcase";
import { ContractAcceptIcon } from "../../../../public/icons/ContractAcceptIcon";
import { ContractRejectIcon } from "../../../../public/icons/ContractRejectIcon";
import { GreenBriefcase } from "../../../../public/icons/GreenBriefcase";
import { OliveBriefcase } from "../../../../public/icons/OliveBriefcase";
import { PinkBriefcase } from "../../../../public/icons/PinkBriefcase";


interface NotificationListProps {
  notifies: {
    id: number;
    type: string;
    serviceName: string;
    timestamp: string;
    reason?: string;
    createdWith?: string;
    unRead?: boolean;
    talentName?: string;
    milestoneName?: string;
    milestoneUrl?: string;
  }[];
  hamburger?: boolean;
  page?: boolean;
  deleteNotify: (id: number) => void;
  side?: string;
}

const getIcon = (type: string) => {
  switch (type) {
    case "viewed":
      return <BlueBriefcase />;
    case "rejected":
      return <PinkBriefcase />;
    case "applied":
      return <ApplyBriefcase />;
    case "contract-created":
      return <OliveBriefcase />;
    case "accepted":
      return <GreenBriefcase />;
    case "milestone":
      return <MilestoneIcon />;
    case "contract-accepted":
      return <ContractAcceptIcon />;
    case "contract-rejected":
      return <ContractRejectIcon />;
    default:
      return null;
  }
};

const getBackground = (type: string) => {
  switch (type) {
    case "viewed":
    case "applied":
      return "bg-[#BAE9FB]";
    case "rejected":
    case "contract-rejected":
      return "bg-[#F6CDD8]";
    case "contract-created":
      return "bg-[#FFF2C9]";
    case "milestone":
      return "bg-[#DBCEFA]";
    case "accepted":
      return "bg-[#C7FFDC]";
    case "contract-accepted":
      return "bg-[#CBEC5E]";
    default:
      return "";
  }
};

export const NotificationList: React.FC<NotificationListProps> = ({
  notifies,
  hamburger,
  page,
  deleteNotify,
  side,
}) => {
  return (
    <ul className="w-full flex h-auto flex-col overflow-y-auto max-h-[100%] pr-[6px] gap-[8px]">
      {notifies.map((notify) => (
        <li
          key={notify.id}
          className={`p-[12px_12px_14px_12px] sm:p-[16px_16px_15px_21px] lg:p-[16px_17px_15px_17px] 2xl:p-[14px_25px_14px_14px] border rounded-[20px] ${
            notify.unRead
              ? "bg-[#9ECE751A] border-[#18470D75]"
              : "border-[#CCCCCC]"
          }`}
        >
          <div className="flex gap-[4px] sm:gap-[17px] lg:gap-[10px] border-stroke dark:border-strokedark dark:hover:bg-meta-4">
            {/* ICON */}
            <div
              className={`flex justify-center items-center rounded-full w-[30px] min-w-[30px] h-[30px] lg:h-[38px] lg:w-[38px] lg:min-w-[38px] ${getBackground(notify.type)}`}
            >
              <div className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
                {getIcon(notify.type)}
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p
                className={`whitespace-pre-line text-[14px] sm:text-[16px] text-[#545454] ${
                  hamburger ? "max-w-[545px]" : ""
                }`}
              >
                {(() => {
                  switch (notify.type) {
                    case "viewed":
                    case "rejected":
                    case "accepted":
                      return side === "talent"
                        ? "Your application for"
                        : `${notify.talentName}`;

                    case "applied":
                      return `${notify.talentName} applied for`;

                    case "contract-created":
                      return "Your contract for";

                    case "milestone":
                      return side === "client"
                        ? `${notify.talentName} submitted`
                        : "";

                    case "contract-accepted":
                      return `${notify.talentName} has accepted the contract for`;

                    case "contract-rejected":
                      return `${notify.talentName} has rejected the contract for`;

                    default:
                      return "";
                  }
                })()}

                {/* Milestone Name (as link) */}
                {notify.type === "milestone" &&
                  side === "client" &&
                  notify.milestoneUrl &&
                  notify.milestoneName && (
                    <>
                      {" "}
                      <Link
                        href={notify.milestoneUrl}
                        className="text-[#18470D] underline"
                      >
                        {notify.milestoneName}
                      </Link>
                    </>
                  )}

                {/* Common service name */}
                {" "}
                <span className="text-[#18470D] underline decoration-[#18470D]">
                  {notify.serviceName}
                </span>

                {/* Suffixes */}
                {notify.type === "applied" && " job"}
                {notify.type === "milestone" && side === "client" && " job"}
                {notify.type === "viewed" && " has viewed."}
                {notify.type === "rejected" && side === "talent" && " has rejected."}
                {notify.type === "rejected" &&
                  side === "talent" &&
                  ` Reason: ${notify.reason}.`}
                {notify.type === "contract-created" &&
                  ` has created with ${notify.createdWith}.`}
                {notify.type === "contract-rejected" &&
                  ` Reason: ${notify.reason}`}
              </p>

              {/* Timestamp */}
              <p
                className={`${
                  page ? "mt-[10px] sm:mt-[32px]" : "mt-[10px]"
                } text-[14px] text-[#B9B9B9] ${
                  notify.unRead ? "text-black" : ""
                }`}
              >
                {notify.timestamp}
              </p>
            </div>

            {/* Close Button */}
            <div
              className="ml-auto cursor-pointer"
              onClick={() => deleteNotify(notify.id)}
            >
              <BlackCloseIcon />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
