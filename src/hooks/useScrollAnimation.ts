'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '-50px',
  animationClass = 'animate'
}: UseScrollAnimationProps = {}) => {
  const pathname = usePathname();

  useEffect(() => {
    // Attendre que le DOM soit mis à jour
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              // Une fois l'animation terminée, on peut déconnecter l'observer
              setTimeout(() => {
                observer.unobserve(entry.target);
              }, 1000); // Durée de l'animation
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      // Observer toutes les sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        // Ajouter la classe initiale si elle n'existe pas déjà
        if (!section.classList.contains('opacity-0')) {
          section.classList.add('opacity-0', 'translate-y-10');
        }
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    }, 100); // Petit délai pour s'assurer que le DOM est mis à jour

  }, [pathname, threshold, rootMargin, animationClass]); // Réinitialiser à chaque changement de page
};
