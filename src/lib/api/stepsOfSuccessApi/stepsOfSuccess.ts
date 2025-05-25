import { $fetch } from "@/$api/fetch.api";

interface Translation {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
interface Language {
  id: number;
  code: string;
}
interface Step {
  stepId: number;
  createdAt: string;
  updatedAt: string;
  role: string;
  step: number;
  translation: Translation;
}

interface StepsResponse {
  data: {
    language: Language;
    steps: Step[];
  };
}

export const getClientSteps = async (
  languageCode: string = "en"
): Promise<StepsResponse> => {
  try {
    return await $fetch.get<StepsResponse>("/step/Client", false, {
      "Accept-Language": languageCode,
    });
  } catch (error) {
    console.error("Error fetching steps:", error);
    throw error;
  }
};

export const getTalentSteps = async (
    languageCode: string = "en"
  ): Promise<StepsResponse> => {
    try {
      return await $fetch.get<StepsResponse>("/step/Talent", false, {
        "Accept-Language": languageCode,
      });
    } catch (error) {
      console.error("Error fetching steps:", error);
      throw error;
    }
  };