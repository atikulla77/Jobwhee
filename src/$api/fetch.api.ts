import jwt from "jsonwebtoken";
import { getSession, signOut } from "next-auth/react";
import { refreshToken } from "@/lib/api/authApi/authApi";

export interface FetchParams {
  path: string;
  method: string;
  isAuth: boolean;
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
}

class FetchClient {
  private API_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

  constructor(private defaultHeaders: Record<string, string> = {}) {}

  async get<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>({
      path,
      method: "GET",
      isAuth,
      body: undefined,
      headers,
    });
  }

  async post<T>(
    path: string,
    isAuth: boolean = false,
    body?: Record<string, any> | FormData,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>({ path, method: "POST", isAuth, body, headers });
  }

  async put<T>(
    path: string,
    isAuth: boolean = false,
    body?: Record<string, any> | FormData,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>({ path, method: "PUT", isAuth, body, headers });
  }

  async delete<T>(
    path: string,
    isAuth: boolean = false,
    body?: Record<string, any> | FormData,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>({ path, method: "DELETE", isAuth, body, headers });
  }

  async patch<T>(
    path: string,
    isAuth: boolean = false,
    body?: Record<string, any> | FormData,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.fetch<T>({ path, method: "PATCH", isAuth, body, headers });
  }

  async fetch<T>({
    path,
    method,
    isAuth,
    body,
    headers,
  }: FetchParams): Promise<T> {
    const url = `${this.API_URL}${path}`;

    
    const session = isAuth ? ((await getSession()) as any) : null;
    let token = session?.accessToken;
    let refreshTokenValue: string | null = null;
    if (session?.accessToken) token = session.accessToken;
    if (session?.refreshToken) refreshTokenValue = session.refreshToken;

    const decoded = token ? (jwt.decode(token) as jwt.JwtPayload) : null;
    const isTokenExpired = decoded?.exp && Date.now() / 1000 > decoded.exp;

    if (isAuth && isTokenExpired && refreshTokenValue) {
      try {
        console.log("Access token expired. Refreshing...");
        const refreshed = await refreshToken(refreshTokenValue);
        token = refreshed.accessToken;
      } catch (err) {
        console.error("Refresh token failed:", err);
        signOut({ redirect: true, callbackUrl: "/auth/signin" });
        throw new Error("Token refresh failed");
      }
    }

    const authorizationHeader: HeadersInit = isAuth
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    const isFormData = body instanceof FormData;

    try {

      const response = await fetch(url, {
        method,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...authorizationHeader,
          ...this.defaultHeaders,
          ...headers,
        },
        body: body ? (isFormData ? body : JSON.stringify(body)) : null,
      });

      const data = await response.json();
      if (!response.ok) {
        console.log("Fetch error:", data);
        if (response.status === 401) {
          signOut({ redirect: true, callbackUrl: "/auth/signin" });
          throw new Error("Unauthorized");
        }
        throw new Error("Fetch error: " + JSON.stringify(data));
        // console.log('adasdasdasd')
      }
      return data;
    } catch (error) {
      console.log("Fetch error:", error);
      throw error;
    }
  }
}

export const $fetch = new FetchClient();
