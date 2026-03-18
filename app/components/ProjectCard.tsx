"use client";

import { useState } from "react";
import { Project, genreColors, typeColors } from "@/lib/data";
import EmptyPoster from "./EmptyPoster";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const gc = genreColors[project.genre] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };
  const tc = typeColors[project.type] ?? { bg: "bg-zinc-700/30", text: "text-zinc-400" };

  return (
    <div className="group bg-zinc-900/60 rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Poster */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
        {project.posterUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.posterUrl})` }}
          />
        ) : (
          <EmptyPoster title={project.title} genre={project.genre} />
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900/90 to-transparent" />

        {/* Language badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs font-medium text-zinc-300">
          {project.language}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-zinc-100 leading-tight">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${gc.bg} ${gc.text}`}>
            {project.genre}
          </span>
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${tc.bg} ${tc.text}`}>
            {project.type}
          </span>
          {project.runTime && (
            <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-800/60 text-zinc-500">
              {project.runTime}
            </span>
          )}
        </div>

        {/* Synopsis preview */}
        {(project.synopsis || project.logline) && (
          <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
            {project.synopsis || project.logline}
          </p>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors mt-auto pt-1"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          {expanded ? "Less" : "Details"}
        </button>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 border-t border-zinc-800/60 space-y-3">
            {project.cast.length > 0 && (
              <div>
                <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Cast</span>
                <p className="text-sm text-zinc-400 mt-0.5">
                  {[...new Set(project.cast)].join(", ")}
                </p>
              </div>
            )}

            {project.logline && (
              <div>
                <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Logline</span>
                <p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">{project.logline}</p>
              </div>
            )}

            {project.audienceType && (
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Audience</span>
                  <p className="text-sm text-zinc-400 mt-0.5">{project.audienceType}</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 text-xs text-zinc-600">
              <span>{project.publishedAt}</span>
              <span>by {project.publishedBy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
