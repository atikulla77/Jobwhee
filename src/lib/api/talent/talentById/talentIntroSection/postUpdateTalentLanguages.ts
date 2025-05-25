import { $fetch } from "@/$api/fetch.api";

interface Language {
    language: string;
    proficiency: string;
}

interface UpdateLanguagesProps {
    languages: Language[];
}

export const updateTalentLanguages = async (
    languagesData: UpdateLanguagesProps
): Promise<void> => {
    try {
        await $fetch.patch("/user/talent/language", true, languagesData);
    } catch (patchError) {
        console.error("Error in PATCH request:", patchError);
        throw patchError;
    }
};
