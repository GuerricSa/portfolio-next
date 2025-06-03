import React from 'react';
import Client from './Client';

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
  description: string;
  content: string;
  included?: Array<string>;
  tags: Tag[];
}

interface HorizontalAccordionProps {
  title?: string;
  subtitle: string;
  cards: Card[];
}

const mockData: HorizontalAccordionProps = {
  title: "Découvrez nos services",
  subtitle: "Des solutions adaptées à vos besoins",
  cards: [
    {
      title: "Site Web",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/web-dev.jpg",
        alt: "Développement web illustration"
      },
      description: "<p>Un site professionnel pour présenter votre activité, vos services et faciliter la prise de contact.</p>",
      content: "Cette offre s'adresse à toute personne ou structure souhaitant être visible en ligne et inspirer confiance. C'est le format classique pour présenter ses services, son parcours et permettre aux visiteurs de prendre contact facilement.",
      included: [
        "À partir de 4 pages (Accueil, Services, À propos, Contact, etc.)",
        "Responsive design (mobile / tablette / desktop)",
        "Optimisation des temps de chargement et du référencement naturel (SEO)",
        "Formulaire de contact",
        "Intégration d'un outil d'analyse (Google Analytics, Plausible, etc.)"
      ],
      tags: [
        {
          text: "React",
          color: "#61DAFB"
        },
        {
          text: "Next.js",
          color: "#000000"
        }
      ]
    },
    {
      title: "Landing page",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/ui-design.jpg",
        alt: "Design UI/UX illustration"
      },
      description: "<p>Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience optimale.</p>",
      content: "Cette offre est parfaite si vous souhaitez promouvoir une offre, un service ou un événement spécifique. Elle est conçue pour convaincre et guider l'utilisateur vers une action précise, sur une seule page optimisée pour la conversion.",
      included: [
        "Conception d'une maquette sur-mesure (à ajouter au budget)",
        "Intégration responsive (HTML / CSS / React ou CMS)",
        "Argumentaire structuré avec CTA clairs",
        "Optimisation des performances et du taux de conversion",
        "Formulaire de contact ou de prise de rendez-vous"
      ],
      tags: [
        {
          text: "Figma",
          color: "#F24E1E"
        },
        {
          text: "UI/UX",
          color: "#FF6B6B"
        }
      ]
    },
    {
      title: "Maintenance & évolutions",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/digital-marketing.jpg",
        alt: "Marketing digital illustration"
      },
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
      tags: [
        {
          text: "SEO",
          color: "#4285F4"
        },
        {
          text: "Social Media",
          color: "#E1306C"
        }
      ]
    }
  ]
};

const Server: React.FC = () => {
  return <Client {...mockData} />;
};

export default Server;
