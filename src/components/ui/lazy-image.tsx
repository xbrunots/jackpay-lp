import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  aspectRatio?: number;
  blur?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc,
  aspectRatio = 16/9,
  blur = true,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  const containerStyle = {
    position: 'relative' as const,
    paddingBottom: `${(1 / aspectRatio) * 100}%`,
    overflow: 'hidden' as const,
  };

  const imageStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle} className={cn('rounded-lg bg-muted', className)}>
      {!error ? (
        <>
          {placeholderSrc && (
            <img
              src={placeholderSrc}
              alt=""
              style={{
                ...imageStyle,
                opacity: isLoaded ? 0 : 1,
                filter: blur ? 'blur(10px)' : 'none',
              }}
              aria-hidden="true"
            />
          )}
          <img
            src={src}
            alt={alt}
            style={{
              ...imageStyle,
              opacity: isLoaded ? 1 : 0,
            }}
            {...props}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground"
          role="alert"
        >
          <span className="text-sm">Falha ao carregar imagem</span>
        </div>
      )}
    </div>
  );
}; 