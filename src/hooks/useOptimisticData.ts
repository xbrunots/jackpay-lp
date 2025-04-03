import { useState, useCallback, useRef, useEffect } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

interface UseOptimisticDataOptions<T> {
  initialData?: T;
  cacheTime?: number;
  onError?: (error: Error) => void;
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
}

export function useOptimisticData<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: UseOptimisticDataOptions<T> = {}
) {
  const {
    initialData,
    cacheTime = 5 * 60 * 1000, // 5 minutes
    onError,
    revalidateOnFocus = true,
    revalidateOnReconnect = true,
  } = options;

  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(!initialData);

  const cache = useRef<Map<string, CacheItem<T>>>(new Map());
  const optimisticUpdates = useRef<Map<string, T>>(new Map());

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cachedData = cache.current.get(key);
      if (cachedData && Date.now() - cachedData.timestamp < cacheTime) {
        setData(cachedData.data);
        setIsLoading(false);
        return;
      }

      const newData = await fetcher();
      cache.current.set(key, { data: newData, timestamp: Date.now() });
      setData(newData);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Erro desconhecido');
      setError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  }, [key, fetcher, cacheTime, onError]);

  const optimisticUpdate = useCallback((updateFn: (prev: T | undefined) => T) => {
    setData((prev) => {
      const updated = updateFn(prev);
      optimisticUpdates.current.set(key, updated);
      return updated;
    });
  }, [key]);

  const mutate = useCallback(async () => {
    await fetchData();
    optimisticUpdates.current.delete(key);
  }, [fetchData, key]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!revalidateOnFocus) return;

    const onFocus = () => {
      fetchData();
    };

    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, [fetchData, revalidateOnFocus]);

  useEffect(() => {
    if (!revalidateOnReconnect) return;

    const onOnline = () => {
      fetchData();
    };

    window.addEventListener('online', onOnline);
    return () => {
      window.removeEventListener('online', onOnline);
    };
  }, [fetchData, revalidateOnReconnect]);

  return {
    data,
    error,
    isLoading,
    mutate,
    optimisticUpdate,
  };
} 