// --------------------------------------------------------------------------
// ✅ 마우스 위치 동기화 / 정리
// --------------------------------------------------------------------------
// - [ ] 마우스가 움직이면 마우스 위치가 화면에 출력되도록 이펙트를 사용해 구현합니다.
// - [ ] 컴포넌트가 언마운트 된 이후 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import S from './PrintMousePosition.module.css';

function PrintMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { x, y } = mousePosition;

  // 페이지 전환으로 렌더 트리거 -> 이전 페이지의 useEffec안의 클린업 함수 실행 ->
  // 새로운 페이지 렌더 트리 생성 -> 비교, 계산 -> 새 페이지 마운트 ->
  // 새 페이지 useEffect 실행 -> 커밋
  useEffect(() => {
    const handleMove = ({ pageX: x, pageY: y }) => {
      console.log('moving mouse cursor');
      setMousePosition({ x, y });
    };

    console.log('마우스 추적 이벤트 연결(구독)');
    document.addEventListener('mousemove', handleMove, 400);

    return () => {
      console.log('마우스 추적 이벤트 연결 해지(정리)');
      document.removeEventListener('mousemove', handleMove, 400);
    };
  }, []);

  return (
    <div className={S.component}>
      <output>
        {x} <span>/</span> {y}
      </output>
    </div>
  );
}

export default PrintMousePosition;
