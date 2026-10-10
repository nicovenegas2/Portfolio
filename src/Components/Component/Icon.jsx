import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faJava,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faGit,
  faSquareGit,
  faTrello,
  faPython,
  faSquareGithub,
  faDocker,
  faJenkins,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

const icons = {
  github: faGithub,
  linkedin: faLinkedin,
  java: faJava,
  react: faReact,
  html5: faHtml5,
  'css3-alt': faCss3Alt,
  js: faJs,
  git: faGit,
  'square-git': faSquareGit,
  trello: faTrello,
  python: faPython,
  'square-github': faSquareGithub,
  docker: faDocker,
  jenkins: faJenkins,
  node: faNode,
};

export default function Icon({ name }) {
  return <FontAwesomeIcon icon={icons[name]} />;
}
