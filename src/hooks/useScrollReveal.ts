import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook to apply scroll-reveal animations to elements with a specific class.
 * Handles both scroll-up and scroll-down reveals.
 * 
 * @param selector The CSS selector to target (defaults to '.animate-item')
 */
export function useScrollReveal(selector: string = '.animate-item') {
  useEffect(() => {
    // Initial state: Hidden and slightly shifted down
    gsap.set(selector, { 
      opacity: 0, 
      y: 30,
      visibility: 'hidden' 
    });

    // Use ScrollTrigger.batch for efficient handling of multiple elements
    const batch = ScrollTrigger.batch(selector, {
      interval: 0.1,
      batchMax: 3,
      
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true
        });
      },
      
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: 'power3.in',
          overwrite: true
        });
      },
      
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true
        });
      },
      
      onLeaveBack: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power3.in',
          overwrite: true
        });
      },
      
      start: 'top 92%',
      end: 'bottom 8%',
      // once: false is the default, allowing repeating animations
    });



    // Cleanup triggers on unmount
    return () => {
      batch.forEach(trigger => trigger.kill());
      // Also ensure standard ScrollTrigger instances are handled if any
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === selector || (typeof t.vars.trigger === 'string' && t.vars.trigger.includes(selector))) {
          t.kill();
        }
      });
    };
  }, [selector]);
}
