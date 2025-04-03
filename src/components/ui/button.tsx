import React, { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  color?: 'green' | 'blue' | 'neon';
  size?: 'small' | 'medium' | 'large';
  showArrow?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export const buttonVariants = {
  primary: {
    green: 'bg-jockepay-green/90 text-white hover:bg-jockepay-green/85 hover:shadow-lg hover:shadow-jockepay-green/30 focus:ring-jockepay-green',
    blue: 'bg-jockepay-blue/90 text-white hover:bg-jockepay-blue/85 hover:shadow-lg hover:shadow-jockepay-blue/30 focus:ring-jockepay-blue',
    neon: 'bg-jockepay-neon/90 text-white hover:bg-jockepay-neon/85 hover:shadow-lg hover:shadow-jockepay-neon/30 focus:ring-jockepay-neon'
  },
  secondary: {
    green: 'bg-jockepay-green/20 text-jockepay-green hover:bg-jockepay-green/30 focus:ring-jockepay-green',
    blue: 'bg-jockepay-blue/20 text-jockepay-blue hover:bg-jockepay-blue/30 focus:ring-jockepay-blue',
    neon: 'bg-jockepay-neon/20 text-jockepay-neon hover:bg-jockepay-neon/30 focus:ring-jockepay-neon'
  },
  outline: {
    green: 'border border-jockepay-green/40 text-jockepay-green hover:border-jockepay-green/60 focus:ring-jockepay-green',
    blue: 'border border-jockepay-blue/40 text-jockepay-blue hover:border-jockepay-blue/60 focus:ring-jockepay-blue',
    neon: 'border border-jockepay-neon/40 text-jockepay-neon hover:border-jockepay-neon/60 focus:ring-jockepay-neon'
  },
  link: {
    green: 'text-jockepay-green hover:text-jockepay-green/80 focus:ring-jockepay-green',
    blue: 'text-jockepay-blue hover:text-jockepay-blue/80 focus:ring-jockepay-blue',
    neon: 'text-jockepay-neon hover:text-jockepay-neon/80 focus:ring-jockepay-neon'
  }
};

export const buttonSizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    color = 'green',
    size = 'medium',
    showArrow = false,
    as = 'button',
    href,
    children,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const classes = cn(
      baseStyles,
      buttonVariants[variant][color],
      buttonSizes[size],
      className
    );
    
    if (as === 'a' && href) {
      return (
        <a
          href={href}
          className={classes}
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {children}
          {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
        </a>
      );
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
