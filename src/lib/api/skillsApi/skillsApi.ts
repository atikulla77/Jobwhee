import { $fetch } from '@/$api/fetch.api';
import { Category } from '@/lib/api/categoriesApi/categoriesApi';

interface Language {
    id: number;
    code: string;
}

interface Translation {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
}

export interface Skill {
    id: number,
    createdAt: string,
    updatedAt: string,
    translation: Translation
}
interface SkillsResponse {
    data: {
        language: Language,
        skills: Skill[]
    }
}

export const getSkills = async (
    languageCode: string = 'en'
): Promise<SkillsResponse> => {
    try {
        return await $fetch.get<SkillsResponse>(
            '/skill',
            false,
            {
                'Accept-Language': languageCode,
            }
        );
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
