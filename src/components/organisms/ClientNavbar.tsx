'use client';

import React from 'react';
import Navbar from './Navbar';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
];

const NavigationClient: React.FC = () => {
  return <Navbar items={navItems} />;
};

export default NavigationClient;
