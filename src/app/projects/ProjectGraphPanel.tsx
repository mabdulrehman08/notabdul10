'use client';

import ProjectConstellation from './ProjectConstellation';

type ProjectNode = {
  name: string;
  slug: string;
  year: string;
  tag: string;
};

export default function ProjectGraphPanel({ projects }: { projects: ProjectNode[] }) {
  return <ProjectConstellation projects={projects} />;
}
