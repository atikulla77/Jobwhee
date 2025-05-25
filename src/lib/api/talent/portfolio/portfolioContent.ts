import {$fetch} from "@/$api/fetch.api";

export type PortfolioContentType = "Video" | "Image";
export type PortfolioContentStatus = "Upload" | "Embed";

export interface PortfolioContentData {
    image?: File;
    type: PortfolioContentType;
    description: string;
    status?: PortfolioContentStatus;
    embedUrl?: string;
    portfolioId: number;
}

export const createPortfolioContent = async (data: PortfolioContentData) => {
    try {
        const {
            image,
            type,
            description,
            status,
            embedUrl,
            portfolioId,
        } = data;

        const formData = new FormData();
        formData.append("type", type);
        formData.append("description", description);
        if (status) {
            formData.append("status", status);
        }
        if (image) {
            formData.append("image", image);
        }
        if (embedUrl) {
            formData.append("embedUrl", embedUrl);
        }
        return await $fetch.post(`/portfolio/content/${portfolioId}`, true, formData);
    } catch (error) {
        console.error("Failed to create portfolio content:", error);
        throw error;
    }
};


export interface UpdatePortfolioContentData {
    image?: File;
    type?: PortfolioContentType;
    description?: string;
    status?: PortfolioContentStatus;
    embedUrl?: string;
}

export const updatePortfolioContent = async (
    contentId: number,
    data: UpdatePortfolioContentData
) => {
    try {
        const formData = new FormData();

        if (data.type) {
            formData.append("type", data.type);
        }
        if (data.description) {
            formData.append("description", data.description);
        }
        if (data.status) {
            formData.append("status", data.status);
        }
        if (data.image) {
            formData.append("image", data.image);
        }
        if (data.embedUrl) {
            formData.append("embedUrl", data.embedUrl);
        }

        return await $fetch.put(`/portfolio/content/${contentId}`, true, formData);
    } catch (error) {
        console.error("Failed to update portfolio content:", error);
        throw error;
    }
};


export const deletePortfolioContent = async (contentId: number) => {
    try {
        return await $fetch.delete(`/portfolio/content/${contentId}`, true);
    } catch (error) {
        console.error("Failed to delete portfolio content:", error);
        throw error;
    }
};
