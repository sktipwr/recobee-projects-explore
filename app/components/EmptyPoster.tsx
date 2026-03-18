const gradients: Record<string, string> = {
  Drama: "from-indigo-900/80 via-purple-950/60 to-zinc-950",
  Comedy: "from-amber-900/70 via-orange-950/50 to-zinc-950",
  Mystery: "from-violet-900/80 via-fuchsia-950/50 to-zinc-950",
  Adventure: "from-emerald-900/70 via-teal-950/50 to-zinc-950",
};

const genreIcons: Record<string, JSX.Element> = {
  Drama: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  Comedy: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  Mystery: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  Adventure: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

export default function EmptyPoster({
  title,
  genre,
}: {
  title: string;
  genre?: string;
}) {
  const grad = (genre && gradients[genre]) || "from-zinc-800 via-zinc-900 to-zinc-950";
  const icon = genre ? genreIcons[genre] : null;

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${grad} overflow-hidden`}>
      {/* Organic light blobs */}
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/[0.03] blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/[0.04] blur-xl" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/[0.02] blur-2xl" />

      {/* Ghost title as design element */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-3xl font-bold text-white/[0.06] text-center leading-tight select-none">
          {title}
        </span>
      </div>

      {/* Genre icon */}
      {icon && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/10">
          {icon}
        </div>
      )}
    </div>
  );
}
