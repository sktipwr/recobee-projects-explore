export interface Project {
  id: string;
  title: string;
  genre: string;
  audienceType: string;
  language: string;
  type: string;
  runTime: string;
  cast: string[];
  logline: string;
  synopsis: string;
  posterUrl: string | null;
  publishedBy: string;
  publishedAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tu",
    genre: "Drama",
    audienceType: "General",
    language: "Hindi",
    type: "Feature Film",
    runTime: "120 min",
    cast: ["Rahul Navaja", "Rahul Rangari"],
    logline:
      "Two people once consumed by love, now tied to different partners, learn how to inhabit their marriages, even as the long shadow of their shared past still lingers.",
    synopsis:
      "Tu is a story about three relationships, that playout in parallel. Gauri and Chirag, from marginalized communities, are married but struggle to connect. Gauri reaches out in small ways, hoping to bridge the gap, while Chirag remains guarded.",
    posterUrl: null,
    publishedBy: "Rahulk",
    publishedAt: "21 November 2025",
  },
  {
    id: "2",
    title: "Swaraaj",
    genre: "Drama",
    audienceType: "General",
    language: "Hindi",
    type: "Feature Film",
    runTime: "111 min",
    cast: [],
    logline:
      "Chiyugi Maya trying to erase painful memories, meets Vivek in his domain who audits every belief. Vivek interestingly resolves maya's conflict but subconsciously gets sucked in the system trap to get his intelligence hijacked building an interesting drama.",
    synopsis:
      "Maya, a sharp but emotionally fractured woman from the city, checks into an elusive retreat known as the Cognitive Reset Program, designed to help people erase traumatic memories.",
    posterUrl: null,
    publishedBy: "Missunlimited",
    publishedAt: "17 December 2025",
  },
  {
    id: "3",
    title: "Cutting Chai Vs Cappuccino",
    genre: "Comedy",
    audienceType: "General",
    language: "Hindi",
    type: "Web Series",
    runTime: "125 min",
    cast: ["Rajkishov Verma", "Rajkishov Verma", "Rajkishov Verma", "Urveel Verma"],
    logline:
      "Two small-town misfits chase urban success, only to discover that the farther they run forward Cappuccino, the more they miss the warmth of Cutting Chai. This is a story about migration, ambition, and the emotional cost of modern life.",
    synopsis:
      "Cutting Chai Vs Cappuccino follows Lal Singh and his uncle Dhaniya — street smart, unemployed men from a rural Indian village, who migrate to the city in search of work, status, and meaning.",
    posterUrl: null,
    publishedBy: "Missunlimited",
    publishedAt: "18 December 2025",
  },
  {
    id: "4",
    title: "Happiness",
    genre: "Mystery",
    audienceType: "General",
    language: "Hindi",
    type: "Web Series",
    runTime: "89 min",
    cast: ["Rajkishov Verma", "Rajkishov Verma"],
    logline:
      "Once basic needs are fulfilled, a man finds himself trapped in an invisible crisis. Believing that movement, travel, experiences, and external change might offer relief, he embarks on a journey across people, places, and situations.",
    synopsis:
      "In a world where comfort is easily accessible but contentment remains elusive, this series follows a seeker who has everything society promises, yet feels incomplete. He begins a journey of self-discovery.",
    posterUrl: null,
    publishedBy: "Missunlimited",
    publishedAt: "22 December 2025",
  },
  {
    id: "5",
    title: "Hasmukh",
    genre: "Mystery",
    audienceType: "General",
    language: "Hindi",
    type: "Feature Film",
    runTime: "110 min",
    cast: [],
    logline:
      "When a burnt-out Mumbai banker accepts a drunken bet to disappear for a month to stay in a treehouse, his vanishing act triggers a police investigation and family chaos while he stumbles into an accidental inner awakening.",
    synopsis:
      "Suraj Malhotra, a 34-year-old corporate banker, suffocates under Mumbai's relentless pace and professional demands. His anxiety-ridden existence reaches a breaking point during a night out.",
    posterUrl: null,
    publishedBy: "deepakshewani",
    publishedAt: "1 January 2026",
  },
  {
    id: "6",
    title: "Test",
    genre: "Adventure",
    audienceType: "General",
    language: "English",
    type: "Short Film",
    runTime: "",
    cast: [],
    logline: "This is adventurous movie",
    synopsis: "",
    posterUrl: null,
    publishedBy: "RB-MP-Demo-5",
    publishedAt: "15 March 2026",
  },
  {
    id: "7",
    title: "Test",
    genre: "Comedy",
    audienceType: "Kids",
    language: "Hindi",
    type: "Documentary",
    runTime: "",
    cast: [],
    logline: "Everything is possible",
    synopsis: "",
    posterUrl: null,
    publishedBy: "ritesh_test",
    publishedAt: "16 March 2026",
  },
];

export const genres = ["All", "Drama", "Comedy", "Mystery", "Adventure"] as const;
export const types = ["All", "Feature Film", "Web Series", "Short Film", "Documentary"] as const;

export const genreColors: Record<string, { bg: string; text: string }> = {
  Drama: { bg: "bg-indigo-500/15", text: "text-indigo-400" },
  Comedy: { bg: "bg-amber-500/15", text: "text-amber-400" },
  Mystery: { bg: "bg-violet-500/15", text: "text-violet-400" },
  Adventure: { bg: "bg-emerald-500/15", text: "text-emerald-400" },
};

export const typeColors: Record<string, { bg: string; text: string }> = {
  "Feature Film": { bg: "bg-sky-500/15", text: "text-sky-400" },
  "Web Series": { bg: "bg-rose-500/15", text: "text-rose-400" },
  "Short Film": { bg: "bg-teal-500/15", text: "text-teal-400" },
  Documentary: { bg: "bg-orange-500/15", text: "text-orange-400" },
};
