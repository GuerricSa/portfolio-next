'use client'

import React from 'react';
import NextImage from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  rotation?: number;
  priority?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  rotation = 0,
  priority = false,
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-md object-contain max-h-full"
        priority={priority}
      />
    </div>
  );
};

export default Image;
