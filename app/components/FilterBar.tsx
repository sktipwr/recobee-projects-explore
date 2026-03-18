"use client";

import { genres, types } from "@/lib/data";

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  selectedGenre: string;
  onGenreChange: (v: string) => void;
  selectedType: string;
  onTypeChange: (v: string) => void;
  totalResults: number;
}

export default function FilterBar({
  search,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  selectedType,
  onTypeChange,
  totalResults,
}: FilterBarProps) {
  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search projects by title, genre, or cast..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider mr-1">Genre</span>
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => onGenreChange(g)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedGenre === g
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="hidden sm:block w-px h-6 bg-zinc-800" />

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider mr-1">Type</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedType === t
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-zinc-500">
        {totalResults} project{totalResults !== 1 ? "s" : ""} found
      </p>
    </div>
  );
}
