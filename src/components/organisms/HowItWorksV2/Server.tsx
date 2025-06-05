import React from 'react';
import HowItWorksV2Client from './Client';

const steps = [
  {
    number: 1,
    title: "L’appel découverte",
    subtitle: "Faisons connaissance",
    description: "<p>Un premier échange, sans engagement, pour parler de votre projet et de vos attentes.<br />On fait le point sur vos besoins, vos objectifs, votre cible et l’usage que vous souhaitez pour votre site.<br /><br />Je vous pose les bonnes questions pour cerner vos enjeux :<ul class='mb-2'><li>⭢ Type de site (vitrine, landing page, etc.)</li><li>⭢ Nombre de pages</li><li>⭢ Fonctionnalités clés (animations, etc.)</li><li>⭢ Délais et contraintes</li></ul>Et je vous explique ma façon de travailler, en toute transparence.</p>",
    objective:"<p><span class='font-semibold pb-2 block'>L’objectif ?</span>Vérifier si le courant passe et si je peux réellement vous être utile. Si c’est le cas, je vous envoie un devis détaillé sous quelques jours.<br /><br />Envie d’avancer ensemble ? On fixe alors un second rendez-vous pour rentrer dans le concret.</p>"
  },
  {
    number: 2,
    title: "Cadrage du projet",
    subtitle: "Posons des bases solides",
    description: "<p>Lors de ce deuxième échange, on va plus loin:<ul class='mb-2'><li>⭢  Je creuse vos besoins, vos envies, vos contraintes techniques ou budgétaires, page par page.</li><li>⭢  On discute ensemble du contenu, des inspirations, des idées adaptées à votre secteur et à votre cible.</li><li>⭢  On définit ensemble vos priorités et les options à intégrer (animations, fonctionnalités spécifiques, etc.).</li><li>⭢  On valide aussi les prestataires à mobiliser si besoin (UX/UI designer, copywriter, expert SEO…).</li></ul>De mon côté, j’arrive préparé avec des suggestions et des exemples concrets.</p>",
    objective:"<p><span class='font-semibold pb-2 block'>L’objectif ?</span>Établir un plan d’action clair et aligné, pour que la suite du projet se déroule sans surprise.</p>"
  },
  {
    number: 3,
    title: "Première étape",
    subtitle: "Rédigeons le contenu de A à Z",
    description: "Avant de passer à la création, place au contenu.",
    objective: "<p><span class='font-semibold pb-2 block'>Deux options s’offrent à vous :</span><ul class='mb-2'><li class='mb-4'>⭢ Vous avez déjà vos textes ou souhaitez les rédiger vous-même ?<br />Parfait, on avance directement !</li><li>⭢ Vous préférez déléguer ?<br />Je m’entoure de rédacteurs et experts SEO, capables de créer des contenus percutants, pensés pour séduire votre audience… et Google.</li></ul></p>"
  },
  {
    number: 4,
    title: "Deuxième étape",
    subtitle: "Créons la maquette de votre site",
    description: "<p>Vous avez déjà vos maquettes ? Ok, on passe à la suite !<br /><br />Si vous n’avez pas encore de maquettes, je mobilise mon réseau d’UX/UI designers pour créer un parcours utilisateur élégant, efficace et unique.</p>",
    objective:"<p><span class='font-semibold pb-2 block'>L’objectif ?</span>Un site beau, intuitif et optimisé pour guider vos visiteurs jusqu’à la conversion.</p>"
  },
  {
    number: 5,
    title: "Troisième étape",
    subtitle: "Développons votre site, étape par étape",
    description: "<p>Je développe votre projet, page après page, sur la plateforme de votre choix (WordPress, Hubspot ou sur-mesure).<br /><br />Vous validez chaque étape et vos retours sont intégrés en continu, pour un site qui vous ressemble vraiment.</p>",
    objective:"<p><span class='font-semibold pb-2 block'>Besoin d’un conseil sur la solution la plus adaptée ?</span>Je vous guide si nécessaire, tout en respectant vos préférences.<br /><br />Et si vous le souhaitez, je peux aussi m’occuper de l’hébergement et du nom de domaine, pour vous simplifier la vie.</p>"
  },
  {
    number: 6,
    title: "Dernière étape",
    subtitle: "Publions votre site !",
    description: "<p>Votre site est prêt !<br /><br />Avant la mise en ligne, on teste ensemble chaque page et chaque élément du site, pour s’assurer que tout est parfaitement opérationnel.<br /><br />Je vous guide lors de la publication, puis je prends le temps de vous montrer comment gérer votre site au quotidien.</p>",
    objective:"<p><span class='font-semibold pb-2 block mb-0.5'>Une question ? Un doute ?</span>Je vous fournis un guide pratique pour que vous puissiez piloter votre site en toute autonomie, sans stress.</p>"
  }
];

const HowItWorksV2 = () => {
  return <HowItWorksV2Client steps={steps} />;
};

export default HowItWorksV2;
