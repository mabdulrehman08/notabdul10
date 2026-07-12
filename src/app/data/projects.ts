export type ProjectLink = { label: string; href: string };

export type PipelineStage = {
  id: string;
  label: string;
  detail: string;
  output: string;
};

export type JournalProject = {
  name: string;
  slug: string;
  entryDate: string;
  year: string;
  tag: string;
  location: string;
  headline: string;
  summary: string;
  build: string;
  note: string;
  links: ProjectLink[];
};

export type FeaturedProject = JournalProject & {
  problem: string;
  approach: string;
  impact: string;
  pipeline: PipelineStage[];
};

export const icecubeProject: FeaturedProject = {
  name: 'IceCube — Neutrino Event Processing',
  slug: 'icecube',
  entryDate: '2025',
  year: '2025',
  tag: 'research workflow',
  location: 'neutrino-events.log',
  headline: 'Built Python tooling to make IceCube neutrino detector events reviewable outside Steamshovel.',
  problem:
    'IceCube detector events were stored in large .i3 files that were difficult to inspect, convert, and prepare for browser-based review and Zooniverse uploads.',
  approach:
    'Built Python tooling to extract event data, generate visual outputs, convert detector frames into videos, and test compression workflows outside the original Steamshovel pipeline.',
  impact:
    'Reduced the size of large binary detector datasets by approximately 40% while helping create a more practical workflow for reviewing and preparing neutrino events.',
  summary:
    'IceCube stores raw detector events in .i3 files that are awkward to move through review pipelines built for the web. This entry covers the tooling written to pull events out of that format, turn them into something a browser (and Zooniverse volunteers) can actually look at.',
  build: 'Python, event extraction, video encoding, compression testing',
  note: 'Reduced the size of large binary detector datasets by approximately 40% by building a Python-based extraction and compression workflow outside the original Steamshovel pipeline.',
  links: [{ label: 'View on Zooniverse', href: 'https://www.zooniverse.org/projects/icecubeobservatory/name-that-neutrino' }],
  pipeline: [
    {
      id: 'i3',
      label: '.i3 file',
      detail: 'Raw detector events arrive in IceCube’s native .i3 format — large binary files built for Steamshovel, not for browser review or Zooniverse uploads.',
      output: '$ ls events/\nrun00136_gcd.i3.zst',
    },
    {
      id: 'extract',
      label: 'event extraction',
      detail: 'Python tooling parses each .i3 file and pulls out the per-event detector data needed for inspection.',
      output: '$ python extract_events.py run00136_gcd.i3.zst\nparsing frames... done',
    },
    {
      id: 'visualize',
      label: 'visualization',
      detail: 'Extracted events are rendered into frame-by-frame visual output of the detector activity.',
      output: '$ render_frames.py --event-id 136\nwriting PNG sequence... done',
    },
    {
      id: 'video',
      label: 'video',
      detail: 'Frame sequences are converted into video clips so events can be reviewed without specialized detector software.',
      output: '$ ffmpeg -framerate 24 -i frame_%04d.png event_136.mp4\nencoding... done',
    },
    {
      id: 'compress',
      label: 'compression',
      detail: 'Compression workflows are tested against the original binary payload, cutting dataset size by roughly 40%.',
      output: 'baseline ██████████ 100%\ncompressed ██████░░░░ ~60% (-40%)',
    },
    {
      id: 'review',
      label: 'review',
      detail: 'Compressed, video-ready output is prepared for browser-based review and Zooniverse upload.',
      output: '$ upload_batch.py --target zooniverse\nready for review',
    },
  ],
};

