import { $fetch } from "@/$api/fetch.api";

interface User {
  id: 3;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  phoneNumber: any;
  email: string;
  isVerified: boolean;
  profileImage: any;
  introTitle: any;
  introText: any;
  video: any;
  embedUrl: any;
  videoStatus: any;
  languages: [];
  role: string;
  stripeAccountId: any;
  stripeAccount: string;
  accountStatus: string;
  suspended: boolean;
  deleted: boolean;
  resetToken: null;
  resetTokenExpiration: any;
  stats: any;
}

interface Response {
  data: {
    fcmToken: string;
    user: User;
    id: number;
  };
}
export const createFcmToken = async (fcmToken: string) => {
  try {
    const response = await $fetch.post("/notifications/createFcmToken", true, {
      fcmToken: fcmToken,
    });
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
