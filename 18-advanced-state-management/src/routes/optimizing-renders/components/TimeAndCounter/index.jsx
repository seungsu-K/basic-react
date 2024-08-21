import useClock from '@/hooks/useClock';
import S from './style.module.css';
import Counter from '../Counter';
import TimeToggler from './TimeToggler';
import { useCallback } from 'react';
import useRenderCountLog from '@/hooks/useRenderCountLog';

function TimeAndCounter() {
  const { time, turnOn, onOff } = useClock();

  useRenderCountLog('TimeAndCounter');

  // [가설 검증]
  // const memoryRef = useRef({
  //   memoizedHandleToggleTime: null,
  //   label: null,
  // });
  // {
  //   // memoryRef = RefObject { current: { handleToggleTime, label } }
  //   // useEffect 훅을 사용하면 렌더링 이후 시점 뭔가를 수행하고 싶다.
  //   useEffect(() => {
  //     // 이전 기억된 값과 현재 값을 비교 한다.
  //     if (Object.is(label, memoryRef.current.label)) {
  //       console.log(
  //         '현재 렌더링 시점의 label 값은 이전 시점의 기억된 label과 동일하다.'
  //       );
  //     } else {
  //       console.log(
  //         '현재 렌더링 시점의 label 값은 이전 시점의 기억된 label과 다르다.'
  //       );
  //     }

  //     if (
  //       Object.is(
  //         memoizedHandleToggleTime,
  //         memoryRef.current.memoizedHandleToggleTime
  //       )
  //     ) {
  //       console.log(
  //         '현재 렌더링 시점의 handleToggleTime 함수 값은 이전 시점의 기억된 handleToggleTime 함수 값과 동일하다.'
  //       );
  //     } else {
  //       console.log(
  //         '현재 렌더링 시점의 handleToggleTime 함수 값은 이전 시점의 기억된 handleToggleTime 함수 값과 다르다.'
  //       );
  //     }

  //     // 현재 값을 기억 한다. (다음 렌더링 시, 이전 기억이 됨)
  //     memoryRef.current = {
  //       label,
  //       memoizedHandleToggleTime,
  //     };
  //   });
  // }

  const handleToggleTime = () => onOff((c) => !c);

  const memoizedHandleToggleTime = useCallback(handleToggleTime, [onOff]);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  // 컴포넌트에 전달되는 props 값이 바뀌지 않으면
  // 컴포넌트는 다시 렌더링되지 않는다.
  // 그런데 지역 함수는 함수가 여러 번 실행되면 매번 새롭게 정의된다.
  // 즉, 계속해서 새로운 함수가 참조되는 것

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={memoizedHandleToggleTime}>{label}</TimeToggler>
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
