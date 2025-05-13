import React, { ReactNode } from 'react'

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
    primary: 'text-primary hover:text-secondary',
    secondary: 'text-secondary hover:text-primary',
    tertiary: 'text-tertiary hover:text-primary',
  };

  const customHoverStyle = hoverColor && isSvg ? `hover:[&>path]:fill-[${hoverColor}]` : !isSvg && hoverColor ? `hover:text-[${hoverColor}]` : '';

  return (
    <a
      href={href}
      className={`${baseStyle} ${variantStyles[variant]} ${customHoverStyle} ${className}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default Link
