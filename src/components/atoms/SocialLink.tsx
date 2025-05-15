'use client'

import React from 'react';
import Icon from './Icon';

interface SocialLinkProps {
  href: string;
  icon: 'email' | 'linkedin' | 'github';
  label: string;
  onClick?: () => void;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, onClick, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block py-2 px-4 group ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <Icon name={icon} className="text-secondary" />
    </a>
  );
};

export default SocialLink;
