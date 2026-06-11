import Link from 'next/link';
import ProjectGraphPanel from './ProjectGraphPanel';
import ProjectRanker from './ProjectRanker';

type ProjectVideo = {
  title: string;
  src: string | null;
  note: string;
  shelf: string;
  badge?: string;
  summary?: string;
};

const projects = [
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
      'The site became a product surface of its own: homepage experiments, a repo journal, cracked-pics gallery, and iteration on how work gets presented publicly.',
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

const links = [
  { key: 'H', label: 'Home', href: '/' },
  { key: 'P', label: 'Projects', href: '/projects' },
  { key: 'J', label: 'Journals', href: '/journals' },
];

const projectVideos: ProjectVideo[] = [
  {
    title: 'Original orchestration reel',
    src: '/videos/intro.mp4',
    note: 'Original intro clip kept in the archive as the first orchestration pass.',
    shelf: 'archive',
    badge: 'original cut',
    summary: 'The first version stays visible so the project story shows progression instead of only the latest asset.',
  },
  {
    title: 'Current orchestration reel',
    src: '/videos/intro2.mp4',
    note: 'Primary orchestration clip now featured in the project archive.',
    shelf: 'featured',
    badge: 'current feature',
    summary: 'The newer version leads the section with a sharper visual treatment and a stronger first impression.',
  },
  {
    title: 'reels/',
    src: null,
    note: 'Use this for polished clips you want attached to a project story.',
    shelf: '/videos/reels',
  },
  {
    title: 'process/',
    src: null,
    note: 'Use this for demos, walkthroughs, and behind-the-scenes build footage.',
    shelf: '/videos/process',
  },
];

const projectCount = projects.length;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-[#f4f4f5]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#242424] bg-black/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-white" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-3 rounded-lg px-4 py-2.5 text-lg font-semibold text-zinc-400 transition-colors hover:bg-[#111111] hover:text-white"
                href={item.href}
              >
                <span className="hidden min-h-8 min-w-8 items-center justify-center rounded-md border border-[#333333] bg-[#111111] px-2 font-mono text-base font-black text-zinc-400 group-hover:text-white sm:flex">
                  {item.key}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-3 px-5 pb-8 pt-22 lg:grid-cols-[220px_1fr_230px]">
        <aside className="rounded-md border border-[#242424] bg-[#070707]">
          <div className="flex items-center justify-between border-b border-[#242424] px-4 py-3">
            <p className="font-mono text-xs uppercase text-zinc-400">repo index</p>
            <span className="rounded bg-[#111111] px-2 py-1 font-mono text-xs text-white">{projectCount} public</span>
          </div>
          <div className="p-3">
            <div className="rounded border border-[#242424] bg-black px-3 py-2 font-mono text-xs text-zinc-400">
              /mabdulrehman08/journal
            </div>
            <div className="mt-3 grid gap-1">
              <a className="rounded px-2 py-2 text-xs text-zinc-300 hover:bg-[#111111]" href="#overview">
                00-overview.md
              </a>
              <a className="rounded px-2 py-2 text-xs text-zinc-300 hover:bg-[#111111]" href="#rankings">
                rankings.db
              </a>
              {projects.map((project, index) => (
                <a
                  key={project.name}
                  className="rounded px-2 py-2 text-xs text-zinc-300 hover:bg-[#111111]"
                  href={`#${project.slug}`}
                >
                  {(index + 1).toString().padStart(2, '0')}-{project.name}.md
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 rounded-md border border-[#242424] bg-[#050505]">
          <div className="flex overflow-x-auto border-b border-[#242424] bg-black">
            <a className="border-r border-[#242424] bg-[#050505] px-4 py-3 font-mono text-xs text-white" href="#overview">
              journal.md
            </a>
            <a className="border-r border-[#242424] px-4 py-3 font-mono text-xs text-zinc-400 hover:bg-[#111111] hover:text-white" href="#rankings">
              gradebook.db
            </a>
            {projects.map((project, index) => (
              <a
                key={project.name}
                className="border-r border-[#242424] px-4 py-3 font-mono text-xs text-zinc-400 hover:bg-[#111111] hover:text-white"
                href={`#${project.slug}`}
              >
                {index + 1}-{project.name}.md
              </a>
            ))}
          </div>

          <div className="grid gap-4 p-4">
            <article id="overview" className="rounded-md border border-[#242424] bg-[#090909] p-4">
              <p className="font-mono text-xs text-zinc-500"># repo journal</p>
              <h1 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">A dated trail of what I built and shipped.</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">
                This page now mirrors the public GitHub work as a journal instead of a clean portfolio grid. Each entry
                reads like a note: when the repo mattered, what got built, and why it deserves a place in the archive.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded border border-[#2a2a2a] bg-black px-3 py-1 text-zinc-200">[[10 public repos]]</span>
                <span className="rounded border border-[#2a2a2a] bg-black px-3 py-1 text-zinc-200">[[journal format]]</span>
                <span className="rounded border border-[#2a2a2a] bg-black px-3 py-1 text-zinc-200">[[community grading]]</span>
              </div>
            </article>

            <article className="rounded-md border border-[#242424] bg-[#090909] p-4">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#242424] pb-3">
                <div>
                  <p className="font-mono text-xs uppercase text-zinc-500">project videos</p>
                  <h2 className="mt-2 text-xl font-black text-white md:text-2xl">Clips belong in the work archive.</h2>
                </div>
                <span className="rounded border border-[#2a2a2a] bg-black px-3 py-1 font-mono text-xs text-zinc-300">
                  /public/videos
                </span>
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="grid gap-4">
                  {projectVideos
                    .filter((item): item is ProjectVideo & { src: string } => item.src !== null)
                    .map((item, index) => (
                      <div key={item.title} className="overflow-hidden rounded-md border border-[#242424] bg-black">
                        <div
                          className={`border-b border-[#242424] px-4 py-4 ${
                            index === 1
                              ? 'bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_36%),linear-gradient(180deg,_rgba(14,14,14,0.96),_rgba(0,0,0,1))]'
                              : 'bg-[radial-gradient(circle_at_top_left,_rgba(244,255,0,0.1),_transparent_30%),linear-gradient(180deg,_rgba(18,18,18,0.96),_rgba(0,0,0,1))]'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p
                                className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                                  index === 1 ? 'text-sky-300' : 'text-[#f4ff88]'
                                }`}
                              >
                                {index === 1 ? 'featured orchestration reel' : 'archive orchestration reel'}
                              </p>
                              <h3 className="mt-2 text-lg font-black text-white md:text-xl">{item.title}</h3>
                            </div>
                            <span
                              className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
                                index === 1
                                  ? 'border border-sky-400/30 bg-sky-400/10 text-sky-200'
                                  : 'border border-[#f4ff88]/25 bg-[#f4ff88]/8 text-[#f4ff88]'
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">{item.summary}</p>
                        </div>

                        <div className="bg-[linear-gradient(180deg,_rgba(9,9,11,0.88),_rgba(0,0,0,1))] p-3">
                          <div className="overflow-hidden rounded-md border border-[#2f2f2f] bg-[#050505] shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
                            <video
                              className="aspect-video w-full bg-black object-cover"
                              controls
                              muted
                              playsInline
                              preload="metadata"
                            >
                              <source src={item.src} type="video/mp4" />
                            </video>
                          </div>
                        </div>

                        <div className="grid gap-3 border-t border-[#242424] px-3 py-3 md:grid-cols-3">
                          <div className="rounded-md border border-[#242424] bg-[#0a0a0a] px-3 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">role</p>
                            <p className="mt-2 text-sm text-zinc-200">
                              {index === 1 ? 'Current lead visual for the orchestration story.' : 'Earlier visual pass kept for continuity.'}
                            </p>
                          </div>
                          <div className="rounded-md border border-[#242424] bg-[#0a0a0a] px-3 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">placement</p>
                            <p className="mt-2 text-sm text-zinc-200">Featured directly inside the projects archive.</p>
                          </div>
                          <div className="rounded-md border border-[#242424] bg-[#0a0a0a] px-3 py-3">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">status</p>
                            <p className="mt-2 text-sm text-zinc-200">
                              {index === 1 ? 'Newest clip highlighted as the active version.' : 'Original clip preserved alongside the update.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="grid gap-3">
                  {projectVideos.map((item) => (
                    <div key={item.title} className="rounded-md border border-[#242424] bg-black p-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-xs text-white">{item.title}</p>
                        <span className="rounded border border-[#2a2a2a] bg-[#111111] px-2 py-1 font-mono text-[10px] uppercase text-zinc-400">
                          {item.shelf}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-zinc-400">{item.note}</p>
                      {item.src ? (
                        <a
                          className="mt-3 inline-flex rounded-md border border-[#333333] bg-[#111111] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-300 hover:border-white hover:text-white"
                          href={item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          open clip
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  id={project.slug}
                  className="rounded-md border border-[#242424] bg-[#090909] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="grid gap-4 lg:grid-cols-[150px_1fr]">
                    <div className="border-l-2 border-[#f4ff00] pl-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        entry {(index + 1).toString().padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm font-black text-white">{project.entryDate}</p>
                      <p className="mt-2 font-mono text-[10px] uppercase text-[#7dd3fc]">{project.tag}</p>
                      <p className="mt-3 rounded border border-[#2a2a2a] bg-black px-3 py-2 font-mono text-[10px] text-zinc-400">
                        {project.location}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#242424] pb-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase text-zinc-500">{project.name}.md</p>
                          <h2 className="mt-2 max-w-3xl text-xl font-black leading-snug text-white md:text-2xl">
                            {project.headline}
                          </h2>
                        </div>
                        <span className="rounded border border-[#2a2a2a] bg-black px-3 py-1 font-mono text-xs text-zinc-300">
                          {project.year}
                        </span>
                      </div>

                      <div className="mt-3 grid gap-3 xl:grid-cols-[1.15fr_0.85fr]">
                        <div className="space-y-3">
                          <p className="text-sm leading-6 text-zinc-300">{project.summary}</p>
                          <div className="rounded-md border border-[#242424] bg-black p-3">
                            <p className="font-mono text-xs uppercase text-zinc-500">journal note</p>
                            <p className="mt-2 text-sm leading-6 text-zinc-200">{project.note}</p>
                          </div>
                        </div>

                        <aside className="rounded-md border border-[#242424] bg-black p-3">
                          <p className="font-mono text-xs uppercase text-zinc-500">build signal</p>
                          <p className="mt-3 text-sm leading-6 text-zinc-200">{project.build}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.build.split(', ').map((item) => (
                              <span
                                key={item}
                                className="rounded border border-[#2a2a2a] bg-[#111111] px-2 py-1 font-mono text-xs text-zinc-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </aside>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-[#242424] pt-3">
                        <span className="font-mono text-xs uppercase text-zinc-500">links</span>
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            className="rounded-md border border-[#333333] bg-black px-3 py-2 font-mono text-xs text-zinc-300 hover:border-white hover:text-white"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label} -&gt;
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ProjectRanker projects={projects.map(({ name, slug }) => ({ name, slug }))} />
          </div>
        </div>

        <aside className="grid gap-4 lg:sticky lg:top-24 lg:self-start">
          <ProjectGraphPanel
            projects={projects.map(({ name, slug, year, tag }) => ({
              name,
              slug,
              year,
              tag,
            }))}
          />

          <div className="rounded-md border border-[#242424] bg-[#070707] p-3.5">
            <p className="font-mono text-xs uppercase text-zinc-500">journal stats</p>
            <div className="mt-3 grid gap-2.5">
              <div className="rounded border border-[#242424] bg-black p-3">
                <p className="font-mono text-xs text-zinc-500">public repos mirrored</p>
                <p className="mt-1 text-2xl font-black text-white">{projectCount}</p>
              </div>
              <div className="rounded border border-[#242424] bg-black p-3">
                <p className="font-mono text-xs text-zinc-500">latest entry</p>
                <p className="mt-1 text-base font-black text-white">weavers</p>
                <p className="mt-1 text-xs uppercase text-[#7dd3fc]">June 9, 2026</p>
              </div>
              <div className="rounded border border-[#242424] bg-black p-3">
                <p className="font-mono text-xs text-zinc-500">page mode</p>
                <p className="mt-1 text-xs leading-5 text-zinc-300">
                  Journal-first storytelling with links out to the original repos and a grading panel underneath.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-[#242424] bg-[#070707] p-3.5">
            <p className="font-mono text-xs uppercase text-zinc-500">jump links</p>
            <div className="mt-3 grid gap-2 text-xs text-zinc-300">
              <a className="rounded border border-[#242424] bg-black px-3 py-2 hover:text-white" href="#weavers">
                [[weavers]]
              </a>
              <a className="rounded border border-[#242424] bg-black px-3 py-2 hover:text-white" href="#shortaudit-ai">
                [[shortaudit.ai]]
              </a>
              <a className="rounded border border-[#242424] bg-black px-3 py-2 hover:text-white" href="#dragonrec">
                [[DragonRec]]
              </a>
              <a className="rounded border border-[#242424] bg-black px-3 py-2 hover:text-white" href="#dragonsconnect">
                [[dragonsconnect]]
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
