import { $fetch } from "@/$api/fetch.api";

export const updateUserSkills = async (
    skillIds: number[],
    languageCode: string = "en"
): Promise<any> => {
    try {
        return await $fetch.put("/user/talent/skill", true, { skillIds }, {
            "Accept-Language": languageCode,
        });
    } catch (error) {
        console.error("Error updating skills:", error);
        throw error;
    }
};