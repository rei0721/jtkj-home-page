import { useState, useMemo } from 'react';

export function usePagination<T>(items: T[], itemsPerPage: number = 6) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const displayedItems = useMemo(
    () => items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [items, currentPage, itemsPerPage],
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetPage = () => setCurrentPage(1);

  return { currentPage, totalPages, displayedItems, goToPage, resetPage };
}
