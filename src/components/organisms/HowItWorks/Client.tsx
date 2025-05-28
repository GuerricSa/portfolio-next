'use client';

import React, { useEffect, useRef } from 'react';
import Text from '../../atoms/Text';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HowItWorksClientProps {
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

gsap.registerPlugin(ScrollTrigger);

const HowItWorksClient: React.FC<HowItWorksClientProps> = ({ steps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const panels = gsap.utils.toArray<HTMLElement>(".how-it-works-panel");

    const horizontalTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 2,
        //snap: 1 / (panels.length - 1),
        end: () => "+=" + window.innerWidth * (panels.length),
      },
    });

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: horizontalTween,
        start: "left center",
        end: "right center",
        toggleClass: { targets: panel, className: "how-it-works__active-step" },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-primary before:content-[''] before:w-full before:h-2 before:bg-tertiary before:absolute">
      <div
        ref={containerRef}
        className={`flex h-screen w-[500vw]`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="how-it-works-panel w-screen h-screen flex items-center justify-center p-8"
          >
            <div className="container max-w-xl text-center h-full">
              <div className="how-it-works__number w-16 h-16 rounded-full bg-tertiary mx-auto flex items-center justify-center mb-8 before:content-[''] before:w-2 before:h-8 before:top-0 before:bg-tertiary before:absolute">
                <Text variant="h2" className="text-primary">{step.number}</Text>
              </div>
              <Text variant="h2" className="how-it-works__text opacity-0 mb-4 text-secondary">{step.title}</Text>
              <Text variant="body" className="how-it-works__text opacity-0 text-secondary">{step.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksClient;
