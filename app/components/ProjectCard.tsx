"use client";

import { useState } from "react";
import { Project, genreColors, typeColors } from "@/lib/data";
import EmptyPoster from "./EmptyPoster";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const gc = genreColors[project.genre] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };
  const tc = typeColors[project.type] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };
  const dedupedCast = Array.from(new Set(project.cast));

  return (
    <div
      className="group bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/[0.12] hover:bg-zinc-900/60 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col animate-fade-up"
      style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}
    >
      {/* Poster — 16:9 compact */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        {project.posterUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.posterUrl})` }}
          />
        ) : (
          <EmptyPoster title={project.title} genre={project.genre} />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/95 via-zinc-900/50 to-transparent" />

        {/* Language badge — top left */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[11px] font-medium text-zinc-300 border border-white/[0.06]">
          {project.language}
        </div>

        {/* Type badge — top right */}
        <div className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full backdrop-blur-sm text-[11px] font-medium border border-white/[0.04] ${tc.bg} ${tc.text}`}>
          {project.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 flex-1 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-base font-semibold text-zinc-100 leading-snug group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Logline — the primary description */}
        {project.logline && (
          <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-2">
            {project.logline}
          </p>
        )}

        {/* Cast inline */}
        {dedupedCast.length > 0 && (
          <p className="text-xs text-zinc-500 truncate">
            <span className="text-zinc-600">Cast:</span>{" "}
            {dedupedCast.join(", ")}
          </p>
        )}

        {/* Tags — fully rounded pills */}
        <div className="flex flex-wrap gap-1.5 mt-0.5">
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${gc.bg} ${gc.text}`}>
            {project.genre}
          </span>
          {project.runTime && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/60 text-zinc-500">
              {project.runTime}
            </span>
          )}
          {project.audienceType && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/40 text-zinc-500">
              {project.audienceType}
            </span>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors mt-auto pt-1 rounded-full"
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          {expanded ? "Less" : "More info"}
        </button>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2.5 border-t border-white/[0.06] space-y-2.5">
            {/* Full synopsis */}
            {project.synopsis && project.synopsis !== project.logline && (
              <div>
                <span className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest">Synopsis</span>
                <p className="text-[13px] text-zinc-400 mt-0.5 leading-relaxed">{project.synopsis}</p>
              </div>
            )}

            {/* Published info */}
            <div className="flex items-center justify-between pt-1.5 text-[11px] text-zinc-600">
              <span>{project.publishedAt}</span>
              <span>by {project.publishedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
