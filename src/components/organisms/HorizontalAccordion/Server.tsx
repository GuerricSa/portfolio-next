import React from 'react';
import Client from './Client';
import { HorizontalAccordionProps } from './types';

const mockData: HorizontalAccordionProps = {
  title: "Découvrez nos services",
  subtitle: "Des solutions adaptées à vos besoins",
  cards: [
    {
      title: "Site Web",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      description: "<p>Vos visiteurs comprennent, vos prospects vous contactent.</p>",
      content: "<p>Fatigué de devoir expliquer ce que fait votre entreprise à chaque nouveau prospect ?Marre d’avoir un site qui ne génère aucun lead qualifié ?</p><br /><p><span class='block font-semibold'>Ce que je propose :</span>Je crée un site limpide et fiable, où votre différence saute aux yeux dès la première seconde.Vos visiteurs comprennent ce que vous apportez, et trouvent comment vous contacter facilement.</p>",
      included: [
        "4+ pages essentielles (Accueil, Services, À propos, Contact, et plus si besoin)",
        "Un design pensé pour tous les écrans, et optimisé en mobile first.",
        "Un chargement rapide et une optimisation du référencement naturel (SEO)",
        "Un formulaire de contact simple et accessible",
        "Un outil d’analyse (Google Analytics, Plausible…) pour suivre ce qui se passe sur votre site"
      ],
      tags: [
        { text: "Vitrine", color: "#C86FC9" },
        { text: "e-commerce", color: "#FF6F61" },
        { text: "blog", color: "#FF6F61" }
      ]
    },
    {
      title: "Landing page",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      description: "<p>Convertissez grâce à une user experience optimisée</p>",
      content: "<p>Vous lancez une nouvelle offre, préparez un événement ou voulez booster vos générations de leads ?</p><br /><p><span class='block font-semibold'>Ce que je propose :</span>Je conçois une landing page ultra-ciblée, pensée pour capter l’attention et guider chaque visiteur vers l’action que vous attendez (inscription, prise de rendez-vous, achat…).</p>",
      included: [
        "Une maquette sur-mesure, adaptée à votre objectif",
        "Une intégration responsive sur tous les supports",
        "Un argumentaire structuré, avec des CTA clairs et visibles",
        "Une optimisation des performances et du taux de conversion",
        "Un formulaire de contact ou de réservation, simple et efficace"
      ],
      tags: [
        { text: "Conversion", color: "#5DA9E9" },
        { text: "Lancement", color: "#6A7B76" }
      ]

    },
    {
      title: "Maintenance &<br>évolutions",
      titleColor: "#FFFFFF",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      description: "<p>Faites évoluer votre site et continuez à convertir</p>",
      content: "<p>Votre site est en ligne, mais vous voulez qu’il reste fiable, sécurisé et toujours à jour ?<brEnvie de corriger un bug, d’ajouter une nouvelle page ou de faire évoluer vos contenus ?</p><br /><p><span class='block font-semibold'>Ce que je propose :</span>Je prends soin de votre site sur la durée : corrections, mises à jour, ajouts de fonctionnalités… Vous restez concentré sur votre activité, je gère le reste.</p>",
      included: [
        "Corrections de bugs et ajustements rapides",
        "Ajout de pages ou de nouveaux contenus selon vos besoins",
        "Mises à jour régulières (CMS, plugins, sécurité…)",
        "Assistance personnalisée par mail ou en visio",
        "Suivi des performances et améliorations continues"
      ],
      tags: [
        { text: "Réactivité", color: "#FF6F61" },
        { text: "Flexibilité", color: "#8e518d" }
      ]

    }
  ]
};

const Server: React.FC = () => {
  return <Client {...mockData} />;
};

export default Server;
