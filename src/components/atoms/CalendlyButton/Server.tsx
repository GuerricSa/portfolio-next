import React from 'react';
import CalendlyButtonClient from './Client';

interface CalendlyButtonProps {
  url: string;
  calendlyText?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  className?: string;
}

export default function CalendlyButton({ url, calendlyText, variant, className = '' }: CalendlyButtonProps): React.ReactElement {
  return <CalendlyButtonClient url={url} calendlyText={calendlyText} variant={variant} className={className} />;
}
