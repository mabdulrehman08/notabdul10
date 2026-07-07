'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteNav from './components/site-nav';

const proof = [
  { label: 'data handled', value: '100GB+', note: 'IceCube research workflows' },
  { label: 'compression gain', value: '40%', note: 'binary data utility' },
  { label: 'users served', value: '450+', note: 'student product concepts' },
  { label: 'build mode', value: 'full-stack', note: 'React, Flask, Supabase, SQL' },
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

function useSFClock() {
  const [time, setTime] = useState<string>('--:--:--');

  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Los_Angeles',
        }).format(new Date()),
      );
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Home() {
  const sfTime = useSFClock();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <section className="mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-28">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-sm text-[var(--accent)]">
              <span className="text-[var(--muted)]">$</span> whoami
            </p>
            <p className="mt-2 text-sm text-[var(--subtle)]">
              software engineer &middot; Drexel CS &middot; based in San Francisco
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--text)] md:text-7xl">
              I turn chaotic problems into shipped systems.
              <span className="terminal-caret" />
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--subtle)]">
              Drexel CS student building research tools, full-stack campus products, and data-heavy interfaces with a
              bias toward useful, measurable work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <Link
                className="rounded-lg border border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-3 text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#04150c]"
                href="/projects"
              >
                ./see-proof
              </Link>
              <Link
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
                href="/journals"
              >
                ./read-thinking
              </Link>
              <a
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--text)] transition-colors hover:border-[var(--danger)] hover:text-[var(--danger)]"
                href="#contact"
              >
                ./hire-signal
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--muted)]">
              press <kbd className="rounded border border-[var(--border)] bg-[var(--bg)] px-1.5 py-0.5 text-[var(--subtle)]">⌘K</kbd> to explore this site like a terminal
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 font-mono text-xs text-[var(--muted)]">
              <span>system.status</span>
              <span className="flex items-center gap-2">
                <span className="status-led" />
                AVAILABLE
              </span>
            </div>

            <div className="grid gap-5 py-6">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] p-5">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>location.beacon</span>
                  <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-2 py-1 text-[var(--accent)]">
                    LIVE
                  </span>
                </div>
                <div className="mt-5 border-y border-[var(--border)] py-4">
                  <p className="text-xs uppercase text-[var(--accent-2)]">current city</p>
                  <p className="mt-1 text-4xl font-extrabold leading-none text-[var(--text)] sm:text-5xl">
                    SAN FRANCISCO
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs uppercase text-[var(--muted)]">
                    local time <span className="text-[var(--text)]">{sfTime}</span>
                  </p>
                </div>
                <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--bg)] p-4">
                  <p className="text-xs uppercase text-[var(--accent)]">open to</p>
                  <p className="mt-2 text-2xl font-extrabold text-[var(--text)]">software engineering roles</p>
                  <p className="mt-2 text-xs text-[var(--muted)]">tuned for Bay Area work, research, and product velocity</p>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  {['build', 'ship', 'iterate'].map((item) => (
                    <span key={item} className="rounded border border-[var(--border)] bg-[var(--surface)] px-2 py-2 text-[var(--subtle)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-md border border-[var(--border)] bg-[var(--surface-alt)] p-4">
                    <p className="text-xs text-[var(--muted)]">{item.label}</p>
                    <p className="mt-1 text-2xl font-extrabold text-[var(--text)]">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--subtle)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 border-t border-[var(--border)] pt-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-sm text-[var(--accent)]">camera roll</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--text)]">The cracked pics belong here.</h2>
          </div>

          <div className="photo-marquee rounded-xl border border-[var(--border)] bg-[var(--surface)] py-4">
            <div className="photo-marquee-track">
              {[...photoTiles, ...photoTiles].map((photo, index) => (
                <div key={`${photo.src}-${index}`} className="photo-tile" style={{ backgroundImage: `url(${photo.src})` }}>
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
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--subtle)]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-5 border-t border-[var(--border)] pt-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm text-[var(--accent)]">open channel</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--text)]">Let&apos;s build something useful.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--accent)]"
                href={item.href}
                download={item.download}
                target={item.download ? undefined : '_blank'}
                rel={item.download ? undefined : 'noopener noreferrer'}
              >
                <p className="text-sm text-[var(--muted)]">{item.label}</p>
                <p className="mt-1 break-all text-sm text-[var(--accent-2)]">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
