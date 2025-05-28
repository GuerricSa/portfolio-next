import React from 'react';
import HowItWorksClient from "./Client";

const steps = [
  {
    number: 1,
    title: "Onboarding",
    description: "Nous commençons par un appel stratégique pour comprendre vos objectifs et recueillir toutes les données nécessaires au lancement de votre projet."
  },
  {
    number: 2,
    title: "Copywriting",
    description: "Nos experts analysent votre marché et votre audience pour rédiger des textes convaincants, optimisés pour transformer vos visiteurs en prospects."
  },
  {
    number: 3,
    title: "UX/UI Design",
    description: "Nous créons une page avec un design attractif qui respecte l'ADN de votre business tout en optimisant l'expérience utilisateur."
  },
  {
    number: 4,
    title: "Développement",
    description: "Votre page est développée avec les dernières technologies web pour garantir performance et compatibilité sur tous les appareils."
  },
  {
    number: 5,
    title: "Livraison & Formation",
    description: "Votre site vous est livré clé en main, accompagné d'une formation pour que vous puissiez le gérer en toute autonomie."
  }
];

export default function HowItWorks(): React.ReactElement {
  return <HowItWorksClient steps={steps} />;
}
