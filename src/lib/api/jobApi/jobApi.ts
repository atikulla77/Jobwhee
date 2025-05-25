import { $fetch } from "@/$api/fetch.api";
interface Translation {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
}
interface SubCategory {
    id: number;
    createdAt: string;
    updatedAt: string;
    translations: Translation[];
}
interface Category {
    id: number;
    createdAt: string;
    updatedAt: string;
    translations: Translation[];
}


interface Skill {
    id: number,
    createdAt: string,
    updatedAt: string,
    translation: Translation[]
}
interface JobResponse {
    data: {
        id: number,
        createdAt: string,
        updatedAt: string,
        title: string,
        jobDuration: string,
        workDuration: string,
        experienceLevel: string,
        isContractToHire: boolean,
        budget: number,
        description: string,
        file?: any,
        jobType: string,
        country?: string,
        city?: string,
        region?: string,
        status: string,
        isDraft: boolean,
        jobPolicyStatus: string,
        category: Category,
        subcategory: SubCategory,
        skills: Skill[],
        client: {
            id: number,
            createdAt: string,
            updatedAt: string,
            firstName: string,
            lastName: string,
            country: string,
            city: string,
            phoneNumber: any,
            email: string,
            isVerified: boolean,
            profileImage: any,
            introTitle: string,
            introText: string,
            video: any,
            embedUrl: string,
            videoStatus: string,
            languages: [],
            role: string,
            stripeAccountId: any,
            stripeAccount: string,
            accountStatus: string,
            suspended: boolean,
            deleted: boolean,
            resetToken: string,
            resetTokenExpiration: string
        }
    }
}

interface IJob {
    title: string,
    jobDuration: string,
    workDuration: string,
    experienceLevel: string,
    isContractToHire: boolean,
    budget: number,
    description: string,
    category: number,
    subcategory: number,
    skills: number[],
    isDraft: boolean,
    file: string
}

export const createJob = async (jobData: IJob): Promise<JobResponse> => {
    try {
        const response = await $fetch.post<JobResponse>("/job", true, {
            "title": jobData.title,
            "jobDuration": "Long",
            "workDuration": jobData.workDuration,
            "experienceLevel": jobData.experienceLevel,
            "isContractToHire": true,
            "budget": jobData.budget,
            "description": jobData.description,
            "category": jobData.category,
            "subcategory": jobData.subcategory,
            "skills": jobData.skills,
            "isDraft": jobData.isDraft,
            "file": jobData.file,
        });
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const getJobById = async (jobId: number) => {
    try {
        const response = await $fetch.get<JobResponse>("/job/" + jobId, true);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const updateJob = async (id: number, jobData: IJob) => {
    try {
        const response = await $fetch.patch<JobResponse>(`/job/update/${id}`, true, {
            "title": jobData.title,
            "jobDuration": "Long",
            "workDuration": jobData.workDuration,
            "experienceLevel": jobData.experienceLevel,
            "isContractToHire": true,
            "budget": jobData.budget,
            "description": jobData.description,
            "category": jobData.category,
            "subcategory": jobData.subcategory,
            "skills": jobData.skills,
            "file": jobData.file
          });
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const removeJob = async (id: number) => {
    try {
        const response = await $fetch.delete(`/job/${id}`, true);
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};