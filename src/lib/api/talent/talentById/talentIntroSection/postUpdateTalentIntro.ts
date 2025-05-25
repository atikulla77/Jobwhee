import { $fetch } from "@/$api/fetch.api";

interface TalentIntroProps {
    introTitle: string;
    introText: string;
}

export const updateTalentIntro = async (introData: TalentIntroProps): Promise<void> => {
    try {
        await $fetch.patch("/user/talent/intro", true, introData);
    } catch (patchError) {
        console.error("Error in PATCH request:", patchError);
        throw patchError;
    }
};
