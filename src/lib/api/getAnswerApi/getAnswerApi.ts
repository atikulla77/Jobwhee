import { $fetch } from "@/$api/fetch.api";

interface Language {
  code: string;
}

interface Translation {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

interface GetAnswerResponse {
  data: {
    [x: string]: any;
    language: Language;
    id: number;
    createdAt: string;
    updatedAt: string;
    translation: Translation;
  };
}

export const getAnswer = async (
  languageCode: string = "en"
): Promise<GetAnswerResponse> => {
  try {
    return await $fetch.get<GetAnswerResponse>("/getanswer", false, {
      "Accept-Language": languageCode,
    });
  } catch (error) {
    console.error("Error fetching answer data:", error);
    throw error;
  }
};
