'use client'

import React from 'react';
import Link from 'next/link';
import { useHoverAnimation } from '../../hooks/useHoverAnimation';

const Logo: React.FC = () => {
  const handleMouseEnter = useHoverAnimation();

  return (
    <div className="text-2xl font-bold lg:w-80">
      <Link
        href="/"
        className="text-secondary flex logo--hover-effect w-fit p-2"
        onMouseEnter={handleMouseEnter}
      >
        <span className="inline-block">G</span>
        <span className="inline-block">S</span>
        <span className="text-tertiary inline-block">.</span>
      </Link>
    </div>
  );
};

export default Logo;
