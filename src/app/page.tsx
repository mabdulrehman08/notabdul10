'use client';

import { motion } from 'framer-motion';

type Project = {
  name: string;
  date: string;
  stack: string;
  summary: string;
  impact: string[];
  links: { label: string; href: string }[];
};

const starDots = [
  { top: '8%', left: '12%', size: 'h-1 w-1', opacity: 'opacity-80', delay: 'delay-0' },
  { top: '14%', left: '68%', size: 'h-1.5 w-1.5', opacity: 'opacity-70', delay: 'delay-300' },
  { top: '20%', left: '38%', size: 'h-1 w-1', opacity: 'opacity-60', delay: 'delay-500' },
  { top: '28%', left: '85%', size: 'h-1.5 w-1.5', opacity: 'opacity-80', delay: 'delay-700' },
  { top: '33%', left: '56%', size: 'h-1 w-1', opacity: 'opacity-50', delay: 'delay-1000' },
  { top: '42%', left: '8%', size: 'h-1.5 w-1.5', opacity: 'opacity-70', delay: 'delay-200' },
  { top: '51%', left: '76%', size: 'h-1 w-1', opacity: 'opacity-70', delay: 'delay-900' },
  { top: '64%', left: '23%', size: 'h-1.5 w-1.5', opacity: 'opacity-60', delay: 'delay-500' },
  { top: '72%', left: '62%', size: 'h-1 w-1', opacity: 'opacity-80', delay: 'delay-200' },
  { top: '86%', left: '44%', size: 'h-1.5 w-1.5', opacity: 'opacity-70', delay: 'delay-700' },
  { top: '90%', left: '18%', size: 'h-1 w-1', opacity: 'opacity-80', delay: 'delay-300' },
  { top: '12%', left: '92%', size: 'h-1 w-1', opacity: 'opacity-60', delay: 'delay-1000' },
];

const featuredDemos = [
  {
    title: 'DragonsConnect Demo',
    detail: 'Social app for Drexel freshmen with events + chat',
    links: [
      { label: 'GitHub', href: 'https://github.com/mabdulrehman08' },
      { label: 'Portfolio', href: 'https://notabdul10.com' },
    ],
  },
  {
    title: 'DragonRec Demo',
    detail: 'Intramural scheduling, score tracking, and registration',
    links: [
      { label: 'GitHub', href: 'https://github.com/mabdulrehman08' },
      { label: 'Contact for Live Demo', href: 'https://linkedin.com/in/muhammad-abdulrehman08' },
    ],
  },
];

const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Bash', 'SQL', 'CSS'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Flask', 'Supabase', 'Tailwind CSS'],
  tools: ['Git', 'MongoDB', 'PostgreSQL', 'Vercel', 'GitLab CI/CD', 'OpenAI API', 'D3.js'],
};

const experience = [
  {
    role: 'Research Assistant',
    org: 'IceCube Neutrino Observatory',
    period: 'Aug 2024 – Feb 2026',
    location: 'Philadelphia, PA',
    bullets: [
      'Built a Python utility that compressed 100GB+ binary datasets by ~40%, improving data ingestion for Zooniverse workflows.',
      'Automated detector-frame visualization into near real-time video outputs for faster neutrino-event analysis.',
      'Collaborated as the only freshman contributor on a graduate-level team, improving accessibility of IceCube data workflows.',
    ],
  },
  {
    role: 'Research & Development Intern',
    org: 'Drexel University — Environmental Monitoring Lab',
    period: 'Jan 2024 – Apr 2024',
    location: 'Philadelphia, PA',
    bullets: [
      'Developed an Arduino + Python monitoring system for continuous 24-hour environmental data logging.',
      'Implemented local pipelines and visual scripts to improve measurement precision and real-time trend analysis.',
      'Optimized calibration and acquisition workflows for reliable long-term performance across varied lab settings.',
    ],
  },
];

