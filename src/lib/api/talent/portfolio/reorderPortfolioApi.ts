import {$fetch} from "@/$api/fetch.api";

export interface ReorderPortfolioItem {
    id: number;
    order: number;
}

export const reorderPortfolios = async (
    portfolios: ReorderPortfolioItem[]
): Promise<void> => {
    const body = {portfolios};
    await $fetch.patch<void>("/portfolio/reorder", true, body);
};