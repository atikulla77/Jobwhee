import {$fetch} from "@/$api/fetch.api";

interface SkillTranslation {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
}

interface Skill {
    id: number;
    createdAt: string;
    updatedAt: string;
    translation: SkillTranslation;
}

interface SkillsResponse {
    data: {
        language: {
            code: string;
        };
        skills: Skill[];
    };
}

export const getAllSkills = async (
    languageCode: string = "en"
): Promise<SkillsResponse> => {
    try {
        return  await $fetch.get<SkillsResponse>("/skill", false, {
            "Accept-Language": languageCode,
        });

    } catch (error) {
        console.error("Error fetching skills:", error);
        throw error;
    }
};
