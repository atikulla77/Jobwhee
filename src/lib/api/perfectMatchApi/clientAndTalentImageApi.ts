import { $fetch } from "@/$api/fetch.api";

interface ImageData {
  id: number;
  createdAt: string;
  updatedAt: string;
  role: string;
  image: string;
}

interface ImageResponse {
  data: ImageData[];
}

export const getClientImages = async (): Promise<ImageResponse> => {
  try {
    return await $fetch.get<ImageResponse>(
      "/perfectmatchimage/role/Client",
      false
    );
  } catch (error) {
    console.error("Error fetching client images:", error);
    throw error;
  }
};

export const getTalentImages = async (): Promise<ImageResponse> => {
  try {
    return await $fetch.get<ImageResponse>(
      "/perfectmatchimage/role/Talent",
      false
    );
  } catch (error) {
    console.error("Error fetching talent images:", error);
    throw error;
  }
};
