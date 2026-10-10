import { useState } from 'react';
import Icon from './Icon';
import { getImage } from '../../Functions/util-images';
import {
  PROJECT_TITLES,
  PROJECT_SUMMARIES,
  TECHNOLOGY_NAMES,
} from '../../Functions/portfolio-data';

export default function Projectinfo({ project }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPreviousImage() {
    setImageIndex((imageIndex - 1 + project.imgs.length) % project.imgs.length);
  }

  function showNextImage() {
    setImageIndex((imageIndex + 1) % project.imgs.length);
  }

  return (
    <article className="project-detail">
      <div className="detail-heading">
        <h2>{PROJECT_TITLES[project.folder]}</h2>
        <p>{PROJECT_SUMMARIES[project.folder]}</p>
      </div>
      <div className="gallery">
        <img
          src={getImage(project.folder, project.imgs[imageIndex])}
          alt={`${PROJECT_TITLES[project.folder]} application preview ${imageIndex + 1}`}
        />
        <div className="gallery-controls">
          <button onClick={showPreviousImage} aria-label="Previous image">
            ←
          </button>
          <span aria-live="polite">
            {imageIndex + 1} / {project.imgs.length}
          </span>
          <button onClick={showNextImage} aria-label="Next image">
            →
          </button>
        </div>
      </div>
      <p className="detail-description">{project.description}</p>
      <div className="detail-footer">
        <div className="tags">
          {project.stack.map((technology) => (
            <span key={technology}>
              {TECHNOLOGY_NAMES[technology] || technology}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            className="button solid"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View source <Icon name="github" />
          </a>
        )}
        {project.link && (
          <a
            className="button solid"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Open demo
          </a>
        )}
      </div>
    </article>
  );
}
