import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function Pagination({
  currentPage,
  onPageChange,
  hasNextPage,
  hasPreviousPage,
}: PaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
        className="flex items-center gap-1 px-4 py-2 bg-white rounded-md shadow-sm disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>
      <span className="px-4 py-2 bg-white rounded-md shadow-sm">
        Page {currentPage}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className="flex items-center gap-1 px-4 py-2 bg-white rounded-md shadow-sm disabled:opacity-50"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}