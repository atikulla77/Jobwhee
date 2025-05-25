
import { $fetch } from "@/$api/fetch.api";
interface SubscribePayload {
    fullName: string;
    email: string;
  }
  
  export const subscribeTalent = async (payload: SubscribePayload) => {
    try {
      const response = await $fetch.post(
        "/subscription/Talent",false,
        {
          fullName: payload.fullName,
          email: payload.email,
        },
        
      );
      return response;
    } catch (error) {
      console.error("Error subscribing to talent:", error);
      throw error;
    }
  };
  