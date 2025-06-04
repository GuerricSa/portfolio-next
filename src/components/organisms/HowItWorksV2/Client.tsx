'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksV2ClientProps {
  steps: Step[];
}

const HowItWorksV2Client: React.FC<HowItWorksV2ClientProps> = ({ steps }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const activeIndexMotion = useMotionValue(activeIndex);
  const totalDash = 1200;

  const progress = useTransform(activeIndexMotion, [0, steps.length - 1], [0, 1]);

  const dashOffset = useSpring(
    useTransform(progress, (p) => totalDash * (1 - p)),
    { stiffness: 100, damping: 30 }
  );

  useEffect(() => {
    activeIndexMotion.set(activeIndex);
  }, [activeIndex, activeIndexMotion]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePrevious = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
    scrollToSection();
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    scrollToSection();
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Distance minimale pour considérer un swipe

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe vers la gauche
        handleNext();
      } else {
        // Swipe vers la droite
        handlePrevious();
      }
    }

    // Reset des valeurs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const slider = sectionRef.current;
    if (!slider) return;

    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -500 : 500,
      opacity: 0
    })
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden flex flex-col">
      <h2 className="container text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        Comment ça marche ?
      </h2>

      {/* Conteneur principal */}
      <div className="flex-grow flex items-center justify-center border-tertiary border-t-8">
        <svg
          id="progress-line"
          viewBox="0 0 1200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-10 z-0 absolute bottom-20 -left-[40px] -translate-y-1/2 w-[calc(100vw+80px)] pointer-events-none"
        >
          <motion.path
            d="M0 0 C 200 15, 400 140, 600 70 C 800 0, 1000 75, 1200 100"
            stroke="#E16C38"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={totalDash}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="container w-full max-w-4xl mx-auto flex flex-col h-full justify-between relative">
          {/* Slider */}
          <div className="relative overflow-hidden h-full pt-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-full"
              >
                <div className="items-center h-full">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center mb-8 mx-auto relative before:content-[''] before:w-2 before:h-8 before:bg-tertiary before:absolute before:-translate-y-full before:top-0"
                    initial={{ boxShadow: "0px 0px 0px 0px var(--tertiary_color)" }}
                    animate={{ boxShadow: "0px 0px 45px 1px var(--tertiary_color)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                  >
                    <span className="text-primary font-bold text-2xl">{steps[activeIndex].number}</span>
                  </motion.div>

                  <div className="w-full bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-primary mb-4">{steps[activeIndex].title}</h3>
                    <div
                      className="text-primary text-left"
                      dangerouslySetInnerHTML={{ __html: steps[activeIndex].description }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center my-4">
            <button
              onClick={handlePrevious}
              className="bg-primary text-tertiary p-2 rounded-full shadow-lg hover:bg-tertiary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
              aria-label="Étape précédente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicateurs */}
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 'right' : 'left');
                    setActiveIndex(index);
                    scrollToSection();
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === activeIndex ? 'bg-tertiary' : 'bg-primary'
                  }`}
                  aria-label={`Aller à l'étape ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-primary text-tertiary p-2 rounded-full shadow-lg hover:bg-tertiary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2 cursor-pointer"
              aria-label="Étape suivante"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2Client;
