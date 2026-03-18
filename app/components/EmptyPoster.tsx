const gradients: Record<string, string> = {
  Drama: "from-indigo-950 via-indigo-900/40 to-zinc-950",
  Comedy: "from-amber-950 via-amber-900/40 to-zinc-950",
  Mystery: "from-violet-950 via-violet-900/40 to-zinc-950",
  Adventure: "from-emerald-950 via-emerald-900/40 to-zinc-950",
};

export default function EmptyPoster({
  title,
  genre,
}: {
  title: string;
  genre?: string;
}) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const grad = (genre && gradients[genre]) || "from-zinc-800 via-zinc-900 to-zinc-950";

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${grad} flex flex-col items-center justify-center gap-3`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/5">
        <svg
          className="w-7 h-7 text-white/20"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </div>
      <span className="text-xl font-semibold text-white/15 tracking-widest">
        {initials}
      </span>
    </div>
  );
}
