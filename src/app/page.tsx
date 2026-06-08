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
  { from: 'SFO', to: 'OPEN', title: 'Bay Area based - software engineering roles', status: 'available' },
];

const stack = ['Python', 'TypeScript', 'React', 'Next.js', 'Flask', 'Supabase', 'D3.js', 'PostgreSQL'];

const photoTiles = [
  { src: '/cracked-pics/pic-1.jpg', label: '01' },
  { src: '/cracked-pics/pic-2.jpg', label: '02' },
  { src: '/cracked-pics/pic-3.jpg', label: '03' },
  { src: '/cracked-pics/pic-4.jpg', label: '04' },
  { src: '/cracked-pics/pic-5.jpg', label: '05' },
  { src: '/cracked-pics/pic-6.jpg', label: '06' },
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
    <main className="min-h-screen bg-white text-[#09090b]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-black" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-zinc-500 transition-colors hover:bg-[#f4ff00] hover:text-black"
                href={item.href}
              >
                <span className="hidden h-5 min-w-5 items-center justify-center rounded border border-black bg-white px-1 font-mono text-[12px] text-zinc-500 shadow-sm group-hover:text-black sm:flex">
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
            <p className="font-mono text-sm font-semibold uppercase text-[#0057ff]">
              software engineer in SF right now
            </p>
            <h1 className="mt-4 max-w-5xl text-6xl font-black leading-[0.9] text-gray-950 md:text-8xl">
              I turn chaotic problems into shipped systems.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
              Drexel CS student building research tools, full-stack campus products, and data-heavy interfaces with a
              bias toward useful, measurable work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 font-mono text-base">
              <Link
                className="rounded-md border border-black bg-black px-5 py-3 text-white shadow-sm transition-colors hover:bg-[#0057ff]"
                href="/projects"
              >
                see proof -&gt;
              </Link>
              <Link
                className="rounded-md border border-black bg-white px-5 py-3 text-gray-950 shadow-sm transition-colors hover:bg-[#f4ff00]"
                href="/journals"
              >
                read thinking -&gt;
              </Link>
              <a
                className="rounded-md border border-black bg-white px-5 py-3 text-gray-950 shadow-sm transition-colors hover:bg-[#ff3b30] hover:text-white"
                href="#contact"
              >
                hire signal -&gt;
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-lg border border-black bg-white p-5 shadow-[12px_12px_0_#09090b]">
            <div className="flex items-center justify-between border-b border-black pb-4 font-mono text-xs text-zinc-600">
              <span>candidate.departures</span>
              <span>SF / OPEN</span>
            </div>

            <div className="grid gap-5 py-6">
              <div className="flight-radar rounded-lg border border-black bg-white p-5 font-mono text-sm text-black shadow-inner">
                <div className="relative z-10 flex items-center justify-between text-xs text-zinc-600">
                  <span>career.routes</span>
                  <span className="rounded-full border border-black bg-[#f4ff00] px-2 py-1 text-black">LIVE FROM SF</span>
                </div>
                <div className="relative z-10 mt-5 border-y border-black py-4">
                  <p className="text-xs uppercase text-[#0057ff]">current city</p>
                  <p className="mt-1 text-4xl font-black leading-none text-black sm:text-5xl md:text-6xl">
                    SAN FRANCISCO
                  </p>
                  <p className="mt-2 text-xs uppercase text-zinc-600">
                    I am in SF right now - tuned for Bay Area work, research, and product velocity.
                  </p>
                </div>
                <div className="relative z-10 mt-5 grid gap-4">
                  {flights.map((flight) => (
                    <div
                      key={`${flight.from}-${flight.to}`}
                      className="rounded-md border border-black bg-white p-4 shadow-[6px_6px_0_#f4ff00]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase text-[#0057ff]">{flight.title}</p>
                          <p className="mt-2 text-3xl font-black tracking-normal text-black">
                            {flight.from} -&gt; {flight.to}
                          </p>
                        </div>
                        <span className="rounded-full border border-black bg-black px-2 py-1 text-xs text-white">
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
                <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  {['build', 'launch', 'land impact'].map((item) => (
                    <span key={item} className="rounded border border-black bg-white px-2 py-2 text-black">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-md border border-black bg-white p-4 shadow-sm">
                    <p className="font-mono text-xs text-zinc-500">{item.label}</p>
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
        <div className="grid gap-5 border-t border-black pt-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="font-mono text-sm text-[#0057ff]">camera roll</p>
            <h2 className="mt-2 text-3xl font-black text-gray-950">The cracked pics belong here.</h2>
          </div>

          <div className="photo-marquee rounded-lg border border-black bg-white py-4 shadow-[8px_8px_0_#f4ff00]">
            <div className="photo-marquee-track">
              {[...photoTiles, ...photoTiles].map((photo, index) => (
                <div
                  key={`${photo.src}-${index}`}
                  className="photo-tile"
                  style={{ backgroundImage: `url(${photo.src})` }}
                >
                  <span>{photo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black bg-white px-3 py-1 font-mono text-sm text-gray-950 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-5 border-t border-black pt-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm text-[#0057ff]">open channel</p>
            <h2 className="mt-2 text-3xl font-black">Let&apos;s build something useful.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="rounded-lg border border-black bg-white p-4 shadow-sm transition-colors hover:bg-[#f4ff00]"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-1 break-all text-sm text-[#0057ff]">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
