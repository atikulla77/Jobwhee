import {$fetch} from "@/$api/fetch.api";

interface Language {
    id: number;
    createdAt: string;
    updatedAt: string;
    code: string;
    name: string;
    description: string;
    image: string;
    status: string;
}

interface LanguagesResponse {
    data: Language[];
}

export const getLanguages = async (): Promise<LanguagesResponse> => {
    try {
        return await $fetch.get<LanguagesResponse>("/language", false);
    } catch (error) {
        console.error("Error fetching languages:", error);
        throw error;
    }
};
