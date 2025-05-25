import {getPortfoliosByStatus, PublishedPortfolio} from "@/lib/api/talent/portfolio/getPortfolioByStatus";
import useSWR from "swr";

export const usePortfoliosByStatus = (status: "publish" | "draft") => {
    const {data, error, isLoading, mutate} = useSWR<PublishedPortfolio[]>(
        `/portfolio/all/${status}`,
        () => getPortfoliosByStatus(status)
    );

    return {
        portfolios: data,
        isLoading,
        error,
        mutatePortfoliosByStatus: mutate,
    };
};
