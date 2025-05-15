'use client'

import React from 'react';
import Text from '../atoms/Text';

interface OfferCardProps {
  title: string;
  description: string;
  onClick: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  description,
  onClick,
  style,
  className = '',
}) => {
  return (
    <div
      className={`cursor-pointer card bg-primary rounded-md p-8 left-1/2 top-1/2 transition-all duration-500 ease-in-out active:scale-95 ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-4">
        <Text variant="h3" className="text-tertiary mb-0">
          {title}
        </Text>
      </div>
      <Text variant="body" className="text-secondary mb-6">
        {description}
      </Text>
      <Text variant="body" className="text-secondary underline">
        En savoir plus
      </Text>
    </div>
  );
};

export default OfferCard;
