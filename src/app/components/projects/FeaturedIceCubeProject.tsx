'use client';

import { useState } from 'react';
import { icecubeProject } from '../../data/projects';

export default function FeaturedIceCubeProject() {
  const [activeId, setActiveId] = useState(icecubeProject.pipeline[0].id);
  const active = icecubeProject.pipeline.find((stage) => stage.id === activeId) ?? icecubeProject.pipeline[0];
  const externalLink = icecubeProject.links[0];

  return (
    <section aria-labelledby="icecube-heading" className="featured-project">
      <div className="featured-project-kicker">
        <span>§ 01 — featured research</span>
        <span className="featured-project-tag">{icecubeProject.tag}</span>
      </div>

      <h2 id="icecube-heading" className="featured-project-title">
        {icecubeProject.name}
      </h2>

      <div className="featured-project-grid">
        <div className="featured-project-copy">
          <div className="featured-project-block">
            <p className="featured-project-label">problem</p>
            <p className="featured-project-text">{icecubeProject.problem}</p>
          </div>
          <div className="featured-project-block">
            <p className="featured-project-label">approach</p>
            <p className="featured-project-text">{icecubeProject.approach}</p>
          </div>
          <div className="featured-project-block">
            <p className="featured-project-label">impact</p>
            <p className="featured-project-text">{icecubeProject.impact}</p>
          </div>

          {externalLink ? (
            <a className="featured-project-cta" href={externalLink.href} target="_blank" rel="noopener noreferrer">
              {externalLink.label} &rarr;
            </a>
          ) : null}
        </div>

        <div className="featured-project-pipeline">
          <p className="featured-project-label">processing pipeline</p>

          <div className="pipeline-stages" role="group" aria-label="IceCube event processing pipeline stages">
            {icecubeProject.pipeline.map((stage, index) => (
              <span key={stage.id} className="pipeline-stage-wrap">
                <button
                  type="button"
                  className={`pipeline-stage ${stage.id === activeId ? 'pipeline-stage-active' : ''}`}
                  aria-pressed={stage.id === activeId}
                  aria-describedby="pipeline-detail"
                  onMouseEnter={() => setActiveId(stage.id)}
                  onFocus={() => setActiveId(stage.id)}
                  onClick={() => setActiveId(stage.id)}
                >
                  {stage.label}
                </button>
                {index < icecubeProject.pipeline.length - 1 ? (
                  <span className="pipeline-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <div id="pipeline-detail" className="pipeline-detail" aria-live="polite">
            <p className="pipeline-detail-text">{active.detail}</p>
            <pre className="pipeline-output">{active.output}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
