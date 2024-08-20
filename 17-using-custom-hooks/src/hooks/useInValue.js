import { useEffect, useRef } from 'react';

function useInValue(callback) {
  const inViewRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      callback?.(entry.isIntersecting);

      if (entry.isIntersecting) {
        // 뷰포트에 진입
      } else {
        // 뷰포트에서 진출
      }
    });

    const { current: targetElement } = inViewRef.current;

    if (targetElement) {
      intersectionObserver.observe(targetElement);
    }

    return () => {
      intersectionObserver.unobserve(targetElement);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inViewRef;
}

export default useInValue;
