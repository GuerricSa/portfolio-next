'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyButtonProps {
  url: string;
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string;
}

const CalendlyButtonClient: React.FC<CalendlyButtonProps> = ({ url,variant = 'baseStyle', className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  const baseStyle = 'cursor-pointer';
  const primaryStyle = 'lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition';
  const secondaryStyle = 'whitespace-nowrap btn-contact btn-calendly bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition';
  const tertiaryStyle = 'bg-secondary border-tertiary border-2 text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-tertiary hover:text-primary transition'

  const buttonStyle = variant === 'primary'
    ? primaryStyle
    : variant === 'secondary'
    ? secondaryStyle
    : variant === 'tertiary'
    ? tertiaryStyle
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
