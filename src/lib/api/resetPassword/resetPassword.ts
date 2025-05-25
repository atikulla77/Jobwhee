import { $fetch } from "@/$api/fetch.api";

export const resetPassword = async ({
  oldPassword,
  newPassword,
  repeatNewPassword,
}: {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}): Promise<any> => {
  try {
    return $fetch.put<any>("/auth/reset-password", true, {
      oldPassword,
      newPassword,
      repeatNewPassword,
    });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    throw error;
  }
};
