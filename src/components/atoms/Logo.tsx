'use client'

import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className="text-2xl font-bold lg:w-80">
      <Link
        href="/"
        className="text-secondary flex logo--hover-effect w-fit p-2"
        onMouseEnter={(e) => {
          const link = e.currentTarget;
          if (!link.classList.contains('animate')) {
            link.classList.add('animate');
            setTimeout(() => {
              link.classList.remove('animate');
            }, 1400);
          }
        }}
      >
        <span className="inline-block">G</span>
        <span className="inline-block">S</span>
        <span className="text-tertiary inline-block">.</span>
      </Link>
    </div>
  );
};

export default Logo;
