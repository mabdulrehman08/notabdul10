import Link from 'next/link';

const projects = [
  {
    name: 'DragonsConnect',
    slug: 'dragonsconnect',
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
    slug: 'dragonrec',
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
    slug: 'memoir',
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
    slug: 'hustler',
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
    <main className="min-h-screen bg-[#18181b] text-[#f4f4f5]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#3f3f46] bg-[#18181b]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-white" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-zinc-400 transition-colors hover:bg-[#27272a] hover:text-white"
                href={item.href}
              >
                <span className="hidden h-5 min-w-5 items-center justify-center rounded border border-[#52525b] bg-[#27272a] px-1 font-mono text-[12px] text-zinc-400 group-hover:text-white sm:flex">
                  {item.key}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-10 pt-24 lg:grid-cols-[245px_1fr_255px]">
        <aside className="rounded-md border border-[#3f3f46] bg-[#202024]">
          <div className="flex items-center justify-between border-b border-[#3f3f46] px-4 py-3">
            <p className="font-mono text-xs uppercase text-zinc-400">vault explorer</p>
            <span className="rounded bg-[#2f2f35] px-2 py-1 font-mono text-xs text-[#a78bfa]">projects</span>
          </div>
          <div className="p-3">
            <div className="rounded border border-[#3f3f46] bg-[#18181b] px-3 py-2 font-mono text-xs text-zinc-400">
              /portfolio/proof
            </div>
            <div className="mt-3 grid gap-1">
              <div className="px-2 py-1 font-mono text-xs uppercase text-zinc-500">notes</div>
              <a className="rounded px-2 py-2 text-sm text-zinc-300 hover:bg-[#2a2a30]" href="#overview">
                _overview.md
              </a>
              {projects.map((project) => (
                <a
                  key={project.name}
                  className="rounded px-2 py-2 text-sm text-zinc-300 hover:bg-[#2a2a30]"
                  href={`#${project.slug}`}
                >
                  {project.name}.md
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="min-w-0 rounded-md border border-[#3f3f46] bg-[#1f1f23]">
          <div className="flex overflow-x-auto border-b border-[#3f3f46] bg-[#18181b]">
            <a className="border-r border-[#3f3f46] bg-[#1f1f23] px-4 py-3 font-mono text-xs text-white" href="#overview">
              overview.md
            </a>
            {projects.map((project, index) => (
              <a
                key={project.name}
                className="border-r border-[#3f3f46] px-4 py-3 font-mono text-xs text-zinc-400 hover:bg-[#27272a] hover:text-white"
                href={`#${project.slug}`}
              >
                {index + 1}-{project.name}.md
              </a>
            ))}
          </div>

          <div className="project-notes grid gap-4 p-4">
            <article id="overview" className="rounded-md border border-[#3f3f46] bg-[#24242a] p-5">
              <p className="font-mono text-xs text-[#a78bfa]"># proof archive</p>
              <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Projects as a thinking vault.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Each project opens like a note: context, stack, proof, and the links between the systems I keep
                building. Less brochure, more workspace.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-sm">
                <span className="rounded bg-[#312e81] px-3 py-1 text-[#ddd6fe]">[[product systems]]</span>
                <span className="rounded bg-[#312e81] px-3 py-1 text-[#ddd6fe]">[[data interfaces]]</span>
                <span className="rounded bg-[#312e81] px-3 py-1 text-[#ddd6fe]">[[campus tools]]</span>
              </div>
            </article>

            <div className="grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  id={project.slug}
                  className="rounded-md border border-[#3f3f46] bg-[#24242a] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#3f3f46] pb-4">
                    <div>
                      <p className="font-mono text-xs uppercase text-[#a78bfa]">## {project.tag}</p>
                      <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">{project.name}</h2>
                    </div>
                    <span className="rounded bg-[#27272a] px-3 py-1 font-mono text-sm text-zinc-300">
                      {project.date}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_220px]">
                    <div>
                      <p className="text-lg leading-8 text-zinc-300">{project.summary}</p>
                      <div className="mt-5 rounded-md border border-[#3f3f46] bg-[#1b1b20] p-4">
                        <p className="font-mono text-xs uppercase text-zinc-500">proof</p>
                        <p className="mt-2 leading-7 text-zinc-200">{project.proof}</p>
                      </div>
                    </div>

                    <aside className="rounded-md border border-[#3f3f46] bg-[#1b1b20] p-4">
                      <p className="font-mono text-xs uppercase text-zinc-500">properties</p>
                      <dl className="mt-3 grid gap-3 text-sm">
                        <div>
                          <dt className="font-mono text-zinc-500">signal</dt>
                          <dd className="mt-1 text-zinc-200">{project.signal}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-zinc-500">stack</dt>
                          <dd className="mt-2 flex flex-wrap gap-2">
                            {project.stack.split(', ').map((tool) => (
                              <span key={tool} className="rounded bg-[#27272a] px-2 py-1 text-xs text-zinc-200">
                                {tool}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </aside>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#3f3f46] pt-4">
                    <span className="font-mono text-xs uppercase text-zinc-500">outgoing links</span>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        className="rounded-md border border-[#52525b] bg-[#18181b] px-3 py-2 font-mono text-sm text-[#a78bfa] hover:border-[#a78bfa] hover:text-white"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} -&gt;
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="grid gap-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-[#3f3f46] bg-[#202024] p-4">
            <p className="font-mono text-xs uppercase text-zinc-500">graph view</p>
            <div className="project-graph mt-4">
              <span className="graph-node graph-core">proof</span>
              {projects.map((project, index) => (
                <a
                  key={project.name}
                  className={`graph-node graph-node-${index + 1}`}
                  href={`#${project.slug}`}
                  aria-label={project.name}
                />
              ))}
              <span className="graph-line graph-line-1" />
              <span className="graph-line graph-line-2" />
              <span className="graph-line graph-line-3" />
              <span className="graph-line graph-line-4" />
            </div>
          </div>

          <div className="rounded-md border border-[#3f3f46] bg-[#202024] p-4">
            <p className="font-mono text-xs uppercase text-zinc-500">backlinks</p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-300">
              <a className="rounded bg-[#27272a] px-3 py-2 hover:text-white" href="#dragonsconnect">
                [[campus community]]
              </a>
              <a className="rounded bg-[#27272a] px-3 py-2 hover:text-white" href="#dragonrec">
                [[operations tooling]]
              </a>
              <a className="rounded bg-[#27272a] px-3 py-2 hover:text-white" href="#memoir">
                [[AI product design]]
              </a>
              <a className="rounded bg-[#27272a] px-3 py-2 hover:text-white" href="#hustler">
                [[data visualization]]
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
