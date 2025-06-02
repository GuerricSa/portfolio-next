import React from 'react';
import Navbar from './Client';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'simulateur', href: '/estimate'}
];

const NavigationClient: React.FC = () => {
  return <Navbar items={navItems} />;
};

export default NavigationClient;
