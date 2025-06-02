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
  content: string;
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
      title: "Développement Web",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/web-dev.jpg",
        alt: "Développement web illustration"
      },
      content: "<p>Création de sites web et applications sur mesure avec les dernières technologies.</p>",
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
      title: "Design UI/UX",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/ui-design.jpg",
        alt: "Design UI/UX illustration"
      },
      content: "<p>Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience optimale.</p>",
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
      title: "Marketing Digital",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backgroundImage: {
        src: "/images/digital-marketing.jpg",
        alt: "Marketing digital illustration"
      },
      content: "<p>Stratégies marketing innovantes pour augmenter votre visibilité en ligne.</p>",
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
