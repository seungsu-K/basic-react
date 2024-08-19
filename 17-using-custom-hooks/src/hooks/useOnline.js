import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';

function useOnline() {
  const [isOnline, setisOnline] = useState(() => navigator.onLine);

  useEventListener(
    globalThis,
    'online',
    useCallback(() => {
      setisOnline(true);
    }, [])
  );

  useEventListener(
    globalThis,
    'offline',
    useCallback(() => {
      setisOnline(false);
    }, [])
  );

  return isOnline;
}

export default useOnline;
