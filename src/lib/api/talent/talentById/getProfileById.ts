import {$fetch} from "@/$api/fetch.api";
import {getAuthToken} from "@/lib/authUtil";


export interface FreelancerVerification {
    id: number;
    createdAt: string;
    updatedAt: string;
    p_image: string | null;
    p_status: "Pending" | "Rejected" | "Accepted";
    p_reason: string | null;
    s_image: string | null;
    s_status: "Pending" | "Rejected" | "Accepted";
    s_reason: string | null;
    ps_image: string | null;
    ps_status: "Pending" | "Rejected" | "Accepted";
    ps_reason: string | null;
    frReadyForVerification: boolean;
    isVerified: boolean;
    userId: number;
}

export interface WorkingHistory {
    title: string;
    rating: number;
    startDate: string;
    endDate: string;
    description: string;
    budget: number;
    hours: number;
}

export interface Skill {
    id: number | null;
    name: string | null;
}

export interface PortfolioContent {
    id: number;
    url: string;
    type: "Video" | "Image";
    description: string;
}

export interface Portfolio {
    id: number;
    role: string;
    order: number;
    title: string;
    skills: Skill[];
    contents: PortfolioContent[] | null;
    mainImage: string;
    description: string;
}

export interface TalentProfile {
    id: number;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    country: string | null;
    city: string | null;
    phoneNumber: string | null;
    email: string;
    isVerified: boolean;
    profileImage: string | null;
    introTitle: string | null;
    introText: string | null;
    video: string | null;
    embedUrl: string | null;
    videoStatus: "Direct" | "Embed" | "Hidden";
    languages: string[];
    role: string;
    stripeAccountId: string | null;
    stripeAccount: string;
    accountStatus: string;
    suspended: boolean;
    deleted: boolean;
    resetToken: string | null;
    resetTokenExpiration: string | null;
    freelancerverification?: FreelancerVerification[];
    skills: Skill[];
    education: string[] | null;
    work: string[] | null;
    portfolios: Portfolio[] | null;
    workingHistory: WorkingHistory[];
}

export interface TalentProfileResponse {
    data: TalentProfile;
}


export const getTalentProfileById = async (
    talentId: number,
): Promise<TalentProfileResponse> => {
    try {
        return await $fetch.get<TalentProfileResponse>(
            `/user/talent/${talentId}`,
            true,
        );
    } catch (error) {
        console.error("Error fetching talent profile:", error);
        throw error;
    }
};
