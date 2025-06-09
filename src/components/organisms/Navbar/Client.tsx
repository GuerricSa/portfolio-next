'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import Logo from '../../atoms/Logo';
import NavLink from '../../molecules/NavLink';
import SocialLink from '../../molecules/SocialLink';
import Icon from '../../atoms/Icon';
import { useContactModal } from '../../../context/ContactModalContext';

interface NavbarType {
  href: string;
  label: string;
}

interface NavbarProps {
  items: NavbarType[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();
  const pathname = usePathname();
  const router = useRouter();

  // Fonction pour normaliser les chemins
  const normalizePath = (path: string) => {
    // Enlever le slash final s'il existe
    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScrollToAnchor = () => {
      const anchorId = sessionStorage.getItem('scrollToAnchor');
      if (anchorId) {
        // Attendre que la page soit complètement chargée
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'end'
            });
          }
          // Nettoyer le sessionStorage
          sessionStorage.removeItem('scrollToAnchor');
        }, 1000);
      }
    };

    // Exécuter le scroll après la navigation
    handleScrollToAnchor();
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="mx-auto max-w-[1400px] pt-2.5 px-4 z-10 relative">
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
          <nav className="px-6 py-4 lg:flex lg:gap-6">
          {items.map((item) => {
            const isAnchorLink = item.href.includes('#');
            const isActive = isActiveLink(item.href);

            if (isAnchorLink) {
              const [pagePath, anchorId] = item.href.split('#');
              const isCurrentPage = normalizePath(pathname) === normalizePath(pagePath);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);

                    if (!isCurrentPage) {
                      // Si on n'est pas sur la bonne page, on navigue d'abord
                      router.push(pagePath);
                      // On stocke l'ID de l'ancre dans sessionStorage pour le récupérer après la navigation
                      sessionStorage.setItem('scrollToAnchor', anchorId);
                    } else {
                      // Si on est déjà sur la bonne page, on attend la fin de l'animation
                      setTimeout(() => {
                        const element = document.getElementById(anchorId);
                        if (element) {
                          element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 500);
                    }
                  }}
                  className={`block py-2 hover:text-tertiary cursor-pointer ${
                    isActive ? 'text-tertiary' : 'text-primary botToTopHover--desktop'
                  }`}
                >
                  {item.label}
                </Link>
              );
            } else {
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 hover:text-tertiary cursor-pointer ${
                    isActive ? 'text-tertiary' : 'text-primary botToTopHover--desktop'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            }
          })}
            <button
              className={`block py-2 hover:text-tertiary cursor-pointer ${
                pathname === '/#contactBanner' ? 'text-tertiary' : 'text-primary botToTopHover--desktop'
              }`}
              onClick={() => {
                setIsOpen(false);
                const contactBanner = document.getElementById('contactBanner')
                if (contactBanner) {
                  contactBanner.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = "/#contactBanner";
                }
              }}
            >
              Contact
            </button>
          </nav>

          {/* Navigation contact mobile */}
          <nav className="px-6 py-4 justify-end flex lg:hidden">
            <button
              className='block py-2 px-4 group text-primary lg:text-secondary'
              onClick={openModal}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:fill-tertiary transition-[fill] duration-300 ease-in-out" d="M23.938 5.26291C23.8298 4.71795 23.5882 4.21924 23.2507 3.80726C23.1796 3.71749 23.1052 3.6371 23.0247 3.55671C22.4268 2.95587 21.5876 2.58105 20.6709 2.58105H3.32911C2.41238 2.58105 1.57622 2.95587 0.975516 3.55671C0.895125 3.6371 0.820781 3.71749 0.749437 3.80726C0.411797 4.2192 0.170156 4.71795 0.0649688 5.26291C0.02175 5.47324 0 5.6906 0 5.91035V18.09C0 18.5573 0.0990937 19.0064 0.275812 19.412C0.439734 19.7992 0.681422 20.1496 0.975469 20.4433C1.05 20.5177 1.12402 20.586 1.20478 20.654C1.78069 21.1309 2.52408 21.419 3.32911 21.419H20.6709C21.4762 21.419 22.2228 21.1309 22.7954 20.651C22.8759 20.586 22.9503 20.5177 23.0247 20.4433C23.3186 20.1496 23.5602 19.7992 23.7275 19.412V19.409C23.9042 19.0034 24 18.5573 24 18.0901V5.91035C24 5.6906 23.9786 5.47324 23.938 5.26291ZM2.18011 4.76116C2.47753 4.46407 2.87695 4.28421 3.32911 4.28421H20.6709C21.123 4.28421 21.526 4.46407 21.8199 4.76116C21.8725 4.81409 21.922 4.87305 21.9658 4.93165L12.8764 12.8533C12.6257 13.073 12.316 13.1815 12 13.1815C11.6872 13.1815 11.3777 13.073 11.1237 12.8533L2.03775 4.92827C2.07797 4.86968 2.12752 4.81409 2.18011 4.76116ZM1.70316 18.09V6.69073L8.28084 12.4289L1.70648 18.161C1.70316 18.1393 1.70316 18.1148 1.70316 18.09ZM20.6709 19.7155H3.32911C3.03469 19.7155 2.7592 19.6381 2.52408 19.5021L9.46055 13.4572L10.1081 14.0205C10.65 14.4914 11.3282 14.7299 12 14.7299C12.6753 14.7299 13.3534 14.4914 13.8953 14.0205L14.5425 13.4572L21.4763 19.5021C21.2408 19.6381 20.9653 19.7155 20.6709 19.7155ZM22.2968 18.09C22.2968 18.1148 22.2968 18.1393 22.2937 18.161L15.7193 12.4323L22.2968 6.69377V18.09Z" fill="currentColor"></path>
              </svg>
            </button>
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
          <button
            className='block py-2 px-4 group text-primary lg:text-secondary'
            onClick={openModal}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="group-hover:fill-tertiary transition-[fill] duration-300 ease-in-out" d="M23.938 5.26291C23.8298 4.71795 23.5882 4.21924 23.2507 3.80726C23.1796 3.71749 23.1052 3.6371 23.0247 3.55671C22.4268 2.95587 21.5876 2.58105 20.6709 2.58105H3.32911C2.41238 2.58105 1.57622 2.95587 0.975516 3.55671C0.895125 3.6371 0.820781 3.71749 0.749437 3.80726C0.411797 4.2192 0.170156 4.71795 0.0649688 5.26291C0.02175 5.47324 0 5.6906 0 5.91035V18.09C0 18.5573 0.0990937 19.0064 0.275812 19.412C0.439734 19.7992 0.681422 20.1496 0.975469 20.4433C1.05 20.5177 1.12402 20.586 1.20478 20.654C1.78069 21.1309 2.52408 21.419 3.32911 21.419H20.6709C21.4762 21.419 22.2228 21.1309 22.7954 20.651C22.8759 20.586 22.9503 20.5177 23.0247 20.4433C23.3186 20.1496 23.5602 19.7992 23.7275 19.412V19.409C23.9042 19.0034 24 18.5573 24 18.0901V5.91035C24 5.6906 23.9786 5.47324 23.938 5.26291ZM2.18011 4.76116C2.47753 4.46407 2.87695 4.28421 3.32911 4.28421H20.6709C21.123 4.28421 21.526 4.46407 21.8199 4.76116C21.8725 4.81409 21.922 4.87305 21.9658 4.93165L12.8764 12.8533C12.6257 13.073 12.316 13.1815 12 13.1815C11.6872 13.1815 11.3777 13.073 11.1237 12.8533L2.03775 4.92827C2.07797 4.86968 2.12752 4.81409 2.18011 4.76116ZM1.70316 18.09V6.69073L8.28084 12.4289L1.70648 18.161C1.70316 18.1393 1.70316 18.1148 1.70316 18.09ZM20.6709 19.7155H3.32911C3.03469 19.7155 2.7592 19.6381 2.52408 19.5021L9.46055 13.4572L10.1081 14.0205C10.65 14.4914 11.3282 14.7299 12 14.7299C12.6753 14.7299 13.3534 14.4914 13.8953 14.0205L14.5425 13.4572L21.4763 19.5021C21.2408 19.6381 20.9653 19.7155 20.6709 19.7155ZM22.2968 18.09C22.2968 18.1148 22.2968 18.1393 22.2937 18.161L15.7193 12.4323L22.2968 6.69377V18.09Z" fill="currentColor"></path>
            </svg>
          </button>
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
