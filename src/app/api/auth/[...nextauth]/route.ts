import jwt from "jsonwebtoken";
import { ILoginRequest, login, refreshToken } from "@/lib/api/authApi/authApi";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          if (!credentials) throw new Error("Missing credentials");

          const { data } = await login(credentials);
          const decodedToken = jwt.decode(data.accessToken) as jwt.JwtPayload;
          return {
            id: decodedToken?.id?.toString?.() || "",
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            email: decodedToken.email,
            role: decodedToken.role,
          };
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
    updateAge: 0,
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.role;
        token.email = user.email;
        token.id = user.id;

        const decodedToken = jwt.decode(user.accessToken) as jwt.JwtPayload;
        token.exp =
          decodedToken?.exp || Math.floor(Date.now() / 1000) + 30 * 60;
      }

      const isTokenExpired = token.exp && Date.now() / 1000 > token.exp;
      if (isTokenExpired && token.refreshToken) {
        try {
          console.log("Refreshing token...");
          const refreshedData = await refreshToken(token.refreshToken);

          const decodedToken = jwt.decode(
            refreshedData.accessToken
          ) as jwt.JwtPayload;

          token.accessToken = refreshedData.accessToken;
          token.refreshToken = refreshedData.refreshToken;
          token.exp =
            decodedToken?.exp || Math.floor(Date.now() / 1000) + 30 * 60;
        } catch (error) {
          console.error("Error refreshing token:", error);
          throw new Error("Failed to refresh token");
        }
      }

      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.id = token.id;
        session.email = token.email;
        session.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
