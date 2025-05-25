import {toast} from "react-toastify";
import {updatePortfolioStatus} from "@/lib/api/talent/portfolio/portfolioApi";

export const changePortfolioStatus = async (
    portfolioId: number,
    isDraft: boolean,
    mutatePortfoliosByStatus: () => Promise<any>
) => {
    try {
        await updatePortfolioStatus(portfolioId, isDraft);
        await mutatePortfoliosByStatus();

        toast.success(
            isDraft ? "Portfolio moved to Drafts." : "Portfolio published successfully!"
        );
    } catch (error) {
        console.error("Status update failed:", error);
        toast.error("Failed to update the portfolio status.");
    }
};