import React, { ReactNode } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  hoverColor?: string
  isExternal?: boolean
  ariaLabel?: string
  className?: string
  isSvg?: boolean
}

const Link: React.FC<LinkProps> = ({
  children,
  isSvg = false,
  href,
  variant = 'primary',
  hoverColor,
  isExternal = false,
  ariaLabel,
  className = '',
}) => {
  const baseStyle = 'inline-flex items-center gap-2 transition-colors duration-200';

  const variantStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  };

  const customHoverStyle = hoverColor && isSvg
    ? 'group'
    : hoverColor
    ? `hover:text-${hoverColor}`
    : '';

  const combinedClasses = `${baseStyle} ${variantStyles[variant]} ${customHoverStyle} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} legacyBehavior>
      <a className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
