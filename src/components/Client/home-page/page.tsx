"use client";

import Link from "next/link";
import { CardSlider } from "./CardSlider";
import { EmptyJobField } from "./EmptyJobField";
import { JobFieldCards } from "./JobFieldCards";
import React, { useEffect, useState } from "react";
import { useClientJobs } from "@/contextProviders/ClientJobsContext";
import { UniversalPopup } from "@/shared/widgets/UniversalPopup/UniversalPopup";
import { removeJob } from "@/lib/api/jobApi/jobApi";
import { set } from "date-fns";
import useFCM from "@/utils/hooks/getFCMToken/useFCM";

const personsData = [
  {
    id: 1,
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/images/all-images/no-image.png",
  },
  {
    id: 2,
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/images/all-images/no-image.png",
  },
  {
    id: 3,
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/images/all-images/no-image.png",
  },
  {
    id: 4,
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/images/all-images/no-image.png",
  },
  {
    id: 5,
    name: "Ioanna S.",
    profession: "Beauty and Wellness",
    totalEarning: "$3K+",
    totalJobs: 12,
    totalHours: 155,
    lastContractTogether: "Bridal Hairstyling for Wedding Ceremony",
    imgUrl: "/images/all-images/no-image.png",
  },
];

const ClientHomePage: React.FC = () => {
  const { jobsData, mutate } = useClientJobs();
  const [modalOpen, setModalOpen] = useState(false);
  const [jobId, setJobId] = useState(-1);
    const { messages, FcmToken } = useFCM();
  
  const deleteJob = (modalOpen: boolean, id: number) => {
    setModalOpen(modalOpen);
    if (id === -1) return;
    setJobId(id);
  };

    useEffect(() => {
      const sendFcmToken = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken"); // or however you get your token
  
          if (!accessToken) {
            console.warn("No access token found.");
            return;
          }
  
          const response = await fetch("/notifications/createFcmToken", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              fcmToken: FcmToken,
            }),
          });
  
          if (!response.ok) {
            console.error("Failed to send FCM token:", await response.text());
          } else {
            console.log("✅ FCM token sent successfully");
          }
        } catch (err) {
          console.error("🔴 Error sending FCM token:", err);
        }
      };
  
      if (FcmToken) {
        sendFcmToken();
      }
    }, [FcmToken]);
  return (
    <main className="overflow-x-hidden sm:mt-[10px] lg:mt-[95px] 2xl:mt-[117px]">
      {modalOpen && (
        <UniversalPopup
          imageSrc="/images/all-images/jobRemovePopupImage.png"
          heading="Are you sure to delete this job post?"
          description="Deleting this job post will remove it from your profile permanently."
          cancelText="Cancel"
          confirmText="Yes, Delete"
          onCancel={() => deleteJob(false, -1)}
          onConfirm={() => {
            removeJob(jobId);
            setModalOpen(false);
            mutate();
          }}
        />
      )}
      <div className="max-w-[calc(100vw_-_60px)] sm:max-w-[780px] lg:max-w-[1200px] 2xl:max-w-[1326px] sm:mx-auto">
        <div>
          <div
            className={`${
              jobsData && jobsData.length
                ? "mb-[39px] sm:mb-[27px]"
                : "mb-[110px] sm:mb-[130px] lg:mb-[190px]"
            } flex justify-between items-center gap-[30px] flex-wrap`}
          >
                      {/*<p>{FcmToken ? FcmToken : "Fetching token..."}</p>*/}

            <span className="text-[20px] sm:text-[30px] xl:text-[40px] font-medium text-[#18470D]">
              Welcome back, User
            </span>
            <Link href="/client/create-job">
              <button
                className="cursor-pointer w-[200px] h-[40px] text-nowrap sm:w-[200px] sm:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
                type="button"
              >
                + Post a job
              </button>
            </Link>
          </div>
          {jobsData && jobsData.length ? (
            <JobFieldCards jobsData={jobsData || []} deleteJob={deleteJob} />
          ) : (
            <EmptyJobField
            // setCurrentPage={setCurrentPage}
            />
          )}
        </div>
        <div className="lg:mt-[127px] 2xl:mt-[70px] sm:mt-[85px] mt-[55px]">
          <span className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-[#18470D] sm:mb-[50px] lg:mb-[14px] mb-[18px] block">
            Work together again on something new
          </span>
          <CardSlider personsData={personsData} />
        </div>
        <div className="sm:mt-[50px] lg:mt-[30px] 2xl:mt-[70px] mt-[93px]">
          <span className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-[#18470D] sm:mb-[27px] lg:mb-[32px] 2xl:mb-[14px] mb-[27px] block">
            Top Talents
          </span>
          <CardSlider personsData={personsData} />
        </div>
      </div>
    </main>
  );
};

export default ClientHomePage;
