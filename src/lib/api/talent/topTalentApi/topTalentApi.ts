import {$fetch} from "@/$api/fetch.api";

export interface TopTalentResponse {
    data: {
        id: number;
        createdAt: string;
        updatedAt: string;
        transaction: {
            id: number;
            title: string;
            description: string;
            point1: string;
            point2: string;
            createdAt: string;
            updatedAt: string;
        };
        language: {
            code: string;
        };
    };
}

export const getTopTalent = async (languageCode: string = "en"): Promise<TopTalentResponse> => {
    try {
        return await $fetch.get<TopTalentResponse>("/toptalent", false, {
            "Accept-Language": languageCode
        });
    } catch (error) {
        console.error("Error fetching top talent data:", error);
        throw error;
    }
};
