import React from 'react';
import HowItWorksV2Client from './Client';

const steps = [
  {
    number: 1,
    title: "Analyse de vos besoins",
    description: "Nous commençons par une analyse approfondie de vos besoins et objectifs. Cette étape nous permet de comprendre parfaitement votre projet et de vous proposer la solution la plus adaptée."
  },
  {
    number: 2,
    title: "Proposition sur mesure",
    description: "Sur la base de notre analyse, nous élaborons une proposition personnalisée qui répond précisément à vos besoins. Nous vous présentons notre approche et notre méthodologie."
  },
  {
    number: 3,
    title: "Développement agile",
    description: "Nous développons votre solution en utilisant une méthodologie agile. Cette approche nous permet d'être réactifs et de vous impliquer à chaque étape du développement."
  },
  {
    number: 4,
    title: "Tests et validation",
    description: "Nous effectuons des tests approfondis pour garantir la qualité et la fiabilité de votre solution. Nous validons ensemble chaque fonctionnalité avant de passer à l'étape suivante."
  },
  {
    number: 5,
    title: "Déploiement et suivi",
    description: "Nous déployons votre solution et assurons un suivi rigoureux. Nous restons à votre disposition pour toute question ou évolution future."
  }
];

const HowItWorksV2 = () => {
  return <HowItWorksV2Client steps={steps} />;
};

export default HowItWorksV2;
