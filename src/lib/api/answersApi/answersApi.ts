
import {$fetch} from "@/$api/fetch.api";

interface Transaction {
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

interface AnswerInfo {
  data: {
    createdAt: string;
    id: number;
    language: Language;
    transaction: Transaction;
    updatedAt: string;
  };
}

interface FAQItem {
  id: number,
  createdAt: string,
  updatedAt: string,
  question: string,
  answer: string
}

interface FAQ {

  "data": {
    language: Language;
    "faq": FAQItem[];
  }
}

export const getAnswerInfoByLang = async (
  languageCode: string = "en"
): Promise<AnswerInfo> => {
  try {
    const response = await $fetch.get<AnswerInfo>("/getanswer", false, {
      "Accept-Language": languageCode,
    });
    return response;
  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};


export const getFAQ = async (
  languageCode: string = "en"
): Promise<FAQ> => {
  try {
    const response = await $fetch.get<FAQ>("/faq?count=4", false, {
      "Accept-Language": languageCode,
    });
    return response;
  } catch (error) {
    console.error("Error fetching talent steps:", error);
    throw error;
  }
};

