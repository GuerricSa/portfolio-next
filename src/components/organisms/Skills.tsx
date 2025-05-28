'use client'

import React, { useState, useRef, useEffect } from 'react';
import Text from '../atoms/Text';
import SkillCircle from '../molecules/SkillCircle';
import SkillDescription from '../molecules/SkillDescription';

// Import des logos
import htmlLogo from '../../../public/images/skills_logos/html.svg';
import cssLogo from '../../../public/images/skills_logos/css.svg';
import jsLogo from '../../../public/images/skills_logos/javascript.svg';
import reactLogo from '../../../public/images/skills_logos/react.svg';
import nodeLogo from '../../../public/images/skills_logos/nodejs.svg';
import tailwindLogo from '../../../public/images/skills_logos/tailwindcss.svg';
import phpLogo from '../../../public/images/skills_logos/php.svg';
import rubyLogo from '../../../public/images/skills_logos/ruby.svg';
import wordpressLogo from '../../../public/images/skills_logos/wordpress.svg';
import drupalLogo from '../../../public/images/skills_logos/drupal.svg';
import hubspotLogo from '../../../public/images/skills_logos/hubspot.svg';
import figmaLogo from '../../../public/images/skills_logos/figma.svg';
import notionLogo from '../../../public/images/skills_logos/notion.svg';
import slackLogo from '../../../public/images/skills_logos/slack.svg';

const Skills: React.FC = () => {
  const [activeDescription, setActiveDescription] = useState('frontendLogos');
  const [containerHeight, setContainerHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const descriptionRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
        '<p>Le front-end, c\'est la partie visible d\'un site : ce que les utilisateurs voient et avec quoi ils interagissent. Cela inclut l\'affichage des contenus, les animations, les boutons ou encore la navigation.</p><p>J\'utilise principalement <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> et <strong>Tailwind CSS</strong> pour créer des interfaces modernes, rapides et adaptées à tous les écrans.</p><p>C\'est le coeur de mon métier et ce pourquoi la majorité de mes clients me paient.</p>',
    },
    backendLogos: {
      title: 'Backend',
      content:
        '<p>Le back-end désigne la partie \'invisible\' d\'un site ou d\'une application : gestion des données, des utilisateurs, des formulaires ou encore des bases de données.</p><p>J\'ai découvert le back-end pendant ma formation avec <strong>Ruby on Rails</strong>, puis j\'ai continué à apprendre avec <strong>Node.js</strong> et <strong>PHP</strong> sur différents projets clients.</p><p>Ces compétences me permettent de créer des sites plus dynamiques, capables de stocker et traiter des informations de manière fiable.</p>',
    },
    cmsLogos: {
      title: 'CMS',
      content:
        '<p>Un CMS (Content Management System) est un outil qui permet de créer et gérer un site sans avoir à coder toute la structure à la main. C\'est très pratique pour les sites vitrines ou les blogs.</p><p>Je maîtrise plusieurs CMS populaires comme <strong>WordPress</strong>, <strong>Drupal</strong> et <strong>HubSpot</strong>. Je les utilise pour créer des sites faciles à mettre à jour, performants et bien référencés.</p><p>Dans mon dernier job, j\'ai beaucoup travaillé sur <strong>HubSpot</strong> et <strong>Wordpress</strong>pour intégrer des pages sur-mesure et accompagner des clients B2B dans leur stratégie web.</p>',
    },
    toolsLogos: {
      title: 'Autres outils',
      content:
        '<p>Au-delà du code, j\'utilise plusieurs outils pour mieux collaborer, structurer mes projets ou concevoir des maquettes avant le développement.</p><p><strong>Figma</strong> me permet de transformer des idées en maquettes visuelles claires. <strong>Notion</strong> est mon centre de gestion de projet : je m\'en sers pour organiser les tâches et échanger avec mes clients, je m\'en sers d\'ailleurs aussi pour gérer mon entreprise</strong>. Slack est un outil de communication rapide, très utilisé en équipe.</p><p>Bien sur, il y a de nombreux autres outils avec lesquelles je peux travailler. Que ce soit chez Microsoft ou chez Google.</p>',
    },
  };

  useEffect(() => {
    const updateHeight = () => {
      const nodes = Object.values(descriptionRefs.current);
      if (!nodes.length) return;

      nodes.forEach((node) => {
        if (node) {
          node.style.minHeight = 'auto';
        }
      });

      let maxHeight = 0;

      nodes.forEach((node) => {
        if (node) {
          const height = node.getBoundingClientRect().height;
          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });

      if (window.innerWidth >= 728) {
        setIsDesktop(true);
        setContainerHeight(maxHeight > 450 ? maxHeight : 450);
      } else {
        setIsDesktop(false);
        setContainerHeight(maxHeight);
      }
    };

    updateHeight();

    const handleWindowResize = () => {
      setContainerHeight(0);
      requestAnimationFrame(updateHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isDesktop]);

  return (
    <section className="bg-primary py-12" aria-labelledby="skills-title">
      <div className="container mx-auto">
        <Text variant="h2" id="skills-title" className="text-secondary mb-8 lg:mb-12">
          Mes compétences techniques
        </Text>
        <div className="flex flex-col md:flex-row-reverse justify-between gap-5">
          <div className="w-full md:w-1/2 bg-secondary rounded-md p-8" role="region" aria-label="Compétences techniques">
            <div className="circle-container relative h-[600px]">
              <SkillCircle
                className='circle circle-1'
                skills={frontendLogos}
                circleName="frontendLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-2'
                skills={backendLogos}
                circleName="backendLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-3'
                skills={cmsLogos}
                circleName="cmsLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
              <SkillCircle
                className='circle circle-4'
                skills={[...designLogos, ...toolsLogos]}
                circleName="toolsLogos"
                activeCircle={activeDescription}
                onCircleClick={setActiveDescription}
              />
            </div>
          </div>
          <div
            className="w-full md:w-1/2 h-full relative"
            id='descriptionContainer'
            style={{ minHeight: containerHeight ? containerHeight : 'auto' }}
            role="region"
            aria-label="Description des compétences"
          >
            {Object.entries(descriptions).map(([key, desc]) => (
              <SkillDescription
                key={key}
                title={desc.title}
                content={desc.content}
                isActive={activeDescription === key}
                minHeight={containerHeight}
                ref={(el) => { descriptionRefs.current[key] = el }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
