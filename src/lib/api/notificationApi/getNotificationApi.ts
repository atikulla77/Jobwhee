import { $fetch } from "@/$api/fetch.api";

type getNotificationResponse = {
  data: {
    result: [
      {
        timeAgo(updatedAt: any): import("react").ReactNode;
        id: number;
        createdAt: string;
        updatedAt: string;
        type: string;
        title: string;
        message: string;
        link: any;
        data: {
          applicationId: number;
        };
        isSeen: boolean;
      }
    ];
    total: number;
    page: number;
  };
};

export const getNotificationApi = async (): Promise<getNotificationResponse> => {
  try {
    const response = await $fetch.get(`/notifications`, true);
    return response as getNotificationResponse;
  } catch (error) {
    console.error("❌ Error deleting FCM token:", error);
    throw error;
  }
};
