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
  className = '',
  children,
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      className={`lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition cursor-pointer ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ContactButton;
