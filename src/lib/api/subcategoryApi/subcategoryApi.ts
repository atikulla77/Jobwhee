import { $fetch } from '@/$api/fetch.api';
import { Category } from '@/lib/api/categoriesApi/categoriesApi';

interface Language {
  id: number;
  code: string;
}

interface Translation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface SubCategory {
  id: number;
  createdAt: string;
  updatedAt: string;
  translation: Translation;
}
interface SubcategoryResponse {
  data: {
    language: Language;
    categories: Category;
    subcategories: SubCategory[];
  };
}

export const getSubcategories = async (
  languageCode: string = 'en',
  categoryId: number
): Promise<SubcategoryResponse> => {
  try {
    return await $fetch.get<SubcategoryResponse>(
      '/subcategory/category/' + categoryId,
      false,
      {
        'Accept-Language': languageCode,
      }
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
