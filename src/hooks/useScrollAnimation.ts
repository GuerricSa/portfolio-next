'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface UseScrollAnimationProps {
  threshold?: number;
  animationClass?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  animationClass = 'animate'
}: UseScrollAnimationProps = {}) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Marquer le début de la transition
    setIsTransitioning(true);

    // Attendre que la transition soit terminée
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Durée de la transition de page

    return () => {
      clearTimeout(transitionTimer);
    };
  }, [pathname]);

  useEffect(() => {
    // Ne pas initialiser l'observer pendant la transition
    if (isTransitioning) return;

    // Attendre que le DOM soit mis à jour
    const initTimer = setTimeout(() => {
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
          rootMargin: '0px',
        }
      );

      // Observer toutes les sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        // Ajouter la classe initiale si elle n'existe pas déjà
        if (!section.classList.contains('opacity-0')) {
          section.classList.add('opacity-0', 'translate-y-8');
        }
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    }, 100); // Petit délai pour s'assurer que le DOM est mis à jour

    return () => {
      clearTimeout(initTimer);
    };
  }, [isTransitioning, threshold, animationClass]);
};
