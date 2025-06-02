'use client'

import React, { useState, useEffect } from 'react';
import Text from '../../atoms/Text';
import OfferCard from '../../molecules/OfferCard';
import OfferModal from '../../molecules/OfferModal';
import NavigationButton from '../../atoms/NavigationButton';
import Link from 'next/link';
import { useContactModal } from '../../../context/ContactModalContext';

interface OffersClientProps {
  cards: Array<{
    id: number,
    title: string,
    description: string,
    content: string,
    included: Array<string>,
    price: string,
    link: string,
    icon: string
  }>;
  paths: Array<string>;
  animationDuration: number;
}

const OffersClient: React.FC<OffersClientProps> = ({cards, paths, animationDuration}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);
  const [activePath, setActivePath] = useState(0);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCard) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCard]);

  useEffect(() => {
    if (selectedCard) return;
    const interval = setInterval(() => {
      setActivePath((prev) => (prev + 1) % paths.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedCard]);

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const prevModal = () => {
    const currentIndex = cards.findIndex((card) => card.id === selectedCard?.id);
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    animateToIndex(newIndex);
    setSelectedCard(cards[newIndex]);
  };

  const nextModal = () => {
    const currentIndex = cards.findIndex((card) => card.id === selectedCard?.id);
    const newIndex = (currentIndex + 1) % cards.length;
    animateToIndex(newIndex);
    setSelectedCard(cards[newIndex]);
  };

  const animateToIndex = async (targetIndex: number) => {
    const total = cards.length;
    let currentIndex = activeIndex;

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const step = () => {
      const forward = (targetIndex - currentIndex + total) % total <= total / 2;
      currentIndex = forward
        ? (currentIndex + 1) % total
        : (currentIndex - 1 + total) % total;

      setActiveIndex(currentIndex);
    };

    while (currentIndex !== targetIndex) {
      step();
      await delay(animationDuration / 1.5);
    }
  };

  const getCardPosition = (index: number) => {
    const total = cards.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (total === 3) {
      const positions = [
        {
          transform: 'translate3d(calc(-200px - 50%), calc(-40% - 100px), 0px) scale(0.75)',
          opacity: 0.7,
          filter: 'blur(1px)',
          zIndex: 3
        },
        {
          transform: 'translate3d(-50%, -25%, 200px) scale(1)',
          opacity: 1,
          filter: 'blur(0)',
          zIndex: 4
        },
        {
          transform: 'translate3d(calc(200px - 50%), calc(-40% - 100px), 0px) scale(0.75)',
          opacity: 0.7,
          filter: 'blur(1px)',
          zIndex: 3
        }
      ];
      return positions[relativeIndex];
    }

    if (total === 4) {
      const positions = [
        {
          transform: 'translate3d(-50%, -25%, 200px) scale(1)',
          opacity: 1,
          filter: 'blur(0)',
          zIndex: 4
        },
        {
          transform: 'translate3d(calc(200px - 50%), calc(-40% - 100px), 0px) scale(0.75)',
          opacity: 0.7,
          filter: 'blur(1px)',
          zIndex: 3
        },
        {
          transform: 'translate3d(-50%, calc(-40% - 200px), -200px) scale(0.6)',
          opacity: 0.5,
          filter: 'blur(2px)',
          zIndex: 2
        },
        {
          transform: 'translate3d(calc(-200px - 50%), calc(-40% - 100px), 0px) scale(0.75)',
          opacity: 0.7,
          filter: 'blur(1px)',
          zIndex: 3
        }
      ];
      return positions[relativeIndex];
    }

    if (total >= 5) {
      const angle = (relativeIndex - 2) * 30;
      const distance = 300;
      const x = Math.sin((angle * Math.PI) / 180) * distance;
      const scale = relativeIndex === 2 ? 1 : relativeIndex === 1 || relativeIndex === 3 ? 0.75 : 0.6;
      const opacity = relativeIndex === 2 ? 1 : relativeIndex === 1 || relativeIndex === 3 ? 0.7 : 0.5;
      const zIndex = relativeIndex === 2 ? 4 : relativeIndex === 1 || relativeIndex === 3 ? 3 : 2;
      return {
        transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${-Math.abs(x) / 2}px), ${relativeIndex === 2 ? 200 : relativeIndex === 0 || relativeIndex === 4 ? -200 : 0}px) scale(${scale})`,
        opacity,
        zIndex
      };
    }

    return {};
  };

  const handleCardClick = async (index: number) => {
    document.body.style.overflow = 'hidden';
    if (index === activeIndex) {
      setSelectedCard(cards[index]);
    } else {
      await animateToIndex(index);
      setSelectedCard(cards[index]);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setSelectedCard(null);
  };

  return (
    <>
      <section className="container py-12">
        <Text variant="h2" className="text-center mb-12">
          Mes offres
        </Text>

        {/* Version mobile/tablette */}
        <div className="flex flex-col gap-6 md:hidden">
          {cards.map((card) => (
            <OfferCard
              key={card.id}
              title={card.title}
              description={card.description}
              onClick={() => setSelectedCard(card)}
              className='w-full'
            />
          ))}
        </div>

        {/* Version desktop (carousel) */}
        <div className="relative perspective-1000 hidden md:block">
          <div className="h-[500px] flex cards-container relative">
            {cards.map((card, index) => (
              <OfferCard
                key={card.id}
                title={card.title}
                description={card.description}
                onClick={() => handleCardClick(index)}
                style={getCardPosition(index)}
                className="absolute w-6/12 max-w-96 left-1/2 top-1/2 active:scale-95"
              />
            ))}
          </div>
          {!selectedCard && (
            <>
              <NavigationButton
                direction="prev"
                onClick={prevCard}
                paths={paths}
                activePath={activePath}
              />
              <NavigationButton
                direction="next"
                onClick={nextCard}
                paths={paths}
                activePath={activePath}
              />
            </>
          )}
        </div>
        <Link
          href="/estimate"
          className="mx-auto block w-fit mt-6 bg-secondary border-tertiary border-2 text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-tertiary hover:text-primary transition"
        >
          Personnaliser mon offre
        </Link>
      </section>
      {selectedCard && (
        <OfferModal
          card={selectedCard}
          onClose={closeModal}
          onPrev={prevModal}
          onNext={nextModal}
          onContact={openModal}
          paths={paths}
          activePath={activePath}
        />
      )}
    </>
  );
};

export default OffersClient;
