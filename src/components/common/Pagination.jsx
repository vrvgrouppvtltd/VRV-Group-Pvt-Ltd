import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-6 flex max-w-full flex-wrap items-center justify-center gap-2 py-2" aria-label="Pagination Navigation">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white text-navy transition hover:bg-slate-50 disabled:opacity-40"
        aria-label="Previous Page"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`h-9 w-9 rounded border text-xs font-bold transition ${
            currentPage === number
              ? "border-navy bg-navy text-white"
              : "border-slate-200 bg-white text-navy hover:bg-slate-50"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white text-navy transition hover:bg-slate-50 disabled:opacity-40"
        aria-label="Next Page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
