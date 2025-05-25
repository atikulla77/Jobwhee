import jwt from "jsonwebtoken";
import { getAuthToken } from "../../authUtil";
import { $fetch } from "@/$api/fetch.api";

interface FreelancerVerification {
  id: number;
  createdAt: string;
  updatedAt: string;
  frReadyForVerification: boolean;
  isVerified: boolean;
  p_image: string | null;
  p_status: "Pending" | "Rejected" | "Approved";
  p_reason: string | null;
  s_image: string | null;
  s_status: "Pending" | "Rejected" | "Approved";
  s_reason: string | null;
  ps_image: string | null;
  ps_status: "Pending" | "Rejected" | "Approved";
  ps_reason: string | null;
}

interface UserProfile {
  id: number;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  isVerified: boolean;
  profileImage: string | null;
  role: string;
  stripeAccountId: string | null;
  stripeAccount: string;
  suspended: boolean;
  deleted: boolean;
  resetToken: string | null;
  resetTokenExpiration: string | null;
  freelancerVerification?: FreelancerVerification;
}

interface UserProfileResponse {
  data: UserProfile;
}

// export const getUserProfileByToken = async (): Promise<UserProfileResponse> => {
//   try {
//     const token = await getAuthToken();
//     const decodedToken = jwt.decode(token);
//     const userId = decodedToken.id as string;
//
//     return await $fetch.get<UserProfileResponse>(
//       `/user/profile/${userId}`,
//       true,
//     );
//   } catch (error) {
//     console.error("Error fetching user profile:", error);
//     throw error;
//   }
// };

export const getUserProfileByToken = async (): Promise<UserProfileResponse> => {
  try {
    const token = await getAuthToken();

    if (!token) {
      throw new Error("Auth token is missing");
    }

    const decodedToken = jwt.decode(token);

    if (
      !decodedToken ||
      typeof decodedToken !== "object" ||
      !("id" in decodedToken)
    ) {
      throw new Error("Invalid or malformed token");
    }

    const userId = (decodedToken as { id: string }).id;

    return await $fetch.get<UserProfileResponse>(
      `/user/profile/${userId}`,
      true
    );
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const getUserProfileById = async (
  freelancerId: number
): Promise<UserProfileResponse> => {
  try {
    const token = await getAuthToken();

    return await $fetch.get<UserProfileResponse>(
      `/user/profile/${freelancerId}`,
      true
    );
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
