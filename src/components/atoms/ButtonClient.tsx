'use client';

import Button from './Button';

interface ButtonClientProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
}

const ButtonClient: React.FC<ButtonClientProps> = ({ href, ...props }) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return <Button {...props} onClick={handleClick} />;
};

export default ButtonClient;
