"use client";
import { useState } from "react";
import ClientHomePage from "@/components/Client/home-page/page";
import { ClientJobsProvider } from '@/contextProviders/ClientJobsContext';

export const ClientHome = () => {
  return <ClientJobsProvider>
    <ClientHomePage />
  </ClientJobsProvider>;
};
