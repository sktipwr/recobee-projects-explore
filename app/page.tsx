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
      {/* Top bar: breadcrumb + actions */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="px-6 py-2.5 flex items-center justify-between">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px]">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              Home
            </a>
            <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-zinc-200 font-medium">Projects to Explore</span>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-white/[0.06]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
                R
              </div>
              <span className="text-[13px] text-zinc-400 hidden sm:inline">RecoBee Demo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky filter bar */}
      <div className="sticky top-[41px] z-30 bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="px-6 py-3">
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
      <main className="px-6 py-5">
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
