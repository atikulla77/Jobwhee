import { $fetch } from "@/$api/fetch.api";

export const verificationRequest = async () => {
  try {
    const data = await $fetch.put(
      "/user/freelancer/verification/request",
      true,
      { frReadyForVerification: true },
    );
    console.log("Verification request successful:", data);
    return data;
  } catch (error) {
    console.error("Verification request failed:", error);
    throw error;
  }
};
