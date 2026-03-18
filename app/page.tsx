"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import FilterBar from "./components/FilterBar";
import ProjectCard from "./components/ProjectCard";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.genre.toLowerCase().includes(search.toLowerCase()) ||
        p.cast.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
        p.logline.toLowerCase().includes(search.toLowerCase());

      const matchesGenre = selectedGenre === "All" || p.genre === selectedGenre;
      const matchesType = selectedType === "All" || p.type === selectedType;

      return matchesSearch && matchesGenre && matchesType;
    });
  }, [search, selectedGenre, selectedType]);

  return (
    <div className="min-h-screen">
      {/* Header — compact */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-8.625 0V5.625m0 12.75c0 .621.504 1.125 1.125 1.125m17.25-1.125c0 .621-.504 1.125-1.125 1.125m1.125-1.125V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125" />
              </svg>
            </div>
            <span className="text-base font-semibold text-zinc-100">RecoBee</span>
            <span className="text-zinc-600 text-sm font-normal ml-1 hidden sm:inline">/</span>
            <span className="text-zinc-400 text-sm font-normal hidden sm:inline">Explore</span>
          </div>
        </div>
      </header>

      {/* Sticky filter bar */}
      <div className="sticky top-[49px] z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <FilterBar
            search={search}
            onSearchChange={setSearch}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            totalResults={filtered.length}
          />
        </div>
      </div>

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800/30 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h3 className="text-base font-medium text-zinc-400">No projects found</h3>
            <p className="text-sm text-zinc-600 mt-1">Try adjusting your filters or search term.</p>
          </div>
        )}
      </main>
    </div>
  );
}
