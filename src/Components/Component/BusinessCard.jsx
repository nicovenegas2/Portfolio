import { useLayoutEffect, useRef } from 'react';
import Home from '../Pages/Home';
import Navbar from './Navbar';
import CardFooter from './CardFooter';

export default function BusinessCard({ children, isHome, onContact }) {
  const cardRef = useRef(null);
  const sizingRef = useRef(null);

  useLayoutEffect(() => {
    const reference = sizingRef.current;
    const updateSize = () => {
      cardRef.current?.style.setProperty(
        '--card-body-height',
        `${reference.offsetHeight}px`,
      );
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(reference);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`business-card ${isHome ? 'is-home' : ''}`}>
      {/* Measure the home layout so every page keeps the same card dimensions. */}
      <div
        ref={sizingRef}
        className="card-size-reference"
        aria-hidden="true"
        inert=""
      >
        <Home />
      </div>
      <Navbar onContact={onContact} />
      {children}
      <CardFooter />
    </div>
  );
}
