import React from 'react';
import SkillsClient from './Client'
import htmlLogo from '../../../../public/images/skills_logos/html.svg';
import cssLogo from '../../../../public/images/skills_logos/css.svg';
import jsLogo from '../../../../public/images/skills_logos/javascript.svg';
import reactLogo from '../../../../public/images/skills_logos/react.svg';
import nodeLogo from '../../../../public/images/skills_logos/nodejs.svg';
import tailwindLogo from '../../../../public/images/skills_logos/tailwindcss.svg';
import phpLogo from '../../../../public/images/skills_logos/php.svg';
import rubyLogo from '../../../../public/images/skills_logos/ruby.svg';
import wordpressLogo from '../../../../public/images/skills_logos/wordpress.svg';
import drupalLogo from '../../../../public/images/skills_logos/drupal.svg';
import hubspotLogo from '../../../../public/images/skills_logos/hubspot.svg';
import figmaLogo from '../../../../public/images/skills_logos/figma.svg';
import notionLogo from '../../../../public/images/skills_logos/notion.svg';
import slackLogo from '../../../../public/images/skills_logos/slack.svg';

  // Organisation des logos par catégorie
  const frontendLogos = [
    { src: htmlLogo, alt: 'Logo HTML' },
    { src: cssLogo, alt: 'Logo CSS' },
    { src: jsLogo, alt: 'Logo JavaScript' },
    { src: reactLogo, alt: 'Logo React' },
    { src: tailwindLogo, alt: 'Logo Tailwind CSS' },
  ];

  const backendLogos = [
    { src: nodeLogo, alt: 'Logo Node.js' },
    { src: phpLogo, alt: 'Logo PHP' },
    { src: rubyLogo, alt: 'Logo Ruby' },
  ];

  const cmsLogos = [
    { src: wordpressLogo, alt: 'Logo WordPress' },
    { src: drupalLogo, alt: 'Logo Drupal' },
    { src: hubspotLogo, alt: 'Logo HubSpot' },
  ];

  const designLogos = [{ src: figmaLogo, alt: 'Logo Figma' }];

  const toolsLogos = [
    { src: notionLogo, alt: 'Logo Notion' },
    { src: slackLogo, alt: 'Logo Slack' },
  ];

  const descriptions = {
    frontendLogos: {
      title: 'Frontend',
      content:
        '<p>Le front-end, c\'est la partie visible d\'un site : ce que les utilisateurs voient et avec quoi ils interagissent. Cela inclut l\'affichage des contenus, les animations, les boutons ou encore la navigation.</p><p>J\'utilise principalement <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> et <strong>Tailwind CSS</strong> pour créer des interfaces modernes, rapides et adaptées à tous les écrans.</p>',
    },
    backendLogos: {
      title: 'Backend',
      content:
        '<p>Le back-end désigne la partie \'invisible\' d\'un site ou d\'une application : gestion des données, des utilisateurs, des formulaires ou encore des bases de données.</p><p>J\'ai découvert le back-end pendant ma formation avec <strong>Ruby on Rails</strong>, puis j\'ai continué à apprendre avec <strong>Node.js</strong> et <strong>PHP</strong> sur différents projets clients.</p><p>Ces compétences me permettent de créer des sites plus dynamiques, capables de stocker et traiter des informations de manière fiable.</p>',
    },
    cmsLogos: {
      title: 'CMS',
      content:
        '<p>Un CMS (Content Management System) est un outil qui permet de créer et gérer un site sans avoir à coder toute la structure à la main. C\'est très pratique pour les sites vitrines ou les blogs.</p><p>Je maîtrise plusieurs CMS populaires comme <strong>WordPress</strong>, <strong>Drupal</strong> et <strong>HubSpot</strong>. Je les utilise pour créer des sites faciles à mettre à jour, performants et bien référencés.</p><p>Dans mon dernier job, j\'ai beaucoup travaillé sur <strong>HubSpot</strong> et <strong>Wordpress</strong> pour intégrer des pages sur-mesure et accompagner des clients B2B dans leur stratégie web.</p>',
    },
    toolsLogos: {
      title: 'Autres outils',
      content:
        '<p>Au-delà du code, j\'utilise plusieurs outils pour mieux collaborer, structurer mes projets ou concevoir des maquettes avant le développement.<br /><br /><ul class="list-inside list-disc"><li>Figma me permet de transformer des idées en maquettes visuelles claires.</li><li>Notion est mon centre de gestion de projet : je m\'en sers pour organiser les tâches et échanger avec mes clients, je m\'en sers d\'ailleurs aussi pour gérer mon entreprise.</li><li>Slack est l’outil de communication que j’ai le plus utilisé sur mes projets. Je peux aussi m’adapter à d’autres moyens de communication sans aucun problème.</li></ul><br /><br />Bien sur, il y a de nombreux autres outils avec lesquelles je peux travailler. Que ce soit chez Microsoft ou chez Google.</p>'
    },


  };

  export default function Skills(): React.ReactElement {
    return <SkillsClient descriptions={descriptions} frontendLogos={frontendLogos} backendLogos={backendLogos} cmsLogos={cmsLogos} designLogos={designLogos} toolsLogos={toolsLogos} />
  }
