"use client";

import { FC, PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
