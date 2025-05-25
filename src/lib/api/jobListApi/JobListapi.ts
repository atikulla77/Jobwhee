import { $fetch } from "@/$api/fetch.api";

export interface Job {
  id: number;
  title: string;
  jobDuration: string;
  workDuration: string;
  experienceLevel: string;
  budget: string;
  description: string;
  client: {
    id: number;
    firstName: string;
    email: string;
    country: string;
  };
}

export interface JobSearchResponse {
  data: {
    results: Job[];
    total: number;
    page: number;
  };
}

export interface JobSearchParams {
  experienceLevels?: string[];
  budgetRanges?: string[];
  minBudget?: number;
  maxBudget?: number;
  page?: number;
  searchQuery?: string;
  projectScopes?: string[]; // <-- add this
  categoryIds?: number[];
  subcategoryIds?: number[];
  limit?: number;
}

export interface GetJobListResponse {
  data: {
    results: Job[]; // API returns an array of jobs
  };
}

export const getJobList = async (): Promise<GetJobListResponse> => {
  try {
    const response = await $fetch.get<GetJobListResponse>("/job/all");
    console.log("🟢 Fetched Data:", response);
    return response;
  } catch (error) {
    console.error("🔴 Error fetching job list data:", error);
    throw error;
  }
};

export const searchJobs = async (
  params: JobSearchParams,
  isAuth: boolean = false
): Promise<JobSearchResponse> => {
  try {
    const response = await $fetch.post<JobSearchResponse>(
      "/job/search",
      isAuth,
      params
    );

    return response;
  } catch (error) {
    console.error("Error fetching job search:", error);
    throw error;
  }
};
