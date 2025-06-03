'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyButtonProps {
  url: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  className?: string;
}

const CalendlyButtonClient: React.FC<CalendlyButtonProps> = ({ url,variant, className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  const baseStyle = 'cursor-pointer';
  const primaryStyle = 'button--primary cursor-pointer';
  const secondaryStyle = 'button--secondary cursor-pointer';
  const tertiaryStyle = 'button--animated-primary cursor-pointer'
  const quaternaryStyle = 'button--animated-secondary cursor-pointer'

  const buttonStyle = variant === 'primary'
    ? primaryStyle
    : variant === 'secondary'
    ? secondaryStyle
    : variant === 'tertiary'
    ? tertiaryStyle
    : variant === 'quaternary'
    ? quaternaryStyle
    : baseStyle;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className={`${baseStyle} ${buttonStyle} ${className}`}
      role="complementary"
      aria-label="Planifier un rendez-vous"
    >
      <PopupButton
        url={url}
        rootElement={document.body}
        text="Prendre rendez-vous"
        aria-label="Ouvrir le calendrier de rendez-vous"
      />
    </div>
  );
};

export default CalendlyButtonClient;
