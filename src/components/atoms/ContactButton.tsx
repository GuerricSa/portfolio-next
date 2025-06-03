'use client'

import React from 'react';

interface ContactButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = 'button--primary',
  children,
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ContactButton;
