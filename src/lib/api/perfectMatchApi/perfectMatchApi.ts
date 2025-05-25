import { $fetch } from "@/$api/fetch.api";

interface Language {
  id: number;
  code: string;
}

interface Translation {
  id: number;
  title: string;
  subTitle: string;
  point1: string;
  point2: string;
  point3: string;
  createdAt: string;
  updatedAt: string;
}

interface PerfectMatch {
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface PerfectMatchResponse {
  data: {
    language: Language;
    perfectMatch: PerfectMatch;
    translation: Translation;
  };
}

export const getPerfectMatch = async (
    languageCode: string = "en"
): Promise<PerfectMatchResponse> => {
  try {
    return await $fetch.get<PerfectMatchResponse>("/perfectmatch", true, {
      "Accept-Language": languageCode,
    });
  } catch (error) {
    console.error("Error fetching perfect match:", error);
    throw error;
  }
};
