import { $fetch } from "@/$api/fetch.api";

export interface ExperiencePayload {
    position: string;
    institution: string;
    description: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    status: "Work" | "Education";
}

export const createExperience = async (payload: ExperiencePayload) => {
    try {
        const data = await $fetch.post<{ data: any }>("/experience", true, payload);
        return data.data;
    } catch (error) {
        console.error("Create Experience Error:", error);
        throw error;
    }
};


export const updateExperience = async (id: number | string, payload: ExperiencePayload) => {
    try {
        const data = await $fetch.patch<{ data: any }>(`/experience/${id}`, true, payload);
        return data.data;
    } catch (error) {
        console.error("Update Experience Error:", error);
        throw error;
    }
};


export const deleteExperience = async (id: number | string) => {
    try {
        const data = await $fetch.delete<{ data: any }>(`/experience/${id}`, true);
        return data.data;
    } catch (error) {
        console.error("Delete Experience Error:", error);
        throw error;
    }
};
