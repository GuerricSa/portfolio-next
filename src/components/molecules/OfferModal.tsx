'use client'

import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Link from 'next/link';
import NavigationButton from '../atoms/NavigationButton';

interface OfferModalProps {
  card: {
    id: number;
    title: string;
    content: string;
    included: string[];
    price: string;
    link: string;
    icon: string;
  } | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onContact: () => void;
  paths: string[];
  activePath: number;
}

const OfferModal: React.FC<OfferModalProps> = ({
  card,
  onClose,
  onPrev,
  onNext,
  onContact,
  paths,
  activePath,
}) => {
  if (!card) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in-container"
      onClick={onClose}
    >
      <NavigationButton
        direction="prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        paths={paths}
        activePath={activePath}
      />
      <NavigationButton
        direction="next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        paths={paths}
        activePath={activePath}
      />
      <div
        className="bg-secondary overflow-auto max-h-[90%] rounded-lg p-8 lg:p-12 max-w-[90%] md:max-w-[80%] w-full relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${card.id}`}
        aria-describedby={`modal-description-${card.id}`}
      >
        <button
          className="absolute top-2 right-2 text-black cursor-pointer w-6 h-6 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-wrap gap-2 mb-4 pb-2 border-b-2 border-zinc-500 items-center">
          <span>{card.icon}</span>
          <Text variant="h2" id={`modal-title-${card.id}`} className="mb-0">
            {card.title}
          </Text>
        </div>
        <Text variant="body" id={`modal-description-${card.id}`}>
          {card.content}
        </Text>
        <Text variant="h3" className="mt-6 font-bold">
          Ce que cette offre peut inclure
        </Text>
        <ul className="mt-2 list-[circle] list-inside">
          {card.included.map((item, index) => (
            <li className="pt-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <Text variant="h3" className="mt-6 font-bold text-tertiary">
          {card.price}
        </Text>
        <div className="flex justify-center md:justify-between mt-6 flex-wrap gap-4 items-center">
          <Button
            onClick={() => {
              onClose();
              onContact();
            }}
            label="Contacter Guerric"
            variant="tertiary"
            className="bg-secondary whitespace-nowrap border-tertiary border-2 text-tertiary hover:bg-tertiary hover:text-primary"
          />
          <Link
            href={card.link}
            className="bg-primary whitespace-nowrap text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-tertiary hover:text-secondary transition"
          >
            Approfondir cette offre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
