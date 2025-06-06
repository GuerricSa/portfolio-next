import React from 'react';
import CalendlyButton from '../atoms/CalendlyButton/Server';
import Text from '../atoms/Text';

interface HeroSimpleProps {
  calendlyUrl: string;
  calendlyText?: string;
  calendlyStyle?: 'primary' | 'secondary' | 'tertiary'| 'quaternary';
}

const HeroSimple: React.FC<HeroSimpleProps> = ({ calendlyUrl, calendlyText, calendlyStyle }) => {
  return (
    <section className="container flex flex-col items-center justify-center text-center space-y-6 px-4 py-12 md:py-16 lg:py-20">
      <Text variant="h1" className="text-3xl md:text-4xl lg:text-5xl">
        Votre site doit être
        <br />
        votre <span className="text-tertiary">meilleur commercial</span>.
      </Text>

      <Text variant="body" className="text-lg md:text-xl font-semibold lg:text-2xl max-w-2xl">
      Je conçois des sites sur-mesure, performants, design<br />et pensés pour convertir.
      </Text>

      <CalendlyButton url={calendlyUrl} calendlyText={calendlyText} variant={calendlyStyle} className="mt-4" />
    </section>
  );
};

export default HeroSimple;
