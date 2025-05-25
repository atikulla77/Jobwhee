import {useEffect, useState} from 'react';
import useSWR from 'swr';
import {getPortfolioById} from '@/lib/api/talent/portfolio/getPortfolioById';

export function usePortfolioById(portfolioId?: number) {
    const [id, setId] = useState<number | null>(portfolioId ?? null);

    const {data, error, mutate, isLoading} = useSWR(
        id ? [`/portfolio/${id}`, id] : null,
        () => (id ? getPortfolioById(id) : null)
    );

    useEffect(() => {
        if (portfolioId) {
            setId(portfolioId);
        }
    }, [portfolioId]);

    return {
        portfolio: data,
        isLoading,
        error,
        mutate,
    };
}
