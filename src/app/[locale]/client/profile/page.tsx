"use client";
import { useState } from "react";
import { PaginationArrow } from "../../../../../public/icons/PaginationArrow";
import { ClientProfileHeader } from "@/components/Client/ClientProfileHeader";
import { ClientProfilePopup } from "@/app/[locale]/client/profile/sections/ClientProfileEdit";
import { InfoSectionGreen } from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import HistorySection from "@/shared/widgets/WorkHistory/HistorySection";

const clientData = {
  name: "Dimitrios Smith",
  utc: "12:10 PM UTC +1",
  geoLocation: "Athene, Greece",
  rating: "4.9",
  registrationDate: "May, 2025",
  amount: "$3K+",
  postedJobs: 12,
  hiredTalents: 155,
  imgUrl: "/talen1.png",
  hiringStory: [
    {
      title: "Algebra Tutoring for High School Student",
      rating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      budget: 2500,
      hours: 50,
    },
    {
      title: "Algebra Tutoring for High School Student",
      rating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      budget: 2500,
      hours: 50,
    },
    {
      title: "University-Level Calculus Tutoring",
      rating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      budget: 2500,
      hours: 50,
    },
    {
      title: "AP Statistics Crash Course",
      rating: 5,
      startDate: "Aug 5, 2024",
      endDate: "Nov 20, 2024",
      description:
        "The teacher was amazing! Helped me understand complex algebra concepts in a simple way. My grades improved significantly!",
      budget: 2500,
      hours: 0,
    },
  ],
};

export default function ClientProfile() {
  const [popupOpened, setPopupOpened] = useState(false);
  return (
    <div className=" mt-[200px]">
      <div className="2xl:pt-[72px] lg:pt-[58px] sm:pt-[35px] sm:px-[40px] px-[20px] pt-[49px] lg:px-none">
        <div className="mx-auto 2xl:max-w-[1472px] lg:max-w-[1175px] sm:max-w-[775px] sm:border-[1px] border-[#E2E8F0] rounded-[30px] 2xl:p-[38px_55px] lg:p-[68px_27px_80px] sm:p-[46px_17px_59px] sm:shadow-[0px_9.25px_15.04px_-3.47px_rgba(0,0,0,0.07)]">
          <ClientProfileHeader
            setPopupOpened={setPopupOpened}
            clientData={clientData}
          />
          <hr className="text-[#E6E6E6] 2xl:mt-[57px] lg:mt-[28px] sm:mt-[50px] mt-[29px]" />
          <InfoSectionGreen
            title="Hirings"
            lineWidth="sm:w-[65px] w-[40px] lg:w-[63px] 2xl:w-[167px]"
          >
            <HistorySection
              history={clientData.hiringStory || []} // example
              historyTitle="Working History"
              completedJobsTitle="Completed Jobs (24)"
              inProgressJobsTitle="In Progress (6)"
              noJobsImageSrc="/images/profile/professional-experience.png"
              noJobsText="No working experience yet"
            />
          </InfoSectionGreen>
          
        </div>
      </div>

      {popupOpened && (
        <ClientProfilePopup
          setPopupOpened={setPopupOpened}
          imgUrl={clientData.imgUrl}
        />
      )}
    </div>
  );
}
