'use client'

import React from 'react';
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
    technologies: string[];
  } | null;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
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
        className="bg-secondary relative w-full h-full md:h-[90vh] md:max-w-[90vw] md:rounded-lg p-8 overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-primary hover:text-tertiary transition-colors z-10"
          onClick={onClose}
          aria-label="Fermer la modal"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 h-full">
          {/* Colonne de gauche : Image */}
          <div className="relative h-[40vh] md:h-full flex items-center justify-center md:block rounded-lg overflow-scroll">
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
          <div className="flex flex-col justify-between h-full">
            <div>
              <Text variant="h2" id={`modal-title-${work.id}`} className="mb-4">
                {work.title}
              </Text>
              {work.subtitle && (
                <Text variant="body" className="mb-6">
                  {work.subtitle}
                </Text>
              )}
              <div className="flex gap-2 flex-wrap mb-8">
                {work.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
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
