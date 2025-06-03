'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const totalDash = 1200;

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksClientProps {
  steps: Step[];
}

const HowItWorksClient: React.FC<HowItWorksClientProps> = ({ steps }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isThrottled = useRef(false);
  const isIn = useRef(false);
  const isTransitioningToLast = useRef(false);
  const isLeaving = useRef(false);
  const isAnimating = useRef(false);
  const exitingCooldown = useRef(false);
  const specialWheelTimer = useRef<number | null>(null);
  const specialWheelTriggeredTwice = useRef(false);
  const activeIndexMotion = useMotionValue(activeIndex);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  useEffect(() => {
    activeIndexMotion.set(activeIndex);
  }, [activeIndex, activeIndexMotion]);

  const progress = useTransform(activeIndexMotion, [0, steps.length - 1], [0, 1]);

  const dashOffset = useSpring(
    useTransform(progress, (p) => totalDash * (1 - p)),
    { stiffness: 100, damping: 30 }
  );

  const throttle = (fn: () => void, delay: number, isThrottledRef: React.MutableRefObject<boolean>) => {
    if (isThrottledRef.current) return;
    isThrottledRef.current = true;
    fn();
    setTimeout(() => {
      isThrottledRef.current = false;
    }, delay);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      console.log("scrolltotop")
      // Réinitialiser tous les états
      setActiveIndex(0);
      isIn.current = false;
      isLeaving.current = false;
      isTransitioningToLast.current = false;
      isAnimating.current = false;
      exitingCooldown.current = false;
      specialWheelTimer.current = null;
      specialWheelTriggeredTwice.current = false;

      // Réinitialiser la position du conteneur
      if (containerRef.current) {
        containerRef.current.style.transform = 'translateX(0)';
      }
    };

    window.addEventListener('scrollToTop', handleScrollToTop);
    return () => {
      window.removeEventListener('scrollToTop', handleScrollToTop);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const body = document.body;

    if (!section || !container) return;

    const scrollToPanel = (index: number) => {
      const offset = index * window.innerWidth;
      container.style.transform = `translateX(-${offset}px)`;
    };

    const lockScroll = () => {
      body.style.overflow = 'hidden';
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    };

    const unlockScroll = () => {
      body.style.overflow = '';
    };

    const getVisibleRatio = () => {
      const rect = section.getBoundingClientRect();
      const height = rect.height;
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return 0;

      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, window.innerHeight);
      const visibleHeight = visibleBottom - visibleTop;
      return visibleHeight / height;
    };

    const handleMobileExit = (deltaY: number) => {
      // Cas spécial déjà actif (fin de scroll bloqué)
      if (isTransitioningToLast.current || specialWheelTimer.current !== null || exitingCooldown.current) {
        return;
      }

      // Cas 3 mobile : on veut sortir en scrollant vers le haut sur la première slide ou vers le bas sur la dernière
      if ((activeIndex === 0 && deltaY < 0) || (activeIndex === steps.length - 1 && deltaY > 0)) {
        unlockScroll();
        isIn.current = false;
        return;
      }
      // Sinon : reste dans la section (empêche le scroll natif)
      if (getVisibleRatio() >= 0.6) {
        lockScroll();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!section || !container) return;
      const rect = section.getBoundingClientRect();
      const visibleRatio = getVisibleRatio();
      const isFullyVisible = visibleRatio >= 0.9;

      const willPassThroughSection = (deltaY: number): boolean => {
        if (!section) return false;

        const currentY = window.scrollY;
        const targetY = currentY + deltaY;

        const sectionYTop = currentY + rect.top;
        const sectionYBottom = currentY + rect.bottom;
        console.log("currentY :", currentY);
        console.log("targetY :", targetY);
        console.log("sectionYTop :", sectionYTop);
        // Si on va passer à travers la section
        if (targetY < sectionYTop && currentY > sectionYTop) {
          return true;
        }
        if (targetY > sectionYBottom && currentY < sectionYBottom) {
          return true;
        }

        return false;
      };

      // ➤ Cas spécial : on vient de passer à la dernière slide, on attend un scroll supplémentaire pour déverrouiller
      if (isTransitioningToLast.current) {
        console.log("cas spécial")
        e.preventDefault();

        if (specialWheelTriggeredTwice.current) {
          // Deuxième scroll détecté pendant le timer → on déverrouille direct
          if (specialWheelTimer.current !== null) {
            clearTimeout(specialWheelTimer.current);
            specialWheelTimer.current = null;
          }
          isTransitioningToLast.current = false;
          exitingCooldown.current = true;
          unlockScroll();
          isIn.current = false;

          setTimeout(() => {
            exitingCooldown.current = false;
          }, 500);

          specialWheelTriggeredTwice.current = false;
          return;
        }

        // Premier scroll : on met le flag à true et on lance/reset le timer
        specialWheelTriggeredTwice.current = true;

        if (specialWheelTimer.current !== null) {
          clearTimeout(specialWheelTimer.current);
        }

        specialWheelTimer.current = window.setTimeout(() => {
          isTransitioningToLast.current = false;
          exitingCooldown.current = true;

          specialWheelTriggeredTwice.current = false;
          specialWheelTimer.current = null;

          setTimeout(() => {
            exitingCooldown.current = false;
            unlockScroll();
            isIn.current = false;
          }, 500);
        }, 500);

        return;
      }

      // Cas 1 : section visible partiellement (entre 10% et 60%) => ancrage automatique
      if (visibleRatio >= 0.6 && visibleRatio < 0.9 && !isIn.current && !isLeaving.current) {
        console.log("cas 1")
        e.preventDefault();
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
        isIn.current = true
        return;
      }

      // Cas 2 : section totalement hors champ → scroll natif
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
        if (willPassThroughSection(e.deltaY)) return;
        console.log("cas 2")
        isLeaving.current = false;
        unlockScroll();
        return;
      }

    // ➤ Cas 3 : scroll vers l'extérieur autorisé
    if ((activeIndex === 0 && e.deltaY < 0) || (activeIndex === steps.length - 1 && e.deltaY > 0)) {
      if (willPassThroughSection(e.deltaY)) return;
      console.log("cas 3")
      if (exitingCooldown.current) {
        console.log("cooldown")
        e.preventDefault();
        return;
      }
      // Bloquer cas 3 si timer spécial actif
      if (specialWheelTimer.current !== null) {
        console.log("timer spécial")
        e.preventDefault();
        return;
      }

      isLeaving.current = true;
      unlockScroll();
      setTimeout(() => {
        isIn.current = false;
      }, 500);
      return;
    }

      // ➤ Cas 4 : section bien visible (>= 60%) → scroll horizontal forcé
      if (isFullyVisible) {
        console.log("cas 4")
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
        e.preventDefault();
        lockScroll();

        if (isAnimating.current) return;

        throttle(() => {
          isAnimating.current = true;

          let next = activeIndex;
          if (e.deltaY > 0 && activeIndex < steps.length - 1) {
            next = activeIndex + 1;
          } else if (e.deltaY < 0 && activeIndex > 0) {
            next = activeIndex - 1;
          }

          if (next === steps.length - 1 && activeIndex === steps.length - 2) {
            isTransitioningToLast.current = true;
          }
          if (next === 0 && activeIndex === 1) {
            isTransitioningToLast.current = true;
          }

          if (next !== activeIndex) {
            scrollToPanel(next);
            setActiveIndex(next);
          }

          setTimeout(() => {
            isAnimating.current = false;
          }, 1200);
        }, 1200, isThrottled); // même durée que ta transition CSS
      }
    };

    // On reset la position à chaque changement d'activeIndex
    scrollToPanel(activeIndex);

    const onTouchEnd = () => {
      if (touchStartY.current === null || touchEndY.current === null) return;

      const deltaY = touchStartY.current - touchEndY.current;
      if (Math.abs(deltaY) > 50) {
        handleMobileExit(deltaY);
        // Créer un objet avec la propriété deltaY pour simuler l'événement wheel
        const fakeWheelEvent = {
          deltaY: deltaY,
          preventDefault: () => {},
          stopPropagation: () => {},
        } as WheelEvent;

        handleWheel(fakeWheelEvent);
      }

      touchStartY.current = null;
      touchEndY.current = null;
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.changedTouches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.changedTouches[0].clientY;

      const section = sectionRef.current;
      if (!section) return;

      // Empêche le scroll vertical natif si la section est bien visible (comme pour desktop)
      const rect = section.getBoundingClientRect();
      const visibleRatio = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibleRatioPercent = visibleRatio / rect.height;

      if (visibleRatioPercent > 0.9 && !((activeIndex === 0 && touchEndY.current > touchStartY.current!) || (activeIndex === steps.length - 1 && touchEndY.current < touchStartY.current!))) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      unlockScroll();
    };
  }, [activeIndex, steps.length]);

  useEffect(() => {
    if (containerRef.current) {
      const offset = activeIndex * window.innerWidth;
      containerRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [activeIndex]);


  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex flex-col"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        Comment ça marche ?
      </h2>
      <svg
        id="progress-line"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-0 absolute bottom-0 left-0 -translate-y-1/2 w-screen pointer-events-none"
      >
        <motion.path
          d="M0 50 C 200 25, 400 75, 600 50 C 800 25, 1000 75, 1200 50"
          stroke="#E16C38"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={totalDash}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div
        ref={containerRef}
        className="flex flex-grow transition-transform duration-700 ease-in-out relative before:content-[''] before:w-full before:h-2 before:bg-tertiary before:absolute"
        style={{ width: `${steps.length * 100}vw` }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={`how-it-works-panel w-screen flex items-center justify-center${index === activeIndex ? " how-it-works__active-step" : ""}`}
          >
            <div className="container max-w-xl text-center h-full py-4 lg:py-8 flex flex-col">
              <div className="how-it-works__number w-16 h-16 rounded-full bg-tertiary mx-auto flex items-center justify-center mb-4 lg:mb-8 relative before:content-[''] before:w-2 before:h-4 before:lg:h-8 before:top-0 before:bg-tertiary before:absolute before:-translate-y-full">
                <span className="text-primary font-bold text-2xl">{step.number}</span>
              </div>

              <div className="how-it-works__text flex flex-col flex-1 items-center pb-16">
                <h3 className="mb-4 text-primary">{step.title}</h3>
                <div
                  className="text-primary text-center"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksClient;
