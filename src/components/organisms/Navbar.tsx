'use client'

import React, { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import NavLink from '../molecules/NavLink';
import SocialLink from '../molecules/SocialLink';
import Icon from '../atoms/Icon';

interface NavbarType {
  href: string;
  label: string;
}

interface NavbarProps {
  items: NavbarType[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="mx-auto max-w-[1400px] mt-2.5 px-4 z-10 relative">
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Aller au contenu principal
      </a>
      <div className="mx-auto flex items-center justify-between py-4 px-6 relative bg-primary rounded-lg">
        <Logo />

        {/* Burger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <Icon name={isOpen ? 'close' : 'menu'} className="text-secondary" />
        </button>

        {/* Navigation links */}
        <div className={`${
          isOpen ? "max-h-dvh" : "max-h-[0]"
        } transition-[max-height] duration-300 ease-in-out overflow-hidden absolute block left-0 top-[95%] w-full bg-white lg:static lg:flex lg:items-center lg:gap-6 lg:shadow-none lg:bg-transparent lg:max-h-none lg:justify-center -z-10 lg:z-0`}>
          <nav className="px-6 py-4 lg:flex lg:gap-6 lg:w-80">
          {items.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
            <button
              className="block py-2 text-primary hover:text-tertiary botToTopHover--desktop cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contactBanner')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </button>
          </nav>

          {/* Navigation contact mobile */}
          <nav className="px-6 py-4 justify-end flex lg:hidden">
            <SocialLink
              href="#"
              icon="email"
              label="Envoyer un email"
              // onClick={onContactClick}
            />
            <SocialLink
              href="https://www.linkedin.com/in/guerric-sant/"
              icon="linkedin"
              label="Voir mon profil LinkedIn"
            />
            <SocialLink
              href="https://github.com/GuerricSa"
              icon="github"
              label="Voir mon profil GitHub"
            />
          </nav>
        </div>

        {/* Navigation contact desktop */}
        <nav className="py-4 justify-end hidden lg:flex">
          <SocialLink
            href="#"
            icon="email"
            label="Envoyer un email"
            // onClick={onContactClick}
          />
          <SocialLink
            href="https://www.linkedin.com/in/guerric-sant/"
            icon="linkedin"
            label="Voir mon profil LinkedIn"
          />
          <SocialLink
            href="https://github.com/GuerricSa"
            icon="github"
            label="Voir mon profil GitHub"
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
