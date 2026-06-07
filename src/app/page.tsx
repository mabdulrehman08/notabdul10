import Link from 'next/link';

const links = [
  { key: 'H', label: 'Home', href: '/' },
  { key: 'P', label: 'Projects', href: '/projects' },
  { key: 'J', label: 'Journals', href: '/journals' },
];

const proof = [
  { label: 'Data handled', value: '100GB+', note: 'IceCube research workflows' },
  { label: 'Compression gain', value: '40%', note: 'Binary data utility' },
  { label: 'Users served', value: '450+', note: 'Student product concepts' },
  { label: 'Build mode', value: 'Full-stack', note: 'React, Flask, Supabase, SQL' },
];

const flights = [
  { from: 'PHL', to: 'SFO', title: 'Research tools -> Bay Area systems', status: 'boarding' },
  { from: 'SFO', to: '???', title: 'Product engineering -> next role loading', status: 'searching' },
];

const stack = ['Python', 'TypeScript', 'React', 'Next.js', 'Flask', 'Supabase', 'D3.js', 'PostgreSQL'];

const logLines = [
  'compressed detector datasets for faster research ingestion',
  'built student tools for events, scheduling, and coordination',
  'turning messy requirements into clean interfaces',
  'available for software internships and research engineering',
];

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-abdulrehman08',
    href: 'https://linkedin.com/in/muhammad-abdulrehman08',
  },
  { label: 'GitHub', value: 'github.com/mabdulrehman08', href: 'https://github.com/mabdulrehman08' },
  { label: 'Portfolio', value: 'notabdul10.com', href: 'https://notabdul10.com' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8eae7] text-[#15171a]">
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

      <section className="mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-28">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-[#5f7068]">software engineer in formation</p>
            <h1 className="mt-4 max-w-5xl text-6xl font-black leading-[0.9] text-gray-950 md:text-8xl">
              I turn chaotic problems into shipped systems.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
              Drexel CS student building research tools, full-stack campus products, and data-heavy interfaces with a
              bias toward useful, measurable work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 font-mono text-base">
              <Link className="rounded-md bg-gray-950 px-5 py-3 text-white shadow-sm transition-colors hover:bg-[#4f5f58]" href="/projects">
                see proof -&gt;
              </Link>
              <Link className="rounded-md border border-[#bfc6c1] bg-[#f7f7f4] px-5 py-3 text-gray-700 shadow-sm transition-colors hover:border-gray-950 hover:text-black" href="/journals">
                read thinking -&gt;
              </Link>
              <a className="rounded-md border border-[#bfc6c1] bg-[#f7f7f4] px-5 py-3 text-gray-700 shadow-sm transition-colors hover:border-gray-950 hover:text-black" href="#contact">
                hire signal -&gt;
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-lg border border-[#c5cbc6] bg-[#dce0dc] p-5 shadow-[0_24px_70px_rgba(70,78,74,0.22)]">
            <div className="flex items-center justify-between border-b border-[#c3cac4] pb-4 font-mono text-xs text-gray-500">
              <span>candidate.departures</span>
              <span>PHL / OPEN</span>
            </div>

            <div className="grid gap-5 py-6">
              <div className="flight-radar rounded-lg border border-[#b7beb9] bg-[#15171a] p-5 font-mono text-sm text-[#d8ded9] shadow-inner">
                <div className="flex items-center justify-between text-xs text-[#8ea098]">
                  <span>career.routes</span>
                  <span>LIVE BOARD</span>
                </div>
                <div className="mt-5 grid gap-4">
                  {flights.map((flight) => (
                    <div key={`${flight.from}-${flight.to}`} className="rounded-md border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase text-[#8ea098]">{flight.title}</p>
                          <p className="mt-2 text-3xl font-black tracking-normal text-white">
                            {flight.from} -&gt; {flight.to}
                          </p>
                        </div>
                        <span className="rounded-full border border-[#8ea098]/40 px-2 py-1 text-xs text-[#d8ded9]">
                          {flight.status}
                        </span>
                      </div>
                      <div className="flight-path mt-4">
                        <span className="flight-dot" />
                        <span className="flight-plane" />
                        <span className="flight-dot" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  {['build', 'launch', 'land impact'].map((item) => (
                    <span key={item} className="rounded border border-white/10 bg-white/5 px-2 py-2 text-[#d8ded9]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-md border border-[#c5cbc6] bg-[#f8f8f5]/90 p-4 shadow-sm">
                    <p className="font-mono text-xs text-gray-500">{item.label}</p>
                    <p className="mt-1 text-2xl font-black text-gray-950">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-gray-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 border-t border-[#c5cbc6] pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm text-[#5f7068]">work log</p>
            <h2 className="mt-2 text-3xl font-black text-gray-950">Readable proof beats buzzwords.</h2>
          </div>

          <div className="rounded-lg border border-[#c5cbc6] bg-[#15171a] p-5 font-mono text-sm text-[#d8ded9] shadow-sm">
            {logLines.map((line, index) => (
              <p key={line} className="leading-8">
                <span className="text-[#8ea098]">0{index + 1}</span> / {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-[#c5cbc6] bg-[#f7f7f4] px-3 py-1 font-mono text-sm text-gray-600 shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-5 border-t border-[#c5cbc6] pt-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm text-[#5f7068]">open channel</p>
            <h2 className="mt-2 text-3xl font-black">Let&apos;s build something useful.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="rounded-lg border border-[#c5cbc6] bg-[#f7f7f4] p-4 shadow-sm transition-colors hover:border-gray-950"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-1 break-all text-sm text-[#4f6f7a]">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
