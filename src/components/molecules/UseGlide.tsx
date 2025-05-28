'use client'

import { useEffect } from 'react';
import Glide, { Options } from '@glidejs/glide';

const useGlide = (selector: string, options: Options, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    const element = document.querySelector(selector);
    if (!element) return;

    const glide = new Glide(selector, options);
    glide.mount();

    return (): void => {
      glide.destroy();
    };
  }, [selector, options, enabled]);
};

export default useGlide;
