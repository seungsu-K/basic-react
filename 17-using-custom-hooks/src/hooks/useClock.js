import { useEffect, useState } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clearId = setInterval(() => {
      const nextTime = new Date();
      setTime(nextTime);
    }, 1000);

    return () => {
      clearInterval(clearId);
    };
  }, []);

  return time;
}

export default useClock;