export const projects: JournalProject[] = [
  {
    name: 'weavers',
    slug: 'weavers',
    entryDate: 'June 9, 2026',
    year: '2026',
    tag: 'hackathon journal',
    location: 'weavehacks.log',
    headline: 'At WeaveHacks, Abdul and teammates built Weavers as an AI orchestration project.',
    summary:
      'This entry is the newest one in the journal: a fast-moving build around coordinating AI workflows, shaping prompts into a system, and turning a raw hackathon idea into something demoable.',
    build: 'AI orchestration, hackathon speed, systems thinking',
    note: 'The point of Weavers is not just the repo itself, but the signal that product ideas are being pushed into real software quickly.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/weavers' }],
  },
  {
    name: 'shortaudit.ai',
    slug: 'shortaudit-ai',
    entryDate: 'June 2026',
    year: '2026',
    tag: 'ai product note',
    location: 'creator-audit.log',
    headline: 'Built a short-form video audit tool for creators who want sharper feedback loops.',
    summary:
      'shortaudit.ai is framed as an AI product surface: analyze hooks, retention issues, CTA pressure, and platform-specific risks through structured outputs rather than vague feedback.',
    build: 'OpenAI API, structured outputs, full-stack dashboard',
    note: 'This repo reads like a product experiment with real commercial instincts, not just a model wrapper.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/shortaudit.ai' }],
  },
  {
    name: 'notabdul10',
    slug: 'notabdul10',
    entryDate: 'June 2026',
    year: '2026',
    tag: 'portfolio journal',
    location: 'presentation-system.log',
    headline: 'Turned the portfolio into a living journal instead of a static resume page.',
    summary:
      'The site became a product surface of its own: homepage experiments, a repo journal, and iteration on how work gets presented publicly.',
    build: 'Next.js, TypeScript, Tailwind, interaction design',
    note: 'This repo matters because it changes how the rest of the work is understood, discovered, and remembered.',
    links: [
      { label: 'GitHub', href: 'https://github.com/mabdulrehman08/notabdul10' },
      { label: 'Live Site', href: 'https://notabdul10.vercel.app/' },
    ],
  },
  {
    name: 'EaglePeptides',
    slug: 'eaglepeptides',
    entryDate: 'June 2026',
    year: '2026',
    tag: 'commerce journal',
    location: 'checkout-flow.log',
    headline: 'Worked through a storefront build with Stripe checkout and webhook wiring.',
    summary:
      'EaglePeptides tracks a more operational build: payment flow, checkout sessions, backend coordination, and all the setup details that make commerce feel real.',
    build: 'React, Express, Stripe, webhook flow',
    note: 'This one shows implementation discipline more than flashy branding: getting money flow and backend events right.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/EaglePeptides' }],
  },
  {
    name: 'oasisstration',
    slug: 'oasisstration',
    entryDate: 'June 2026',
    year: '2026',
    tag: 'prototype journal',
    location: 'small-experiments.log',
    headline: 'Kept a tiny prototype visible instead of hiding smaller starts.',
    summary:
      'oasisstration is a small repo, but it belongs in the journal because it shows the habit of starting, testing, and letting small ideas stay visible.',
    build: 'prototype thinking, early repo trail',
    note: 'Small public repos help the overall archive feel honest instead of overly polished.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/oasisstration' }],
  },
  {
    name: 'flat_rents',
    slug: 'flat-rents',
    entryDate: 'June 2026',
    year: '2026',
    tag: 'idea journal',
    location: 'rental-concept.log',
    headline: 'Started a rental-oriented idea and kept it in the public trail.',
    summary:
      'flat_rents is early, but it belongs here because product thinking often begins before the polish. The repo marks that moment where an idea becomes code at all.',
    build: 'early product framing, repo incubation',
    note: 'It reads as a journal marker for momentum rather than a finished case study.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/flat_rents' }],
  },
  {
    name: 'DragonRec',
    slug: 'dragonrec',
    entryDate: '2025',
    year: '2025',
    tag: 'campus systems',
    location: 'rec-center.log',
    headline: 'Built a rec-center operations app around schedules, scores, and referee flow.',
    summary:
      'DragonRec sits in the journal as a campus operations product: registration, scheduling, scoring, and all the role-based pieces that make a real system usable.',
    build: 'React, Supabase, workflow design, operations tooling',
    note: 'The strength here is structure: multiple moving parts arranged around an actual student use case.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/DragonRec' }],
  },
  {
    name: 'dragonsconnect',
    slug: 'dragonsconnect',
    entryDate: '2025',
    year: '2025',
    tag: 'community product',
    location: 'freshman-onboarding.log',
    headline: 'Designed a student social platform to help freshmen find people, events, and opportunities.',
    summary:
      'dragonsconnect is one of the stronger community-facing ideas in the archive: a campus social layer with chat, event thinking, and backend structure behind it.',
    build: 'JavaScript, Python, Flask, SQL, PostgreSQL',
    note: 'It shows an instinct for building around human coordination problems, not just isolated features.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/dragonsconnect' }],
  },
  {
    name: 'Dragon_hacks',
    slug: 'dragon-hacks',
    entryDate: '2025',
    year: '2025',
    tag: 'hackathon archive',
    location: 'rapid-build.log',
    headline: 'Kept the hackathon repo in the record as proof of fast iteration under pressure.',
    summary:
      'Dragon_hacks belongs in the archive because it shows shipping energy: less time, tighter constraints, and still getting an artifact into the world.',
    build: 'prototype work, rapid iteration, hackathon mode',
    note: 'Fast builds are part of the story too, especially when they sharpen product instincts.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/Dragon_hacks' }],
  },
  {
    name: 'mabdulrehman08',
    slug: 'mabdulrehman08',
    entryDate: '2025',
    year: '2025',
    tag: 'identity layer',
    location: 'profile-readme.log',
    headline: 'Maintained the GitHub profile repo as the top-level public identity surface.',
    summary:
      'This repo is small, but it plays a real role: it shapes the first impression of the developer footprint and connects the public story across projects.',
    build: 'profile README, developer identity, public narrative',
    note: 'Not every important repo is large. Some are infrastructure for trust and discovery.',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08/mabdulrehman08' }],
  },
];

export const allJournalProjects: JournalProject[] = [icecubeProject, ...projects];
