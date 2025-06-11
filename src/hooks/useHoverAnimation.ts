import { useCallback } from 'react';

interface UseHoverAnimationProps {
  animationDuration?: number;
  animationClass?: string;
}

export const useHoverAnimation = ({
  animationDuration = 1400,
  animationClass = 'animateTitle'
}: UseHoverAnimationProps = {}) => {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    const hasSpans = element.querySelectorAll('span').length > 0;
    console.log(hasSpans)

    if (hasSpans) {
      // Animation CSS pour les éléments avec des spans
      if (!element.classList.contains(animationClass)) {
        element.classList.add(animationClass);
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, animationDuration);
      }
    } else {
      // Animation JS pour les autres éléments
      if (!element.classList.contains(animationClass)) {
        element.classList.add(animationClass);

        // Sauvegarder le contenu original
        const originalContent = element.textContent || '';

        // Diviser le texte en lettres et créer des spans
        const letters = originalContent.split('');
        element.textContent = ''; // Vider l'élément

        // Créer et animer chaque lettre
        letters.forEach((letter, index) => {
          const span = document.createElement('span');
          // Gérer les caractères spéciaux
          switch (letter) {
            case ' ':
              span.textContent = '\u00A0'; // &nbsp;
              break;
            case "'":
              span.textContent = '\u0027'; // apostrophe simple
              break;
            case '"':
              span.textContent = '\u201C'; // guillemet ouvrant
              break;
            case '"':
              span.textContent = '\u201D'; // guillemet fermant
              break;
            default:
              span.textContent = letter;
          }
          span.style.display = 'inline-block';
          element.appendChild(span);

          // Animation de rebond pour chaque lettre
          const keyframes = [
            { transform: 'translateY(0)', offset: 0 },
            { transform: 'translateY(-10px)', offset: 0.5 },
            { transform: 'translateY(0)', offset: 1 }
          ];

          const animation = span.animate(keyframes, {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards',
            delay: index * 200 // Délai de 200ms entre chaque lettre
          });

          // Nettoyer après la dernière animation
          if (index === letters.length - 1) {
            animation.onfinish = () => {
              element.classList.remove(animationClass);
              // Restaurer le contenu original
              element.textContent = originalContent;
            };
          }
        });
      }
    }
  }, [animationClass, animationDuration]);

  return handleMouseEnter;
};
