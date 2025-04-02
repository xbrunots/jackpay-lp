
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationType = 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight' | 'none';

interface AnimatedElementProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const variants: Record<AnimationType, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  threshold = 0.1
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variants[type]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
