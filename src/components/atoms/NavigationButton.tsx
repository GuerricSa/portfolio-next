'use client'

import React from 'react';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  direction: 'prev' | 'next';
  paths: string[];
  activePath: number;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  direction,
  paths,
  activePath,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-90 transition-all cursor-pointer ${
        direction === 'prev' ? 'translate-x-full left-0' : '-translate-x-full right-0'
      } ${className}`}
    >
      <svg
        className={`${direction === 'prev' ? 'rotate-180' : ''} group`}
        fill="#000000"
        height="32px"
        width="32px"
        version="1.1"
        viewBox="0 0 512 512"
      >
        <g transform="translate(1 1)">
          <g>
            <g>
              {paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  className={`${
                    i === activePath ? 'fill-tertiary' : ''
                  } group-hover:fill-tertiary`}
                />
              ))}
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default NavigationButton;
