import {$fetch} from "@/$api/fetch.api";
import {getSession} from "next-auth/react";


export interface CreatePortfolioData {
    title: string;
    description: string;
    skills: number[];
    role?: string;
    isDraft: boolean;
    image: File;
}


export type UpdatePortfolioData = Partial<CreatePortfolioData>;


export interface CreatedPortfolioResponse {
    data: {
        id: number;
        title: string;
        description: string;
        role: string;
        mainImage: string;
        isDraft: boolean;
        order: number;
        contents: any[];
    };
}


export const createPortfolio = async (data: CreatePortfolioData): Promise<CreatedPortfolioResponse> => {
    const {image, title, description, skills, role, isDraft} = data;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("skills", JSON.stringify(skills));
    if (role) {
        formData.append("role", role);
    }
    formData.append("isDraft", String(isDraft));

    return await $fetch.post<CreatedPortfolioResponse>("/portfolio", true, formData);
};


export const updatePortfolio = async (
    id: number,
    data: UpdatePortfolioData
): Promise<CreatedPortfolioResponse> => {
    const formData = new FormData();

    if (data.image) {
        formData.append("image", data.image);
    }
    if (data.title !== undefined) {
        formData.append("title", data.title);
    }
    if (data.description !== undefined) {
        formData.append("description", data.description);
    }
    if (data.skills !== undefined) {
        formData.append("skills", JSON.stringify(data.skills));
    }
    if (data.role !== undefined) {
        formData.append("role", data.role);
    }
    if (data.isDraft !== undefined) {
        formData.append("isDraft", String(data.isDraft));
    }

    return await $fetch.patch<CreatedPortfolioResponse>(`/portfolio/${id}`, true, formData);
};

export const deletePortfolio = async (id: number): Promise<void> => {
    return await $fetch.delete<void>(`/portfolio/${id}`, true);
};


export const updatePortfolioStatus = async (id: number, isDraft: boolean): Promise<CreatedPortfolioResponse> => {
    const body = {isDraft};
    return await $fetch.patch<CreatedPortfolioResponse>(`/portfolio/status/${id}`, true, body);
};
