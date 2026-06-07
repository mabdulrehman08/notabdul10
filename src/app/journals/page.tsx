import Link from 'next/link';

const journals = [
  {
    title: 'Starting Point',
    date: 'June 2026',
    excerpt:
      'A place for thoughts I want to share openly: what I am learning, building, questioning, and noticing along the way.',
  },
  {
    title: 'Building In Public',
    date: 'June 2026',
    excerpt:
      'Notes on projects, school, research, and the small decisions that shape how I become a better engineer.',
  },
  {
    title: 'Lessons I Want To Remember',
    date: 'June 2026',
    excerpt:
      'Short reflections from classes, internships, debugging sessions, and conversations that changed how I think.',
  },
];

const links = [
  { key: 'H', label: 'Home', href: '/' },
  { key: 'P', label: 'Projects', href: '/projects' },
  { key: 'J', label: 'Journals', href: '/journals' },
];

export default function JournalsPage() {
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
          <p className="font-mono text-sm text-[#6d8790]">journals</p>
          <h1 className="mt-2 text-5xl font-black text-gray-950 md:text-7xl">Thoughts I want to share.</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            This is where I&apos;ll write public journal entries about what I&apos;m learning, building, and thinking
            through.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {journals.map((journal) => (
            <article key={journal.title} className="rounded-lg border border-[#cfd3cf] bg-[#f7f7f4] p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-xl font-semibold">{journal.title}</h2>
                <span className="font-mono text-sm text-gray-500">{journal.date}</span>
              </div>
              <p className="mt-3 leading-7 text-gray-700">{journal.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
