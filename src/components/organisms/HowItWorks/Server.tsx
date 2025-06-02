import React from 'react';
import HowItWorksClient from "./Client";

export const steps = [
  {
    number: 1,
    title: "Premier Échange",
    description: "<p>Un appel de prise de contact pour faire connaissance.</br> On parle de votre projet, de vos objectifs, de vos contraintes. Je vous pose quelques questions pour cerner vos besoins, et je vous explique comment je travaille. À l’issue de cet échange, vous saurez si vous avez envie de me confier la suite !</p>"
  },
  {
    number: 2,
    title: "Cadrage du projet",
    description: "<p>On planifie un second échange (plus complet) pour définir ensemble :<ul><li>le périmètre du projet,</li><li>les fonctionnalités souhaitées,</li><li>les pages à créer,</li><li>les délais et priorités.</li><li>Vous recevez ensuite une proposition claire avec un budget estimé, un planning et un espace de suivi (via Notion) pour que vous puissiez suivre l’avancement du projet en toute transparence.</li></p>"
  },
  {
    number: 3,
    title: "Copywriting",
    description: "<p>Textes, images, structure des pages…</br>Si vous avez déjà tout, parfait. Sinon, je peux vous recommander des partenaires de confiance (rédacteurs, photographes…) ou même me charger de la coordination. L’idée : vous faire gagner du temps et alléger votre charge mentale.</p>"
  },
  {
    number: 4,
    title: "UX/UI design",
    description: "<p>Selon la complexité du projet, une maquette peut être utile pour valider l’interface avant le développement.</br>Là encore, je peux vous proposer un accompagnement ou faire appel à un designer si besoin, selon vos envies et votre budget.</p>"
  },
  {
    number: 5,
    title: "Développement",
    description: "<p>Je passe à l’intégration et au développement du site, en respectant les bonnes pratiques de performance, d’accessibilité et de SEO.<br/>Chaque étape est suivie dans votre espace Notion, avec des points réguliers pour valider les avancées.</p>"
  },
  {
    number:6,
    title: "Livraison & Formation",
    description: "<p>On teste ensemble toutes les pages et fonctionnalités.</br>Une fois les derniers ajustements effectués, je vous accompagne pour la mise en ligne et vous remets une mini documentation pour gérer votre site en toute autonomie.</p>"
  }
];

export default function HowItWorks(): React.ReactElement {
  return <HowItWorksClient steps={steps} />;
}
