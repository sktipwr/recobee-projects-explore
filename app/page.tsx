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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-8.625 0V5.625m0 12.75c0 .621.504 1.125 1.125 1.125m17.25-1.125c0 .621-.504 1.125-1.125 1.125m1.125-1.125V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-zinc-100">RecoBee</span>
          </div>
          <nav className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-300">
              Explore
            </span>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
            Projects to Explore
          </h1>
          <p className="mt-2 text-zinc-500 max-w-xl">
            Discover curated projects and explore detailed insights on their performance, cast, and story.
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          totalResults={filtered.length}
        />

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-400">No projects found</h3>
            <p className="text-sm text-zinc-600 mt-1">Try adjusting your filters or search term.</p>
          </div>
        )}
      </main>
    </div>
  );
}
