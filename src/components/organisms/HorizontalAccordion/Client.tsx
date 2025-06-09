'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HorizontalAccordionProps } from './types';
import { useHoverAnimation } from '../../../hooks/useHoverAnimation';

const HorizontalAccordion: React.FC<HorizontalAccordionProps> = ({ title, subtitle, cards }) => {
  const [hoverSupported, setHoverSupported] = useState(false);
  const [openedCard, setOpenedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [contentSize, setContentSize] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseTitleEnter = useHoverAnimation();

  useEffect(() => {
    const checkHoverSupport = () => {
      const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 1024;
      setHoverSupported(isHoverSupported);
      setIsMobile(window.innerWidth <= 1024);
      calculateContentSize();
    };

    const calculateContentSize = () => {
      if (!cardsRef.current) return;
      const width = cardsRef.current.getBoundingClientRect().width;
      const padding = (0.25 * 6 * 16) * 2;

      if (isMobile) {
        // Pour mobile : largeur d'une carte - padding
        const usableWidth = width - padding;
        setContentSize(usableWidth);
      } else {
        // Desktop : largeur du container - spacing entre les cartes
        const gap = (0.25 * 2.5 * 16) * (cards.length - 1); // 0.5rem * 2.5 en px
        const usableWidth = ((width - (gap * 2)) / 2)  - padding;
        setContentSize(usableWidth); // Pourcentage pris par la carte ouverte
      }
    };

    checkHoverSupport();
    calculateContentSize();

    const handleResize = () => {
      calculateContentSize();
      checkHoverSupport();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isMobile, cards.length]);

  const handleCardClick = (index: number) => {
    if (openedCard === index) {
      setOpenedCard(null);
    } else {
      setOpenedCard(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!hoverSupported) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setOpenedCard(index);
  };

  const handleMouseLeave = () => {
    if (!hoverSupported) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setOpenedCard(null);
    }, 50); // Petit délai pour éviter les changements trop rapides
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 container">
      <div className="mx-auto">
        <h2 onMouseEnter={handleMouseTitleEnter} className="text-center mb-12">{title}</h2>
        <p className="text-center text-lg md:text-xl mb-12">{subtitle}</p>
      </div>

      <div className="mx-auto">
        <div
          ref={cardsRef}
          className={`flex gap-2.5 ${
            isMobile ? 'flex-col' : ''
          }`}
          data-size={cards?.length ?? 0}
        >
          {cards?.map((card, index) => (
            <motion.div
              key={index}
              data-card-text="true"
              className={`relative overflow-hidden rounded-lg flex cursor-default ${
                isMobile
                  ? 'min-h-[250px]'
                  : openedCard === index
                    ? 'w-2/4'
                    : openedCard !== null
                      ? 'w-1/4'
                      : 'w-1/3'
              } transition-all duration-700 ease-in-out`}
              style={{
                '--title-color': card.titleColor,
                '--background-color': card.backgroundColor,
              } as React.CSSProperties}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.12 }}
              onClick={() => !hoverSupported && handleCardClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {card.backgroundImage && (
                <Image
                  src={card.backgroundImage.src}
                  alt={card.backgroundImage.alt}
                  width={200}
                  height={200}
                  className="absolute h-full object-cover w-full"
                />
              )}
              <div className="absolute inset-0 bg-primary" />

              <div className="relative z-10 w-full flex flex-col justify-between p-6">
                <div>
                  <h3
                    className="text-3xl md:text-4xl mb-4"
                    style={{ color: card.titleColor }}
                    dangerouslySetInnerHTML={{ __html: card.title}}
                  />
                  <ul className="flex flex-wrap gap-2.5">
                    {card.tags.map((tag, tagIndex) => (
                      <li
                        key={tagIndex}
                        className="px-2.5 py-2 rounded-full text-xs uppercase"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`pt-4 w-full transition-all duration-700 text-sm ${
                    openedCard === index
                      ? 'translate-x-0 opacity-full max-h-screen'
                      : 'translate-x-[-200px] opacity-0 max-h-px'
                  }`}
                  style={{width: `${contentSize}px`}}
                >
                  <div
                    className='text-white'
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                  <ul className="mt-2 list-[circle] list-inside">
                    {card.included?.map((item, index) => (
                      <li className="pt-2 text-white" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4 flex justify-between items-end gap-2">
                  <div
                    className={`horizontal-accordion__card-description font-semibold min-w-0 w-full lg:max-w-[297px] border-tertiary border-4 rounded text-white transition-transform duration-700 p-2 ${
                      openedCard !== index && openedCard !== null
                        ? 'translate-x-[-200px] translate-y-[200px]'
                        : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                  <div className={`w-11 h-11 rounded-full border border-white flex items-center justify-center shrink-0 relative before:bg-white before:w-3 before:h-[1px] before:absolute before:left-2/4 before:top-2/4 before:-translate-1/2 after:bg-white after:w-[1px] after:h-3 after:absolute after:left-2/4 after:top-2/4 after:transition-transform duration-700 after:-translate-1/2 ${openedCard === index ? " after:rotate-90" : ""}`}>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalAccordion;
