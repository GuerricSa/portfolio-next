'use client'

import React from "react";

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'baseStyle', disabled = false, className }) => {
  const baseStyle = 'cursor-pointer';
  const primaryStyle = 'lg:whitespace-nowrap btn-contact bg-primary text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary transition';
  const secondaryStyle = 'whitespace-nowrap btn-contact btn-calendly bg-secondary text-tertiary font-semibold rounded-lg hover:bg-primary transition';
  const tertiaryStyle = 'bg-secondary border-tertiary border-2 text-tertiary font-semibold px-6 py-3 rounded-lg shadow hover:bg-tertiary hover:text-primary transition'
  const disabledStyle = 'bg-gray-300 text-gray-600 cursor-not-allowed';

  const buttonStyle = disabled
    ? disabledStyle
    : variant === 'primary'
    ? primaryStyle
    : variant === 'secondary'
    ? secondaryStyle
    : tertiaryStyle;

  return (
    <button
      className={`${baseStyle} ${buttonStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
