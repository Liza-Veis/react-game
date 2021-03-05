import { useCallback, useEffect } from 'react';

const useHotkeys = (code: string, callback: () => void): void => {
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === code) {
        callback();
      }
    },
    [code, callback]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown, true);
    return () => document.removeEventListener('keydown', handleKeydown, true);
  }, [handleKeydown]);
};

export default useHotkeys;
