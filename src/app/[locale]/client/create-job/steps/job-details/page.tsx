"use client";
import { useEffect, useState } from "react";
import { EditIcon } from "../../../../../../../public/icons/EditIcon";
import { JobDetail } from "./JobDetail";
import { JobDetailsPopup } from "./JobDetailsPopup";
import { useJobCreate } from "@/contextProviders/JobCreateContext";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { getSkills } from "@/lib/api/skillsApi/skillsApi";
import { createJob, getJobById, updateJob } from "@/lib/api/jobApi/jobApi";
import { getCategories } from "@/lib/api/categoriesApi/categoriesApi";
import { getSubcategories } from "@/lib/api/subcategoryApi/subcategoryApi";
import { useSearchParams } from "next/navigation";
import Spinner from "@/shared/widgets/Loader/Loader";

interface JobDetailsProps {
  handleChangeStep: (step: number) => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  handleChangeStep,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const { jobDetails, setJobDetails } = useJobCreate();
  const pathname = usePathname();
  const router = useRouter();
  const languageCode = pathname.split('/')[1];
  const searchParams = useSearchParams();
  const jobIdFromUrl = searchParams.get("id");
  const [isLoading, setIsLoading] = useState(false);
  const {
    data: skills,
  } = useSWR(['/skills', languageCode], () => getSkills(languageCode));
  const {
    data: categories,
  } = useSWR(['/category', languageCode], () => getCategories(languageCode));
  const {
    data: subcategories,
  } = useSWR(
    [
      '/subcategory/category/' +
      categories?.data.categories.find(
        (elm) => elm.translation.name == jobDetails.category.translations.name
      ),
      languageCode,
      categories?.data.categories.find(
        (elm) => elm.translation.name == jobDetails.category.translations.name
      ),
    ],
    () =>
      getSubcategories(
        languageCode,
        categories?.data.categories.find(
          (elm) => elm.translation.name == jobDetails.category.translations.name
        )?.id || 0
      )
  );
  useEffect(() => {
    const fetchJobData = async () => {
      if (jobIdFromUrl && !isNaN(Number(jobIdFromUrl)) && jobDetails.title === "") {
        try {
          setIsLoading(true);
          const res = await getJobById(Number(jobIdFromUrl));
          const normalizedCategory = {
            id: res.category.id,
            createdAt: res.category.createdAt,
            updatedAt: res.category.updatedAt,
            translations: res.category.translations[0],
          };
          const normalizedSubCategory = {
            id: res.subcategory.id,
            createdAt: res.subcategory.createdAt,
            updatedAt: res.subcategory.updatedAt,
            translations: res.subcategory.translations[0],
          };
          setJobDetails({
            title: res.title,
            jobDuration: res.jobDuration,
            workDuration: res.workDuration,
            experienceLevel: res.experienceLevel,
            isContractToHire: res.isContractToHire,
            budget: res.budget,
            description: res.description,
            category: normalizedCategory,
            subcategory: normalizedSubCategory,
            skills: res.skills.map((s) => s.id),
            isDraft: res.isDraft,
            file: res.file || "",
          });
          setIsLoading(false);
        } catch (err) {
          console.error("Failed to fetch job data by ID", err);
        }
      }
    };

    fetchJobData();
  }, [jobIdFromUrl]);



  const handleCreateDraftJob = async () => {
    setJobDetails({ ...jobDetails, isDraft: true });
    await createJob({
      "title": jobDetails.title,
      "jobDuration": "Long",
      "workDuration": jobDetails.workDuration,
      "experienceLevel": jobDetails.experienceLevel,
      "isContractToHire": true,
      "budget": jobDetails.budget,
      "description": jobDetails.description,
      "category": categories?.data.categories.find((elm) => elm.translation.name == jobDetails.category.translations.name)?.id || 0,
      "subcategory": subcategories?.data.subcategories.find((elm) => elm.translation.name == jobDetails.subcategory)?.id || 0,
      "skills": jobDetails.skills,
      "isDraft": true,
      "file": jobDetails.file,
    });
    router.push('/client');
  }
  const handleCreateJob = async () => {
    await createJob({
      "title": jobDetails.title,
      "jobDuration": "Long",
      "workDuration": jobDetails.workDuration,
      "experienceLevel": jobDetails.experienceLevel,
      "isContractToHire": true,
      "budget": jobDetails.budget,
      "description": jobDetails.description,
      "category": categories?.data.categories.find((elm) => elm.translation.name == jobDetails.category.translations.name)?.id || 0,
      "subcategory": subcategories?.data.subcategories.find((elm) => elm.translation.name == jobDetails.subcategory)?.id || 0,
      "skills": jobDetails.skills,
      "isDraft": false,
      "file": jobDetails.file,
    });
    setPopupVisible(true)
  };

