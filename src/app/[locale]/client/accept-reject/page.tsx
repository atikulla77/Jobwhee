"use client";

import { useState } from "react";
import { acceptRejectMockData } from "./data/acceptRejectMockData";
import ReviewApplications from "@/components/Client/AcceptReject/ReviewApplications";
import { Tabs } from "@/shared/ui-kit/Tabs";
import ViewJobPost from "@/components/Client/AcceptReject/ViewJobPost";
import InviteTalent from "@/components/Client/AcceptReject/InviteTalents";

const tabs = ["View Job post", "Invite Talents", "Review applications", "Hire"];

const AcceptReject = () => {
  const [activeTab, setActiveTab] = useState("Review applications");

  return (
    <div className="2xl:mt-[206px] xl:mt-[146px] md:mt-[98px] mt-[106px] mx-auto 2xl:w-[1436px] xl:w-[1200px] md:w-[780px] overflow-hidden">
      <div>
        <div className="lg:w-[1045px] w-full h-[56px] 2xl:mt-[45px] md:mt-[36px] mt-[21px]">
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {activeTab === "View Job post" && <ViewJobPost acceptRejectData={acceptRejectMockData} />}
      {activeTab === "Invite Talents" && <InviteTalent acceptRejectData={acceptRejectMockData} />}
      {activeTab === "Review applications" && (
        <ReviewApplications acceptRejectData={acceptRejectMockData} />
      )}
      {activeTab === "Hire" && (
        <div className="mt-10 text-center text-4xl py-10 font-semibold text-gray-500">
          Hire functionality coming soon.
        </div>
      )}
    </div>
  );
};

export default AcceptReject;
