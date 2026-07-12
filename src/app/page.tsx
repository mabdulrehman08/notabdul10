'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteNav from './components/site-nav';
import FeaturedIceCubeProject from './components/projects/FeaturedIceCubeProject';
import ProjectPreview from './components/projects/ProjectPreview';
import EvidenceStatement from './components/evidence/EvidenceStatement';
import TechnicalDepth from './components/skills/TechnicalDepth';
import { projects } from './data/projects';

const dragonsconnect = projects.find((project) => project.slug === 'dragonsconnect')!;
const dragonrec = projects.find((project) => project.slug === 'dragonrec')!;
const shortaudit = projects.find((project) => project.slug === 'shortaudit-ai')!;

const proof = [
  { label: 'build mode', value: 'full-stack', note: 'Python, React, Flask, Supabase, SQL' },
  { label: 'focus', value: 'research + product', note: 'IceCube research through shipped campus apps' },
];

const evidence = [
  {
    tag: 'icecube',
    statement:
      'Reduced IceCube binary event data size by approximately 40% by building a Python-based extraction and compression workflow outside the original Steamshovel pipeline.',
  },
  {
    tag: 'dragonsconnect',
    statement:
      'Built DragonsConnect as a full-stack Flask and PostgreSQL platform for Drexel students, including authentication, profiles, events, and social features.',
  },
  {
    tag: 'dragonrec',
    statement:
      'Built DragonRec on React and Supabase to handle scheduling, scoring, and role-based access for a campus rec center.',
  },
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
    <main className="field-grid min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <section className="mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-28">
        <p className="font-mono text-sm text-[var(--accent)]">
          <span className="text-[var(--muted)]">$</span> whoami
        </p>
        <p className="mt-2 text-sm text-[var(--subtle)]">
          software engineer &middot; Drexel CS &middot; based in San Francisco
        </p>

        <h1 className="hero-headline mt-6 text-[var(--text)]">
          I build data-intensive tools, AI products, and web systems that turn complex workflows into usable
          software.
          <span className="terminal-caret" />
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--subtle)]">
          My work ranges from processing IceCube neutrino data and building research visualization tools to shipping
          full-stack products used by real student communities.
        </p>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                className="rounded-lg border border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-3 text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#04150c]"
                href="/projects"
              >
                ./view-projects
              </Link>
              <Link
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
                href="/journals"
              >
                ./read-journal
              </Link>
              <a
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--text)] transition-colors hover:border-[var(--danger)] hover:text-[var(--danger)]"
                href="#contact"
              >
                ./contact
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
                    <p className="mt-1 text-lg font-extrabold text-[var(--text)]">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--subtle)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <FeaturedIceCubeProject />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="border-t border-[var(--border)] pt-10">
          <p className="section-kicker">§ 02 — selected work</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--text)]">Projects, not concepts.</h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <ProjectPreview
            project={dragonsconnect}
            variant="lead"
            built="Flask and PostgreSQL backend with authentication, profiles, events, and social features for Drexel students."
            decision="Modeled the social graph — friends, events, places — directly in PostgreSQL instead of bolting a third-party backend onto the app."
            outcome="A full-stack platform Drexel freshmen can use to find people, events, and nearby places from one account."
          />
          <div className="grid gap-5">
            <ProjectPreview
              project={dragonrec}
              variant="standard"
              built="React front end on Supabase handling registration, scheduling, scoring, and referee roles for a campus rec center."
              decision="Structured role-based access for players, referees, and admins around Supabase's row-level security instead of a custom auth layer."
              outcome="A working operations tool replacing manual scheduling and scorekeeping for the rec center."
            />
            <ProjectPreview
              project={shortaudit}
              variant="compact"
              built="Full-stack dashboard on the OpenAI API that turns short-form video critique into structured output."
              decision="Forced model output into a fixed schema — hooks, retention issues, CTA pressure, platform risk — instead of freeform text feedback."
              outcome="An audit tool creators can act on, not a thin wrapper around a chat prompt."
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <Link className="text-sm text-[var(--accent-2)] hover:text-[var(--text)]" href="/projects">
            See the full project journal &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="border-t border-[var(--border)] pt-10">
          <p className="section-kicker">§ 03 — evidence</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--text)]">What actually shipped.</h2>
        </div>

        <div className="mt-8 grid gap-3">
          {evidence.map((item) => (
            <EvidenceStatement key={item.tag} tag={item.tag} statement={item.statement} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="border-t border-[var(--border)] pt-10">
          <p className="section-kicker">§ 04 — technical depth</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--text)]">Fewer tools, more proof.</h2>
        </div>

        <div className="mt-8">
          <TechnicalDepth />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-14">
        <div className="grid gap-5 border-t border-[var(--border)] pt-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker">open channel</p>
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
