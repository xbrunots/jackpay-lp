
import React, { ReactNode } from 'react';
import { useIntersectionObserverAnimated } from '@/hooks/useIntersectionObserverAnimated';
import { cn } from '@/lib/utils';

type AnimationVariant =
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'bounce-in';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const animationClasses: Record<AnimationVariant, string> = {
  'fade-in-up': 'opacity-0 translate-y-8',
  'fade-in-down': 'opacity-0 -translate-y-8',
  'fade-in-left': 'opacity-0 translate-x-8',
  'fade-in-right': 'opacity-0 -translate-x-8',
  'zoom-in': 'opacity-0 scale-95',
  'zoom-out': 'opacity-0 scale-105',
  'rotate-in': 'opacity-0 rotate-12',
  'bounce-in': 'opacity-0 scale-90',
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 500,
  className,
  once = true,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useIntersectionObserverAnimated({
    threshold: threshold,
    rootMargin: '0px',
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all',
        isVisible ? '' : animationClasses[animation],
        className
      )}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
