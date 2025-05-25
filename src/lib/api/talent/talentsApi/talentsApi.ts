import useSWR from "swr";
import { $fetch } from "@/$api/fetch.api";

interface Translation {
  createdAt: string;
  description: string;
  id: number;
  point1: string;
  point2: string;
  title: string;
  updatedAt: string;
}
interface Language {
  id: number;
  code: string;
}

interface TalentInfo {
  data: {
    createdAt: string;
    id: number;
    language: Language;
    translation: Translation;
    updatedAt: string;
  };
}

export const getTalentByLang = async (
  languageCode: string = "en"
): Promise<TalentInfo> => {
  try {
    return await $fetch.get<TalentInfo>("/toptalent", false, {
      "Accept-Language": languageCode,
    });

  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};

