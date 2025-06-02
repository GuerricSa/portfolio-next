'use client';

import React, { useEffect, useState } from 'react';

interface ScrollToTopButtonProps {
  offset?: number; // pour personnaliser le seuil de visibilité si besoin
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ offset = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > offset);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [offset]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="z-10 -translate-x-2/4 fixed bottom-8 md:bottom-16 left-2/4 bg-primary text-tertiary p-2 rounded-full shadow-lg hover:bg-tertiary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
      aria-label="Remonter en haut de la page"
    >
      <span className="sr-only">Remonter en haut de la page</span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
