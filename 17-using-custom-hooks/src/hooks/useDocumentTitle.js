import { useLayoutEffect } from 'react';

/** @type {(documentTitle: string) => void} */
function useDocumentTitle(documentTitle) {
  useLayoutEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
}

export default useDocumentTitle;

// 실행 시점

// [렌더링 (마운트)]
// 1. useLayoutEffect의 이펙트 콜백 함수
// 2. useEffect의 이펙트 콜백 함수

// [리-렌더링 (업데이트)]

// DOM 커밋 시점
// 3. useLayoutEffect의 이펙트 클린업 함수
// 4. useLayoutEffect의 이펙트 콜백 함수

// 브라우저 페인팅 시점
// 5. useEffect의 이펙트 클린업 함수
// 6. useEffect의 이펙트 콜백 함수

// useLayoutEffect는 useEffect와 동일하게 동작하지만
// 주로 페인팅 이전 시점에서 애니메이션을 다룰 때 사용
