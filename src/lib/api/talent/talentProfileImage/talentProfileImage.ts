import {$fetch} from "@/$api/fetch.api";

interface UpdateProfileImageResponse {
    data: {
        id: number;
        image: string;
        updatedAt: string;
    };
}

export const updateProfileImage = async (
    imageFile: File
): Promise<UpdateProfileImageResponse> => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const endpoint = "/user/talent/image";

    try {
        return await $fetch.patch<UpdateProfileImageResponse>(endpoint, true, formData);

    } catch (error) {
        console.error("Profile image update error:", error);
        throw error;
    }
};
