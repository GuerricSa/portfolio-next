'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollObserver = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: `0px 0px ${window.innerWidth < 768 ? '-30px' : '-50px'} 0px`,
      threshold: 0,
    });

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [pathname]);

  return null;
};

export default ScrollObserver;
