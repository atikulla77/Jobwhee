import { getSession } from "next-auth/react";
import { Session } from "next-auth";

interface SessionWithToken extends Session {
  accessToken: string;
  role: string;
}

export const getAuthToken = async (): Promise<string | null> => {
  const session = (await getSession()) as SessionWithToken;

  return session?.accessToken || null;
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

// export const isAuthenticated = async (): Promise<boolean> => {
//   const session = await getSession();
//   return !!session?.accessToken;
// };
