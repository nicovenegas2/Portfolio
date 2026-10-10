import { useState } from 'react';
import Modal from '../Component/Modal';
import Projectinfo from '../Component/Projectinfo';
import ProjectThumb from '../Component/ProjectThumb';
import {
  PORTFOLIO_PROJECTS,
  PROJECT_TITLES,
} from '../../Functions/portfolio-data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All work');
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (filter === 'All work') return true;
    const isWebProject = project.stack.includes('react');
    return filter === 'Web' ? isWebProject : !isWebProject;
  });
  return (
    <section className="page projects-page">
      <div className="page-heading">
        <div>
          <h1>Ideas, made real.</h1>
          <p>A few things I’ve built, explored and learned from.</p>
        </div>
        <div className="filters" aria-label="Filter projects">
          {['All work', 'Web', 'Applications'].map((option) => (
            <button
              key={option}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectThumb
            key={project.folder}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <Modal
          title={PROJECT_TITLES[selectedProject.folder]}
          onClose={() => setSelectedProject(null)}
        >
          <Projectinfo project={selectedProject} />
        </Modal>
      )}
    </section>
  );
}
