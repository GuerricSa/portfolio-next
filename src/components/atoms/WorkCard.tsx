'use client'

import React, { forwardRef } from 'react';
import Image from 'next/image';
import Text from './Text';

interface WorkCardProps {
  work: {
    id: number;
    title: string;
    subtitle?: string;
    image: string;
    technologies: string[];
  };
  heightClass?: string;
  isMobile?: boolean;
  onClick: () => void;
}

const WorkCard = forwardRef<HTMLLIElement, WorkCardProps>(({
  work,
  heightClass = '',
  isMobile = false,
  onClick,
}, ref ) => {
  return (
    <li
      className={`${
        isMobile ? 'min-w-[100%] sm:min-w-[75%] md:min-w-[50%] snap-start' : 'w-3/6 lg:w-full'
      } ${heightClass} bg-secondary rounded-lg overflow-hidden relative flex flex-col justify-between cursor-pointer`}
      onClick={onClick}
      ref={ref}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Voir les détails du projet ${work.title}`}
    >
      <div className={`overflow-y-auto no-scrollbar ${isMobile ? "h-56" : "h-full"}`}>
        <Image
          src={work.image}
          alt={work.title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <Text variant="h3" className={`leading-none font-bold ${work.subtitle ? "" : "mb-2"}`}>
          {work.title}
        </Text>
        {work.subtitle && (
          <Text variant="body" className="mb-2">
            {work.subtitle}
          </Text>
        )}
        <div className="flex gap-2 flex-wrap">
          {work.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary text-secondary rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
});
WorkCard.displayName = 'WorkCard';

export default WorkCard;