  const handleUpdateJob = async () => {
    await updateJob(Number(jobIdFromUrl), {
      "title": jobDetails.title,
      "jobDuration": "Long",
      "workDuration": jobDetails.workDuration,
      "experienceLevel": jobDetails.experienceLevel,
      "isContractToHire": true,
      "budget": jobDetails.budget,
      "description": jobDetails.description,
      "category": categories?.data.categories.find((elm) => elm.translation.name == jobDetails.category.translations.name)?.id || 0,
      "subcategory": subcategories?.data.subcategories.find((elm) => elm.translation.name == jobDetails.subcategory)?.id || 0,
      "skills": jobDetails.skills,
      "isDraft": jobDetails.isDraft,
      "file": jobDetails.file,
    });
    router.push('/client');
  }
  return (
    <>
      {isLoading ? (<Spinner full />) : (
        <main className="px-[20px] pt-[112px] sm:px-[40px] lg:px-[120px] 2xl:mt-[88px] lg:mt-[50px] sm:mt-[60px] mt-[33px] 2xl:pt-24">
          <div className="mx-auto 2xl:max-w-[1430px] 2xl:mt-[50px]">
            <div className="flex justify-between gap-[10px]">
              <span className="text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] font-medium text-nowrap">
                Job Details
              </span>
              <div className="flex flex-wrap gap-[14px] 2xl:gap-[20px] justify-end">
                {
                  !jobIdFromUrl && (
                    <button onClick={() => handleCreateDraftJob()} className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
                      Save as Draft
                    </button>
                  )
                }

                <button
                  onClick={() => !jobIdFromUrl ? handleCreateJob() : handleUpdateJob()}
                  className="cursor-pointer w-[140px] h-[40px] text-nowrap lg:w-[167px] 2xl:w-[200px] lg:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
                  type="button"
                >
                  {jobIdFromUrl ? 'Update job' : 'Post a job'}
                </button>
              </div>
            </div>
            <div className="border border-[#DCDCDC] rounded-[20px] sm:mt-[40px] mt-[25px] ">
              <div className="">
                <div className="p-[8px] sm:p-[12px] lg:p-[17px_16px] 2xl:p-[12px_18px]">
                  <div className="border border-[#CBEC5E] rounded-[16px] p-[8px] sm:p-[12px_10px] lg:p-[16px] 2xl:p-[21px_12px] flex justify-between">
                    <div>
                      <span className="text-[14px] sm:text-[20px] lg:text-[24px] text-black font-medium">
                        {jobDetails.title}
                      </span>
                    </div>
                    <div onClick={() => handleChangeStep(1)} className="border border-[#CBEC5E] rounded-full min-w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <hr className="border-[#DCDCDC]" />
                <div className="p-[4px] sm:p-[12px] sm:pt-[26px] lg:p-[17px_16px] 2xl:p-[12px_18px] flex flex-col gap-[20px]">
                  <div className="border border-[#CBEC5E] rounded-[16px] flex justify-between p-[8px] sm:p-[12px_10px] lg:p-[16px] 2xl:p-[21px_12px]">
                    <div>
                      <span className="text-[16px] sm:text-[20px] text-black font-medium">
                        Description
                      </span>
                      <p className="text-[14px] sm:text-[16px] text-[#302F2F] max-w-[1075px] mt-[10px]">
                        {jobDetails.description}
                      </p>
                    </div>
                    <div onClick={() => handleChangeStep(5)} className="border border-[#CBEC5E] rounded-full min-w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
                      <EditIcon />
                    </div>
                  </div>
                  {
                    jobDetails.title && (<>
                      <JobDetail onClick={() => handleChangeStep(1)} title="Category" desc={jobDetails.category.translations.name} />
                      <JobDetail onClick={() => handleChangeStep(1)} title="Speciality" desc={typeof jobDetails.subcategory !== 'string' ? jobDetails.subcategory.translations.name : jobDetails.subcategory} />
                      <JobDetail onClick={() => handleChangeStep(4)} title="Budget" desc={jobDetails.budget.toString()} />
                      <JobDetail onClick={() => handleChangeStep(0)} title="Scope" desc={jobDetails.workDuration} />
                      <JobDetail onClick={() => handleChangeStep(2)} title="Skills" skills={skills?.data.skills.filter((skill) => jobDetails.skills.includes(skill.id)).map((skill) => skill.translation.name)} />
                    </>
                    )
                  }

                </div>
              </div>
              <div className="border-t border-[#DCDCDC] py-[30px] sm:py-[34px] lg:py-[30px]">
                <div className="flex gap-[16px] justify-between sm:px-[12px] lg:px-[16px] 2xl:px-[18px] px-[8px]">
                  <button
                    onClick={() => handleChangeStep(5)}
                    className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => !jobIdFromUrl ? handleCreateJob() : handleUpdateJob()}
                    className="w-[140px] h-[40px] lg:w-[167px] 2xl:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] rounded-[50px] cursor-pointer font-medium bg-[#CBEC5E]"
                  >
                    {jobIdFromUrl ? 'Update job' : 'Post a job'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}


      {popupVisible && (
        <JobDetailsPopup
          handleChangeStep={handleChangeStep}
          setPopupVisible={setPopupVisible}
        />
      )}
    </>
  );
};
export default JobDetails;