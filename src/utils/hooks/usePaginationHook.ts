import { useState } from "react";

const ITEMS_PER_PAGE = 6;

export const usePagination = <T>(
  items: T[],

  itemsPerPage: number = ITEMS_PER_PAGE,
) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return {
    currentPage,
    totalPages,
    currentItems,
    setCurrentPage,
  };
};
