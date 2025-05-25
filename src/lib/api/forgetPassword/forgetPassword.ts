import { $fetch } from "@/$api/fetch.api";

export const passwordResetRequestLink = async (email: string) => {
  try {
    const data = await $fetch.post<{ data: string }>(
      "/auth/request-forgotten-password",
      false,
      { email }
    );
    return data.data;
  } catch (error) {
    console.error("Request Password Reset Error:", error);
    throw error;
  }
};

export const changeForgottenPassword = async (
  token: string,
  newPassword: string
) => {
  try {
    const data = await $fetch.post<{ data: string }>(
      "/auth/change-forgotten-password",
      false,
      { token, newPassword }
    );
    return data.data;
  } catch (error) {
    console.error("Change Forgotten Password Error:", error);
    throw error;
  }
};
