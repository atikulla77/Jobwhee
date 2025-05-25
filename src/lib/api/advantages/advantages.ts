import {$fetch} from "@/$api/fetch.api";

interface Advantage {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    text: string;
    role: "Talent" | "Client";
}

interface Language {
    code: string;
}

interface AdvantagesResponse {
    data: {
        image: string | null;
        advantages: Advantage[];
        language: Language;
    };
}


export const getClientAdvantages = async (
    languageCode: string = "en"
): Promise<AdvantagesResponse> => {
    try {
        return await $fetch.get<AdvantagesResponse>("/advantage/Client", false, {
            "Accept-Language": languageCode,
        });
    } catch (error) {
        console.error("Error fetching client advantages:", error);
        throw error;
    }
};

export const getTalentAdvantages = async (
    languageCode: string = "en"
): Promise<AdvantagesResponse> => {
    try {
        return await $fetch.get<AdvantagesResponse>("/advantage/Talent", false, {
            "Accept-Language": languageCode,
        });
    } catch (error) {
        console.error("Error fetching talent advantages:", error);
        throw error;
    }
};
