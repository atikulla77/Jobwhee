import { $fetch } from "@/$api/fetch.api";

type DeleteFcmResponse = {
  data: {
    raw: any[];
    affected: number;
  };
};

export const deleteFcmToken = async (id: number): Promise<DeleteFcmResponse> => {
  try {
    const response = await $fetch.delete(`/notifications/deleteFcmToken/${id}`, true, {});
    return response;
  } catch (error) {
    console.error("❌ Error deleting FCM token:", error);
    throw error;
  }
};
