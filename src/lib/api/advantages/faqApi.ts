import { $fetch } from "@/$api/fetch.api";

interface Language {
  code: string;
}

interface FAQ {
  id: number;
  createdAt: string;
  updatedAt: string;
  question: string;
  answer: string;
}

interface FAQResponse {
  data: {
    language: Language;
    faq: FAQ[];
  };
}

export const getFAQ = async (
  languageCode: string = "en",
  count?: number
): Promise<FAQResponse> => {
  try {
    const url = count ? `/faq?count=${count}` : "/faq";

    return await $fetch.get<FAQResponse>(url, false, {
      "Accept-Language": languageCode,
    });
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    throw error;
  }
};
