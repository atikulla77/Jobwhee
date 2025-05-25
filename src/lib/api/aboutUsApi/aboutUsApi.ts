import useSWR from "swr";
import { $fetch } from "@/$api/fetch.api";

interface AboutUsText {
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

interface President{
  fullName: string;
  image: string;
}

interface AboutUsInfo {
  data: {
    id: number;
    language: Language;
    aboutUs: AboutUsText[];
    president: President;
  };
}

export const getAboutUs = async (
  languageCode: string = "en"
): Promise<AboutUsInfo> => {
  try {
    const response = await $fetch.get<AboutUsInfo>("/aboutus", false, {
      "Accept-Language": languageCode,
    });
    return response;
  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};

