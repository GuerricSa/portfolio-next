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
  const [isDesktop, setIsDesktop] = useState(false);
  const descriptionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const updateHeight = () => {
      const nodes = Object.values(descriptionRefs.current);
      if (!nodes.length) return;

      nodes.forEach((node) => {
        if (node) {
          node.style.minHeight = 'auto';
        }
      });

      let maxHeight = 0;

      nodes.forEach((node) => {
        if (node) {
          const height = node.getBoundingClientRect().height;
          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });

      if (window.innerWidth >= 728) {
        setIsDesktop(true);
        setContainerHeight(maxHeight > 450 ? maxHeight : 450);
      } else {
        setIsDesktop(false);
        setContainerHeight(maxHeight);
      }
    };

    updateHeight();

    const handleWindowResize = () => {
      setContainerHeight(0);
      requestAnimationFrame(updateHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isDesktop]);

  return (
    <section className="bg-primary py-12" aria-labelledby="skills-title">
      <div className="container mx-auto">
        <Text variant="h2" id="skills-title" className="text-secondary mb-8 lg:mb-12">
          Mes compétences techniques
        </Text>
        <div className="flex flex-col md:flex-row-reverse justify-between gap-5">
          <div className="w-full md:w-1/2 bg-secondary rounded-md p-8" role="region" aria-label="Compétences techniques">
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
            className="w-full md:w-1/2 h-full relative"
            id='descriptionContainer'
            style={{ minHeight: containerHeight ? containerHeight : 'auto' }}
            role="region"
            aria-label="Description des compétences"
          >
            {Object.entries(descriptions).map(([key, desc]) => (
              <SkillDescription
                key={key}
                title={desc.title}
                content={desc.content}
                isActive={activeDescription === key}
                minHeight={containerHeight}
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
