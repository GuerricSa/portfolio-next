import React from 'react';
import CalendlyButtonClient from './Client';

interface CalendlyButtonProps {
  url: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export default function CalendlyButton({ url, variant = 'primary', className = '' }: CalendlyButtonProps): React.ReactElement {
  return <CalendlyButtonClient url={url} variant={variant} className={className} />;
}
