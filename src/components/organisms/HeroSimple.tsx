import React from 'react';
import CalendlyButton from '../atoms/CalendlyButton/Server';
import Text from '../atoms/Text';

interface HeroSimpleProps {
  calendlyUrl: string;
  calendlyStyle?: 'primary' | 'secondary' | 'tertiary'| 'quaternary';
}

const HeroSimple: React.FC<HeroSimpleProps> = ({ calendlyUrl, calendlyStyle = 'quaternary' }) => {
  return (
    <section className="container flex flex-col items-center justify-center text-center space-y-6 px-4 py-12 md:py-16 lg:py-20">
      <Text variant="h1" className="text-3xl md:text-4xl lg:text-5xl">
        Gagner en <span className="text-tertiary">visibilité</span>
        <br />
        et en <span className="text-tertiary">crédibilité</span>
      </Text>

      <Text variant="body" className="text-lg md:text-xl font-semibold lg:text-2xl max-w-2xl">
        Je conçois des sites performants, design,<br/>pensés pour convertir.
      </Text>

      <CalendlyButton url={calendlyUrl} variant={calendlyStyle} className="mt-4" />
    </section>
  );
};

export default HeroSimple;
