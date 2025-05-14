'use client'

import React from 'react';
import Image from './Image';
import { StaticImageData } from 'next/image';

interface SkillLogoProps {
  src: string | StaticImageData;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  position: { left: string; top: string };
  circleName: string;
}

const SkillLogo: React.FC<SkillLogoProps> = ({
  src,
  alt,
  isActive,
  onClick,
  position,
  circleName,
}) => {
  return (
    <button
      onClick={onClick}
      className={`logo w-7 lg:w-10 h-7 lg:h-10 transition-[filter] grayscale hover:grayscale-0 ${
        isActive ? 'grayscale-0' : ''
      }`}
      style={{
        left: position.left,
        top: position.top,
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
      aria-label={`Voir la description de ${alt}`}
      aria-selected={isActive}
      role="tab"
      aria-controls={`${circleName}-panel`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-full h-full"
      />
    </button>
  );
};

export default SkillLogo;
