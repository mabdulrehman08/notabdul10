import SiteNav from '../components/site-nav';

const journals = [
  {
    slug: 'starting-point',
    date: 'june 2026',
    title: 'starting point',
    preview:
      'i want this page to feel more like a diary than a content machine. less polished voice, more actual thoughts.',
    body: [
      'i spend a lot of time building things, but i also spend a lot of time thinking about why i am building them at all.',
      'sometimes it is school, sometimes it is research, sometimes it is me trying to prove to myself that i can turn a messy idea into something real.',
      'this page is where i want to keep that trail. what i learned. what broke. what felt exciting. what felt confusing.',
    ],
    note: 'public notes from the middle of things, not just the end.',
  },
  {
    slug: 'building-in-public',
    date: 'june 2026',
    title: 'building in public',
    preview:
      'the internet rewards polished outcomes, but most of the interesting part is the awkward middle when you are still figuring it out.',
    body: [
      'i like the phase where a project is still kind of alive and kind of unstable. there is more honesty there.',
      'that is probably why i keep shipping journals, weird portfolio iterations, half-finished thoughts, and small repos instead of waiting until everything looks perfect.',
      'i think public building should show motion, not just finished screenshots.',
    ],
    note: 'show the work while it still feels warm.',
  },
  {
    slug: 'lessons-to-remember',
    date: 'june 2026',
    title: 'lessons i want to remember',
    preview:
      'i forget useful lessons way too fast, so writing them down is part of how i keep getting better.',
    body: [
      'a lot of engineering growth is repetitive in a good way. the same bugs teach new lessons depending on what stage you are in.',
      'some lessons are technical. some are about pacing. some are about not panicking when something fails in front of people.',
      'i want this section to become a small archive of those moments.',
    ],
    note: 'things i do not want to relearn the hard way.',
  },
];

export default function JournalsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <section className="journal-shell mx-auto max-w-5xl px-5 pb-20 pt-32">
        <div className="journal-grid">
          <aside className="journal-side">
            <p className="journal-kicker">journal</p>
            <h1 className="journal-title">hi, this is the part where i write things down.</h1>
            <p className="journal-intro">
              i want this page to feel a little closer to a diary. not a big content strategy. not a fake thought
              leadership machine. just notes from while i am learning, building, messing up, and trying again.
            </p>

            <div className="journal-note">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#9a816f]">right now</p>
              <p className="mt-3 text-base leading-7 text-[#4d3c31]">
                thinking about software, research, startup energy, san francisco, school, and what it means to build
                things that are actually useful.
              </p>
            </div>
          </aside>

          <div className="journal-feed">
            {journals.map((journal) => (
              <article key={journal.slug} id={journal.slug} className="journal-entry">
                <div className="journal-entry-top">
                  <span className="journal-date">{journal.date}</span>
                  <span className="journal-dot" />
                  <span className="journal-meta">draft diary entry</span>
                </div>

                <h2 className="journal-entry-title">{journal.title}</h2>
                <p className="journal-preview">{journal.preview}</p>

                <div className="journal-copy">
                  {journal.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="journal-footer">
                  <span>{journal.note}</span>
                  <a href={`#${journal.slug}`}>link to this note</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
