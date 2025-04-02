
import { useState, useEffect } from 'react';

interface ScrollTransitionOptions {
  threshold?: number;
  activeClass?: string;
  inactiveClass?: string;
  offset?: number;
}

/**
 * Hook para aplicar classes CSS baseadas na posição de rolagem
 * Útil para transições suaves em elementos como navegação, header, etc.
 */
export function useScrollTransition({
  threshold = 100,
  activeClass = '',
  inactiveClass = '',
  offset = 0,
}: ScrollTransitionOptions = {}) {
  const [scrollState, setScrollState] = useState<'initial' | 'scrolled'>('initial');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      if (scrollPosition > threshold && scrollState !== 'scrolled') {
        setScrollState('scrolled');
      } else if (scrollPosition <= threshold && scrollState !== 'initial') {
        setScrollState('initial');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Executa uma vez para definir o estado inicial correto
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, scrollState, offset, activeClass, inactiveClass]);

  return {
    isScrolled: scrollState === 'scrolled',
    className: scrollState === 'scrolled' ? activeClass : inactiveClass,
  };
}
