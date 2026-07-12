type Technology = {
  glyph: string;
  name: string;
  evidence: string;
};

const technologies: Technology[] = [
  {
    glyph: 'py',
    name: 'Python',
    evidence:
      'Built data-processing and visualization workflows for IceCube research and used Pandas, NumPy, and scikit-learn for analysis.',
  },
  {
    glyph: 'tsx',
    name: 'React / Next.js',
    evidence:
      'Built production-style interfaces, authenticated user flows, dashboards, and full-stack product experiences.',
  },
  {
    glyph: 'sql',
    name: 'SQL / PostgreSQL',
    evidence:
      'Designed relational schemas and built Supabase- and Flask-backed applications for DragonsConnect and DragonRec.',
  },
  {
    glyph: 'js',
    name: 'Node.js',
    evidence: 'Built Express APIs, Stripe checkout integrations, and webhook handlers for full-stack product backends.',
  },
];

export default function TechnicalDepth() {
  return (
    <div className="tech-depth-grid">
      {technologies.map((tech) => (
        <div key={tech.name} className="tech-depth-card">
          <span className="tech-depth-glyph" aria-hidden="true">
            {tech.glyph}
          </span>
          <h3 className="tech-depth-name">{tech.name}</h3>
          <p className="tech-depth-evidence">{tech.evidence}</p>
        </div>
      ))}
    </div>
  );
}
