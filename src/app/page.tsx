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
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammad-abdulrehman08', href: 'https://linkedin.com/in/muhammad-abdulrehman08' },
  { label: 'GitHub', value: 'github.com/mabdulrehman08', href: 'https://github.com/mabdulrehman08' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white px-5 md:px-16 py-12">
      <section className="max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 text-sm tracking-[0.18em] uppercase">
          Resume Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mt-2"
        >
          Muhammad Abdulrehman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-300 mt-5 max-w-3xl text-lg"
        >
          Computer Science student at Drexel University focused on practical software that helps people make better decisions —
          from scientific data pipelines to full-stack products for student communities.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            View Projects
          </a>
          <a
            href="https://linkedin.com/in/muhammad-abdulrehman08" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-600 font-semibold hover:border-gray-400 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mt-10">
          {[
            { label: 'Expected Graduation', value: 'Jun 2028' },
            { label: 'Research Experience', value: '2+ Labs' },
            { label: 'Users Impacted', value: '450+ Students' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold capitalize">{group}</h3>
              <p className="text-gray-300 mt-3 leading-7">{items.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="space-y-6 mt-6">
          {experience.map((job) => (
            <article key={job.role} className="bg-white/5 border border-white/10 rounded-xl p-6">
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
              <ul className="mt-4 space-y-2 text-gray-200 list-disc pl-5">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto mt-16">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Project Highlights</h2>
          <p className="text-gray-400">Employer-ready impact with clear outcomes and stack clarity.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {projects.map((project) => (
            <article key={project.name} className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>
              <p className="text-sm text-blue-200 mt-1">{project.stack}</p>
              <p className="text-gray-200 mt-3">{project.summary}</p>
              <ul className="list-disc pl-5 text-gray-300 mt-4 space-y-1">
                {project.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex gap-3 mt-5">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-300 hover:text-blue-200 underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="text-gray-300 mt-3">Open to internships, software engineering roles, and research collaborations.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-400/50 transition-colors"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-blue-200 mt-1 break-all">{item.value}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
