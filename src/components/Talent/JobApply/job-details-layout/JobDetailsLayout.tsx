"use client";
import { JobHeader } from "../job-header/JobHeader";
import { AboutClient } from "../about-client/AboutClient";
import { ClientHistory } from "../client-history/ClientHistory";
import { JobSkills } from "../job-skills/JobSkills";
import { JobDescription } from "../job-description/JobDescription";
import { InfoSectionGreen } from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import { CalendarIcon } from "../../../../../public/icons/CalendarIcon";
import { PersonBrainIcon } from "../../../../../public/icons/PersonBrainIcon";
import { MoneyIcon } from "../../../../../public/icons/MoneyIcon";

interface ClientHistoryItem {
  title: string;
  jobRating: number;
  startDate: string;
  endDate: string;
  description: string;
  earning: string;
  toTalentName: string;
}

interface JobDetailsProps {
  jobData: {
    postedDate: string;
    country: string;
    title: string;
    descriptionText: string;
    descriptionList?: string[];
    paymentVerified: boolean;
    rating: number;
    reviews: number;
    postedJobsCount: number;
    totalSpentMoney: number;
    memberSince: string;
    jobLink: string;
    city: string;
    cityTime: string;
    hireRate: number;
    openJob: number;
    projectScope: string;
    projectExperienceLevel: string;
    projectBudget: number;
    clientHistory: ClientHistoryItem[];
    jobSkills: string[];
    hires: number;
    active: number;
  };
  customStyles?: string;
}

export const JobDetailsLayout: React.FC<JobDetailsProps> = ({
  jobData,
  customStyles,
}) => {
  return (
    <main
      className={`2xl:max-w-[1547px] lg:max-w-[1280px] sm:px-[40px] px-[20px] sm:max-w-[860px] mx-auto ${customStyles}`}
    >
      <JobHeader
        postedDate={jobData.postedDate}
        country={jobData.country}
        title={jobData.title}
        action="Accept Invitation"
        buttonVisible={true}
      />
      <div className="flex justify-between flex-col lg:flex-row 2xl:mt-[30px] lg:mt-[20px] mt-[10px] gap-[10px] lg:gap-[20px] 2xl:gap-[29px]">
        <div className="2xl:max-w-[1040px] lg:max-w-[774px] w-full">
          <div className="">
            <InfoSectionGreen title="Details" lineWidth="w-[77px]">
              <JobDescription
                list={jobData.descriptionList}
                text={jobData.descriptionText}
                customStyles=""
              />
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="About" lineWidth="w-[77px]">
              <div
                className={`flex mt-[34px] sm:mt-[16px] justify-between flex-wrap gap-[16px] flex-col sm:flex-row mb-[12px] sm:mb-[44px]`}
              >
                <div className="flex gap-[8px]">
                  <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] sm:text-[20px]">
                      {jobData.projectScope}
                    </p>
                    <p className="text-[#545454] text-[14px] mt-[4px]">
                      Work Scope
                    </p>
                  </div>
                </div>
                <div className="flex gap-[8px]">
                  <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                    <PersonBrainIcon />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] sm:text-[20px]">
                      {jobData.projectExperienceLevel}
                    </p>
                    <p className="text-[#545454] text-[14px] mt-[4px]">
                      Experience Level
                    </p>
                  </div>
                </div>
                <div className="flex gap-[8px]">
                  <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                    <MoneyIcon />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] sm:text-[20px]">
                      ${jobData.projectBudget}
                    </p>
                    <p className="text-[#545454] text-[14px] mt-[4px]">
                      Budget
                    </p>
                  </div>
                </div>
              </div>
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="Skills" lineWidth="w-[77px]">
              <div className="mt-[16px]">
                <JobSkills skills={jobData.jobSkills} />
              </div>
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen
              title="Message"
              lineWidth="w-[77px]"
              sectionStyles="pb-0"
            >
              <div className="mt-[16px]">
                <div>
                  <div>
                    <span className="text-[18px] sm:text-[20px] lg:text-[30px] font-medium">
                      Message from client
                    </span>
                  </div>
                  <div className="flex 2xl:gap-[23px] lg:gap-[20px] sm:gap-[12px] gap-[14px] mt-[18px] mb-[28px]   flex-wrap text-[#545454]">
                    I'd like to invite you to explore the job I posted. If
                    you're available and interested, please feel free to submit
                    a proposal.
                    <div>
                      {" "}
                      <br />
                      Best regards, <br />
                      Eleni C.
                    </div>
                  </div>
                </div>
              </div>
            </InfoSectionGreen>
          </div>
          <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
            <InfoSectionGreen title="Client’s History" lineWidth="w-[119px]">
              <div className="mt-[11px]">
                <ClientHistory history={jobData.clientHistory} />
              </div>
            </InfoSectionGreen>
          </div>
        </div>
        <div className="w-full lg:max-w-[406px]">
          <AboutClient jobData={jobData} />
        </div>
      </div>
    </main>
  );
};
