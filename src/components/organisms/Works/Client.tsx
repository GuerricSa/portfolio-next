'use client'

import React, { useState, useEffect, useRef } from 'react';
import Text from '../../atoms/Text';
import WorkCard from '../../atoms/WorkCard';
import WorkModal from '../../molecules/WorkModal';


interface Work {
  id: number;
  columnNumber: number;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  client: string;
  technologies: string[];
}

interface WorksClientProps {
  works: Work[];
}

const WorksClient: React.FC<WorksClientProps> = ({ works }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const autoScrollTimeOut = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScroll = useRef(false);
  const cardRef = useRef<HTMLLIElement>(null);
  const sliderRef = useRef<HTMLUListElement>(null);

  // Gestion du slider auto
  const handleUserInteraction = () => {
    setAutoScrollActive(false);
    if (autoScrollTimeOut.current) {
      clearTimeout(autoScrollTimeOut.current);
    }
    autoScrollTimeOut.current = setTimeout(() => {
      setAutoScrollActive(true);
    }, 10000);
  };

  // Gestion du responsive
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-scroll pour mobile
  useEffect(() => {
    if (!isDesktop && autoScrollActive && sliderRef.current) {
      const timeout = setTimeout(() => {
        const nextSlide = activeSlide >= works.length - 1 ? 0 : activeSlide + 1;
        const targetSlide = sliderRef.current?.children[nextSlide] as HTMLElement;

        if (targetSlide && sliderRef.current) {
          const cardWidth = targetSlide.offsetWidth;
          const gap = 32; // 2rem = 32px
          const scrollAmount = cardWidth + gap;
          isProgrammaticScroll.current = true;
          sliderRef.current.scrollTo({
            left: scrollAmount * nextSlide,
            behavior: 'smooth'
          });
          setActiveSlide(nextSlide);
        }
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [activeSlide, autoScrollActive, isDesktop]);

  const getHeightClass = (columnIndex: number) => {
    return columnIndex === 0 ? 'h-96' : columnIndex === 1 ? 'h-64' : 'h-72';
  };

  // Fonction pour diviser les travaux en colonnes pour desktop
  const getColumnWorks = (columnIndex: number) => {
    return works.filter(work => work.columnNumber === columnIndex + 1);
  };

  const handleWorkClick = (work: typeof works[0]) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = '';
  };

  const handlePrevSlide = () => {
    if (cardRef.current && sliderRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      const gap = 32; // 2rem = 32px
      const scrollAmount = cardWidth + gap;
      const slider = sliderRef.current;

      const isAtBeginning = activeSlide === 0;
      if (isAtBeginning) {
        // Retour au début
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
        setActiveSlide(works.length - 1);
      } else {
        // Scroll vers la gauche
        isProgrammaticScroll.current = true;
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setActiveSlide((prev) => (prev - 1));
      }

      handleUserInteraction();
    }
  };

  const handleNextSlide = () => {
    if (cardRef.current && sliderRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      const gap = 32; // 2rem = 32px
      const scrollAmount = cardWidth + gap;
      const slider = sliderRef.current;

      const isAtEnd = activeSlide === works.length - 1;

      if (isAtEnd) {
        // Retour au début
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveSlide(0);
      } else {
        // Scroll vers la droite
        isProgrammaticScroll.current = true;
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setActiveSlide((prev) => (prev + 1));
      }

      handleUserInteraction();
    }
  };

  return (
    <>
      <section className="py-20 bg-primary" aria-labelledby="works-title" id='works'>
        <div className="container">
          <Text variant="h2" id="works-title" className="text-center mb-12 text-secondary">
            Mes réalisations
          </Text>

          {isDesktop ? (
            // Desktop: 3 colonnes, une UL par colonne
            <div className="hidden lg:flex gap-8">
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className={`relative ${colIndex === 0 ? "w-5/12" : colIndex === 1 ? "w-4/12" : "w-3/12"}`}>
                  <ul className='flex flex-col sticky top-0 gap-8'>
                    {getColumnWorks(colIndex).map((work) => (
                      <WorkCard
                        key={work.id}
                        work={work}
                        heightClass={getHeightClass(colIndex)}
                        onClick={() => handleWorkClick(work)}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Mobile: un seul slider horizontal
            <div className='works__slider-container w-screen relative overflow-x-auto'>
              <ul
                ref={sliderRef}
                onScroll={handleUserInteraction}
                className="flex gap-8 lg:hidden snap-x snap-mandatory overflow-x-auto scroll-smooth touch-auto"
                aria-label="Liste des projets"
              >
                {works.map((work, index) => (
                  <WorkCard
                    key={work.id}
                    work={work}
                    isMobile={true}
                    onClick={() => handleWorkClick(work)}
                    ref={index === 0 ? cardRef : null}
                  />
                ))}
              </ul>
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
                aria-label="Projet précédent"
              >
                ◀
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
                aria-label="Projet suivant"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </section>
      <WorkModal work={selectedWork} onClose={closeModal} />
    </>
  );
};

export default WorksClient;
