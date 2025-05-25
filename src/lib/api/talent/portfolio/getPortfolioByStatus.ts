import {$fetch} from "@/$api/fetch.api";

interface ApiListResponse<T> {
    data: T[];
}

export interface PublishedPortfolioUser {
    id: number;
    firstName: string;
    lastName: string;
}

export interface PublishedPortfolio {
    id: number;
    title: string;
    description: string;
    role: string;
    mainImage: string;
    isDraft: boolean;
    order: number;
    user: PublishedPortfolioUser;
}

export const getPortfoliosByStatus = async (
    status: "publish" | "draft"
): Promise<PublishedPortfolio[]> => {
    try {
        const response = await $fetch.get<ApiListResponse<PublishedPortfolio>>(
            `/portfolio/all/${status}`,
            true
        );
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch ${status} portfolios:`, error);
        throw error;
    }
};
