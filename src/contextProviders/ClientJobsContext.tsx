'use client';

import React, { createContext, ReactNode, useContext } from 'react';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';
import {
  ClientJobsResult,
  getClientJobs,
} from '@/lib/api/clientJobsApi/clientJobsApi';

interface ClientJobsContextType {
  jobsData: ClientJobsResult[] | null;
  error: any;
  mutate: any;
}

const ClientJobsContext = createContext<ClientJobsContextType | undefined>(
  undefined
);

export const ClientJobsProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const languageCode = pathname.split('/')[1];

  const { data: jobsData, error, mutate } = useSWR(['/jobs/client', languageCode], () =>
    getClientJobs(languageCode).then((res) => res.data.results)
  );
  
  return (
    <ClientJobsContext.Provider value={{ jobsData: jobsData ?? null, error, mutate }}>
      {children}
    </ClientJobsContext.Provider>
  );
};

export const useClientJobs = (): ClientJobsContextType => {
  const context = useContext(ClientJobsContext);
  if (!context) {
    throw new Error('useClientJobs must be used within a ClientJobsProvider');
  }
  return context;
};
