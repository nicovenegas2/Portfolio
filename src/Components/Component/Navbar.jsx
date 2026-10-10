import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onContact }) {
  return (
    <header className="card-header">
      <Link className="brand" to="/" aria-label="Nicolas Venegas home">
        nv<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          About me
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <button onClick={onContact}>
          Let’s talk <span aria-hidden="true">↗</span>
        </button>
      </nav>
    </header>
  );
}
