import { $fetch } from '@/$api/fetch.api';

interface Language {
  id: number;
  code: string;
}

interface Translation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
}

export interface Category {
  id: number;
  createdAt: string;
  updatedAt: string;
  translation: Translation;
}

interface CategoryResponse {
  data: {
    language: Language;
    categories: Category[];
  };
}

export const getCategories = async (
  languageCode: string = 'en'
): Promise<CategoryResponse> => {
  try {
    return await $fetch.get<CategoryResponse>('/category', false, {
      'Accept-Language': languageCode,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
