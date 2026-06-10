"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type ProjectOption = {
  name: string;
  slug: string;
};

type RankEntry = {
  id: string;
  name: string;
  project: string;
  score: number;
};

const storageKey = "notabdul-project-rankings";

export default function ProjectRanker({ projects }: { projects: ProjectOption[] }) {
  const [entries, setEntries] = useState<RankEntry[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored) as RankEntry[];
    } catch {
      window.localStorage.removeItem(storageKey);
      return [];
    }
  });
  const [name, setName] = useState("");
  const [project, setProject] = useState(projects[0]?.name ?? "");
  const [score, setScore] = useState(9);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries]);

  const leaderboard = useMemo(
    () =>
      projects
        .map((item) => {
          const votes = entries.filter((entry) => entry.project === item.name);
          const average = votes.length
            ? votes.reduce((total, entry) => total + entry.score, 0) / votes.length
            : 0;

          return {
            ...item,
            average,
            votes: votes.length,
          };
        })
        .sort((a, b) => b.average - a.average || b.votes - a.votes),
    [entries, projects],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName || !project) {
      return;
    }

    setEntries((current) => [
      {
        id: `${Date.now()}-${trimmedName}`,
        name: trimmedName,
        project,
        score,
      },
      ...current,
    ]);
    setName("");
    setScore(9);
  }

  return (
    <section id="rankings" className="rounded-md border border-[#2a2a2a] bg-[#090909] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#2a2a2a] pb-4">
        <div>
          <p className="font-mono text-xs uppercase text-zinc-500">community.rankings</p>
          <h2 className="mt-2 text-2xl font-black text-white md:text-[1.75rem]">Rank the projects.</h2>
        </div>
        <span className="rounded border border-[#3a3a3a] bg-black px-3 py-1 font-mono text-xs text-zinc-300">
          {entries.length} votes
        </span>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="grid gap-3 rounded-md border border-[#2a2a2a] bg-black p-3.5" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-xs text-zinc-300">
            <span className="font-mono text-xs uppercase text-zinc-500">name</span>
            <input
              className="rounded-md border border-[#3a3a3a] bg-[#0f0f0f] px-3 py-2.5 text-sm text-white outline-none focus:border-white"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="your name"
              required
            />
          </label>

          <label className="grid gap-2 text-xs text-zinc-300">
            <span className="font-mono text-xs uppercase text-zinc-500">project</span>
            <select
              className="rounded-md border border-[#3a3a3a] bg-[#0f0f0f] px-3 py-2.5 text-sm text-white outline-none focus:border-white"
              value={project}
              onChange={(event) => setProject(event.target.value)}
            >
              {projects.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-xs text-zinc-300">
            <span className="flex items-center justify-between font-mono text-xs uppercase text-zinc-500">
              score <b className="text-white">{score}/10</b>
            </span>
            <input
              className="accent-white"
              type="range"
              min="1"
              max="10"
              value={score}
              onChange={(event) => setScore(Number(event.target.value))}
            />
          </label>

          <button
            className="rounded-md border border-white bg-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-black hover:text-white"
            type="submit"
          >
            add ranking
          </button>
        </form>

        <div className="grid gap-3">
          {leaderboard.map((item, index) => (
            <a
              key={item.slug}
              className="grid gap-2 rounded-md border border-[#2a2a2a] bg-black p-3 hover:border-white sm:grid-cols-[2rem_1fr_auto]"
              href={`#${item.slug}`}
            >
              <span className="font-mono text-sm font-black text-zinc-500">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>
                <b className="block text-sm text-white">{item.name}</b>
                <small className="mt-1 block font-mono text-xs text-zinc-500">{item.votes} votes</small>
              </span>
              <span className="font-mono text-lg font-black text-white">
                {item.votes ? item.average.toFixed(1) : "-"}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        {entries.slice(0, 5).map((entry) => (
          <div
            key={entry.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-[#2a2a2a] bg-black px-3 py-2 text-xs"
          >
            <span className="text-zinc-300">
              <b className="text-white">{entry.name}</b> ranked {entry.project}
            </span>
            <span className="font-mono text-white">{entry.score}/10</span>
          </div>
        ))}
      </div>
    </section>
  );
}
