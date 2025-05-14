'use client'

import React from 'react';
import SkillLogo from '../atoms/SkillLogo';
import { StaticImageData } from 'next/image';

interface Skill {
  src: string | StaticImageData;
  alt: string;
}

interface SkillCircleProps {
  skills: Skill[];
  circleName: string;
  activeCircle: string;
  className?: string;
  onCircleClick: (circleName: string) => void;
}

const SkillCircle: React.FC<SkillCircleProps> = ({
  skills,
  circleName,
  activeCircle,
  className,
  onCircleClick,
}) => {
  const positions = {
    2: [
      { left: '25%', top: '50%' },
      { left: '75%', top: '50%' },
    ],
    3: [
      { left: '50%', top: '0%' },
      { left: '3.33%', top: '66.66%' },
      { left: '96.66%', top: '66.66%' },
    ],
    4: [
      { left: '50%', top: '0%' },
      { left: '0%', top: '50%' },
      { left: '50%', top: '100%' },
      { left: '100%', top: '50%' },
    ],
    5: [
      { left: '50%', top: '0%' },
      { left: '4%', top: '30%' },
      { left: '20%', top: '90%' },
      { left: '96%', top: '30%' },
      { left: '80%', top: '90%' },
    ],
  };

  return (
    <div className={className} role="group" aria-label={`Compétences ${circleName}`}>
      {skills.map((skill, index) => (
        <SkillLogo
          key={skill.alt}
          src={skill.src}
          alt={skill.alt}
          isActive={activeCircle === circleName}
          onClick={() => onCircleClick(circleName)}
          position={positions[skills.length as keyof typeof positions][index]}
          circleName={circleName}
        />
      ))}
    </div>
  );
};

export default SkillCircle;
