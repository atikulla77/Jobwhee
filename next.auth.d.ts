import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    role?: string;
  }

  interface User {
    accessToken?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    role?: string;
  }
}
