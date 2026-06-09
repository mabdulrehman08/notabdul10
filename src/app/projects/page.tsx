import Link from 'next/link';

const projects = [
  {
    name: 'DragonsConnect',
    date: 'Dec 2025',
    stack: 'JavaScript, Python, Flask, SQL, PostgreSQL',
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
    stack: 'JavaScript, Node.js, React, Supabase',
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
    summary: 'A journaling platform that turns reflections into AI-assisted images and narratives.',
    proof: 'AI product design, auth/storage, continuity-focused UX',
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
  {
    name: 'Hustler',
    date: 'July 2025',
    stack: 'TypeScript, React, D3.js, MongoDB',
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
    <main className="min-h-screen bg-[#eceeeb] text-[#15171a]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f2f3f0]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-black" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
                href={item.href}
              >
                <span className="hidden h-5 min-w-5 items-center justify-center rounded border border-gray-200 bg-white px-1 font-mono text-[12px] text-gray-400 shadow-sm group-hover:text-gray-700 sm:flex">
                  {item.key}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-[#6d8790]">proof archive</p>
          <h1 className="mt-2 text-5xl font-black text-gray-950 md:text-7xl">Projects that show range.</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Product ideas, research-adjacent tools, AI experiments, and data interfaces, all in one place.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {projects.map((project) => (
            <article key={project.name} className="rounded-lg border border-[#cfd3cf] bg-[#f7f7f4] p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="mt-1 text-sm text-[#4f6f7a]">{project.stack}</p>
                </div>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
              <p className="mt-3 leading-7 text-gray-700">{project.summary}</p>
              <p className="mt-3 rounded-md border border-[#d4d8d3] bg-[#ecefeb] px-3 py-2 font-mono text-sm text-[#53635c]">
                proves: {project.proof}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="text-sm font-medium text-[#4f6f7a] underline underline-offset-4 hover:text-gray-950"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
