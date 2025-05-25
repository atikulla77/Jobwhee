import {$fetch} from "@/$api/fetch.api";

export interface VideoResponse {
    data: {
        id: number;
        createdAt: string;
        updatedAt: string;
        videoUrl: string;
        language: {
            id: number;
            createdAt: string;
            updatedAt: string;
            code: string;
            name: string;
            description: string;
            image: string;
            status: string;
        };
    };
}


export const getVideosUrl = async (languageCode: string = "en"): Promise<VideoResponse> => {
    try {
        return await $fetch.get<VideoResponse>(`/video`, false, {
            "Accept-Language": languageCode
        })
    } catch (error) {
        console.error("Error fetching video:", error);
        throw error;
    }

}



