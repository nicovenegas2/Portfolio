import { Link } from 'react-router-dom';
import avatar from '../../assets/Avatar.png';
import resume from '../../assets/Resume-Nicolas-Venegas.pdf';

export default function Home() {
  return (
    <section className="home">
      <div className="portrait-panel">
        <span className="portrait-caption">A face behind the code.</span>
        <img
          src={avatar}
          alt="Illustrated portrait of Nicolas Venegas"
          className="portrait"
        />
        <span className="portrait-signature">Nice to meet you!</span>
      </div>
      <div className="intro">
        <p className="hello">Hi, I’m</p>
        <h1>
          Nicolas
          <br />
          Venegas.
        </h1>
        <p className="role">Fullstack developer</p>
        <p className="intro-copy">
          I turn ideas into things you can use. From thoughtful interfaces to
          the systems behind them, I enjoy connecting the pieces.
        </p>
        <p className="intro-detail">
          Web development, data analytics and a curiosity for cloud computing.
        </p>
        <div className="intro-actions">
          <Link to="/projects" className="button mint">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <a
            href={resume}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            View résumé
          </a>
        </div>
      </div>
      <span className="card-watermark" aria-hidden="true">
        &lt;/&gt;
      </span>
    </section>
  );
}