const projects: Project[] = [
  {
    name: 'DragonsConnect',
    date: 'Dec 2025',
    stack: 'JavaScript, Python, Flask, SQL, PostgreSQL',
    summary:
      'A full-stack student social platform for Drexel freshmen to chat, create events, and discover nearby opportunities.',
    impact: [
      'Onboarded 250+ users with scalable relational schema design.',
      'Built modular REST APIs for future React/mobile expansion.',
      'Improved student engagement through event and participation tooling.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
  {
    name: 'DragonRec',
    date: 'Sept 2025',
    stack: 'JavaScript, Node.js, React, Supabase',
    summary:
      'An intramural sports management app inspired by IMLeagues with scheduling, registrations, and referee assignment.',
    impact: [
      'Supported 200+ student athletes across league operations.',
      'Used Supabase auth/database/realtime for live updates.',
      'Delivered responsive score tracking to reduce manual coordination.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
  {
    name: 'Memoir',
    date: 'Oct 2025',
    stack: 'JavaScript, React, Node.js, Supabase, OpenAI',
    summary:
      'A journaling platform that transforms reflections into AI-assisted images and narratives with continuity controls.',
    impact: [
      'Integrated image and text generation APIs to create character-consistent outputs.',
      'Implemented storage + auth architecture for secure personal entries.',
      'Built for a mental-health-focused hackathon concept.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
  {
    name: 'Hustler',
    date: 'July 2025',
    stack: 'TypeScript, React, D3.js, MongoDB',
    summary:
      'A financial tracking app for gig workers with live income visualization and multi-account connectivity.',
    impact: [
      'Used D3.js dashboards to replace manual statement review.',
      'Engineered reusable strict-typed React components for scale.',
      'Focused on maintainability in complex client-side state flows.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/mabdulrehman08' }],
  },
];

const contactLinks = [
  { label: 'Portfolio', value: 'notabdul10.com', href: 'https://notabdul10.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-abdulrehman08',
    href: 'https://linkedin.com/in/muhammad-abdulrehman08',
  },
  { label: 'GitHub', value: 'github.com/mabdulrehman08', href: 'https://github.com/mabdulrehman08' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] px-5 py-12 text-white md:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1d2a55_0%,#05070d_55%)]" />
      {starDots.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className={`pointer-events-none absolute ${star.size} ${star.opacity} ${star.delay} animate-pulse rounded-full bg-white`}
          style={{ top: star.top, left: star.left }}
        />
      ))}

      <section className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-4xl font-bold md:text-6xl"
          >
            Muhammad Abdulrehman
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl text-lg text-gray-300"
          >
            Computer Science student at Drexel University focused on practical software that helps people make better decisions
            — from scientific data pipelines to full-stack products for student communities.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
            >
              View Projects
            </a>
            <a
              href="https://linkedin.com/in/muhammad-abdulrehman08"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-600 px-5 py-3 font-semibold transition-colors hover:border-gray-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Expected Graduation', value: 'Jun 2028' },
              { label: 'Research Experience', value: '2+ Labs' },
              { label: 'Users Impacted', value: '450+ Students' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl border border-blue-200/20 bg-[#0b1020]/85 p-5 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.15em] text-blue-300">Live Demos & Previews</p>
          {featuredDemos.map((demo) => (
            <article key={demo.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 h-28 rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/30 via-indigo-400/15 to-purple-400/25" />
              <h3 className="text-lg font-semibold">{demo.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{demo.detail}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {demo.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </aside>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Technical Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold capitalize">{group}</h3>
              <p className="mt-3 leading-7 text-gray-300">{items.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((job) => (
            <article key={job.role} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-blue-300">{job.org}</p>
                </div>
                <div className="text-right text-gray-300">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-200">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto mt-16 max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold md:text-3xl">Project Highlights</h2>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="flex justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>
              <p className="mt-1 text-sm text-blue-200">{project.stack}</p>
              <p className="mt-3 text-gray-200">{project.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-300">
                {project.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-300 underline underline-offset-4 hover:text-blue-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl pb-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <p className="mt-3 text-gray-300">Open to internships, software engineering roles, and research collaborations.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-blue-400/50"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="mt-1 break-all text-blue-200">{item.value}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
