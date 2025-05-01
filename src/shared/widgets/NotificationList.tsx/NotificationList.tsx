import Link from "next/link";
import { BlueBriefcase } from "../../../public/icons/BlueBriefcase";
import { GreenBriefcase } from "../../../public/icons/GreenBriefcase";
import { OliveBriefcase } from "../../../public/icons/OliveBriefcase";
import { PinkBriefcase } from "../../../public/icons/PinkBriefcase";
import { VioletBriefcase } from "../../../public/icons/VioletBriefcase";
import { BlackCloseIcon } from "../../../public/icons/BlackCloseIcon";
import { MilestoneIcon } from "../../../public/icons/MilestoneIcon";
import { ApplyBriefcase } from "../../../public/icons/ApplyBriefcase";
import { ContractAcceptIcon } from "../../../public/icons/ContractAcceptIcon";
import { ContractRejectIcon } from "../../../public/icons/ContractRejectIcon";

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

export const NotificationList: React.FC<NotificationListProps> = ({
	notifies,
	hamburger,
	page,
	deleteNotify,
	side,
}) => {
	return (
		<ul className="w-full flex h-auto flex-col overflow-y-auto max-h-[100%] pr-[6px] gap-[8px]">
			{notifies.map(notify => {
				return (
					<li
						key={notify.id}
						className={`p-[12px_12px_14px_12px] sm:p-[16px_16px_15px_21px] lg:p-[16px_17px_15px_17px] 2xl:p-[14px_25px_14px_14px] border  rounded-[20px] ${
							notify.unRead
								? "bg-[#9ECE751A] border-[#18470D75]"
								: "border-[#CCCCCC]"
						}`}>
						<div className="flex gap-[4px] sm:gap-[17px] lg:gap-[10px]  border-stroke dark:border-strokedark dark:hover:bg-meta-4">
							<div
								className={`flex justify-center items-center rounded-full w-[30px] min-w-[30px] h-[30px] lg:h-[38px] lg:w-[38px] lg:min-w-[38px] ${
									notify.type === "viewed"
										? "bg-[#BAE9FB]"
										: notify.type === "rejected"
										? "bg-[#F6CDD8]"
										: notify.type === "applied"
										? "bg-[#BAE9FB]"
										: notify.type === "contract-created"
										? "bg-[#FFF2C9]"
										: notify.type === "milestone"
										? "bg-[#DBCEFA]"
										: notify.type === "accepted"
										? "bg-[#C7FFDC]"
										: notify.type === "contract-accepted"
										? "bg-[#CBEC5E]"
										: notify.type === "contract-rejected"
										? "bg-[#F6CDD8]"
										: ""
								}`}>
								<div className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
									{notify.type === "viewed" ? (
										<BlueBriefcase />
									) : notify.type === "rejected" ? (
										<PinkBriefcase />
									) : notify.type === "applied" ? (
										<ApplyBriefcase />
									) : notify.type === "contract-created" ? (
										<OliveBriefcase />
									) : notify.type === "accepted" ? (
										<GreenBriefcase />
									) : notify.type === "milestone" ? (
										<MilestoneIcon />
									) : notify.type === "contract-accepted" ? (
										<ContractAcceptIcon />
									) : notify.type === "contract-rejected" ? (
										<ContractRejectIcon />
									) : (
										""
									)}
								</div>
							</div>
							<div>
								{/* viewed rejected applied contract-created accepted */}
								<p
									className={`whitespace-pre-line text-[14px] sm:text-[16px] text-[#545454] ${
										hamburger ? "max-w-[545px]" : ""
									}`}>
									{(notify.type === "viewed" ||
										notify.type === "rejected" ||
										notify.type === "accepted") &&
										(side === "talent"
											? "Your application for"
											: `${notify.talentName}`)}
									{notify.type === "rejected" &&
										side === "client" &&
										" has rejected the job offer for "}
									{notify.type === "accepted" &&
										side === "client" &&
										" has accepted the job offer for "}
									{notify.type === "applied" &&
										`${notify.talentName} applied for `}{" "}
									{notify.type === "contract-created" && "Your contract for "}
									{notify.type === "milestone" &&
										(side === "talent"
											? " "
											: `${notify.talentName} submitted `)}
									{notify.type === "milestone" &&
										side === "client" &&
										notify.milestoneUrl &&
										notify.milestoneName && (
											<Link
												href={notify.milestoneUrl}
												className="text-[#18470D] underline">
												{notify.milestoneName}
											</Link>
										)}
									{notify.type === "milestone" &&
										side === "client" &&
										" milestone for "}
									{notify.type === "contract-accepted" &&
										`${notify.talentName} has accepted the contract for `}
									{notify.type === "contract-rejected" &&
										`${notify.talentName} has rejected the contract for `}
									<span className="text-[#18470D] underline decoration-[#18470D]">
										{notify.serviceName}
									</span>
									{notify.type === "applied" && " job"}
									{notify.type === "milestone" && side === "client" && " job"}
									{notify.type === "viewed" && " has viewed.  "}
									{notify.type === "rejected" &&
										side === "talent" &&
										" has rejected.  "}
									{notify.type === "rejected" && side === "talent"
										? ` Reason: ${notify?.reason}.  `
										: "."}
									{notify.type === "contract-created" &&
										` has created with ${notify?.createdWith}. `}
									{notify.type === "contract-rejected" &&
										` Reason: ${notify.reason}`}
								</p>
								<p
									className={` ${
										page ? "mt-[10px] sm:mt-[32px]" : "mt-[10px]"
									} text-[14px] text-[#B9B9B9] ${
										notify.unRead ? "text-black" : ""
									}`}>
									{notify.timestamp}
								</p>
							</div>
							<div
								className="ml-auto cursor-pointer"
								onClick={() => deleteNotify(notify.id)}>
								<BlackCloseIcon />
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
