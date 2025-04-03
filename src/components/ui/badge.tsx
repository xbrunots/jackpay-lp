import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
  color?: 'green' | 'blue' | 'neon';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', color = 'green', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50';
    
    const variants = {
      default: {
        green: 'bg-jockepay-green/20 border border-jockepay-green/30 text-white',
        blue: 'bg-jockepay-blue/20 border border-jockepay-blue/30 text-white',
        neon: 'bg-jockepay-neon/20 border border-jockepay-neon/30 text-white'
      },
      outline: {
        green: 'border border-jockepay-green/40 text-jockepay-green hover:border-jockepay-green/60',
        blue: 'border border-jockepay-blue/40 text-jockepay-blue hover:border-jockepay-blue/60',
        neon: 'border border-jockepay-neon/40 text-jockepay-neon hover:border-jockepay-neon/60'
      },
      secondary: {
        green: 'bg-jockepay-green/10 text-jockepay-green hover:bg-jockepay-green/20',
        blue: 'bg-jockepay-blue/10 text-jockepay-blue hover:bg-jockepay-blue/20',
        neon: 'bg-jockepay-neon/10 text-jockepay-neon hover:bg-jockepay-neon/20'
      }
    };
    
    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant][color],
          'px-4 py-1.5',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
