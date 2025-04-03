import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FontLoaderProps {
  children: React.ReactNode;
  className?: string;
  fallbackFont?: string;
}

export function FontLoader({
  children,
  className,
  fallbackFont = 'Arial',
}: FontLoaderProps) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('1em Inter'),
        document.fonts.load('1em Space Grotesk'),
      ]).then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback para navegadores que não suportam Font Loading API
      setTimeout(() => {
        setFontsLoaded(true);
      }, 1000);
    }
  }, []);

  return (
    <div
      className={cn(
        'transition-opacity duration-300',
        {
          'opacity-0': !fontsLoaded,
          'opacity-100': fontsLoaded,
        },
        className
      )}
      style={{
        fontFamily: fontsLoaded ? 'inherit' : fallbackFont,
      }}
    >
      {children}
    </div>
  );
} 