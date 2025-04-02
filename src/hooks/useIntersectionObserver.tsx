
import { useState, useEffect, useRef } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: IntersectionOptions = {},
  elementRef: React.RefObject<Element> | null = null
) {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);
  
  const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;
  
  const frozen = useRef(false);
  
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    const isIntersecting = entry?.isIntersecting;
    
    if (freezeOnceVisible && isIntersecting && !frozen.current) {
      frozen.current = true;
      setIsVisible(true);
      return;
    }
    
    setIsVisible(isIntersecting || false);
  };
  
  useEffect(() => {
    const el = elementRef?.current;
    
    if (el) {
      setElement(el);
    }
  }, [elementRef]);
  
  useEffect(() => {
    if (!element) return;
    
    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [element, threshold, root, rootMargin]);
  
  return { ref: setElement, isVisible };
}
