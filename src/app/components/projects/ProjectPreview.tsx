import type { JournalProject } from '../../data/projects';

type ProjectPreviewProps = {
  project: JournalProject;
  built: string;
  decision: string;
  outcome: string;
  variant: 'lead' | 'standard' | 'compact';
};

export default function ProjectPreview({ project, built, decision, outcome, variant }: ProjectPreviewProps) {
  return (
    <article className={`project-preview project-preview-${variant}`}>
      <div className="project-preview-head">
        <span className="project-preview-index">{project.location}</span>
        <span className="project-preview-year">{project.year}</span>
      </div>

      <h3 className="project-preview-title">{project.headline}</h3>

      <dl className="project-preview-facts">
        <div>
          <dt>built</dt>
          <dd>{built}</dd>
        </div>
        <div>
          <dt>key decision</dt>
          <dd>{decision}</dd>
        </div>
        <div>
          <dt>outcome</dt>
          <dd>{outcome}</dd>
        </div>
      </dl>

      <div className="project-preview-links">
        {project.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} &rarr;
          </a>
        ))}
        <a href={`/projects#${project.slug}`}>Full entry &rarr;</a>
      </div>
    </article>
  );
}
