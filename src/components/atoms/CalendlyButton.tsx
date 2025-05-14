'use client';

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyButtonProps {
  url: string;
  className?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ url, className = '' }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className={`whitespace-nowrap btn-contact btn-calendly bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition cursor-pointer ${className}`}
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

export default CalendlyButton;
