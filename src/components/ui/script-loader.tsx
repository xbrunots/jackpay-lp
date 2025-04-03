import React, { useEffect, useState } from 'react';

interface ScriptLoaderProps {
  src: string;
  integrity?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';

const loadedScripts = new Set<string>();

export function useScript({
  src,
  integrity,
  crossOrigin,
  async = true,
  defer = false,
  onLoad,
  onError,
}: ScriptLoaderProps) {
  const [status, setStatus] = useState<ScriptStatus>(
    loadedScripts.has(src) ? 'ready' : 'idle'
  );

  useEffect(() => {
    if (!src || status !== 'idle') {
      return;
    }

    setStatus('loading');

    // Se o script já foi carregado anteriormente
    if (loadedScripts.has(src)) {
      setStatus('ready');
      onLoad?.();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;

    if (integrity) {
      script.integrity = integrity;
    }

    if (crossOrigin) {
      script.crossOrigin = crossOrigin;
    }

    script.addEventListener('load', () => {
      loadedScripts.add(src);
      setStatus('ready');
      onLoad?.();
    });

    script.addEventListener('error', () => {
      script.remove();
      setStatus('error');
      onError?.(new Error(`Failed to load script: ${src}`));
    });

    document.body.appendChild(script);

    return () => {
      // Não remove scripts que já foram carregados com sucesso
      if (status !== 'ready') {
        script.remove();
      }
    };
  }, [src, integrity, crossOrigin, async, defer, onLoad, onError, status]);

  return status;
}

export function ScriptLoader(props: ScriptLoaderProps & { children?: React.ReactNode }) {
  const { children, ...scriptProps } = props;
  const status = useScript(scriptProps);

  if (status === 'error') {
    return <div role="alert">Erro ao carregar o script</div>;
  }

  if (status !== 'ready') {
    return null;
  }

  return <>{children}</>;
} 