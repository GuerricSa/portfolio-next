'use client';

import React from 'react';
import Image from '../atoms/Image';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 200, height = 200, className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="max-h-12 w-auto object-contain"
      />
    </div>
  );
};

export default ClientLogo;
