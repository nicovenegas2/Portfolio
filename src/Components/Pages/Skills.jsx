import { Link } from 'react-router-dom';
import resume from '../../assets/Resume-Nicolas-Venegas.pdf';
import SkillGroup from '../Component/SkillGroup';
import { SKILL_GROUPS } from '../../Functions/portfolio-data';

export default function Skills() {
  return (
    <section className="page skills-page">
      <div className="page-heading">
        <div>
          <h1>From front to back.</h1>
          <p>Different tools. One connected experience.</p>
        </div>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="button outline"
        >
          View résumé <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="skills-layout">
        <div className="skills-statement">
          <span aria-hidden="true" className="code-symbol">
            {'{ }'}
          </span>
          <h2>
            I like seeing
            <br />
            the whole picture.
          </h2>
          <p>
            Building an interface is only part of the story. I enjoy
            understanding how data moves, how systems connect and how it all
            reaches the person using it.
          </p>
          <Link to="/projects" className="text-link">
            See these tools in action <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
