import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import BusinessCard from './Components/Component/BusinessCard';
import Modal from './Components/Component/Modal';
import StageCaption from './Components/Component/StageCaption';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Skills from './Components/Pages/Skills';
import Contact from './Components/Pages/Contact';
import './Styles/App.css';

export default function App() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const [contactOpen, setContactOpen] = useState(false);
  const isHome = !['/projects', '/skills'].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function openContact() {
    setContactOpen(true);
  }

  function closeContact() {
    setContactOpen(false);
  }

  return (
    <div className="portfolio-stage">
      <BusinessCard isHome={isHome} onContact={openContact}>
        <AnimatePresence mode="wait">
          <motion.main
            className="card-body"
            tabIndex={0}
            aria-label="Portfolio content"
            key={location.pathname}
            initial={reducedMotion ? false : { opacity: 0, rotateX: -4, y: 12 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </BusinessCard>
      <StageCaption onContact={openContact} />
      {contactOpen && (
        <Modal title="Contact Nicolas" onClose={closeContact}>
          <Contact />
        </Modal>
      )}
    </div>
  );
}
