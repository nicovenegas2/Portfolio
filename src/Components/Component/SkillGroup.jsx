import Icon from './Icon';
import { TECHNOLOGY_NAMES } from '../../Functions/portfolio-data';

export default function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h2>{group.title}</h2>
      <p>{group.text}</p>
      <div className="skill-tools">
        {group.items.map((technology) => (
          <span key={technology}>
            <Icon name={technology} />
            {TECHNOLOGY_NAMES[technology]}
          </span>
        ))}
      </div>
    </article>
  );
}
