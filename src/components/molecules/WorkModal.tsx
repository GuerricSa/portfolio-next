'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

interface WorkModalProps {
  work: {
    id: number;
    title: string;
    subtitle?: string;
    image: string;
    link: string;
    technologies?: string[];
    context?: string;
    keyAchievements?: string[];
    skills?: string[];
  } | null;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!work) return;

    const calculateHeight = () => {
      if (!modalRef.current || !contentRef.current || !buttonRef.current) return;

      // Vérifier si on est en desktop (md: breakpoint)
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      if (isDesktop) {
        const modalHeight = modalRef.current.offsetHeight;
        const headerHeight = contentRef.current.offsetHeight;
        const buttonHeight = buttonRef.current.offsetHeight;
        const availableHeight = modalHeight - headerHeight - buttonHeight - 32 * 2; // 32px pour le padding

        setContentHeight(availableHeight);
      } else {
        setContentHeight(0); // En mobile, on laisse la hauteur en auto
      }
    };

    // Calculer la hauteur initiale
    calculateHeight();

    // Recalculer la hauteur lors du redimensionnement de la fenêtre
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [work]);

  if (!work) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in-container"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${work.id}`}
    >
      <div
        ref={modalRef}
        className="bg-secondary relative w-full h-full md:h-[90vh] md:max-w-[90vw] md:rounded-lg p-8 overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-primary hover:text-tertiary transition-colors z-10 cursor-pointer"
          onClick={onClose}
          aria-label="Fermer la modal"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 h-full">
          {/* Colonne de gauche : Image */}
          <div className="relative h-[40vh] md:h-full flex items-center justify-center md:block rounded-lg overflow-scroll no-scrollbar">
            <Image
              src={work.image}
              alt={work.title}
              width="500"
              height="3000"
              className="object-cover rounded-lg md:h-auto"
              priority
            />
          </div>

          {/* Colonne de droite : Contenu */}
          <div className="flex flex-col h-full">
            <div ref={contentRef}>
              <Text variant="h2" id={`modal-title-${work.id}`} className="mb-4">
                {work.title}
              </Text>
              {work.subtitle && (
                <Text variant="body" className="mb-6">
                  {work.subtitle}
                </Text>
              )}
              <div className="flex gap-2 flex-wrap mb-8">
                {work.technologies && work.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: contentHeight || 'auto' }} className="overflow-y-auto styled-scrollbar">
              <div>
                {work.context && (
                  <>
                    <Text variant="h3" className="mt-4">Contexte et rôle</Text>
                    <Text variant="body" className="mt-4">{work.context}</Text>
                  </>
                )}
                {work.keyAchievements && work.keyAchievements.length > 0 && (
                  <>
                    <Text variant="h3" className="mt-4">Réalisations clés</Text>
                    <ul>
                      {work.keyAchievements.map((key, index) => (
                        <li
                          key={index}
                          className='pb-2 text-base'
                          dangerouslySetInnerHTML={{ __html: key }}
                        />
                      ))}
                    </ul>
                  </>
                )}
                {work.skills && work.skills.length > 0 && (
                  <>
                    <Text variant="h3" className="mt-4">Compétences mobilisées</Text>
                    <ul className='list-disc list-inside'>
                      {work.skills.map((key, index) => {
                        return <li key={index} className='pb-2 text-base'>{key}</li>
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div ref={buttonRef} className="flex justify-end mt-4">
              <Button
                onClick={() => window.open(work.link, '_blank', 'noopener,noreferrer')}
                label="Se rendre sur le site"
                variant="primary"
                className="bg-primary text-tertiary hover:bg-tertiary hover:text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
