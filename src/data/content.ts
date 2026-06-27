// All copy + media for v4 scroll-cinematic portfolio.
// Real text + real engagement from X syndication API (2026-06-26).
// Reddit posts: awaiting manual paste from Tim — couldn't scrape (anti-bot).

export type Video = {
  id: string;
  title: string;
  description?: string;
  youtubeId: string;
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
  { id: "chainlink-quadrillions", title: "Quadrillions", youtubeId: "dHiHR9jeuF8", publishedAt: "2026-01-09" },
  { id: "fileverse-anti-docs", title: "Anti-Google Docs", youtubeId: "Gu4y0SZNmoU", publishedAt: "2025-09-04" },
  { id: "keycard-shell-gameboy", title: "Gameboy or Wallet?", youtubeId: "HgXoI4jad-g", publishedAt: "2026-05-20" },
  { id: "zora-paid-me", title: "Guess Which Paid Me?", youtubeId: "NJX_z4i8c_E", publishedAt: "2025-05-28" },
];

// Section 3 — Conversations (7 entries — carousel)
export const conversations: Conversation[] = [
  {
    id: "jimmy-cygaar",
    guest: "Jimmy (cygaar)",
    title: "Good Tech Won't Save You",
    context: "Five years in crypto. Trust, distribution, people — what outlasts code.",
    youtubeId: "OvMEl4L-0bY",
  },
  {
    id: "zy0n",
    guest: "zy0n",
    title: "Privacy for the Sovereign Individual",
    context: "Railgun x zy0n. Nelson BC. The conversation that defined the channel.",
    youtubeId: "8qhMECRarpE",
  },
  {
    id: "timofey",
    guest: "Timofey",
    title: "On Building Through the Bear",
    context: "Building when nobody's watching. The unglamorous middle.",
    youtubeId: "SHXgT17J874",
  },
  {
    id: "oskar-ef-iptf",
    guest: "Oskar (EF IPTF)",
    title: "Zero Knowledge for the Rest of Us",
    context: "The privacy researcher breaking down what's coming next.",
    youtubeId: "p-cKWfAj6nI",
  },
  {
    id: "alan-scott-railgun",
    guest: "Alan Scott (Railgun)",
    title: "Privacy as Default, Respectability as Design",
    context: "Why opt-in privacy is the only viable path for a regulated world.",
    youtubeId: "N7i1wAnGOpI",
  },
  {
    id: "chris-blake",
    guest: "Chris Blake",
    title: "Independent Research, Real Conviction",
    context: "Independent researcher on what's actually working in crypto today.",
    youtubeId: "6KaxUw5YZe0",
  },
  {
    id: "phil-ngo",
    guest: "Phil Ngo (Lodestar)",
    title: "Ethereum Consensus, In Practice",
    context: "Lodestar team on the unglamorous work of running Ethereum's consensus layer.",
    youtubeId: "2uwr6wk29lg",
  },
];

// Section 4 — Distribution
// Real text + real likes from cdn.syndication.twimg.com (2026-06-26 fetch)
// Reddit posts: PENDING (Reddit blocked scrape attempts)
export const distribution: Distribution[] = [
  // === TWEETS (real engagement) ===
  {
    id: "twt-chainlink",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2008904544810672165",
    text: ">the guy who co-formalized proof-of-work 9 years before bitcoin is this protocol's chief scientist\n>@swiftcommunity is building $150T infra on it\n...\n>ranks #20 behind ripple (#4) and doge (#10)\n\nabsolutely unserious market or i am delusional about @chainlink\n\ni explain",
    postedAt: "2026-01-07",
    likes: 187,
    retweets: 0,  // syndication API doesn't expose retweet_count; use 0 rather than fabricate
    replies: 0,
  },
  {
    id: "twt-fileverse",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/1963644879445409898",
    text: "3 BILLION ppl are captured by google workspace\n\nbut did you know? every keystroke in google docs passes through their servers.\n\nsry but no.\n\nthe future of collaboration isnt on google, or notion, or microsoft.",
    postedAt: "2025-09-04",
    likes: 83,
    retweets: 0,
    replies: 0,
  },
  {
    id: "twt-zy0n",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2052071872146100552",
    text: "privacy is not an issue for most people until it is.\n\n\"ive been debanked multiple times.\"\n\nso @_zy0nn began building for @RAILGUN_Project. today, it stands tall as ethereum's privacy layer.\n\nbanks cant debank what they cant see.",
    postedAt: "2026-05-06",
    likes: 115,
    retweets: 0,
    replies: 0,
  },
  {
    id: "twt-alan",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/1943297527916404901",
    text: "ethereum wasn't built for privacy.\nrailgun is rewriting that story.\n\nwe crossed 🇯🇵 tokyo bay in @tsu_kareta's cinderblock van while i interviewed him on my favorite crypto privacy project: @RAILGUN_Project.",
    postedAt: "2025-07-10",
    likes: 97,
    retweets: 0,
    replies: 0,
  },
  {
    id: "twt-keycard",
    kind: "tweet",
    url: "https://x.com/haochizzle/status/2057114739457528157",
    text: "the @Keycard_ Shell understood the assignment.\n\nbecause it's not about the looks or the cool factor.\n\nit's about the mission.\n\nand there's no other hardware wallet as true-to-ethos, cypherpunk, and self-sovereign as this thing.",
    postedAt: "2026-05-20",
    likes: 79,
    retweets: 0,
    replies: 0,
  },
  // === REDDIT POSTS — pending paste from Tim ===
  // Reddit's anti-bot blocks all our scrape attempts. Awaiting manual paste.
  {
    id: "rdt-jimmy",
    kind: "reddit",
    url: "https://www.reddit.com/r/ethereum/comments/1ua9dop/good_tech_wont_save_you_a_5year_crypto_dev_shares/",
    subreddit: "r/ethereum",
    title: "Good tech won't save you — a 5-year crypto dev shares what actually matters",
    body: "[Body text pending — Reddit blocked scrape. Paste the post body here.]",
    postedAt: "2026-05-04",
    upvotes: 0,
    comments: 0,
  },
  {
    id: "rdt-keycard",
    kind: "reddit",
    url: "https://www.reddit.com/r/ethereum/comments/1tioe3q/meet_the_hardware_wallet_that_looks_like_a_game/",
    subreddit: "r/ethereum",
    title: "Meet the hardware wallet that looks like a game — Keycard Shell review",
    body: "[Body text pending — Reddit blocked scrape. Paste the post body here.]",
    postedAt: "2026-04-18",
    upvotes: 0,
    comments: 0,
  },
];
