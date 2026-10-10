import { useEffect, useRef } from 'react';

export default function Modal({ children, onClose, title }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    dialogRef.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialogRef.current?.close();
      document.body.style.overflow = '';
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-label={title}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className="close-button"
        onClick={onClose}
        aria-label="Close dialog"
      >
        ×
      </button>
      {children}
    </dialog>
  );
}
