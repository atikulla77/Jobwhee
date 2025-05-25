import {$fetch} from "@/$api/fetch.api";


interface ImageUploadResponse {
    data: {
        id: number;
        createdAt: string;
        updatedAt: string;
        p_image?: string;
        p_status?: string;
        p_reason?: string;
        s_image?: string;
        s_status?: string;
        s_reason?: string;
        ps_image?: string;
        ps_status?: string;
        ps_reason?: string;
        frReadyForVerification: boolean;
        isVerified: boolean;
    };
}

export const uploadImage = async (
    imageFile: File,
    imageType: "p_image" | "s_image" | "ps_image"
): Promise<ImageUploadResponse> => {
    const formData = new FormData();
    formData.append("image", imageFile);

    // Map the image type to the correct API path
    const typePrefixMap = {
        p_image: "p",
        s_image: "s",
        ps_image: "ps",
    };

    const typePrefix = typePrefixMap[imageType];

    if (!typePrefix) {
        throw new Error(`Invalid image type: ${imageType}`);
    }

    const statusField = imageType.replace("_image", "_status");
    formData.append(statusField, "Pending");

    const endpoint = `/user/freelancer/verification/${typePrefix}/${imageType}`;

    try {
        const response = await $fetch.post<ImageUploadResponse>(endpoint, true, formData);
        return response;
    } catch (error) {
        console.error("Image upload error:", error);
        throw error;
    }
};
