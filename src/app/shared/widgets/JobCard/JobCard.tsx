import { JobCardLG } from "../../../../public/icons/JobCardLG";
import { JobCardSM } from "../../../../public/icons/JobCardSM";
import { JobCardMobile } from "../../../../public/icons/JobCardMobile";
import { GreenFolderIcon } from "../../../../public/icons/GreenFolderIcon";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { OpenedLetter } from "../../../../public/icons/OpenedLetter";
import { ProposalsIcon } from "../../../../public/icons/ProposalsIcon";
import { MessagesIcon } from "../../../../public/icons/MessagesIcon";
import React from "react";
import { timeAgo } from "@/utils/hooks/timeFormatter";
import { ClientJobsResult } from "@/lib/api/clientJobsApi/clientJobsApi";
import ThreeDotDropdown from "../ThreeDotDropdown/ThreeDotDropdown";

interface JobCardProps {
  job: ClientJobsResult;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="  relative h-full max-w-">
      <div className="hidden lg:block w-[433px] h-[368px] absolute">
        <JobCardLG />
      </div>
      <div className="hidden sm:block lg:hidden w-[380px] h-[374px] absolute">
        <JobCardSM />
      </div>
      <div className="sm:hidden w-[252px] h-[248px] absolute">
        <JobCardMobile />
      </div>

      <div className="flex justify-end relative h-[26px]  sm:h-[40px] lgh-[46px]">
        <div
          className={`text-[12px] sm:text-[16px] absolute top-[13px] sm:top-[16px] right-[11px] sm:right-[23px] z-10 p-[4px_16px] rounded-[30px] ${job.isDraft
              ? ' bg-[#F6EED9] text-[#CAAC00] '
              : job.status === 'Active'
                ? ' bg-[#EEF6DB] text-[#5A7D06] '
                : ' bg-[#F7E7E3] text-[#E73E1E] '
            }`}
        >
          {job.isDraft
            ? 'Draft'
            : job.status === 'Active'
              ? 'Open Job Post'
              : 'Archive'}
        </div>
      </div>
      <div className=" h-full w-full pb-[19px] sm:pb-[30px] px-[12px] sm:px-[28px] sm:pr-[22px] lg:px-[22px] lg:pl-[29px] pt-[32px] sm:pt-[55px] 2xl:pt-[57px] 2xl:pl-[28px] rounded-[30px] relative rounded-tr-none ">
        <div className="flex">
          <div className="mr-[10px] sm:mr-[15px] min-w-[20px] sm:min-w-none w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[48px] lg:h-[48px] flex justify-center items-center border border-[#CCCCCC] rounded-full">
            <div className="lg:w-[24px] lg:h-[24px] sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]">
              <GreenFolderIcon />
            </div>
          </div>
          <div>
            <p className="text-[14px] lg:text-[15px] font-semibold max-w-[135px] sm:max-w-[157px] lg:max-w-[230px]">
              {job.title}
            </p>
            <p className="lg:mt-[5px] sm:mt-[9px] mt-[5px] text-[#818181] text-[14px] lg:text-[13px]">
              {timeAgo(job.createdAt)}
            </p>
          </div>
          <div className="ml-auto">
            <ThreeDotDropdown>
              <ul className="text-[#545454] text-[16px] font-medium flex flex-col gap-[8px]">
                <li>View proposals</li>
                <li>Make private</li>
                <li>View job posting</li>
                <li>Edit posting</li>
                <li>Remove posting</li>
              </ul>
            </ThreeDotDropdown>
          </div>
        </div>
        <div className="flex sm:justify-start sm:pl-[17px] lg:pl-0 gap-[12px] sm:gap-[23px] lg:justify-between 2xl:mt-[21px] sm:mt-[22px] mt-[15px] lg:mt-[25px]">
          <div className="text-center">
            <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
              Invited
            </p>
            <div className="flex gap-[5px] sm:mt-[3px] items-center">
              <div className="w-[13px] h-[13px] sm:w-[20px] sm:h-[20px]">
                <OpenedLetter />
              </div>
              <span className="text-[#545454] text-[10px] sm:text-[16px]">
                0/30
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
              Proposals
            </p>
            <div className="flex gap-[3px] justify-center items-center">
              <div className="w-[16px] h-[16px] sm:w-[25px] sm:h-[25px]">
                <ProposalsIcon />
              </div>
              <span className="text-[#545454] text-[10px] sm:text-[16px]">
                0
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
              Messaged
            </p>
            <div className="flex justify-center gap-[3px] sm:mt-[7px] items-center">
              <div className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]">
                <MessagesIcon />
              </div>
              <span className="text-[#545454] text-[10px] sm:text-[16px]">
                0
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="cursor-pointer text-[#18470D] text-[10px] sm:text-[16px] font-medium border border-[#CCCCCC] w-full h-[40px] rounded-full mt-[22px] sm:mt-[50px] lg:mt-[49px] 2xl:mt-[51px]">
            Find Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
