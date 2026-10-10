import Icon from './Icon';
import { getImage } from '../../Functions/util-images';
import {
  PROJECT_TITLES,
  PROJECT_SUMMARIES,
  TECHNOLOGY_NAMES,
} from '../../Functions/portfolio-data';

export default function ProjectThumb({ project, onSelect }) {
  return (
    <button className="project-card" onClick={onSelect}>
      <div className="project-image">
        <img
          loading="lazy"
          src={getImage(
            project.folder,
            project.imgs.find((image) => image.startsWith('Thumb')) ||
              project.imgs[0],
          )}
          alt={`${PROJECT_TITLES[project.folder]} preview`}
        />
        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="project-caption">
        <h2>{PROJECT_TITLES[project.folder]}</h2>
        <p>{PROJECT_SUMMARIES[project.folder]}</p>
        <div className="project-stack">
          {project.stack.slice(0, 3).map((technology) => (
            <span key={technology}>
              <Icon name={technology} />
              {TECHNOLOGY_NAMES[technology]}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
