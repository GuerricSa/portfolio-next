'use client'

import React from 'react';
import useGlide from '../../molecules/UseGlide';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

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

  useGlide('.glide', {
    type: 'carousel',
    autoplay: true,
    perView: 8,
    gap: 50,
    animationDuration: 10000,
    animationTimingFunc: 'linear',
    breakpoints: {
      1440: { perView: 6 },
      1300: { perView: 5 },
      1100: { perView: 4 },
      950: { perView: 3 },
      750: { perView: 2 },
      570: { perView: 1 }
    },
  }, shouldInitGlide);

  return (
    <section className="container">
      <div className='relative'>
        {title && (
          <div className="text-primary lg:max-w-xs lg:relative z-20 pb-8 lg:py-16 lg:px-10 lg:bg-primary lg:min-h-64 lg:flex lg:flex-col lg:justify-center lg:rounded-xl">
            <span className="hidden lg:block lg:absolute lg:w-2 lg:h-full lg:right-0 lg:top-0 lg:rounded-r-full lg:bg-tertiary" />
            <Text className="text-center lg:text-left lg:text-secondary" variant="h2">{title}</Text>
          </div>
        )}

          <div className="glide relative lg:absolute flex h-full left-0 top-0 w-full py-16">
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
