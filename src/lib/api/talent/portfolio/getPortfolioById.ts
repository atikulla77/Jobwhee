import {$fetch} from "@/$api/fetch.api";


export interface PortfolioContent {
    id: number;
    type: "Video" | "Image";
    status: "Upload" | "Embed";
    url?: string;
    embedUrl?: string;
    description: string;
}

export interface PortfolioSkillTranslation {
    id: number;
    name: string;
    language: {
        code: string;
        name: string;
    };
}

export interface PortfolioSkill {
    id: number;
    translations: PortfolioSkillTranslation[];
}

export interface PortfolioUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
    introTitle: string;
    introText: string;
    video?: string;
    embedUrl?: string;
    videoStatus?: "Direct" | "Embed";
}

export interface Portfolio {
    id: number;
    title: string;
    description: string;
    role: string;
    mainImage: string;
    isDraft: boolean;
    contents: PortfolioContent[];
    skills: PortfolioSkill[];
    user: PortfolioUser;
}


interface ApiResponse<T> {
    data: T;
}

export const getPortfolioById = async (id: number): Promise<Portfolio> => {
    try {
        const response = await $fetch.get<ApiResponse<Portfolio>>(`/portfolio/${id}`, true);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch portfolio by ID:", error);
        throw error;
    }
};