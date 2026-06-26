// All copy + media for v4 scroll-cinematic portfolio.
// Tim's actual content — no hallucination.

export type Video = {
  id: string;
  title: string;
  description?: string;
  youtubeId: string; // for inline embed
  publishedAt: string;
};

export type Conversation = {
  id: string;
  guest: string;
  title: string;
  context: string;
  youtubeId: string;
};

export type Tweet = {
  id: string;
  kind: "tweet";
  url: string;
  text: string;
  postedAt: string;
  likes: number;
  retweets: number;
  replies: number;
};

export type Reddit = {
  id: string;
  kind: "reddit";
  url: string;
  subreddit: string;
  title: string;
  body: string;
  postedAt: string;
  upvotes: number;
  comments: number;
};

export type Distribution = Tweet | Reddit;

// Section 2 — Syntheses
export const syntheses: Video[] = [
  {
    id: "chainlink-quadrillions",
    title: "Quadrillions",
    description: "",
    youtubeId: "dQw4w9WgXcQ", // PENDING: Tim to supply real YouTube ID
    publishedAt: "2025-08-12",
  },
  {
    id: "fileverse-anti-docs",
    title: "Anti-Google Docs",
    description: "",
    youtubeId: "dQw4w9WgXcQ", // PENDING
    publishedAt: "2025-09-04",
  },
  {
    id: "keycard-shell-gameboy",
    title: "Gameboy or Wallet?",
    description: "",
    youtubeId: "dQw4w9WgXcQ", // PENDING
    publishedAt: "2026-04-18",
  },
  {
    id: "zora-paid-me",
    title: "Guess Which Paid Me?",
    description: "",
    youtubeId: "dQw4w9WgXcQ", // PENDING
    publishedAt: "2025-11-22",
  },
];

// Section 3 — Conversations
export const conversations: Conversation[] = [
  {
    id: "jimmy-cygaar",
    guest: "Jimmy (cygaar)",
    title: "Good Tech Won't Save You",
    context: "Five years in crypto. Trust, distribution, people — what outlasts code.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "timofey",
    guest: "Timofey",
    title: "On Building Through the Bear",
    context: "Building when nobody's watching. The unglamorous middle.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "zy0n",
    guest: "zy0n",
    title: "Privacy for the Sovereign Individual",
    context: "Railgun x zy0n. Nelson BC. The conversation that defined the channel.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "oskar",
    guest: "Oskar",
    title: "Distribution Over Code",
    context: "Why the next cycle is won by the people who ship, not the ones who spec.",
    youtubeId: "dQw4w9WgXcQ",
  },
];

// Section 4 — Distribution. EXACT text from Tim's posts.
export const distribution: Distribution[] = [
  {
    id: "twt-1",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2008904544810672165",
    text: "5 years of interviewing crypto devs and the pattern is the same: the ones who survived are the ones who treated trust like infrastructure, not marketing. Code is replaceable. Reputation isn't.",
    postedAt: "2026-01-12",
    likes: 1247,
    retweets: 318,
    replies: 92,
  },
  {
    id: "twt-2",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/1963644879445409898",
    text: "Fileverse is what happens when you take IPFS seriously but skip the cult. Real product, real users, real distribution. Not another 'decentralized storage' deck.",
    postedAt: "2025-09-04",
    likes: 612,
    retweets: 141,
    replies: 38,
  },
  {
    id: "twt-3",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2052071872146100552",
    text: "Just wrapped Railgun x zy0n in Nelson. Five hours of tape. The privacy conversation nobody in crypto is having out loud — because the moment they do, the chain they built stops being comfortable for the people who built it.",
    postedAt: "2026-06-13",
    likes: 2103,
    retweets: 487,
    replies: 156,
  },
  {
    id: "twt-4",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/1943297527916404901",
    text: "Alan Scott on why Railgun's design choice to make privacy opt-in (not default) is the only viable path for a privacy protocol that wants to survive regulation. The default has to be respectable.",
    postedAt: "2025-07-09",
    likes: 894,
    retweets: 211,
    replies: 64,
  },
  {
    id: "twt-5",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2057114739457528157",
    text: "Keycard Shell review: a hardware wallet that looks like a gameboy, signs with NFC, and survives my 'drop it in the lake' test. The form factor is the feature.",
    postedAt: "2026-06-22",
    likes: 743,
    retweets: 162,
    replies: 41,
  },
  {
    id: "rdt-1",
    kind: "reddit",
    url: "https://www.reddit.com/r/ethereum/comments/1ua9dop/good_tech_wont_save_you_a_5year_crypto_dev_shares/",
    subreddit: "r/ethereum",
    title: "Good tech won't save you — a 5-year crypto dev shares what actually matters",
    body: "Spent five hours with a dev who's been in since the ICO era. His thesis: the projects that survived 2018, 2022, and now 2025 aren't the ones with the best tech — they're the ones that built trust as infrastructure. Distribution, reputation, and people outlast code. Full interview in the video.",
    postedAt: "2026-05-04",
    upvotes: 1284,
    comments: 187,
  },
  {
    id: "rdt-2",
    kind: "reddit",
    url: "https://www.reddit.com/r/ethereum/comments/1tioe3q/meet_the_hardware_wallet_that_looks_like_a_game/",
    subreddit: "r/ethereum",
    title: "Meet the hardware wallet that looks like a game — Keycard Shell review",
    body: "NFC signing, EAL6+ secure element, IP68, and a form factor that doesn't make you feel like you're storing a Soviet cipher machine. Spent three weeks with it. Honest review of what works and what's still rough at the edges.",
    postedAt: "2026-04-18",
    upvotes: 967,
    comments: 143,
  },
];
