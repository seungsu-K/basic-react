import { useEffect, useState } from 'react';

/** @type {(initialValue: any, callback: (nextState: any)=>void) => [stateWithCallback, setStateWithCallback]} */
function useStateWithCallback(initialValue, callback) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const nextState = state;

    callback?.(nextState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
}

export default useStateWithCallback;
