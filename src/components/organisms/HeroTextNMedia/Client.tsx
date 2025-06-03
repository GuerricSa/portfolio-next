'use client'

import React, { useEffect, useRef, useState } from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image';
import portraitImage from '../../../../public/images/portrait_guerric.webp';

const HeroTextNMediaClient: React.FC = () => {
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
      className="container mx-auto transition-transform duration-300 ease-out flex flex-col items-center lg:flex-row gap-14 py-10 lg:py-28"
    >
      <div className="">
        <Text variant="h1" className="text-center lg:text-left lg:max-w-xl">
          Un site web,
          <br />
          rapide, visible
          <br />
          <span className="text-tertiary">pensé pour convertir</span>
        </Text>
        <Text variant="body" className='text-center mt-8 font-semibold lg:text-left lg:max-w-xl'>
          Guerric SANT - Web strategist & Developer
        </Text>
      </div>
      <Image
        src={portraitImage}
        alt="Portrait de Guerric SANT"
        width={400}
        height={540}
        className="w-[25rem] max-w-full"
        rotation={rotation}
        priority
      />
    </section>
  );
};

export default HeroTextNMediaClient;
