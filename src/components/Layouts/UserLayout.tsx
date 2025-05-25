"use client";
import { Metadata } from "next";
import { signOut } from "next-auth/react";

import React from "react";
import UserHeader from "../UserHeader/UserHeader";
import { Link, useRouter } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Client Dashboard | JobWhee",
  description:
    "Dashboard for clients to manage their job posts and interactions.",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-white w-full  ">
      <div className="relative flex flex-1 flex-col ">
        <UserHeader />
        <main className="flex mt-[100px]  px-[20px] md:px-[40px] xl:px-[120px] 2xl:px-[135px]">
        
          <div className="mx-auto w-full ">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
