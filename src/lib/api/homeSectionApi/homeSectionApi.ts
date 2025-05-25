import { $fetch } from "@/$api/fetch.api";

interface Language {
  id: number;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: string;
  description: string;
  status: string;
}

interface Translation {
  id: number;
  createdAt: string;
  updatedAt: string;
  title1: string;
  title2: string;
  title3: string;
  language: Language;
}

interface Language {
  id: number;
  code: string;
}

interface Translation {
  id: number;
  title1: string;
  title2: string;
  title3: string;
  createdAt: string;
  updatedAt: string;
}

interface HomePage {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface HomePageSlider {
  id: number;
  createdAt: string;
  updatedAt: string;
  image: string;
  title: string;
}

interface HomePageResponse {
  data: {
    language: Language;
    homePage: HomePage;
    translation: Translation;
    homePageSlider: HomePageSlider[];
  };
}


export const getHomePageData = async (
  languageCode: string = "en"
): Promise<HomePageResponse> => {
  try {
    return await $fetch.get<HomePageResponse>("/home", false, {
      "Accept-Language": languageCode,
    });
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};







