'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
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
  { label: 'Portfolio', value: 'notabdul10.vercel.app', href: 'https://notabdul10.vercel.app/' },
  { label: 'Resume', value: 'download resume.pdf', href: '/resume.pdf', download: true },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const homeTheme = {
    '--home-bg': darkMode ? '#050816' : '#ffffff',
    '--home-surface': darkMode ? '#0f172a' : '#ffffff',
    '--home-surface-alt': darkMode ? '#111c33' : '#f8fafc',
    '--home-nav': darkMode ? 'rgba(5, 8, 22, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    '--home-border': darkMode ? '#334155' : '#09090b',
    '--home-text': darkMode ? '#f8fafc' : '#09090b',
    '--home-muted': darkMode ? '#94a3b8' : '#52525b',
    '--home-subtle': darkMode ? '#cbd5e1' : '#4b5563',
    '--home-accent': darkMode ? '#7dd3fc' : '#0057ff',
    '--home-accent-2': darkMode ? '#fde047' : '#f4ff00',
    '--home-danger': darkMode ? '#fb7185' : '#ff3b30',
    '--home-shadow': darkMode ? '#020617' : '#09090b',
  } as CSSProperties;

  return (
    <main className="min-h-screen bg-[var(--home-bg)] text-[var(--home-text)] transition-colors duration-500" style={homeTheme}>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[var(--home-border)] bg-[var(--home-nav)] backdrop-blur-md transition-colors duration-500">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="font-mono text-base font-black text-[var(--home-text)]" href="/">
            MUHAMMAD_ABDULREHMAN
          </Link>
          <div className="flex items-center gap-2">
            {links.map((item) => (
              <Link
                key={item.label}
                className="group flex items-center gap-3 rounded-lg px-4 py-2.5 text-lg font-semibold text-[var(--home-muted)] transition-colors hover:bg-[var(--home-accent-2)] hover:text-black"
                href={item.href}
              >
                <span className="hidden min-h-8 min-w-8 items-center justify-center rounded-md border border-[var(--home-border)] bg-[var(--home-surface)] px-2 font-mono text-base font-black text-[var(--home-muted)] shadow-sm group-hover:text-black sm:flex">
                  {item.key}
                </span>
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              aria-pressed={darkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="moon-toggle"
              onClick={() => setDarkMode((current) => !current)}
            >
              <span className={`moon-orb ${darkMode ? 'moon-orb-active' : ''}`}>
                <span className="moon-cutout" />
                <span className="moon-star moon-star-1" />
                <span className="moon-star moon-star-2" />
                <span className="moon-star moon-star-3" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <section className="mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-28">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-[var(--home-accent)]">
              software engineer in SF right now
            </p>
            <h1 className="mt-4 max-w-5xl text-6xl font-black leading-[0.9] text-[var(--home-text)] md:text-8xl">
              I turn chaotic problems into shipped systems.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--home-subtle)]">
              Drexel CS student building research tools, full-stack campus products, and data-heavy interfaces with a
              bias toward useful, measurable work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 font-mono text-base">
              <Link
                className="rounded-md border border-[var(--home-border)] bg-[var(--home-text)] px-5 py-3 text-[var(--home-bg)] shadow-sm transition-colors hover:bg-[var(--home-accent)]"
                href="/projects"
              >
                see proof -&gt;
              </Link>
              <Link
                className="rounded-md border border-[var(--home-border)] bg-[var(--home-surface)] px-5 py-3 text-[var(--home-text)] shadow-sm transition-colors hover:bg-[var(--home-accent-2)] hover:text-black"
                href="/journals"
              >
                read thinking -&gt;
              </Link>
              <a
                className="rounded-md border border-[var(--home-border)] bg-[var(--home-surface)] px-5 py-3 text-[var(--home-text)] shadow-sm transition-colors hover:bg-[var(--home-danger)] hover:text-white"
                href="#contact"
              >
                hire signal -&gt;
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] p-5 shadow-[12px_12px_0_var(--home-shadow)] transition-colors duration-500">
            <div className="flex items-center justify-between border-b border-[var(--home-border)] pb-4 font-mono text-xs text-[var(--home-muted)]">
              <span>candidate.departures</span>
              <span>SF / OPEN</span>
            </div>

            <div className="grid gap-5 py-6">
              <div className={`flight-radar rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] p-5 font-mono text-sm text-[var(--home-text)] shadow-inner transition-colors duration-500 ${darkMode ? 'flight-radar-dark' : ''}`}>
                <div className="relative z-10 flex items-center justify-between text-xs text-[var(--home-muted)]">
                  <span>career.routes</span>
                  <span className="rounded-full border border-[var(--home-border)] bg-[var(--home-accent-2)] px-2 py-1 text-black">LIVE FROM SF</span>
                </div>
                <div className="relative z-10 mt-5 border-y border-[var(--home-border)] py-4">
                  <p className="text-xs uppercase text-[var(--home-accent)]">current city</p>
                  <p className="mt-1 text-4xl font-black leading-none text-[var(--home-text)] sm:text-5xl md:text-6xl">
                    SAN FRANCISCO
                  </p>
                  <p className="mt-2 text-xs uppercase text-[var(--home-muted)]">
                    I am in SF right now - tuned for Bay Area work, research, and product velocity.
                  </p>
                </div>
                <div className="relative z-10 mt-5 grid gap-4">
                  {flights.map((flight) => (
                    <div
                      key={`${flight.from}-${flight.to}`}
                      className="rounded-md border border-[var(--home-border)] bg-[var(--home-surface)] p-4 shadow-[6px_6px_0_var(--home-accent-2)] transition-colors duration-500"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase text-[var(--home-accent)]">{flight.title}</p>
                          <p className="mt-2 text-3xl font-black tracking-normal text-[var(--home-text)]">
                            {flight.from} -&gt; {flight.to}
                          </p>
                        </div>
                        <span className="rounded-full border border-[var(--home-border)] bg-[var(--home-text)] px-2 py-1 text-xs text-[var(--home-bg)]">
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
                    <span key={item} className="rounded border border-[var(--home-border)] bg-[var(--home-surface)] px-2 py-2 text-[var(--home-text)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-md border border-[var(--home-border)] bg-[var(--home-surface-alt)] p-4 shadow-sm transition-colors duration-500">
                    <p className="font-mono text-xs text-[var(--home-muted)]">{item.label}</p>
                    <p className="mt-1 text-2xl font-black text-[var(--home-text)]">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--home-subtle)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 border-t border-[var(--home-border)] pt-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="font-mono text-sm text-[var(--home-accent)]">camera roll</p>
            <h2 className="mt-2 text-3xl font-black text-[var(--home-text)]">The cracked pics belong here.</h2>
          </div>

          <div className={`photo-marquee rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] py-4 shadow-[8px_8px_0_var(--home-accent-2)] transition-colors duration-500 ${darkMode ? 'photo-marquee-dark' : ''}`}>
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
              className="rounded-full border border-[var(--home-border)] bg-[var(--home-surface)] px-3 py-1 font-mono text-sm text-[var(--home-text)] shadow-sm transition-colors duration-500"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-5 border-t border-[var(--home-border)] pt-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm text-[var(--home-accent)]">open channel</p>
            <h2 className="mt-2 text-3xl font-black text-[var(--home-text)]">Let&apos;s build something useful.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] p-4 shadow-sm transition-colors duration-500 hover:bg-[var(--home-accent-2)] hover:text-black"
                href={item.href}
                download={item.download}
                target={item.download ? undefined : '_blank'}
                rel={item.download ? undefined : 'noopener noreferrer'}
              >
                <p className="text-sm text-[var(--home-muted)]">{item.label}</p>
                <p className="mt-1 break-all text-sm text-[var(--home-accent)]">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
