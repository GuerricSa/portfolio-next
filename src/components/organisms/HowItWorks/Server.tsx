import React from 'react';
import HowItWorksClient from "./Client";

export const steps = [
  {
    number: 1,
    title: "Premier Échange",
    description: "<p>Un appel de prise de contact pour faire connaissance.<br/>On parle de l’essentiel : votre projet, vos contraintes...<br/>Je vous pose quelques questions pour cerner vos besoins, et je vous explique comment je travaille. L’objectif de cet échange est de voir s'il y a un intérêt à ce que qu’on travaille ensemble. Si c’est le cas, on planifie un second échange, qui lui sera beaucoup plus complet.</p>"
  },
  {
    number: 2,
    title: "Cadrage du projet",
    description: "<p>Ce premier échange permet de clarifier vos objectifs, votre cible et l’usage prévu du site. On définit ensemble les priorités : type de site (vitrine ou landing page), nombre de pages, fonctionnalités, délais...<br/><br/>À l’issue de cet entretien, vous recevrez un devis détaillé ainsi qu’un espace de suivi (Notion ou autre outil si besoin) pour suivre l’avancement du projet.</p>"
  },
  {
    number: 3,
    title: "Copywriting",
    description: " <p>Avant de créer le site, il faut définir son contenu. Deux possibilités :<ul><li>Vous avez déjà les textes, ou vous souhaitez vous en occuper.</li><li>Vous préférez déléguer cette partie.</li></ul><br/>Dans ce cas, je travaille avec des experts en rédaction et SEO capables d’optimiser votre contenu pour votre cible et pour le référencement.</p>"
  },
  {
    number: 4,
    title: "UX/UI design",
    description: "<p>Comme pour le copywriting, si vous avez déjà des maquettes prêtes à l’emploi, cette étape n’a pas lieu d’être. Si ce n’est pas le cas, je travaille avec des UX/UI Designer qui optimiseront l’expérience utilisateur pour convertir un maximum.</p>"
  },
  {
    number: 5,
    title: "Développement",
    description: "<p>C’est l’heure de développer la ou les page(s).<br/>Que ce soit sur un CMS (Hubspot, Wordpress…) ou sans, je vous livrerai les éléments page par page afin que vous puissiez faire vos retours au fil de l’eau.<br/>Si vous le souhaitez, je peux également me charger de l’hébergement et du nom de domaine (si vous n’en avez pas déjà).</p>"
  },
  {
    number:6,
    title: "Livraison & Formation",
    description: "<p>Ça y est, le site est prêt.<br/>On teste ensemble toutes les pages et fonctionnalités. Et je vous accompagne pour la mise en ligne.<br/>À ce moment-là, je passe souvent un peu de temps avec mes clients pour leur expliquer comment leur site fonctionne. Et si besoin, je remets un document afin que vous puissiez gérer votre site en toute autonomie.</p>"
  }
];

export default function HowItWorks(): React.ReactElement {
  return <HowItWorksClient steps={steps} />;
}
