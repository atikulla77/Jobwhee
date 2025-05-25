import { $fetch } from '@/$api/fetch.api';

export interface ClientJob {
  data: {
    results: ClientJobsResult[];
    itemsCountInPage: number;
    totalItems: number;
    pageNumber: number;
  };
}

export interface ClientJobsResult {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  jobDuration: string;
  workDuration: string;
  experienceLevel: string;
  isContractToHire: boolean;
  budget: string;
  description: string;
  file: any;
  jobType: string;
  country: string;
  city: string;
  region: string;
  status: string;
  isDraft: boolean;
  jobPolicyStatus: string;
  category: {
    id: number;
    createdAt: string;
    updatedAt: string;
    translations: Translation[];
  };
  subcategory: {
    id: number;
    createdAt: string;
    updatedAt: string;
    translations: Translation[];
  };
  skills: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      translations: Translation[];
    },
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      translations: Translation[];
    },
  ];
  client: Client;
}

interface Language {
  id: number;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: string;
  description: string;
  image: string;
  status: string;
}

interface Translation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  language: {
    id: number;
    createdAt: string;
    updatedAt: string;
    code: string;
    name: string;
    description: string;
    image: string;
    status: string;
  };
}

interface Client {
  id: number;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  phoneNumber: string;
  email: string;
  isVerified: boolean;
  profileImage: string;
  introTitle: string;
  introText: string;
  video: string;
  embedUrl: string;
  videoStatus: string;
  languages: Language[];
  role: string;
  stripeAccountId: number;
  stripeAccount: string;
  accountStatus: string;
  suspended: boolean;
  deleted: boolean;
  resetToken: string;
  resetTokenExpiration: string;
}

export const getClientJobs = async (lang: string): Promise<ClientJob> => {
  try {
    return await $fetch.get<ClientJob>('/job/client', true);
  } catch (error) {
    console.error('🔴 Error fetching job list data:', error);
    throw error;
  }
};
