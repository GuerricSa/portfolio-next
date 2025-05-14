'use client'

import React from 'react';
import Text from '../atoms/Text';

interface SkillDescriptionProps {
  title: string;
  content: string;
  isActive: boolean;
  minHeight: number;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({
  title,
  content,
  isActive,
  minHeight,
}) => {
  return (
    <div
      className={`w-full p-6 lg:p-10 bg-secondary rounded-md absolute transition-all duration-1000 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
      }`}
      style={{ minHeight }}
      role="tabpanel"
      aria-hidden={!isActive}
    >
      <Text variant="h3" className="mb-4">
        {title}
      </Text>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default SkillDescription;
