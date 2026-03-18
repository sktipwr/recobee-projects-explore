"use client";

import { Project, genreColors, typeColors } from "@/lib/data";
import EmptyPoster from "./EmptyPoster";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const gc = genreColors[project.genre] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };
  const tc = typeColors[project.type] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };
  const dedupedCast = Array.from(new Set(project.cast));

  return (
    <a
      href={`#project-${project.id}`}
      className="group relative bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.14] hover:bg-zinc-900/70 hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-1 flex flex-col animate-fade-up cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}
    >
      {/* Hover glow — ambient genre-tinted light at top */}
      <div className={`absolute inset-x-0 top-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b ${
        gc.text === "text-indigo-300" ? "from-indigo-500/[0.06]" :
        gc.text === "text-amber-300" ? "from-amber-500/[0.06]" :
        gc.text === "text-violet-300" ? "from-violet-500/[0.06]" :
        "from-emerald-500/[0.06]"
      } to-transparent`} />

      {/* Poster — 16:9 compact */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        {project.posterUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${project.posterUrl})` }}
          />
        ) : (
          <EmptyPoster title={project.title} genre={project.genre} />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

        {/* Language badge — top left */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[11px] font-medium text-zinc-300 border border-white/[0.06]">
          {project.language}
        </div>

        {/* Type badge — top right */}
        <div className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full backdrop-blur-sm text-[11px] font-medium border border-white/[0.04] ${tc.bg} ${tc.text}`}>
          {project.type}
        </div>

        {/* Title overlaid at bottom of poster */}
        <div className="absolute inset-x-0 bottom-0 px-3.5 pb-2.5">
          <h3 className="text-[15px] font-semibold text-white leading-snug drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 pt-2.5 flex-1 flex flex-col gap-1.5 relative">
        {/* Logline */}
        {project.logline && (
          <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
            {project.logline}
          </p>
        )}

        {/* Cast inline */}
        {dedupedCast.length > 0 && (
          <p className="text-[12px] text-zinc-500 truncate">
            <span className="text-zinc-600">Cast</span>{" "}
            <span className="text-zinc-500">{dedupedCast.join(", ")}</span>
          </p>
        )}

        {/* Meta row: pills + arrow */}
        <div className="flex items-center gap-1.5 mt-1 pt-2 border-t border-white/[0.04]">
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${gc.bg} ${gc.text}`}>
            {project.genre}
          </span>
          {project.runTime && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/60 text-zinc-500">
              {project.runTime}
            </span>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Arrow indicator — appears on hover */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/[0.04] group-hover:bg-amber-500/20 transition-all duration-300 shrink-0">
            <svg
              className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

        {/* Published — subtle footer */}
        <div className="flex items-center justify-between text-[11px] text-zinc-600 mt-0.5">
          <span>{project.publishedAt}</span>
          <span>by {project.publishedBy}</span>
        </div>
      </div>
    </a>
  );
}
