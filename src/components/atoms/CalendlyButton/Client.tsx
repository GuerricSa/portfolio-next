'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyButtonProps {
  url: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  className?: string;
}

const CalendlyButtonClient: React.FC<CalendlyButtonProps> = ({ url,variant = 'baseStyle', className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  const baseStyle = 'cursor-pointer';
  const primaryStyle = 'button--primary';
  const secondaryStyle = 'button--secondary';
  const tertiaryStyle = 'button--animated-primary'
  const quaternaryStyle = 'button--animated-secondary'

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
