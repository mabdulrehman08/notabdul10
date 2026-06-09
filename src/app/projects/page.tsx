import Link from 'next/link';

const projects = [
  {
    name: 'DragonsConnect',
    date: 'Dec 2025',
    stack: 'JavaScript, Python, Flask, SQL, PostgreSQL',
    tag: 'campus social layer',
    signal: 'freshman onboarding',
    summary:
      'A student social platform for Drexel freshmen to chat, create events, and find nearby opportunities.',
    proof: 'Community product, backend design, student engagement',
    links: [
      { label: 'GitHub', href: 'https://github.com/mabdulrehman08' },
      { label: 'Portfolio', href: 'https://notabdul10.com' },
    ],
  },
  {
    name: 'DragonRec',
    date: 'Sept 2025',
    stack: 'JavaScript, React, Supabase, API workflows',
    tag: 'rec-center operating system',
    signal: 'schedules, refs, scores',
    summary: 'An intramural sports app for scheduling, registration, scores, and referee assignment.',
    proof: 'Realtime product thinking, role-based workflows, operations tooling',
    links: [
      { label: 'GitHub', href: 'https://github.com/mabdulrehman08' },
      { label: 'Live demo', href: 'https://linkedin.com/in/muhammad-abdulrehman08' },
    ],
  },
  {
    name: 'Memoir',
    date: 'Oct 2025',
    stack: 'JavaScript, React, Node.js, Supabase, OpenAI',
    tag: 'memory machine',
    signal: 'AI-assisted reflection',
    summary: 'A journaling platform that turns reflections into AI-assisted images and narratives.',
    proof: 'AI product design, auth/storage, continuity-focused UX',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
  {
    name: 'Hustler',
    date: 'July 2025',
    stack: 'TypeScript, React, D3.js, MongoDB',
    tag: 'income cockpit',
    signal: 'gig-worker finance',
    summary: 'A financial tracking app for gig workers with live income visualization.',
    proof: 'Data visualization, typed UI components, financial workflow design',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
];

const links = [
  { key: 'H', label: 'Home', href: '/' },
  { key: 'P', label: 'Projects', href: '/projects' },
  { key: 'J', label: 'Journals', href: '/journals' },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#111111]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black bg-[#fffaf0]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-black" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-[#5c5043] transition-colors hover:bg-[#f4ff00] hover:text-black"
                href={item.href}
              >
                <span className="hidden h-5 min-w-5 items-center justify-center rounded border border-black bg-white px-1 font-mono text-[12px] text-[#5c5043] shadow-sm group-hover:text-black sm:flex">
                  {item.key}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="project-wall mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-28 lg:grid-cols-[280px_1fr]">
        <aside className="project-side lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-sm font-bold uppercase text-[#0057ff]">proof archive</p>
          <h1 className="mt-3 text-5xl font-black leading-none text-black md:text-6xl">Projects opened up.</h1>
          <p className="mt-5 text-base leading-7 text-[#5c5043]">
            Same work, less spreadsheet. Each build is an open tab: what it is, what it proves, and the system shape
            behind it.
          </p>

          <div className="mt-7 grid gap-2 font-mono text-sm">
            {projects.map((project, index) => (
              <a
                key={project.name}
                className="group grid grid-cols-[2.5rem_1fr] items-center rounded-md border border-black bg-white text-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5 hover:bg-[#f4ff00]"
                href={`#${project.name.toLowerCase()}`}
              >
                <span className="border-r border-black px-3 py-3 text-center font-black">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="px-3 py-3">{project.name}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="grid gap-5">
          <div className="rounded-lg border border-black bg-black p-4 text-white shadow-[10px_10px_0_#0057ff]">
            <div className="grid gap-3 font-mono text-xs uppercase sm:grid-cols-4">
              <span className="rounded border border-white/30 px-3 py-2">status: shipped ideas</span>
              <span className="rounded border border-white/30 px-3 py-2">mode: product systems</span>
              <span className="rounded border border-white/30 px-3 py-2">view: expanded</span>
              <span className="rounded border border-white/30 bg-[#f4ff00] px-3 py-2 text-black">scroll: live</span>
            </div>
          </div>

          {projects.map((project, index) => (
            <details
              key={project.name}
              id={project.name.toLowerCase()}
              className="project-dossier group rounded-lg border border-black bg-white shadow-[8px_8px_0_#111]"
              open
            >
              <summary className="grid cursor-pointer gap-4 p-5 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-md border border-black bg-[#ff3b30] font-mono text-2xl font-black text-white shadow-[4px_4px_0_#111]">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <p className="font-mono text-xs font-bold uppercase text-[#0057ff]">{project.tag}</p>
                  <h2 className="mt-1 text-3xl font-black text-black md:text-5xl">{project.name}</h2>
                  <p className="mt-2 text-sm text-[#5c5043]">{project.signal}</p>
                </div>
                <span className="w-fit rounded-full border border-black bg-[#f4ff00] px-3 py-1 font-mono text-sm text-black">
                  {project.date}
                </span>
              </summary>

              <div className="grid gap-4 border-t border-black p-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-md border border-black bg-[#fffaf0] p-5">
                  <p className="font-mono text-xs uppercase text-[#0057ff]">what opens</p>
                  <p className="mt-3 text-xl leading-8 text-black">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.split(', ').map((tool) => (
                      <span key={tool} className="rounded-full border border-black bg-white px-3 py-1 font-mono text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-md border border-black bg-[#0057ff] p-5 text-white">
                    <p className="font-mono text-xs uppercase text-[#f4ff00]">proves</p>
                    <p className="mt-3 text-lg font-semibold leading-7">{project.proof}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        className="rounded-md border border-black bg-white px-4 py-3 font-mono text-sm text-black shadow-[4px_4px_0_#111] transition-transform hover:-translate-y-0.5 hover:bg-[#f4ff00]"
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
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
