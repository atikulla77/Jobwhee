import { getSession } from "next-auth/react";

import { UserRoleEnum, UserTypeEnum } from "@/constants/UserTypeAndRoleEnum";
import { $fetch } from "@/$api/fetch.api";

///////////////////////// LOG IN   ///////////////////////////////

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: {
    refreshToken: string;
    accessToken: string;
    id: any;
    role:
      | UserTypeEnum.Client
      | UserTypeEnum.Talent
      | UserRoleEnum.Admin
      | UserRoleEnum.Manager;
  };
}

export const login = async ({
  email,
  password,
}: ILoginRequest): Promise<ILoginResponse> => {
  try {
    return await $fetch.post<ILoginResponse>("/auth/login", false, {
      email,
      password,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

/////////// Register Function///////

export interface FormData {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  password: string;
  phoneNumber:string
  role: UserTypeEnum;
}






export const registerUser = async (formData: FormData): Promise<any> => {
  try {
    const data = await $fetch.post("/auth/register", false, formData);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

/////////////////////////   refreshToken   ///////////////////////////////
interface CustomSession {
  accessToken?: string;
  refreshToken?: string;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const refreshToken = async (
  token: string
): Promise<RefreshTokenResponse> => {
  try {
    const data = await $fetch.post<RefreshTokenResponse>(
      "/auth/refresh",
      false,
      {
        refreshToken: token,
      }
    );

    const session = (await getSession()) as CustomSession;
    if (session) {
      session.accessToken = data.accessToken;
      session.refreshToken = data.refreshToken;

      // Here, consider returning data or updating state in your components as needed
    }

    return data; // Return the refreshed tokens
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error; // Propagate error
  }
};
