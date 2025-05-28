'use client'

import React, { useState, useEffect } from 'react';
import Text from '../atoms/Text';
import OfferCard from '../molecules/OfferCard';
import OfferModal from '../molecules/OfferModal';
import NavigationButton from '../atoms/NavigationButton';
import Link from 'next/link';
import { useContactModal } from '../../context/ContactModalContext';

const animationDuration = 500;

const paths = [
  "M149.069,122.586c34.428,0,61.793-27.365,61.793-61.793C210.862,26.366,183.497-1,149.069-1 c-34.428,0-61.793,27.366-61.793,61.793C87.276,95.221,114.641,122.586,149.069,122.586z M149.069,16.655 c24.717,0,44.138,19.421,44.138,44.138c0,24.717-19.421,44.138-44.138,44.138s-44.138-19.421-44.138-44.138 C104.931,36.076,124.352,16.655,149.069,16.655z",
  "M255,219.69c34.428,0,61.793-27.365,61.793-61.793c0-34.428-27.365-61.793-61.793-61.793 c-34.428,0-61.793,27.366-61.793,61.793C193.207,192.324,220.572,219.69,255,219.69z M255,113.759 c24.717,0,44.138,19.421,44.138,44.138S279.717,202.034,255,202.034s-44.138-19.421-44.138-44.138S230.283,113.759,255,113.759z",
  "M360.931,193.207c-34.428,0-61.793,27.365-61.793,61.793c0,34.428,27.366,61.793,61.793,61.793 c34.428,0,61.793-27.366,61.793-61.793C422.724,220.572,395.359,193.207,360.931,193.207z M360.931,299.138 c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138s44.138,19.421,44.138,44.138 S385.648,299.138,360.931,299.138z",
  "M255,290.31c-34.428,0-61.793,27.365-61.793,61.793s27.366,61.793,61.793,61.793c34.428,0,61.793-27.365,61.793-61.793 S289.428,290.31,255,290.31z M255,396.241c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138 s44.138,19.421,44.138,44.138S279.717,396.241,255,396.241z",
  "M149.069,387.414c-34.428,0-61.793,27.365-61.793,61.793S114.641,511,149.069,511c34.428,0,61.793-27.365,61.793-61.793 S183.497,387.414,149.069,387.414z M149.069,493.345c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138 s44.138,19.421,44.138,44.138S173.786,493.345,149.069,493.345z",
];

const cards = [
  {
    id: 1,
    title: "Site web",
    description: "Un site professionnel pour présenter votre activité, vos services et faciliter la prise de contact.",
    content: "Cette offre s'adresse à toute personne ou structure souhaitant être visible en ligne et inspirer confiance. C'est le format classique pour présenter ses services, son parcours et permettre aux visiteurs de prendre contact facilement.",
    included: [
      "À partir de 4 pages (Accueil, Services, À propos, Contact, etc.)",
      "Responsive design (mobile / tablette / desktop)",
      "Optimisation des temps de chargement et du référencement naturel (SEO)",
      "Formulaire de contact",
      "Intégration d'un outil d'analyse (Google Analytics, Plausible, etc.)"
    ],
    price: "À partir de 2000€",
    link: "/offres/site-vitrine",
    icon: "🌐"
  },
  {
    id: 2,
    title: "Page de vente / landing page",
    description: "Une landing page conçue pour convertir vos visiteurs en clients, avec un design percutant et un message clair.",
    content: "Cette offre est parfaite si vous souhaitez promouvoir une offre, un service ou un événement spécifique. Elle est conçue pour convaincre et guider l'utilisateur vers une action précise, sur une seule page optimisée pour la conversion.",
    included: [
      "Conception d'une maquette sur-mesure (à ajouter au budget)",
      "Intégration responsive (HTML / CSS / React ou CMS)",
      "Argumentaire structuré avec CTA clairs",
      "Optimisation des performances et du taux de conversion",
      "Formulaire de contact ou de prise de rendez-vous"
    ],
    price: "À partir de 700€",
    link: "/offres/page-de-vente",
    icon: "🤑"
  },
  {
    id: 3,
    title: "Add-ons",
    description: "Des fonctionnalités supplémentaires pour enrichir et personnaliser votre site.",
    content: "Vous avez des besoins spécifiques ou envie d'aller plus loin ? Ces modules complémentaires peuvent être ajoutés à n'importe quelle offre pour répondre à vos objectifs plus en détail.",
    included: [
      "Création de blog ou espace actualités",
      "Multilingue",
      "Animations avancées (Framer Motion, micro-interactions…)",
      "Connexions à des outils tiers (CRM, automatisations)",
      "Création d'e-mail sur mesure pour vos campagnes",
      "Rédaction SEO (via partenaire ou moi-même, selon vos besoins)",
      "..."
    ],
    price: "Sur devis",
    link: "/offres/sur-mesure",
    icon: "🛒"
  },
  {
    id: 4,
    title: "Maintenance & évolutions",
    description: "Un accompagnement sur mesure pour faire évoluer votre site dans la durée ou assurer sa stabilité technique.",
    content: "Vous avez déjà un site en ligne et souhaitez le faire évoluer, corriger des bugs ou assurer sa sécurité ? Cette offre vous permet de rester serein·e dans le temps, tout en gardant la flexibilité d'ajouter de nouvelles fonctionnalités selon vos besoins.",
    included: [
      "Corrections de bugs et petits ajustements",
      "Ajout de nouvelles pages ou de contenus",
      "Mises à jour régulières (CMS, plugins, sécurité...)",
      "Assistance sur mesure par mail ou visio",
      "Maintenance mensuelle ou trimestrielle",
      "Suivi de performance et améliorations continues"
    ],
    price: "Sur devis",
    link: "/offres/maintenance",
    icon: "🛠️"
  }
];

const Offers: React.FC = () => {
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
      <OfferModal
        card={selectedCard}
        onClose={closeModal}
        onPrev={prevModal}
        onNext={nextModal}
        onContact={openModal}
        paths={paths}
        activePath={activePath}
      />
    </>
  );
};

export default Offers;
