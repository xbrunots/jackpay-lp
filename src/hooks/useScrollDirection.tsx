
import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Set initial value on first scroll
      if (scrollDirection === null) {
        setScrollDirection('down');
        setPrevOffset(scrollY);
        return;
      }
      
      // Determine direction only if the scroll difference exceeds threshold
      if (Math.abs(scrollY - prevOffset) > threshold) {
        const newScrollDirection = scrollY > prevOffset ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        setPrevOffset(scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevOffset, threshold]);

  return scrollDirection;
}
