import React from 'react';
import OffersClient from './Client'

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

const paths = [
  "M149.069,122.586c34.428,0,61.793-27.365,61.793-61.793C210.862,26.366,183.497-1,149.069-1 c-34.428,0-61.793,27.366-61.793,61.793C87.276,95.221,114.641,122.586,149.069,122.586z M149.069,16.655 c24.717,0,44.138,19.421,44.138,44.138c0,24.717-19.421,44.138-44.138,44.138s-44.138-19.421-44.138-44.138 C104.931,36.076,124.352,16.655,149.069,16.655z",
  "M255,219.69c34.428,0,61.793-27.365,61.793-61.793c0-34.428-27.365-61.793-61.793-61.793 c-34.428,0-61.793,27.366-61.793,61.793C193.207,192.324,220.572,219.69,255,219.69z M255,113.759 c24.717,0,44.138,19.421,44.138,44.138S279.717,202.034,255,202.034s-44.138-19.421-44.138-44.138S230.283,113.759,255,113.759z",
  "M360.931,193.207c-34.428,0-61.793,27.365-61.793,61.793c0,34.428,27.366,61.793,61.793,61.793 c34.428,0,61.793-27.366,61.793-61.793C422.724,220.572,395.359,193.207,360.931,193.207z M360.931,299.138 c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138s44.138,19.421,44.138,44.138 S385.648,299.138,360.931,299.138z",
  "M255,290.31c-34.428,0-61.793,27.365-61.793,61.793s27.366,61.793,61.793,61.793c34.428,0,61.793-27.365,61.793-61.793 S289.428,290.31,255,290.31z M255,396.241c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138 s44.138,19.421,44.138,44.138S279.717,396.241,255,396.241z",
  "M149.069,387.414c-34.428,0-61.793,27.365-61.793,61.793S114.641,511,149.069,511c34.428,0,61.793-27.365,61.793-61.793 S183.497,387.414,149.069,387.414z M149.069,493.345c-24.717,0-44.138-19.421-44.138-44.138s19.421-44.138,44.138-44.138 s44.138,19.421,44.138,44.138S173.786,493.345,149.069,493.345z",
];

const animationDuration = 500;

export default function Offers(): React.ReactElement {
  return <OffersClient cards={cards} paths={paths} animationDuration={animationDuration} />
}
