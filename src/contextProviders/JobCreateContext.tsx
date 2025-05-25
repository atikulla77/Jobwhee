'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface Translation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  image?: string;
}

export interface Category {
  id: number;
  createdAt: string;
  updatedAt: string;
  translations: Translation;
}

interface JobDetailsType {
  title: string;
  jobDuration: string;
  workDuration: string;
  experienceLevel: string;
  isContractToHire: boolean;
  budget: number;
  description: string;
  category: Category;
  subcategory: any;
  skills: any;
  isDraft: boolean;
  file: string;
}

interface JobCreateContextType {
  jobDetails: JobDetailsType;
  setJobDetails: React.Dispatch<React.SetStateAction<JobDetailsType>>;
  clearJobDetails: () => void; // ✅ new function
}

const JobCreateContext = createContext<JobCreateContextType>(
  {} as JobCreateContextType
);

const defaultJobDetails: JobDetailsType = {
  title: '',
  jobDuration: '',
  workDuration: '',
  experienceLevel: '',
  isContractToHire: false,
  budget: 0,
  description: '',
  category: {
    id: 0,
    createdAt: '',
    updatedAt: '',
    translations: {
      id: 0,
      createdAt: '',
      updatedAt: '',
      name: '',
      image: '',
    },
  },
  subcategory: null,
  skills: null,
  isDraft: false,
  file: '',
};

export const JobCreateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobDetails, setJobDetails] = useState<JobDetailsType>(defaultJobDetails);

  useEffect(() => {
    const savedJobDetails = localStorage.getItem('jobDetails');
    if (savedJobDetails) {
      setJobDetails(JSON.parse(savedJobDetails));
    }
  }, []);

  const clearJobDetails = () => {
    setJobDetails(defaultJobDetails);
    localStorage.removeItem('jobDetails');
  };

  return (
    <JobCreateContext.Provider value={{ jobDetails, setJobDetails, clearJobDetails }}>
      {children}
    </JobCreateContext.Provider>
  );
};

export const useJobCreate = (): JobCreateContextType => {
  const context = useContext(JobCreateContext);
  if (!context) {
    throw new Error('useJobCreate must be used within a JobCreateProvider');
  }
  return context;
};
