'use client'

import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text';
import SkillCircle from '../../molecules/SkillCircle';
import SkillDescription from '../../molecules/SkillDescription';

interface Logo {
  src: string;
  alt: string;
}

interface Description {
  title: string;
  content: string;
}

interface SkillsClientProps {
  descriptions: Record<string, Description>;
  frontendLogos: Logo[];
  backendLogos: Logo[];
  cmsLogos: Logo[];
  designLogos: Logo[];
  toolsLogos: Logo[];
}

const SkillsClient: React.FC<SkillsClientProps> = ({
  descriptions,
  frontendLogos,
  backendLogos,
  cmsLogos,
  designLogos,
  toolsLogos
}) => {
  const [activeDescription, setActiveDescription] = useState('frontendLogos');
  const [containerHeight, setContainerHeight] = useState(0);
  const descriptionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const circleRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const updateHeight = () => {
      const currentDescriptionEl = descriptionRefs.current[activeDescription];
      const circleEl = circleRef.current;

      const mobile = window.innerWidth < 728;
      setIsMobile(mobile);

      if (!currentDescriptionEl || !circleEl) return;

      const descriptionHeight = currentDescriptionEl.offsetHeight;
      const circleHeight = circleEl.offsetHeight;

      if (mobile) {
        setContainerHeight(0); // on ne force rien
      } else {
        const newHeight = Math.max(descriptionHeight, circleHeight);
        setContainerHeight(newHeight);
      }
    };

    updateHeight();
    const handleResize = () => {
      setContainerHeight(0);
      requestAnimationFrame(updateHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeDescription]);

  return (
    <section className="bg-primary py-12 transition-all duration-500 ease-in-out" aria-labelledby="skills-title">
      <div className="container mx-auto">
        <Text variant="h2" id="skills-title" className="text-secondary mb-8 lg:mb-12">
          Mes compétences techniques
        </Text>
        <nav className="mb-6 lg:mb-8" aria-label="Filtres de projets">
          <ul className="flex gap-2 lg:gap-4 flex-wrap">
            {Object.entries(descriptions).map(([key, desc]) => (
              <li key={key}>
                <button
                  onClick={() => setActiveDescription(key)}
                  className={`bg-secondary rounded-md py-2 px-4 font-semibold border-2 border-secondary transition duration-500 cursor-pointer hover:bg-tertiary hover:text-secondary hover:opacity-[0.7] ${key === activeDescription ? 'bg-tertiary text-secondary pointer-events-none hover:opacity-[1]' : '' }`}
                >
                  {desc.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row-reverse justify-between gap-5">
          <div className="w-full md:w-1/2 bg-secondary rounded-md p-8 h-fit" ref={circleRef} role="region" aria-label="Compétences techniques">
            <div className="circle-container relative h-[600px]">
              <SkillCircle
                className='circle circle-1'
                skills={frontendLogos}
                circleName="frontendLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-2'
                skills={backendLogos}
                circleName="backendLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-3'
                skills={cmsLogos}
                circleName="cmsLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-4'
                skills={[...designLogos, ...toolsLogos]}
                circleName="toolsLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 h-full relative transition-minHeight duration-500 linear"
            id='descriptionContainer'
            style={{ minHeight: isMobile ? 'auto' : containerHeight || 'auto' }}
            role="region"
            aria-label="Description des compétences"
          >
            {Object.entries(descriptions).map(([key, desc]) => (
              <SkillDescription
                key={key}
                title={desc.title}
                content={desc.content}
                isActive={activeDescription === key}
                ref={(el) => { descriptionRefs.current[key] = el }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsClient;
