import { $fetch } from "@/$api/fetch.api";

interface TermsOfServiceText {
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

interface TermsOfServiceInfo {
    data: {
        language: Language;
        termsOfServices: TermsOfServiceText[];
    };
}

export const getTermsOfServices = async (
    languageCode: string = "en"
): Promise<TermsOfServiceInfo> => {
    try {
        return await $fetch.get<TermsOfServiceInfo>("/termsofservices", false, {
            "Accept-Language": languageCode,
        });
    } catch (error) {
        console.error("Error fetching terms of services:", error);
        throw error;
    }
};
