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
    <div className="flex flex-col gap-3">
      {/* Top row: Filters + Search inline */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        {/* Genre filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest mr-1">Genre</span>
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => onGenreChange(g)}
              className={`px-2.5 py-1 rounded-full text-[12px] font-medium transition-all border ${
                selectedGenre === g
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/20"
                  : "bg-zinc-800/40 text-zinc-400 border-transparent hover:bg-zinc-800/70 hover:text-zinc-300"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="hidden lg:block w-px h-5 bg-zinc-800/60" />

        {/* Type filters */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest mr-1">Type</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t)}
              className={`px-2.5 py-1 rounded-full text-[12px] font-medium transition-all border ${
                selectedType === t
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/20"
                  : "bg-zinc-800/40 text-zinc-400 border-transparent hover:bg-zinc-800/70 hover:text-zinc-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search — compact, right-aligned on desktop */}
        <div className="relative lg:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
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
            placeholder="Search projects..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-zinc-900/60 border border-white/[0.06] rounded-full text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/30 focus:ring-1 focus:ring-amber-500/20 transition-colors"
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="border-l-2 border-amber-500/30 pl-3">
        <p className="text-[12px] text-zinc-500">
          {totalResults} project{totalResults !== 1 ? "s" : ""} found
        </p>
      </div>
    </div>
  );
}
