// app/component/pagination/page.tsx

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        className={`bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-lg">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
