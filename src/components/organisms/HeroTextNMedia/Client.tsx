'use client'

import React, { useEffect, useRef, useState } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import portraitImage from '../../../../public/images/portrait_guerric.webp';
import CalendlyButton from '../../atoms/CalendlyButton/Server';

interface HeroTextNMediaProps {
  calendlyUrl: string;
  calendlyText?: string;
  calendlyStyle?: 'primary' | 'secondary' | 'tertiary'| 'quaternary';
}

const HeroTextNMediaClient: React.FC<HeroTextNMediaProps> = ({ calendlyUrl, calendlyText, calendlyStyle }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      const ratio = (sectionCenter - screenCenter) / (windowHeight / 2);
      const clampedRatio = Math.max(-1, Math.min(1, ratio));
      const angle = clampedRatio * 5;

      setRotation(angle);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="main-content"
      className="container mx-auto transition-transform duration-300 ease-out flex flex-col items-center lg:flex-row gap-14 py-10 lg:py-28 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <span>Hello, moi c&apos;est</span>
          <Text variant="h1" className="lg:text-left lg:max-w-xl">
            Guerric
            <br />
            <span className="text-tertiary">Sant</span>
          </Text>
        </div>
        <div className='flex flex-col gap-4 justify-center'>
        <Text variant="body">
            <strong>Web strategist & Developer</strong>
          </Text>
          <Text variant="body">
            <strong>+10 projets</strong><br />réalisés
          </Text>
          <Text variant="body">
            Issu d&apos;une <strong>agence web</strong> parisienne
          </Text>
        </div>
        <Text variant="body" className='lg:col-span-2 border-t-tertiary border-t-2 pt-8'>
          Je suis web developer freelance basé à Chambéry. Avant ça, j’ai travaillé pour des dizaines de grandes marques au sein de la 1ère agence française Hubspot. 
          <br />
          De la conception de votre maquette, à la mise en ligne, laissez-moi prendre les commandes pour faire de votre site, votre meilleur commercial !
        </Text>
        <Text variant="body" className='lg:col-span-2 border-t-tertiary border-t-2 pt-8'>
          <strong>Pourquoi moi, et pas un autre ?</strong>
          <br />
          Avant de me reconvertir comme développeur, j’ai travaillé une dizaine d’années en banque et en finance.
          <br />
        Alors les problématiques des entreprises, je connais. Je sais aussi parler la langue de vos clients, et comprendre vos enjeux business.
        <br />
        Avec moi, vous ne signez pas pour un développeur. Mais pour un partenaire stratégique 360.
        </Text>
      </div>
      <div>
        <Image
          src={portraitImage}
          alt="Portrait de Guerric SANT"
          width={400}
          height={540}
          className="w-[25rem] max-w-full z-0"
          rotation={rotation}
          priority
        />
        <CalendlyButton url={calendlyUrl} calendlyText={calendlyText} variant={calendlyStyle} className="mt-4 w-fit mx-auto" />
      </div>
    </section>
  );
};

export default HeroTextNMediaClient;
