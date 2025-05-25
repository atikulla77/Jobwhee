import { $fetch } from "@/$api/fetch.api";

interface UploadFileResponse {
  data: {
    fileUrl: string;
  };
}
export const getUploadedFileLink = async (file: File): Promise<UploadFileResponse> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await $fetch.post<UploadFileResponse>("/job/upload-file", true, formData);
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
