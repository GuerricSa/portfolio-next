'use client'

import React from 'react';
import useGlide from '../../molecules/UseGlide';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { useHoverAnimation } from '../../../hooks/useHoverAnimation';

interface SliderLogosClientProps {
  clients: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  title: string;
}

const SliderLogosClient: React.FC<SliderLogosClientProps> = ({ clients, title }) =>  {
  const shouldInitGlide = clients.length > 5;
  const handleMouseEnter = useHoverAnimation();

  useGlide('.glide', {
    type: 'carousel',
    autoplay: true,
    perView: 1.8,
    gap: 50,
    animationDuration: 10000,
    animationTimingFunc: 'linear',
    breakpoints: {
      5000: { perView: 7 },
      1100: { perView: 6 },
      900: { perView: 5 },
      750: { perView: 4 },
      600: { perView: 3 },
      450: { perView: 2.3 }
    },
  }, shouldInitGlide);

  return (
    <section className="container">
      <div className='relative'>
        {title && (
            <Text onMouseEnter={handleMouseEnter} className="text-center" variant="h2">{title}</Text>
        )}

          <div className="glide relative flex h-full left-0 top-0 w-full py-16">
            <div className="slider-logos__glide-track absolute overflow-hidden my-auto" data-glide-el="track">
              <ul className="glide__slides relative w-full backface-hidden transform-3d touch-pan-y overflow-hidden mx-0 my-auto p-0 flex-nowrap whitespace-nowrap flex items-center will-change-transform">
                {clients.map((logo, index) => (
                  <li key={index} className="cl__slide px-3 h-20 flex justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-full flex items-center justify-center max-h-64"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SliderLogosClient;
