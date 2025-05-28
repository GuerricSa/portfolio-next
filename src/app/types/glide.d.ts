// types/glide.d.ts
declare module '@glidejs/glide' {
  interface Options {
    type?: 'slider' | 'carousel';
    startAt?: number;
    perView?: number;
    focusAt?: number | 'center';
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    keyboard?: boolean;
    bound?: boolean;
    swipeThreshold?: number | boolean;
    dragThreshold?: number | boolean;
    perTouch?: number | boolean;
    touchRatio?: number;
    touchAngle?: number;
    animationDuration?: number;
    rewind?: boolean;
    rewindDuration?: number;
    animationTimingFunc?: string;
    direction?: 'ltr' | 'rtl';
    peek?: number | { before: number; after: number };
    breakpoints?: {
      [key: number]: Partial<Options>;
    };
    [key: string]: unknow;
  }

  export default class Glide {
    constructor(selector: string | Element, options?: Options);
    mount(): this;
    destroy(): this;
  }

  export { Options };
}
