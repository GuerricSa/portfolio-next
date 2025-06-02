'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Tag {
  text: string;
  color: string;
}

interface Card {
  title: string;
  titleColor: string;
  backgroundColor: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  content: string;
  tags: Tag[];
}

interface HorizontalAccordionProps {
  title?: string;
  subtitle?: string;
  cards: Card[];
}


const HorizontalAccordion: React.FC<HorizontalAccordionProps> = ({ title, subtitle, cards }) => {
  const [hoverSupported, setHoverSupported] = useState(false);
  const [openedCard, setOpenedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHoverSupport = () => {
      const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 900;
      setHoverSupported(isHoverSupported);
      setIsMobile(window.innerWidth <= 900)
    };

    checkHoverSupport();
    window.addEventListener('resize', checkHoverSupport);

    return () => {
      window.removeEventListener('resize', checkHoverSupport);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (openedCard === index) {
      setOpenedCard(null);
    } else {
      setOpenedCard(index);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8">
      <div className="max-w-[75rem] mx-auto">
        <h2 className="text-center mb-12">{title}</h2>
        <p className="text-center text-lg md:text-xl mb-12">{subtitle}</p>
      </div>

      <div className="max-w-[75rem] mx-auto">
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
              className={`relative overflow-hidden min-h-[631px] rounded-lg flex ${
                openedCard === index
                  ? 'w-2/3'
                  : openedCard !== null
                  ? 'w-1/3'
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
              onMouseEnter={() => hoverSupported && handleCardClick(index)}
              onMouseLeave={() => hoverSupported && setOpenedCard(null)}
            >
              {card.backgroundImage && (
                <img
                  src={card.backgroundImage.src}
                  alt={card.backgroundImage.alt}
                  className="absolute h-full object-cover w-full"
                />
              )}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0" style={{ backgroundColor: card.backgroundColor }} />

              <div className="relative z-10 w-full flex flex-col justify-between p-8">
                <div>
                  <h3
                    className="text-3xl md:text-4xl mb-4"
                    style={{ color: card.titleColor }}
                  >
                    {card.title}
                  </h3>
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

                <div className="mt-auto flex justify-between items-end">
                  <div
                    className={`max-w-[297px] text-white transition-transform duration-700 ${
                      openedCard !== index && openedCard !== null
                        ? 'translate-x-[-200px] translate-y-[200px]'
                        : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                  <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                    <div className="w-3 h-[1px] bg-white" />
                    <div
                      className={`w-[1px] h-3 bg-white transition-transform duration-700 ${
                        openedCard === index ? 'rotate-90' : ''
                      }`}
                    />
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
