import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  accentColor?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  accentColor = 'accent',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const activeClass =
    accentColor === 'red-700'
      ? 'bg-red-700 text-white shadow-lg shadow-red-700/30'
      : 'bg-accent text-white shadow-lg shadow-accent/30';

  const hoverClass =
    accentColor === 'red-700'
      ? 'hover:bg-white hover:text-red-600 hover:border-red-600'
      : 'hover:bg-slate-50 hover:text-accent';

  const borderHoverClass =
    accentColor === 'red-700'
      ? 'hover:bg-white hover:text-red-600 hover:border-red-600'
      : 'hover:bg-slate-50 hover:text-accent hover:border-accent';

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
          currentPage === 1
            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
            : `border-slate-300 text-slate-600 ${borderHoverClass}`
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
            currentPage === page ? activeClass : `text-slate-600 ${hoverClass}`
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
          currentPage === totalPages
            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
            : `border-slate-300 text-slate-600 ${borderHoverClass}`
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
