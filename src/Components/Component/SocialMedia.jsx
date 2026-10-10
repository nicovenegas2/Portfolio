import Icon from './Icon';
import resume from '../../assets/Resume-Nicolas-Venegas.pdf';

export default function SocialMedia() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/nicovenegas2"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/covedev"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="linkedin" /> LinkedIn
      </a>
      <a href={resume} target="_blank" rel="noreferrer">
        Résumé <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
