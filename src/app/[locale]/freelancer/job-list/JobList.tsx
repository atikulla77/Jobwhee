"use client";
import { useEffect, useState } from "react";
import { FreeLancerFilter } from "@/shared/widgets/talentFilter/FreelancerFilter";
import { SearchIcon } from "../../../../../public/icons/talent-client/SearchIcon";
import { FileIcon } from "../../../../../public/icons/FileIcon";
import { HearthIcon } from "../../../../../public/icons/HeartIcon";
import { CheckIcon } from "../../../../../public/icons/CheckIcon";
import { FilterIcon } from "../../../../../public/icons/FilterIcon";

import {
  getJobList,
  Job,
  JobSearchParams,
  searchJobs,
} from "@/lib/api/jobListApi/JobListapi";
import { JobDetailsPopup } from "@/components/Talent/component/JobDetailsPopup";
import Dropdown from "@/components/Dropdown/Dropdown";
import { JobListCard } from "@/shared/widgets/JobListCard/JobListCard";
import useFCM from "@/utils/hooks/getFCMToken/useFCM";

const sortByList = [
  { id: 1, title: "Newest" },
  { id: 2, title: "Oldest" },
  { id: 3, title: "Budget Low to High" },
  { id: 4, title: "Budget High to Low" },
  { id: 5, title: "A-Z" },
  { id: 6, title: "Z-A" },
];

export default function JobList() {
  const [mobileFilterClick, setFilterClick] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { messages, FcmToken } = useFCM();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<string[]>([]);
  const [selectedScope, setSelectedScope] = useState<string[]>([]);
  const [jobDetailsPopupVisible, setJobDetailsPopupVisible] = useState(false);
  const [sortBy, setSortBy] = useState("Newest");

  // Toggle filter click
  const handleFilterClick = () => {
    setFilterClick(!mobileFilterClick);
  };

  // Fetch job data when component mounts
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await getJobList();
        console.log("🟢 API Response:", response);
        setJobs(response.data.results);
      } catch (err) {
        console.error("🔴 API fetch error:", err);
        setError("Failed to fetch job data.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);

  useEffect(() => {
    const fetchJobData = async () => {
      const params: JobSearchParams = {
        searchQuery: "developer",
        experienceLevels: selectedExperience ? selectedExperience : [""],
        budgetRanges: [],
        projectScopes: [],
        maxBudget: 10000,
        minBudget: 0,
        subcategoryIds: [],
        categoryIds: [],
        page: 1,
        limit: 10,
      };

      try {
        const response = await searchJobs(params, false);
        setJobs(response.data.results);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError("Failed to fetch jobs");
      }
    };

    fetchJobData();
  }, [selectedBudgets, selectedScope, selectedExperience]);

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
    <>
      <div className="max-w-[1650px] w-full mx-auto lg:flex gap-[101px] pt-[100px]">
        <FreeLancerFilter
          isMobileFilterActive={mobileFilterClick}
          handleFilterClick={handleFilterClick}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          selectedBudgets={selectedBudgets}
          setSelectedBudgets={setSelectedBudgets}
          selectedProposal={selectedProposal}
          setSelectedProposal={setSelectedProposal}
          selectedScope={selectedScope}
          setSelectedScope={setSelectedScope}
        />
        <div className="max-w-[1060px] w-full">
          {/* Search Bar */}
          {/* <div className="w-full border border-[#EAEAEA] h-[46px] rounded-[73px] px-[1px] gap-5 lg:flex items-center hidden">
          <SearchIcon width={43} height={43} />
          <input className="h-[24px] text-base text-[#737373] font-medium" placeholder="Search for jobs" />
        </div> */}

          {/* Mobile Search */}
          {/* <div className="flex lg:hidden gap-[7px]">
          <div className="w-full border border-[#EAEAEA] h-[46px] rounded-[73px] px-[1px] flex items-center">
            <SearchIcon width={43} height={43} />
            <input className="h-[24px] text-base text-[#737373] font-medium" placeholder="Search for jobs" />
          </div>
          <div onClick={handleFilterClick}>
            <FilterIcon />
          </div>
        </div> */}

          {/* Saved Searches */}
          {/* <div className="w-full flex mt-[26px] gap-[22px]">
          <p className="text-[14px] sm:text-[18px] text-black font-medium">Saved Searches</p>
          <div className="max-w-[495px] text-sm text-[#18470D]">
            <p>casino, UI/UX, Fintech, Web Development, Gambling, Shopify, WordPress, JavaScript, Full-stack, Game Design</p>
          </div>
        </div> */}

          {/* Save & Favorite Jobs */}
          {/*<p>{FcmToken ? FcmToken : "Fetching token..."}</p>*/}

          {/* {messages.map((msg: { title: string; body: string }, i: number) => (
            <li key={i} className="bg-gray-100 p-3 rounded">
              <strong>{msg.title}</strong>

              <p>{msg.body}</p>
            </li>
          ))} */}
          <div className="md:flex mt-[33px] justify-between">
            <div className="flex items-center gap-[31px]">
              <div className="flex items-center gap-[5px]">
                <FileIcon />
                <p className="text-[18px] text-[#18470D] font-medium">
                  Save Search
                </p>
              </div>
              <div className="flex gap-2">
                <HearthIcon />
                <p className="text-[18px] text-[#18470D] font-medium">
                  Favorite Jobs
                </p>
              </div>
            </div>
            {/* <div className="max-w-[253px] w-full mt-5 h-[42px] rounded-[12px] border border-[#EAEAEA] flex items-center justify-between px-2">
            <p className="text-base text-[#414750]">Sort by: Newest</p>
            <CheckIcon />
          </div> */}
            <div className="w-[254px]">
              <Dropdown
                placeholder={`Sort by: ${sortBy}`}
                setState={setSortBy}
                list={sortByList}
                hasCheckboxes={false}
                listMaxHeight="290px"
              />
            </div>
          </div>

          {/* Job Cards */}
          <div>
            {jobs.map((item, index) => (
              <div
                onClick={() =>
                  setJobDetailsPopupVisible(!jobDetailsPopupVisible)
                }
                key={index}
                className="mt-[35px] sm:mt-[105px] cursor-pointer"
              >
                <JobListCard
                  title={item.title}
                  description={item.description}
                  budget={item.budget}
                  experienceLevel={item.experienceLevel}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="max-w-[200px] w-full h-12 border border-[#CCCCCC] rounded-[50px] mt-[27px] text-[#18470D]">
              Load More
            </button>
          </div>
        </div>
      </div>
      {jobDetailsPopupVisible && (
        <JobDetailsPopup setPopupVisible={setJobDetailsPopupVisible} />
      )}
    </>
  );
}
