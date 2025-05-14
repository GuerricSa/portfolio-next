'use client'

import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className = '',
  ...props
}) => {
  const baseStyle = '';
  const h1Style = 'text-4xl md:text-5xl font-bold text-primary';
  const h2Style = 'text-3xl md:text-4xl font-bold text-primary';
  const h3Style = 'text-2xl md:text-3xl font-semibold text-primary';
  const bodyStyle = 'text-base text-primary';
  const smallStyle = 'text-sm text-primary';

  const textStyle = variant === 'h1'
    ? h1Style
    : variant === 'h2'
    ? h2Style
    : variant === 'h3'
    ? h3Style
    : variant === 'small'
    ? smallStyle
    : bodyStyle;

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${baseStyle} ${textStyle} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
