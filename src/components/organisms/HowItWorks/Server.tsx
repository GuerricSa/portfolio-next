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
    description: "<p>L’idée de ce point est de comprendre précisément vos objectifs, votre cible et l’utilisation que vous aurez de votre site internet. Pourquoi ? Parce que cela permet de voir ce qu’il est utile de mettre en place ou non : Site web ou landing page ? Multi-langue ou non ? combien de pages ? quelles fonctionnalités ?<br/>On discute également à ce moment-là des priorités et des délais.<br/><br/>À la fin de cet entretien, je vous donnerai accès à un espace Notion (ou autre si vous avez l’habitude de travailler avec un autre outil), qui nous permettra de suivre : l’avancée du projet, la complétion des tâches…<br/>J’en profiterai également pour vous envoyer un devis précis en fonction de ce qui a été décidé pendant l’entretien.</p>"
  },
  {
    number: 3,
    title: "Copywriting",
    description: "<p>Avant de pouvoir créer le site, il faut savoir ce qu’on va y mettre.<br/>Ici, 2 options :<ul><li>Vous avez déjà le contenu du site, ou vous souhaitez vous en charger seul.</li><li>Vous n’avez pas encore le contenu du site, et vous n’avez pas le temps ou l’envie de vous en occuper.</li></ul><br/><br/>Si c’est la deuxième option qui vous correspond, pas de souci. Je travaille avec des experts en rédaction et en SEO qui seront capables d’analyser votre secteur d’activité, optimiser pour convertir et pour plaire aux navigateurs.</p>"
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
