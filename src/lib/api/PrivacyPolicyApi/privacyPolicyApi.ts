import { $fetch } from "@/$api/fetch.api";


interface PrivacyPolicyText {
    createdAt: string;
    id: number;
    text: string;
    title: string;
    updatedAt: string;
}

interface Language {
    id: number;
    code: string;
}

interface PrivacyPolicyInfo {
    data: {
        language: Language;
        privacyPolicy: PrivacyPolicyText[];
    };
}

export const getPrivacyPolicy = async (
    languageCode: string = "en"
): Promise<PrivacyPolicyInfo> => {
    try {
        return await $fetch.get<PrivacyPolicyInfo>("/privacypolicy", false, {
            "Accept-Language": languageCode,
        });

    } catch (error) {
        console.error("Error fetching privacy policy:", error);
        throw error;
    }
};

