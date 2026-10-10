import projects from '../assets/Projects.json';

export const PROJECT_TITLES = {
  DreamGifts: 'Dream Gifts',
  MidiPiano: 'MIDI Piano',
  Graph: 'Graph Visualizer',
  PizzaShop: 'Pizza Shop',
  Empleados: 'Employee Management',
};
export const PROJECT_SUMMARIES = {
  DreamGifts:
    'Sales, inventory and business operations in one Java application.',
  MidiPiano: 'A real-time canvas for the notes you play on a MIDI keyboard.',
  Graph: 'Explore graph search algorithms through interactive simulations.',
  PizzaShop:
    'From choosing a pizza to checking out. A complete React shopping experience.',
  Empleados:
    'Attendance, overtime and payroll connected through microservices.',
};
export const TECHNOLOGY_NAMES = {
  java: 'Java',
  react: 'React',
  html5: 'HTML',
  'css3-alt': 'CSS',
  js: 'JavaScript',
  git: 'Git',
  'square-git': 'Git',
  trello: 'Trello',
  python: 'Python',
  'square-github': 'GitHub',
  docker: 'Docker',
  jenkins: 'Jenkins',
  node: 'Node.js',
};
export const PORTFOLIO_PROJECTS = projects.filter(
  (project) => project.title !== 'Proyecto 6',
);

export const SKILL_GROUPS = [
  {
    title: 'The interface',
    text: 'Responsive experiences, clear interactions and the details that make a product feel good to use.',
    items: ['react', 'js', 'html5', 'css3-alt'],
  },
  {
    title: 'Behind the scenes',
    text: 'Application logic, connected services and tools that turn information into something useful.',
    items: ['java', 'python', 'node'],
  },
  {
    title: 'Putting it together',
    text: 'Version control, containerized environments and continuous integration for a dependable workflow.',
    items: ['git', 'docker', 'jenkins'],
  },
];
